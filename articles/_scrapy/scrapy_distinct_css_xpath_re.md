---
order: 9
text: 区分css xpath re
---

# 区分css xpath re 获取和处理数据的方式

1.获取属性上：
css中：::attr(name)
xpath中:  @name
(name 代表属性名称)

2.re 与 css 、xpath提取数据的时候，是否能嵌套
css xpath在使用get() getall() re()之前，都能嵌套，使用之后，便不能进行嵌套
（使用它们之后，返回的结果都不再是 Selector类型，get()返回的是字符串 getall()返回的是字符串列表 re()返回的是字符串列表）

3.它们都可以相互使用，例如：css xpath
>>>from scrapy import Selector
>>>sel = Selector(text='<div class="hero shout"><time datetime="2014-07-23 19:00">Special date</time></div>')
>>>sel.css('.shout').xpath('./time/@datetime').getall()
['2014-07-23 19:00']