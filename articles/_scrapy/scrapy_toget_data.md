---
order: 12
text: scrapy提取数据案例
---

# scrapy提取数据案例介绍

1.现在让我们来看看我们的spider被修改为递归地跟随链接到下一页，从中提取数据，代码如何书写吧
例如；
# 导入模块
import scrapy
# 书写spider类
class QuotesSpider(scrapy.Spider):
    name = "quotes"
    start_urls = [
        'https://quotes.toscrape.com/page/1/',
    ]

    def parse(self, response):
        for quote in response.css('div.quote'):
            yield {
                'text': quote.css('span.text::text').get(),
                'author': quote.css('small.author::text').get(),
                'tags': quote.css('div.tags a.tag::text').getall(),
            }	#将数据返回，用于输出到文件中或数据库中

        next_page = response.css('li.next a::attr(href)').get() # 获取下一个链接的URL地址
        if next_page is not None:	# 如果有下一个链接的URL地址，则将 url地址 通过urljoin进行转换为路径，并将路径url再次传给parse进行解析并获取数据
            next_page = response.urljoin(next_page)
            yield scrapy.Request(next_page, callback=self.parse)

除了这样书写， 还可以通过一些快捷方法进行书写（作为创建请求对象的快捷方式，您可以使用response.follow）
例如：
import scrapy
class QuotesSpider(scrapy.Spider):
    name = "quotes"
    start_urls = [
        'https://quotes.toscrape.com/page/1/',
    ]

    def parse(self, response):
        for quote in response.css('div.quote'):
            yield {
                'text': quote.css('span.text::text').get(),
                'author': quote.css('span small::text').get(),
                'tags': quote.css('div.tags a.tag::text').getall(),
            }

        next_page = response.css('li.next a::attr(href)').get()
        if next_page is not None:
            yield response.follow(next_page, callback=self.parse)     # 就是这里，对比上面，是不是少些了一行代码
结论：与scrapy.Request不同，response.follow直接支持相对URL-无需调用urljoin。注意response.follow只返回一个Request实例；您仍然必须yield此请求
(也就是 scrapy.Request()创建请求需要绝对路径，所以需要urljoin进行转换，response.follow支持相对路径，所以直接书写即可)

2.response.follow的更为精简用法：
(1).您也可以将选择器传递给response.follow而不是字符串；该选择器应提取必要的属性：
for href in response.css('ul.pager a::attr(href)'):
    yield response.follow(href, callback=self.parse)
(2).对于<a>元素，有一个快捷方式：response.follow自动使用其href属性。因此，代码可以进一步缩短：
for a in response.css('ul.pager a'):
    yield response.follow(a, callback=self.parse)
(3).要从可迭代对象创建多个请求，可以改用response.follow_all
anchors = response.css('ul.pager a')
yield from response.follow_all(anchors, callback=self.parse)
这样就更为简便了，或者进一步缩短：
yield from response.follow_all(css='ul.pager a', callback=self.parse)

3.下面是另一个spider，它展示了回调和以下链接，这次是为了抓取作者信息：
例如：
# 导入模块
import scrapy
# 创建spider类
class AuthorSpider(scrapy.Spider):
    name = 'author'

    start_urls = ['https://quotes.toscrape.com/']

    def parse(self, response):
        author_page_links = response.css('.author + a')
        yield from response.follow_all(author_page_links, self.parse_author)	# 这个地方，是一个比较灵活的地方  等待当前页面获取完之后，继续获取下一页的内容

        pagination_links = response.css('li.next a')
        yield from response.follow_all(pagination_links, self.parse)

    def parse_author(self, response):
        def extract_with_css(query):
            return response.css(query).get(default='').strip()

        yield {
            'name': extract_with_css('h3.author-title::text'),
            'birthdate': extract_with_css('.author-born-date::text'),
            'bio': extract_with_css('.author-description::text'),
        }

4.参数传递（通过 cb_kwargs 进行传递）
例如：
def parse(self, response):
    request = scrapy.Request('http://www.example.com/index.html',
                             callback=self.parse_page2,
                             cb_kwargs=dict(main_url=response.url))
    request.cb_kwargs['foo'] = 'bar'   	# 为回调添加更多参数
    yield request

def parse_page2(self, response, main_url, foo):
    yield dict(
        main_url=main_url,
        other_url=response.url,
        foo=foo,
    )
注意：
Request.cb_kwargs是在1.7版中引入的。在此之前，建议使用Request.meta传递回调信息
1.7之后，Request.cb_kwargs成为处理用户信息的首选方式，留下Request.meta与中间件和扩展等组件进行通信
