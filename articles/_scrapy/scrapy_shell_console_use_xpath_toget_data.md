---
order: 7
text: xpath练习
---

# xpath获取数据的方式

1.使用xpath来提取数据(除了css , re，Scrapy选择器还支持使用XPath表达式来提取数据)
(其实 css抓取底层也是通过转化为 xpath来实现数据提取的)
>>>response.xpath('//title')
[<Selector xpath='//title' data='<title>Quotes to Scrape</title>'>]
>>>response.xpath('//title/text()').get()
'Quotes to Scrape'
其中，也可通过：
>>>from scrapy.selector import Selector 
>>>body='<html><body><span>good</span></body></html>' 
>>>Selector(text=body).xpath('//span/text').get() 
>>>"good”
进行获取

2.嵌套的时候，可以这样使用
divs = response.xpath('//div')
div下的所有p元素：
for p in divs.xpath('.//p'): 
    print(p.get())
div p 下面的所有元素
for p in divs.xpath('p'):
    print(p.get())


下面是 xpath css 应用的一些例子：
>>>response.xpath('//base/@href').get()
'http://example.com/'
>>>response.xpath('//a[contains(@href, "image")]/@href').getall()   #contains(属性，值)  在所有该标签中查找href属性中含有image值的所有标签

3.注意//node[1]和（//node)[1]之间的区别:
//node[1]选择在其各自的父节点下首先出现的所有节点
(//node)[1]选择文档中的所有节点，然后只获取其中的第一个节点
例如：
>>>from scrapy import Selector
>>>sel = Selector(text="""
....:     <ul class="list">
....:         <li>1</li>
....:         <li>2</li>
....:         <li>3</li>
....:     </ul>
....:     <ul class="list">
....:         <li>4</li>
....:         <li>5</li>
....:         <li>6</li>
....:     </ul>""")
>>>xp = lambda x: sel.xpath(x).getall()   此时xp是一个匿名方法，所以xp()是调用赋给xp的lambda匿名方法，并将参数传给 xp中lambda表达式中的x参数，返回结果
第一种：
这将获取其父项下的所有第一个＜li＞元素
>>>xp("//li[1]")
['<li>1</li>', '<li>4</li>']

第二种：
这将得到整个文档中的第一个＜li＞元素
>>>xp("(//li)[1]")
['<li>1</li>']

第三种：
这将获取＜ul＞父项下的所有第一个＜li＞元素
>>>xp("//ul/li[1]")
['<li>1</li>', '<li>4</li>']

第四种：
这将获得整个文档中＜ul＞父项下的第一个＜li＞元素
>>>xp("(//ul/li)[1]")
['<li>1</li>']

4.区分 xpath中的参数，经过string() 和 没经过转化的区别：
这个好难理解，例子如下：
当需要将文本内容用作XPath字符串函数的参数时，请避免使用//text（）并仅使用.代替
这是因为表达式//text（）生成文本元素的集合–一个节点集
当一个节点集被转换为字符串时，当它作为参数传递给一个字符串函数
（如contains（）或starts-with（））时，它只会生成第一个元素的文本。
例子：
>>>from scrapy import Selector 
>>>sel=Selector(text='<a href=“#”>单击此处转到<strong>下一页</strong></a>'）
# 将节点集转换为字符串：
>>>sel.xpath('//a//text()').getall() # take a peek at the node-set
['Click here to go to the ', 'Next Page']
>>>sel.xpath("string(//a[1]//text())").getall() # convert it to string
['Click here to go to the ']
#然而，转换为字符串的节点将其自身及其所有子节点的文本组合在一起
>>>sel.xpath("//a[1]").getall() # 选择第一个节点
['<a href="#">Click here to go to the <strong>Next Page</strong></a>']
>>>sel.xpath("string(//a[1])").getall() # 将其转换为字符串
['Click here to go to the Next Page']
#因此，使用//text（）节点集在这种情况下不会选择任何内容：
sel.xpath("//a[contains(.//text(), 'Next Page')]").getall()
[ ]
#但使用 . 指节点，有效
>>>sel.xpath("//a[contains(., 'Next Page')]").getall()
['<a href="#">Click here to go to the <strong>Next Page</strong></a>']

注意：
即：再查找 当前元素集中是否包含某个字符串，可以通过contains(.,'字符串')来获得


5.XPath表达式中的变量
例如：
#下面是一个基于元素的“id”属性值匹配元素的示例，不需要对其进行硬编码（如前所示）：
>>>response.xpath('//div[@id=$val]/a/text()', val='images').get()
'Name: My image 1 '
#下面是另一个示例，用于查找包含五个＜a＞子项的＜div＞标记的“id”属性（这里我们将值5作为整数传递）
>>>response.xpath('//div[count(a)=$cnt]/@id', cnt=5).get()
'images'

6.正在删除命名空间（没搞清）
在处理scrapy项目时，通常很方便地完全去掉名称空间，
只使用元素名称，编写更简单/方便的XPaths。
为此，可以使用Selector.remove_namespaces()方法。

7.扩展（没搞清）
正则表达式扩展
set扩展
（注意：这些扩展是指书写在 xpath括号中的）

8.其他扩展
has_class扩展（但：这个扩展，仅限在css无法描述的情况下使用，因为使用这个比较慢 效率低）
例如：
<p class="foo bar-baz">First</p>
<p class="foo">Second</p>
<p class="bar">Third</p>
<p>Fourth</p>
可以这样使用：
>>>response.xpath('//p[has-class("foo")]')
[<Selector xpath='//p[has-class("foo")]' data='<p class="foo bar-baz">First</p>'>,
 <Selector xpath='//p[has-class("foo")]' data='<p class="foo">Second</p>'>]
>>>response.xpath('//p[has-class("foo", "bar-baz")]')
[<Selector xpath='//p[has-class("foo", "bar-baz")]' data='<p class="foo bar-baz">First</p>'>]
>>>response.xpath('//p[has-class("foo", "bar")]')
[]

9.查看地址：
https://doc.scrapy.org/en/latest/topics/selectors.html#topics-selectors-htmlcode
查看 最后的总结即可 （总结  可以帮助复习）



