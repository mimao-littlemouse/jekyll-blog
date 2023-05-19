---
order: 6
text: tag
---
{% raw %}


# jekyll基础(tags部分)

#### [返回](./jekyll_base.md "jekyll基础(tags部分)")

## Tags Filters

```txt
All of the standard Liquid tags are supported. 
Jekyll has a few built in tags to help you build your site. 
You can also create your own tags using plugins.
```
支持所有标准的Liquid tag。
Jekyll有一些内置标签可以帮助你建立你的网站。
您也可以使用插件创建自己的标签。


**Includes**

```txt
If you have page snippets that you use repeatedly across your site, an include is the perfect way to make this more maintainable.
```
如果您有在整个网站上重复使用的页面片段，那么include是使其更易于维护的完美方法。

**Code snippet highlighting(代码段突出显示)**

```txt
Jekyll has built in support for syntax highlighting of over 100 languages thanks to Rouge. 
Rouge is the default highlighter in Jekyll 3 and above.
```
得益于Rouge，Jekyll内置了对100多种语言语法高亮显示的支持。
Rouge是Jekyll 3及以上版本中默认的高亮。

```txt
Using Pygments has been deprecated and is not supported in Jekyll 4; 

the configuration setting highlighter: 
pygments now automatically falls back to using Rouge which is written in Ruby and 100% compatible with stylesheets for Pygments.
```
使用Pygments已被弃用，在Jekyll 4中不支持使用；

配置设置高亮：
pygments现在自动回到使用Rouge，Rouge是用Ruby编写的，与pygments的样式表100%兼容。

```txt
To render a code block with syntax highlighting, surround your code as follows:
```
要使用语法高亮显示来渲染代码块，请按如下方式环绕代码：

```liquid
{% highlight ruby %}
def foo
  puts 'foo'
end
{% endhighlight %}
```

```txt
The argument to the highlight tag (ruby in the example above) is the language identifier. 

To find the appropriate identifier to use for the language you want to highlight, look for the “short name” on the Rouge wiki.
```
高亮标记的参数（上例中的ruby）是语言标识符。
要为要突出显示的语言找到合适的标识符，请在Rouge wiki上查找“短名称”。

```txt
Jekyll processes all Liquid filters in code blocks
If you are using a language that contains curly braces, you will likely need to place \{\% raw \%\} and \{\% endraw \%\} tags around your code. 
Since Jekyll 4.0 , you can add render_with_liquid: false in your front matter to disable Liquid entirely for a particular document.
```
Jekyll在代码块中处理所有Liquid筛选器。
如果您使用的语言包含大括号，则可能需要在代码周围放置｛% raw% ｝和｛% endraw %} 标记。
自Jekyll 4.0以来，您可以在前面的内容中添加 render_with_liquid:false ，以完全禁用特定文档的liquid。

**Line numbers(行号)**

```txt
There is a second argument to highlight called linenos that is optional. 
Including the linenos argument will force the highlighted code to include line numbers. 
For instance, the following code block would include line numbers next to each line:
```
还有第二个要突出显示的参数linenos是可选的。
包含linenos参数将强制高亮显示的代码包含行号。
例如，以下代码块将包括每行旁边的行号：

```liquid
{% highlight ruby linenos %}
def foo
  puts 'foo'
end
{% endhighlight %}
```

**Marking specific lines4.4.0(标记特定线条)**

```txt
You can mark specific lines in a code snippet by using the optional argument mark_lines. 
This argument takes a space-separated list of line numbers which must be wrapped in double quotes. 
For example, the following code block will mark lines 1 and 2 but not line 3:
```
您可以使用可选参数mark_lines来标记代码段中的特定行。
此参数采用一个以空格分隔的行号列表，该列表必须用双引号括起来。
例如，以下代码块将标记第1行和第2行，但不标记第3行：

```liquid
{% highlight ruby mark_lines="1 2" %}
def foo
  puts 'foo'
end
{% endhighlight %}
```

```txt
A default class name of hll will be applied to the marked lines.
```
hll的默认类名将应用于标记的行。

**Stylesheets for syntax highlighting(语法高亮显示的样式表)**

```txt
In order for the highlighting to show up, you’ll need to include a highlighting stylesheet. 
For Pygments or Rouge you can use a stylesheet for Pygments, you can find an example gallery here or from its repository.

Copy the CSS file (native.css for example) into your css directory and import the syntax highlighter styles into your main.css:
```
为了显示高亮显示，您需要包含一个高亮显示样式表。
对于Pygments或Rouge，您可以使用Pygments的样式表，您可以在此处或其存储库中找到示例库。
将CSS文件（例如native.CSS）复制到CSS目录中，并将语法高亮样式导入到main.CSS中：

```css
@import "native.css";
```


**Links**
```txt
Since Jekyll 4.0 , you don’t need to prepend link and post_url tags with site.baseurl.
```
自从Jekyll 4.0以来，您不需要使用 site.baseurl 来准备链接和post_url标签。


**Linking to pages(链接到页面)**
```txt
To link to a post, a page, collection item, or file, the link tag will generate the correct permalink URL for the path you specify. 
For example, if you use the link tag to link to mypage.html, even if you change your permalink style to include the file extension or omit it, 
the URL formed by the link tag will always be valid.

You must include the file’s original extension when using the link tag. Here are some examples:
```
要链接到帖子、页面、收藏项目或文件，链接标记将为您指定的路径生成正确的永久链接URL。
例如，如果您使用链接标记链接到mypage.html，即使您更改了永久链接样式以包含或省略文件扩展名，
由链接标签形成的URL将始终是有效的。

使用链接标记时，必须包含文件的原始扩展名。以下是一些例子：
```liquid
{% link _collection/name-of-document.md %}
{% link _posts/2016-07-26-name-of-post.md %}
{% link news/index.html %}
{% link /assets/files/doc.pdf %}
```

```txt
You can also use the link tag to create a link in Markdown as follows:
```
您也可以使用链接标记在Markdown中创建链接，如下所示：
```liquid
[Link to a document]({% link _collection/name-of-document.md %})
[Link to a post]({% link _posts/2016-07-26-name-of-post.md %})
[Link to a page]({% link news/index.html %})
[Link to a file]({% link /assets/files/doc.pdf %})
```

```txt
The path to the post, page, or collection is defined as the path relative to the root directory (where your config file is) to the file, 
not the path from your existing page to the other page.

For example, suppose you’re creating a link in page_a.md (stored in pages/folder1/folder2) to page_b.md (stored in pages/folder1). 
Your path in the link would not be ../page_b.html. Instead, it would be /pages/folder1/page_b.md.

If you’re unsure of the path, add {{ page.path }} to the page and it will display the path.

One major benefit of using the link or post_url tag is link validation. 
If the link doesn’t exist, Jekyll won’t build your site. 
This is a good thing, as it will alert you to a broken link so you can fix it 
(rather than allowing you to build and deploy a site with broken links).

Note you cannot add filters to link tags. For example, you cannot append a string using Liquid filters, 
such as {% link mypage.html | append: "#section1" %}. 
To link to sections on a page, you will need to use regular HTML or Markdown linking techniques.

The name of the file you want to link can be specified as a variable instead of an actual file name. 
For example, suppose you defined a variable in your page’s front matter like this:
```
帖子、页面或集合的路径定义为相对于文件的根目录（配置文件所在的位置）的路径，
而不是从现有页面到另一个页面的路径。

例如，假设您正在page_a.md（存储在 `pages/folder1/folder2` 中）中创建到`page_b.md`（存储在 `pages/folder1` 中）的链接。
你在链接中的路径不会是 `/page_b.html`。相反，它将是 `/pages/folder1/page_b.md`。

如果您不确定路径，请将 `{{page.path}}` 添加到页面中，它将显示路径。
使用link或post_url标记的一个主要好处是链接验证。

如果链接不存在，杰基尔就不会建立你的网站。

这是一件好事，因为它会提醒你断开的链接，这样你就可以修复它
（而不是允许您构建和部署一个链接断开的网站）。
请注意，不能将筛选器添加到链接标记中。例如，不能使用Liquid过滤器附加字符串，
例如 `｛%link mypage.html | append:“#section1”%｝`。
要链接到页面上的部分，您需要使用常规的HTML或Markdown链接技术。

可以将要链接的文件名指定为变量，而不是实际的文件名。
例如，假设您在页面的首页中定义了一个变量，如下所示：

```liquid
---
title: My page
my_variable: footer_company_a.html
---
```

```txt
You could then reference that variable in your link:
```
然后，您可以在链接中引用该变量：

```liquid
{% link {{ page.my_variable }} %}
```

```txt
In this example, the link tag would render a link to the file footer_company_a.html.
```
在本例中，链接标记将呈现到文件footer_company_a.html的链接。

**Linking to posts(链接到帖子)**

```txt
If you want to include a link to a post on your site, the post_url tag will generate the correct permalink URL for the post you specify.
```
如果你想在网站上包含一个帖子链接，post_url标签会为你指定的帖子生成正确的永久链接url。

```liquid
{% post_url 2010-07-21-name-of-post %}
```

```txt
If you organize your posts in subdirectories, you need to include subdirectory path to the post:
```
如果你在子目录中组织你的帖子，你需要包括帖子的子目录路径：

```liquid
{% post_url /subdir/2010-07-21-name-of-post %}
```

```txt
There is no need to include the file extension when using the post_url tag.

You can also use this tag to create a link to a post in Markdown as follows:
```
使用post_url标记时，不需要包含文件扩展名。
您也可以使用此标记创建指向Markdown中帖子的链接，如下所示：

```liquid
[Name of Link]({% post_url 2010-07-21-name-of-post %})
```

{% endraw %}