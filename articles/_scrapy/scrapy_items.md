---
order: 10
text: scrapy item
---

# 介绍scrapy item 数据项的创建使用


一.创建item类的方法：
第一种：
from scrapy.item import Item, Field

class CustomItem(Item):
    one_field = Field()
    another_field = Field()

第二种：
from dataclasses import dataclass

@dataclass
class CustomItem:
    one_field: str
    another_field: int

注意：在运行时不强制执行字段类型。

第三种：
import attr

@attr.s
class CustomItem:
    one_field = attr.ib()
    another_field = attr.ib()

注意：为了使用这种类型，需要安装attrs软件包。

第四种：
import scrapy

class Product(scrapy.Item):
    name = scrapy.Field()
    price = scrapy.Field()
    stock = scrapy.Field()
    tags = scrapy.Field()
    last_updated = scrapy.Field(serializer=str)

注意：熟悉Django的人会注意到，Scrapy Items的定义与Django模型类似，
只是Scrapy Item要简单得多，因为没有不同字段类型的概念。

二.使用Item：
1.创建item
```
>>> product = Product(name='Desktop PC', price=1000)
>>>print(product)
Product(name='Desktop PC', price=1000)
```
2.获取字段值
```
>>> product['name']
Desktop PC
>>> product.get('name')
Desktop PC
正常输出

>>> product['price']
1000
正常输出

>>> product['last_updated']
Traceback (most recent call last):
    ...
KeyError: 'last_updated'
未赋值，无法取到值，所以报错

>>> product.get('last_updated', 'not set')
not set
未赋值，但给了一个 not set 默认值

>>> product['lala'] # getting unknown field
Traceback (most recent call last):
    ...
KeyError: 'lala'
未在item类中定义，所以报错

>>> product.get('lala', 'unknown field')
'unknown field'
未在item类中定义，但给了一个unknown field默认值

>>> 'name' in product  # is name field populated?
True
在创建item的时候，赋了值，所以为true

>>> 'last_updated' in product  # is last_updated populated?
False
在创建item的时候，没有赋值，所以为false

>>> 'last_updated' in product.fields  # is last_updated a declared field?
True
在item中有定义，则输出true

>>> 'lala' in product.fields  # is lala a declared field?
False
在item中没定义，则输出false
```

3.设置字段的值
>>> product['last_updated'] = 'today'
>>> product['last_updated']
today
>>> product['lala'] = 'test' # setting unknown field
Traceback (most recent call last):
    ...
KeyError: 'Product does not support field: lala'


4.访问所有赋了值的字段值
要访问所有填充的值，只需使用传统的api  （使用python中的dict类型进行访问就行）：
```
>>> product.keys()
['price', 'name']
>>> product.items()
[('price', 1000), ('name', 'Desktop PC')]
```

5.复制 item
要复制项目，必须首先决定是浅层复制还是深层复制。

如果您的项包含列表或字典之类的可变值，
那么浅拷贝将在所有不同的拷贝中保留对相同可变值的引用。

例如，如果您有一个带有标记列表的项目，并且您创建了该项目的浅副本，则原始项目和副本都具有相同的标记列表。
将标签添加到其中一个项目的列表中，也会将该标签添加到另一个项目中。
如果这不是所需的行为，请使用深度复制。

要创建项的浅层副本，可以对现有项调用copy()（product2=product.copy() ），
也可以从现有项实例化项类（product2=Product(product) ）。

要创建深度复制，请改为调用deepcopy()（product2=product.deepcopy() ）。

6.其他常见任务
正在根据项创建dicts：
>>> dict(product) # create a dict from all populated values
{'price': 1000, 'name': 'Desktop PC'}

正在从dicts创建项目：
>>> Product({'name': 'Laptop PC', 'price': 1500})
Product(price=1500, name='Laptop PC')
>>> Product({'name': 'Laptop PC', 'lala': 1500}) # warning: unknown field in dict
Traceback (most recent call last):
    ...
KeyError: 'Product does not support field: lala'

7.扩展项目子类
您可以通过声明原始Item的子类来扩展Items（添加更多字段或更改某些字段的元数据）。
例如：
```
class DiscountedProduct(Product):
    discount_percent = scrapy.Field(serializer=str)
    discount_expiration_date = scrapy.Field()
```

您还可以通过使用以前的字段元数据来扩展字段元数据，并添加更多值，或更改现有值，如下所示：
class SpecificProduct(Product):
    name = scrapy.Field(Product.fields['name'], serializer=my_serializer)

这将添加（或替换）name字段的rializermetadata键，保留所有以前存在的元数据值。

8.支持所有项目类型
在接收项目的代码中，例如项目管道或pider中间件的方法，
最好使用 ItemAdapter class和 is_item（）函数来编写适用于支持的项目类型的代码：
class itemadapter.ItemAdapter(item:Any) [source]
用于与数据容器对象交互的包装器类。
它提供了一个通用接口来提取和设置数据，而不必考虑对象的类型。

itemadapter.is_item(obj:Any)→bool [source]
如果给定对象属于支持的类型之一，则返回True，否则返回False。
ItemAdapter.is_item的别名

9.与项目相关的其他类别
class scrapy.item.ItemMeta(class_name,bases,attrs) [source]
处理字段定义的元素的元类。

10.Item loader 项目加载器（扩展）
例如：
```
from scrapy.loader import ItemLoader
from myproject.items import Product

def parse(self, response):
    l = ItemLoader(item=Product(), response=response)
    l.add_xpath('name', '//div[@class="product_name"]')
    l.add_xpath('name', '//div[@class="product_title"]')
    l.add_xpath('price', '//p[@id="price"]')
    l.add_css('stock', 'p#stock')
    l.add_value('last_updated', 'today') # you can also use literal values
    return l.load_item()
```

(1)Dataclass的方式创建：
```python
from dataclasses import dataclass, field
from typing import Optional

@dataclass
class InventoryItem:
    name: Optional[str] = field(default=None)
    price: Optional[float] = field(default=None)
    stock: Optional[int] = field(default=None)
```
使用过程：
```python
l = ItemLoader(Product(), some_selector)
l.add_xpath('name', xpath1) # (1)
l.add_xpath('name', xpath2) # (2)
l.add_css('name', css) # (3)
l.add_value('name', 'test') # (4)
return l.load_item() # (5)
```


(2)Declaring Item Loaders
项加载器是使用类定义语法声明的。以下是一个示例：
```python
from itemloaders.processors import TakeFirst, MapCompose, Join
from scrapy.loader import ItemLoader

class ProductLoader(ItemLoader):

    default_output_processor = TakeFirst()

    name_in = MapCompose(str.title)
    name_out = Join()

    price_in = MapCompose(str.strip)

    # ...
```
注意：正如您所看到的，输入处理器是使用_in后缀声明的，而输出处理器是使用_out后缀声明的。
还可以使用ItemLoader.default_input_processor和ItemLoader.default _output_procprocessor属性声明默认输入/输出处理器。

声明输入和输出处理器：
如前一节所示，输入和输出处理器可以在ItemLoader定义中声明，并且以这种方式声明输入处理器是非常常见的。
但是，还有一个地方可以指定要使用的输入和输出处理器：在项目字段元数据中。以下是一个示例：
```python
import scrapy
from itemloaders.processors import Join, MapCompose, TakeFirst
from w3lib.html import remove_tags

def filter_price(value):
    if value.isdigit():
        return value

class Product(scrapy.Item):
    name = scrapy.Field(
        input_processor=MapCompose(remove_tags),
        output_processor=Join(),
    )
    price = scrapy.Field(
        input_processor=MapCompose(remove_tags, filter_price),
        output_processor=TakeFirst(),
    )
```
```scrapy shell
>>> from scrapy.loader import ItemLoader
>>> il =ItemLoader(item=Product())
>>> il.add_value('name', ['Welcome to my', '<strong>website</strong>'])
>>> il.add_value('price', ['&euro;', '<span>1000</span>'])
>>> il.load_item()

{'name': 'Welcome to my website', 'price': '1000'}
```

输入和输出处理器的优先顺序如下：
  项目加载器字段特定属性：field_in和field_out（最高优先级）
  字段元数据（输入_处理器和输出_处理器密钥）
  项目加载器默认值：ItemLoader.default_input_processor（）和ItemLoader.default _output_proccessor（）（优先级最低）

另请参阅：重用和扩展Item Loader。[`去看看`](https://doc.scrapy.org/en/latest/topics/loaders.html#topics-loaders-extending)


11.项目加载器上下文
项目加载器上下文是在项目加载器中的所有输入和输出处理器之间共享的任意键/值的dict。
它可以在声明、实例化或使用项加载器时传递。它们用于修改输入/输出处理器的行为。
例如，假设您有一个函数parse_length，它接收一个文本值并从中提取一个长度：
```
def parse_length(text, loader_context):
    unit = loader_context.get('unit', 'm')
    # ... length parsing code goes here ...
    return parsed_length
```
通过接受loader_context参数，该函数明确地告诉Item loader它能够接收Item loader上下文，
因此Item loader在调用它时传递当前活动的上下文，因此处理器函数（在本例中为parse_length）可以使用它们。
有几种方法可以修改Item Loader上下文值：
通过修改当前活动的Item Loader上下文（上下文属性）：
```
loader = ItemLoader(product)
loader.context['unit'] = 'cm'
```
在项目加载器实例化时
(项目加载器__init__方法的关键字参数存储在项目加载器上下文中）：
```
loader = ItemLoader(product, unit='cm')
```
在ItemLoader声明中，对于那些支持使用ItemLoader上下文实例化它们的输入/输出处理器。
MapCompose就是其中之一：
```
class ProductLoader(ItemLoader):
    length_out = MapCompose(parse_length, unit='cm')
```

ItemLoader对象:
class scrapy.loader.ItemLoader(item=None, selector=None, response=None, parent=None, **context) [source]
一种用户友好的抽象，通过将字段处理器应用于抓取的数据来用数据填充项目。
当使用选择器或响应进行实例化时，它支持使用选择器从网页中提取数据。
参数
item（scrapy.item.item）– 要使用对add_xpath（）、add_css（）或add_value（）的后续调用填充的项实例。
selector（selector对象）– 当使用add_xpath（）、add_css（）、replace_xpath[（）或replace_css（]方法时，要从中提取数据的选择器。
response（response对象）– 用于使用default_selector_class构造选择器的响应，除非给定了选择器参数，在这种情况下会忽略此参数。

如果没有给定项，则会使用default_item_class中的类自动实例化一个项。
项、选择器、响应和剩余的关键字参数被分配给Loader上下文（可通过上下文属性访问）。






















