---
order: 13
text: scrapy提取数据时 传参
---

# scrapy提取数据时 传参的案例介绍

使用spider参数：
1.运行spider时，可以使用-a选项为其提供命令行参数：
scrapy crawl quotes -O quotes-humor.json -a tag=humor
这些参数传递给Spider的__init__方法，默认情况下成为Spider属性，
在本例中，为标记参数提供的值将通过self.tag提供。
您可以使用此选项使spider仅获取带有特定标记的引号，并根据参数构建URL：
例如：
# 导入模块
import scrapy
# 书写 spider类
class QuotesSpider(scrapy.Spider):
    name = "quotes"

    def start_requests(self):
        url = 'https://quotes.toscrape.com/'
        tag = getattr(self, 'tag', None)	# 在这里获取命令行中给到的参数和值（如果没有给到tag 则赋值一个默认值None）
        if tag is not None:
            url = url + 'tag/' + tag
        yield scrapy.Request(url, self.parse)

    def parse(self, response):
        for quote in response.css('div.quote'):
            yield {
                'text': quote.css('span.text::text').get(),
                'author': quote.css('small.author::text').get(),
            }

        next_page = response.css('li.next a::attr(href)').get()
        if next_page is not None:
            yield response.follow(next_page, self.parse)
注意：
如果将tag=human参数传递给这个spider，
您会注意到它只会访问来自human标记的URL，例如https://quotes.toscrape.com/tag/humor.

2.详细介绍：
(1).spider可以接受修改其行为的参数。
spider参数的一些常见用法是定义起始URL或将爬网限制到站点的某些部分，
但它们可以用于配置spider的任何功能
(2).spider参数使用-a选项通过爬网命令传递。例如：
>scrapy crawl myspider -a category=electronics
spider可以访问__init__方法中的参数：
代码如下：
import scrapy
class MySpider(scrapy.Spider):
    name = 'myspider'

    def __init__(self, category=None, *args, **kwargs):
        super(MySpider, self).__init__(*args, **kwargs)
        self.start_urls = [f'http://www.example.com/categories/{category}']
......



更多可以参考：
https://doc.scrapy.org/en/latest/intro/tutorial.html#more-examples-and-patterns
中的教程