---
order: 8
text: re练习
---

# re获取数据的方式

1.使用re正则表达式提取数据 例如：（除了 re 还可以使用 getall get 提取数据）
>>>response.css('title::text').re(r'Quotes.*')
['Quotes to Scrape']
>>>response.css('title::text').re(r'Q\w+')
['Quotes']
>>>response.css('title::text').re(r'(\w+) to (\w+)')
['Quotes', 'Scrape']

2.介绍re()  re_first()
re()获取所有匹配的字符串 
re_first()获取第一个匹配的字符串