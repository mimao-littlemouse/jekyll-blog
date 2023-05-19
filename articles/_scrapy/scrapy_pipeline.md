---
order: 11
text: scrapy pipeline
---

# 介绍scrapy pipeline 管道的创建使用


在pipeline.py中创建管道文件，该文件在 创建item的时候，同步进行（前提需要在 settings.py中配置item_pipeline）
学习pipeline
https://doc.scrapy.org/en/latest/topics/item-pipeline.html

一.Pipeline数据管道
在一个项目被scrapy刮取后，它被发送到项目管道，该管道通过顺序执行的几个组件来处理它。
每个项目管道组件（有时仅称为“项目管道”）都是一个实现简单方法的Python类。他们接收一个项目并对其执行操作，
同时决定该项目是应该继续通过管道，还是被丢弃并不再处理。

数据管道的典型用途有：
  清除HTML数据
  验证抓取的数据（检查项目是否包含某些字段）
  检查重复项（并删除它们）
  将刮掉的项目存储在数据库中

1.编写自己的项目管道
每个项管道组件都是一个Python类，必须实现以下方法：
(1)process_item(self, item, spider）
此方法是为每个项目管道组件调用的。
item是一个item对象，请参阅支持所有item类型。
process_item（）必须：返回项对象、返回Deferred或引发DropItem异常中一个。
丢弃的项目不再由其他管道组件处理。
参数项目（item对象）-scraped 项目
spider（scrapy对象）–scraped item 的scrapy

(2)open_spider(self, spider)
当spider打开时会调用此方法。
参数 spider(spider对象）–打开的spider

(3)close_spider(self, spider)¶
当spider关闭时调用此方法。
参数 spider(spider对象）–已关闭的spider

(4)classmethodfrom_crawler(cls, crawler)
如果存在，则调用此类方法以从爬网程序创建管道实例。它必须返回管道的一个新实例。
Crawler对象提供对所有Scrapy核心组件的访问，如设置和信号；这是管道访问它们并将其功能挂接到Scrapy的一种方式。
参数 crawler (Crawler object) –使用此管道的爬网程序

2.项目管道示例
价格验证和取消没有价格的项目
让我们看看下面的假设管道，它调整那些不包括增值税的项目的价格属性（price_excludes_VAT属性），
并删除那些不包含价格的项目：
```
from itemadapter import ItemAdapter
from scrapy.exceptions import DropItem

class PricePipeline:
    vat_factor = 1.15

    def process_item(self, item, spider):
        adapter = ItemAdapter(item)
        if adapter.get('price'):
            if adapter.get('price_excludes_vat'):
                adapter['price'] = adapter['price'] * self.vat_factor
            return item
        else:
            raise DropItem(f"Missing price in {item}")
```

3.将项目写入JSON行文件
以下管道将所有抓取的项（来自所有蜘蛛）存储到一个items.jsonl文件中，每行包含一个以JSON格式序列化的项：
```
import json

from itemadapter import ItemAdapter

class JsonWriterPipeline:

    def open_spider(self, spider):
        self.file = open('items.jsonl', 'w')

    def close_spider(self, spider):
        self.file.close()

    def process_item(self, item, spider):
        line = json.dumps(ItemAdapter(item).asdict()) + "\n"
        self.file.write(line)
        return item
```
JsonWriterPipeline的目的只是介绍如何编写项目管道。
如果您真的想将所有抓取的项目存储到JSON文件中，那么应该使用Feed导出。[`去看看`](https://doc.scrapy.org/en/latest/topics/feed-exports.html#topics-feed-exports)

4.将项目写入MongoDB
在这个例子中，我们将使用pymongo将项目写入MongoDB。
MongoDB地址和数据库名称在Scrapy设置中指定；MongoDB集合以项类命名。
这个例子的要点是展示如何使用from_crawler() 方法以及如何正确清理资源

```
import pymongo
from itemadapter import ItemAdapter

class MongoPipeline:

    collection_name = 'scrapy_items'

    def __init__(self, mongo_uri, mongo_db):
        self.mongo_uri = mongo_uri
        self.mongo_db = mongo_db

    @classmethod
    def from_crawler(cls, crawler):
        return cls(
            mongo_uri=crawler.settings.get('MONGO_URI'),
            mongo_db=crawler.settings.get('MONGO_DATABASE', 'items')
        )

    def open_spider(self, spider):
        self.client = pymongo.MongoClient(self.mongo_uri)
        self.db = self.client[self.mongo_db]

    def close_spider(self, spider):
        self.client.close()

    def process_item(self, item, spider):
        self.db[self.collection_name].insert_one(ItemAdapter(item).asdict())
        return item
```

5.拍摄项目的屏幕截图
这个例子演示了如何在process_item（）方法中使用协程语法。
这个项目管道向本地运行的Splash实例发出请求，以呈现项目URL的屏幕截图。
下载请求响应后，项目管道将屏幕截图保存到一个文件中，并将文件名添加到项目中。
```
import hashlib
from pathlib import Path
from urllib.parse import quote

import scrapy
from itemadapter import ItemAdapter
from scrapy.http.request import NO_CALLBACK
from scrapy.utils.defer import maybe_deferred_to_future


class ScreenshotPipeline:
    """Pipeline that uses Splash to render screenshot of
    every Scrapy item."""

    SPLASH_URL = "http://localhost:8050/render.png?url={}"

    async def process_item(self, item, spider):
        adapter = ItemAdapter(item)
        encoded_item_url = quote(adapter["url"])
        screenshot_url = self.SPLASH_URL.format(encoded_item_url)
        request = scrapy.Request(screenshot_url, callback=NO_CALLBACK)
        response = await maybe_deferred_to_future(
            spider.crawler.engine.download(request, spider)
        )

        if response.status != 200:
            # Error happened, return item.
            return item

        # Save screenshot to file, filename will be hash of url.
        url = adapter["url"]
        url_hash = hashlib.md5(url.encode("utf8")).hexdigest()
        filename = f"{url_hash}.png"
        Path(filename).write_bytes(response.body)

        # Store filename in item.
        adapter["screenshot_filename"] = filename
        return item
```

6.重复筛选器(filter)
一个筛选器，用于查找重复的项目，并删除已处理的项目。
假设我们的物品有一个唯一的id，但我们的spider返回多个具有相同id的物品：
```
from itemadapter import ItemAdapter
from scrapy.exceptions import DropItem

class DuplicatesPipeline:

    def __init__(self):
        self.ids_seen = set()

    def process_item(self, item, spider):
        adapter = ItemAdapter(item)
        if adapter['id'] in self.ids_seen:
            raise DropItem(f"Duplicate item found: {item!r}")
        else:
            self.ids_seen.add(adapter['id'])
            return item
```

7.激活项目管道组件
要激活项目管道组件，必须将其类添加到Item_PIPELINES设置中，如以下示例所示：
```
ITEM_PIPELINES = {
    'myproject.pipelines.PricePipeline': 300,
    'myproject.pipelines.JsonWriterPipeline': 800,
}
```
在此设置中分配给类的整数值决定了它们运行的顺序：
项从值较低的类到值较高的类。
通常将这些数字定义在0-1000范围内。































