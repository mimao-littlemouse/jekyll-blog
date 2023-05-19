---
order: 5
text: 打开控制台
---

# 打开 控制台练习 scrapy获取数据的方式


1.学习如何使用Scrapy提取数据的最佳方法是使用ScrapyShell尝试选择器 进行运行提取
例如：scrapy shell 'https://quotes.toscrape.com/page/1/'  
(注意：在命令行中运行ScrapyShell时，请记住始终将URL括在引号中，否则包含参数（即&符号）的URL将不起作用
在python中可以用双引号和单引号 包含字符串，但在windows中，单引号是字符，只有双引号才能包含字符串，
所以，在windows中请改用双引号)
运行结果：
[ ... Scrapy log here ... ]
日期 时间 [scrapy.core.engine] DEBUG: Crawled (200) <GET https://quotes.toscrape.com/page/1/> (referer: None)
[s] Available Scrapy objects:
[s]   scrapy     scrapy module (contains scrapy.Request, scrapy.Selector, etc)
[s]   crawler    <scrapy.crawler.Crawler object at 0x7fa91d888c90>
[s]   item       {}
[s]   request    <GET https://quotes.toscrape.com/page/1/>
[s]   response   <200 https://quotes.toscrape.com/page/1/>
[s]   settings   <scrapy.settings.Settings object at 0x7fa91d888c10>
[s]   spider     <DefaultSpider 'default' at 0x7fa91c8af990>
[s] Useful shortcuts:
[s]   shelp()           Shell help (print this help)
[s]   fetch(req_or_url) Fetch request (or URL) and update local objects
[s]   view(response)    View response in a browser
>>>
使用shell，您可以尝试使用CSS和响应对象选择元素,例如：
>>>response.css('title')
结果为：
[<Selector xpath='descendant-or-self::title' data='<title>Quotes to Scrape</title>'>]
或提取其中的文本：
>>>response.css('title::text').getall()
结果为：
['Quotes to Scrape']

# 使用 re正则表达式进行提取数据，避免了getall() get()都提取不了的情况
2.介绍 get()  getall() （如果没有使用get getall re 这些方法，则还是一个Selector对象 也就是说还可以继续嵌套）
其实 response.get() 或 response.getall() 等，都是 response.selector.get() .getall()等的快捷书写方式
低版本中，get()是使用extract_first()  getall()是使用extract() ，而extract() extract_first() 两者都没有被弃用，都还可以使用，只是官方觉得get getall 更为简介
无论是Selector 还是SelectorList 去调用get getall 返回的结果类型一致（get还是返回第一个匹配字符串 getall 返回所有匹配的字符串列表）
(1).调用.get()的结果是一个字符串，选择器返回第一个结果，没有任何返回时，则会返回 None，也可以设置默认值,.get(default="默认值")
(2).调用.getall()的结果是一个列表，选择器可能返回多个结果，没有任何返回时，则会返回  [ ] (空列表)
(3).调用re() 正则表达式来 返回符合正则表达式的返回结果

例如
1.get()方法：
>>>response.css('title::text').get()
有结果时：
'返回的结果字符串'
没有结果时：
None
>>>response.css('title::text').get(default='not-found')
有结果时：
'返回的结果字符串'
没有结果时：
'not-found'
2.getall()方法：
>>>response.css('title::text').getall()   #不需要设置默认值，没有结果时，会默认返回空列表 [ ]
有结果时：
['','']  字符串列表
没有结果时：
[ ]

（注意：对于get()获取到的结果：可以通过 is None   is not None 来判断是否获取到数据 ）

3.selector的attrib属性
可以使用Selector的.attrib属性查询属性，而不是xpath中使用例如'@src'的方式获取属性：
>>>[img.attrib['src'] for img in response.css('img')]
['image1_thumb.jpg','image2_thumb.jpg']
作为快捷方式，.attrib也可以直接在SelectorList上使用；它返回第一个匹配元素的属性：
>>>response.css('img').attrib['src']
'image1_thumb.jpg'