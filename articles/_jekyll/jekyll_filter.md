---
index: 8
text: filter
---

# jekyll基础(filters部分) {#introduction} 
#### [返回](./../jekyll基础.md#liquid-filters "jekyll基础(filters部分)")
## Liuqid Filters
```txt
All of the standard Liquid filters are supported (see below).

To make common tasks easier, Jekyll even adds a few handy filters of its own, all of which you can find on this page. 
You can also create your own filters using plugins.
```
支持所有标准液体过滤器（见下文）。
为了简化常见任务，Jekyll甚至添加了一些自己的方便过滤器，所有这些都可以在这个页面上找到。
您也可以使用插件创建自己的过滤器。

| name | description | filter and output |
| :-: | :- | :-: |
| Relative URL | Prepend baseurl config value to the input to convert a URL path into a relative URL. <br> This is recommended for a site that is hosted on a subpath of a domain. | `\{\{ "/assets/style.css" | relative_url \}\}` <br> `/my-baseurl/assets/style.css` |
| 译 | 将baseurl配置值前置到输入，以将URL路径转换为相对URL。<br> 对于托管在域的子路径上的网站，建议这样做。 |  |
| Absolute URL | Prepend url and baseurl values to the input to convert a URL path to an absolute URL. | `\{\{ "/assets/style.css" | absolute_url \}\}` <br> `http://example.com/my-baseurl/assets/style.css` |
| 译 | 将url和baseurl值前置到输入，以将url路径转换为绝对url。 |  |
| Date to XML Schema | Convert a Date into XML Schema (ISO 8601) format. | `\{\{ site.time | date_to_xmlschema \}\}`<br>`2008-11-07T13:07:54-08:00` |
| 译 | 将日期转换为XML模式（ISO 8601）格式。 |  |
| Date to RFC-822 Format | Convert a Date into the RFC-822 format used for RSS feeds. | `\{\{ site.time | date_to_rfc822 \}\}`<br>`Mon, 07 Nov 2008 13:07:54 -0800` |
| 译 | 将Date转换为用于RSS提要的RFC-822格式。 |  |
| Date to String | Convert a date to short format. | `\{\{ site.time | date_to_string \}\}`<br>`07 Nov 2008` |
| 译 | 将日期转换为短格式。 |  |
| Date to String in ordinal US style | Format a date to ordinal, US, short format. 3.8.0 | `\{\{ site.time | date_to_string: "ordinal", "US" \}\}`<br>`Nov 7th, 2008` |
| 译 | 将日期格式设置为序号、美国短格式。3.8.0 |  |
| Date to Long String | Format a date to long format. | `\{\{ site.time | date_to_long_string \}\}`<br>`07 November 2008` |
| 译 | 将日期设置为长格式。 |  |
| Date to Long String in ordinal UK style | Format a date to ordinal, UK, long format. 3.8.0 | `\{\{ site.time | date_to_long_string: "ordinal" \}\}`<br>`7th November 2008` |
| 译 | 将日期格式设置为序数、英国、长格式。3.8.0 |  |
| Where | Select all the objects in an array where the key has the given value. | `\{\{ site.members | where:"graduation_year","2014" \}\}` |
| 译 | 选择数组中键具有给定值的所有对象。 |  |
| Where Expression | Select all the objects in an array where the expression is true. 3.2.0 | `\{\{ site.members | where_exp:"item","item.graduation_year == 2014" \}\}`<br>`\{\{ site.members | where_exp:"item","item.graduation_year < 2014" \}\}`<br>`\{\{ site.members | where_exp:"item","item.projects contains 'foo'" \}\}` |
| 译 | 选择数组中表达式为true的所有对象。3.2.0 |  |
| Find | Return the first object in an array for which the queried attribute has the given value or return nil <br> if no item in the array satisfies the given criteria. 4.1.0 | `\{\{ site.members | find: "graduation_year", "2014" \}\}` |
| 译 | 返回数组中查询属性具有给定值的第一个对象，<br>或者如果数组中没有项目满足给定条件，则返回nil。4.1.0 |  |
| Find Expression | Return the first object in an array for which the given expression evaluates to true or <br> return nil if no item in the array satisfies the evaluated expression. 4.1.0 | `\{\{ site.members | find_exp:"item","item.graduation_year == 2014" \}\}`<br>`\{\{ site.members | find_exp:"item","item.graduation_year < 2014" \}\}`<br>`\{\{ site.members | find_exp:"item","item.projects contains 'foo'" \}\} |
| 译 | 返回数组中给定表达式计算结果为true的第一个对象，<br>如果数组中没有项满足计算结果的表达式，则返回nil。4.1.0 |  |
| Group By | Group an array's items by a given property. | `\{\{ site.members | group_by:"graduation_year" \}\}`<br>`[{"name"=>"2013", "items"=>[...]},{"name"=>"2014", "items"=>[...]}]` |
| 译 | 根据给定的属性对数组的项进行分组。 | |
| Group By Expression | Group an array's items using a Liquid expression. 3.4.0 | `\{\{ site.members | group_by_exp: "item","item.graduation_year | truncate: 3, ''" \}\}`<br>`[{"name"=>"201", "items"=>[...]},{"name"=>"200", "items"=>[...]}]` |
| 译 | 使用Liquid表达式对数组的项进行分组。3.4.0 | |
| XML Escape | Escape some text for use in XML. | `\{\{ page.content | xml_escape \}\}` |
| 译 | 转义一些文本以用于XML。 | |
| CGI Escape | CGI escape a string for use in a URL. <br> Replaces any special characters with appropriate %XX replacements. <br> CGI escape normally replaces a space with a plus + sign. | `\{\{ "foo, bar; baz?" | cgi_escape \}\}`<br>`foo%2C+bar%3B+baz%3F` |
| 译 | CGI对字符串进行转义，以便在URL中使用<br>用适当的 %XX 替换来替换任何特殊字符<br>CGI转义通常用加号替换空格。 |  |
| URI Escape | Percent encodes any special characters in a URI. <br> URI escape normally replaces a space with %20. <br> Reserved characters will not be escaped. | `\{\{ "http://foo.com/?q=foo, \bar?" | uri_escape \}\}` <br> `http://foo.com/?q=foo,%20%5Cbar?` |
| 译 | Percent对URI中的任何特殊字符进行编码<br>URI转义通常会将空格替换为 %20 <br>保留字符将不会被转义。 |  |
| Number of Words | Count the number of words in some text.<br>From v4.1.0, this filter takes an optional argument to control the handling of Chinese-Japanese-Korean (CJK) characters in the input string.<br>Passing 'cjk' as the argument will count every CJK character detected as one word irrespective of being separated by whitespace.<br>Passing 'auto' (auto-detect) works similar to 'cjk' but is more performant if the filter is used on a variable string that may or may not contain CJK chars. | `\{\{ "Hello world!" | number_of_words \}\}` <br> 2 <br> `\{\{ "你好hello世界world" | number_of_words \}\}` <br> 1 <br> `\{\{ "你好hello世界world" | number_of_words: "cjk" \}\}` <br> 6 <br> `\{\{ "你好hello世界world" | number_of_words: "auto" \}\}` <br> 6 <br> |
| 译 | 计算一些文本中的字数<br>从v4.1.0开始，此筛选器采用一个可选参数来控制输入字符串中中日韩（CJK）字符的处理<br>传递“cjk”作为参数将把检测到的每个cjk字符计算为一个单词，而不考虑是否用空格分隔<br>传递“auto”（自动检测）的工作原理类似于“cjk”，但如果过滤器用于可能包含或不包含cjk字符的变量字符串，则性能更高。 |  |
| Array to Sentence | Convert an array into a sentence. <br> Useful for listing tags. <br> Optional argument for connector. | `\{\{ page.tags | array_to_sentence_string \}\}` <br> `foo, bar, and baz` <br> `\{\{ page.tags | array_to_sentence_string: "or" \}\}` <br> `foo, bar, or baz` |
| 译 | 将数组转换成句子<br>用于列出标记<br>连接器的可选参数。 |  |
| Markdownify | Convert a Markdown-formatted string into HTML. | `\{\{ page.excerpt | markdownify \}\}` |
| 译 | 将Markdown格式的字符串转换为HTML。 |  |
| Smartify | Convert "quotes" into “smart quotes.” | `\{\{ page.title | smartify \}\}` |
| 译 | 将“引号”转换为“智能引号” |  |
| Converting Sass/SCSS | Convert a Sass- or SCSS-formatted string into CSS. | `\{\{ some_sass | sassify \}\}`<br>`\{\{ some_scss | scssify \}\}` |
| 译 | 将Sass或SCSS格式的字符串转换为CSS。 |  |
| Slugify | Convert a string into a lowercase URL "slug". <br> See below for options. | `\{\{ "The _config.yml file" | slugify \}\}` <br> `the-config-yml-file` <br> `\{\{ "The _config.yml file" | slugify: "pretty" \}\}` <br> `the-_config.yml-file` <br> `\{\{ "The _cönfig.yml file" | slugify: "ascii" \}\}` <br> `the-c-nfig-yml-file` <br> `\{\{ "The cönfig.yml file" | slugify: "latin" \}\}`<br>`the-config-yml-file` |
| 译 | 将字符串转换为小写URL“slug”<br>请参阅以下选项。 |  |
| Data To JSON | Convert Hash or Array to JSON. | `\{\{ site.data.projects | jsonify \}\}` |
| 译 | 将哈希或数组转换为JSON。 |  |
| Normalize Whitespace | Replace any occurrence of whitespace with a single space. | `\{\{ "a \n b" | normalize_whitespace \}\}` |
| 译 | 用单个空格替换任何出现的空格。 |  |
| Sort | Sort an array. Optional arguments for hashes 1. property name 2. nils order (first or last). | `\{\{ page.tags | sort \}\}`<br>`\{\{ site.posts | sort: "author" \}\}`<br>`\{\{ site.pages | sort: "title", "last" \}\}` |
| 译 | 对数组进行排序。哈希1的可选参数。属性名称2。幂零顺序（第一个或最后一个）。 |  |
| Sample | Pick a random value from an array. <br> Optionally, pick multiple values. | `\{\{ site.pages | sample \}\}`<br>`\{\{ site.pages | sample: 2 \}\}` |
| 译 | 从数组中选择一个随机值<br>可选地，选择多个值。 |  |
| To Integer | Convert a string or boolean to integer. | `\{\{ some_var | to_integer \}\}` |
| 译 | 将字符串或布尔值转换为整数。 |  |
| Array Filters | Push, pop, shift, and unshift elements from an Array. <br> These are NON-DESTRUCTIVE, i.e. they do not mutate the array, but rather make a copy and mutate that. | `\{\{ page.tags | push: "Spokane" \}\}`<br>`["Seattle", "Tacoma", "Spokane"]`<br>`\{\{ page.tags | pop \}\}`<br>`["Seattle"]`<br>`\{\{ page.tags | shift \}\}`<br>`["Tacoma"]`<br>`\{\{ page.tags | unshift: "Olympia" \}\}`<br>`["Olympia", "Seattle", "Tacoma"]` |
| 译 | 从数组中推送、弹出、移位和取消移位元素<br>这些是非破坏性的，即它们不会使数组发生突变，而是复制并使其发生突变。 |  |
| Inspect | Convert an object into its String representation for debugging. | `\{\{ some_var | inspect \}\}` |
| 译 | 将对象转换为其字符串表示形式以进行调试。 |  |

***

**Options for the slugify filter(slugify过滤器选项)**
```txt
The slugify filter accepts an option, each specifying what to filter. 
The default is default. 
They are as follows (with what they filter):
```
slugify过滤器接受一个选项，每个选项都指定要过滤的内容。
默认值为默认值。
它们如下（以及它们过滤的内容）：
```txt
none: no characters
无字符
raw: spaces
空格
default: spaces and non-alphanumeric characters
空格和非字母数字字符
pretty: spaces and non-alphanumeric characters except for ._~!$&'()+,;=@
空格和非字母数字字符，除了 ._~!$&'()+,;=@
ascii: spaces, non-alphanumeric, and non-ASCII characters
空格，非字母数字字符 和 非ASCII字符
latin: like default, except Latin characters are first transliterated (e.g. àèïòü to aeiou)3.7.0 .
与默认情况一样，除了 拉丁字符 是第一个音译的（例如，从ïòü到aeiou）3.7.0。
```
```txt
Detecting nil values with where filter 4.0
```
使用where filter 4.0检测零值

```txt
You can use the where filter to detect documents and pages with properties that are nil or "". 
For example,
```
您可以使用 where筛选器 检测财产为 零或“” 的文档和页面。
例如，
```liquid
// Using `nil` to select posts that either do not have `my_prop`
// defined or `my_prop` has been set to `nil` explicitly.
{% assign filtered_posts = site.posts | where: 'my_prop', nil %}
```
```liquid
// Using Liquid's special literal `empty` or `blank` to select
// posts that have `my_prop` set to an empty value.
{% assign filtered_posts = site.posts | where: 'my_prop', empty %}
```

**Binary operators in where_exp filter4.0(where _exp过滤器中的二进制运算符)**
```txt
You can use Liquid binary operators or and and in the expression passed to the where_exp filter to employ multiple conditionals in the operation.

For example, to get a list of documents on English horror flicks, one could use the following snippet:
```
可以在传递给where_exp过滤器的表达式中使用Liquid二进制运算符或和，以便在操作中使用多个条件。
例如，要获得英国恐怖电影的文档列表，可以使用以下片段：
```liquid
\{\{ site.movies | where_exp: "item", "item.genre == 'horror' and item.language == 'English'" \}\}
```
```txt
Or to get a list of comic-book based movies, one may use the following:
```
或者，要获得基于漫画的电影列表，可以使用以下内容：
```liquid
\{\{ site.movies | where_exp: "item", "item.sub_genre == 'MCU' or item.sub_genre == 'DCEU'" \}\}
```

**Standard Liquid Filters(标准Liquid过滤器)**
```txt
For your convenience, here is the list of all Liquid filters with links to examples in the official Liquid documentation.
```
为了方便您，以下是所有Liquid过滤器的列表，并附有官方Liquid文档中示例的链接。

[去查看](https://shopify.github.io/liquid/filters/abs/ "Liquid文档")

```
abs

append

at_least

at_most

capitalize

ceil

compact

concat

date

default

divided_by

downcase

escape

escape_once

first

floor

join

last

lstrip

map

minus

modulo

newline_to_br

plus

prepend

remove

remove_first

replace

replace_first

reverse

round

rstrip

size

slice

sort

sort_natural

split

strip

strip_html

strip_newlines

times

truncate

truncatewords

uniq

upcase

url_decode

url_encode
```






