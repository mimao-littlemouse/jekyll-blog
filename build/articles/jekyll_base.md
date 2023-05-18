\-\-\-
index: 1
text: 基础知识
\-\-\-

# jekyll基础知识
## [`返回目录`](./navbar.md)
### `基础知识大纲` {#content}
- [**`Content`**](#content-content "内容")内容部分：
  [`Pages`](#content-pages "页面")页面、[`Posts`](#content-posts "帖子")帖子、[`Front Matter`](#content-front_matter "前事务 即前言")前事务、[`Collections`](#content-collections "集合")集合、[`Data Files`](#content-data_files "数据文件")数据文件、[`Assets`](#content-assets "资产")资产、[`Static Files`](#content-static_files "静态文件")静态文件
    ***
- [**`Site Structure`**](#content-site_structure "站点结构")站点结构部分：
  [`Directory Structure`](#content-directory_structure "目录结构")目录结构、[`Liquid`](#content-liquid "语法")语法、[`Variables`](#content-variables "变量")变量、[`Includes`](#content-includes "组件")组件、[`Layouts`](#content-layouts "布局")布局、[`Permalinks`](#content-permalinks "链接")链接、[`Themes`](#content-themes "主题")主题、[`Pagination`](#content-pagination "分页")分页
  ***
### **`Content 内容`**  {#content-content}
[`返回大纲`](#content) | [`站点结构`](#content-site_structure)
#### Pages 页面 {#content-pages}
[目录](#content) | [下](#content-posts)
```txt
Pages are the most basic building block for content. 
They’re useful for standalonecontent (content which is not date based or is not a group of content such as staffmembers or recipes).
```

**页面是内容最基本的构建块。**
**它们对于独立内容（不是基于日期的内容或不是一组内容，如工作人员或食谱）很有用。**

```txt
The simplest way of adding a page is to add an HTML file in the rootdirectory with a suitable filename.
You can also write a page in Markdown usinga  .md  extension which converts to HTML on build. 
For a site witha homepage, an about page, and a contact page, here’s what the root directoryand associated URLs might look like:
```

**添加页面最简单的方法是在根目录中添加一个具有合适文件名的HTML文件。**
**您也可以使用`.md`扩展 在Markdown中编写页面，该扩展插件在构建时转换为HTML。**
**对于一个有主页、关于页面和联系页面的网站，以下是根目录和相关URL的样子：**

```
.
├── about.md      #页面在站点中所对应的url路径 => http://example.com/about.html
├── index.html    #页面在站点中所对应的url路径 => http://example.com/
└── contact.html  #页面在站点中所对应的url路径 => http://example.com/contact.html
```
> 下次看到如此格式，便应要知道这是 对应url路径
```txt
If you have a lot of pages, you can organize them into subfolders. 
The same subfolders that are used to group your pages in your project’s source will then exist in the  _site  folder when your site builds. 
However, when a page has a different permalink set in  the front matter(页面代码的前面部分(前言)) , the subfolder at  _site  changes accordingly.
```
**如果您有很多页面，可以将它们组织到子文件夹中。**
**当您的网站生成时，用于在项目源中对页面进行分组的相同子文件夹将存在于 _site 文件夹中。**
**然而，当一个页面的前事项(front matter)设置了一个不同的 permalinks 时，在 _site 目录中的子文件夹会相应地改变。**
```
.
├── about.md          # => http://example.com/about.html
├── documentation     # folder containing pages
│   └── doc1.md       # => http://example.com/documentation/doc1.html
├── design            # folder containing pages
│   └── draft.md      # => http://example.com/design/draft.html
```
***Changing the output URL(更改输出URL)***
```txt
You might want to have a particular folder structure for your source files that changes for the built site. 
With permalinks you have full control of the output URL.
```
**您可能需要为源文件设置一个特定的文件夹结构，该结构将针对生成的网站进行更改。**
**使用 permalinks ，您可以完全控制输出URL。**

***Excerpts for pages(页码摘录)***
```txt
From Jekyll 4.1.1 onwards, one can choose to generate excerpts for their pages by setting page_excerpts to true in their config file.
```
**从Jekyll 4.1.1开始，可以通过在配置文件中将page_excepts设置为true来选择为页面生成摘录。**

***

#### Posts {#content-posts} 
[上](#content-pages) | [下](#content-front_matter)
```txt
Blogging is baked into Jekyll. 
You write blog posts as text files and Jekyll provides everything you need to turn it into a blog.
```
**写博客成了Jekyll。**
**你把博客文章写成文本文件，Jekyll提供了把它变成博客所需的一切。**

**The Posts Folder(帖子文件夹)**
```txt
The _posts folder is where your blog posts live. 
You typically write posts in Markdown, HTML is also supported.
```
**_posts文件夹是您的博客文章所在的位置。**
**你通常用Markdown写文章，也支持HTML。**

**Creating Posts(创建帖子)**
```txt
To create a post, add a file to your _posts directory with the following format:
```
**要创建帖子，请按以下格式将文件添加到_posts目录：**
```
YEAR-MONTH-DAY-title.MARKUP
```
```txt
Where YEAR is a four-digit number, MONTH and DAY are both two-digit numbers, and MARKUP is the file extension representing the format used in the file. 
For example, the following are examples of valid post filenames:
```
**其中YEAR是一个四位数，MONTH和DAY都是两位数，MARKUP是表示文件中使用的格式的文件扩展名。**
**例如，以下是有效的post文件名示例：**
```
2011-12-31-new-years-eve-is-awesome.md
2012-09-12-how-to-write-a-blog.md
```
```txt
All blog post files must begin with front matter which is typically used to set a layout or other meta data. 
For a simple example this can just be empty:
```
**所有博客文章文件都必须以front matter开头，它通常用于设置布局或其他元数据。**
**对于一个简单的例子，它可以是空的：**
```liquid
\-\-\-
layout: post
title:  "Welcome to Jekyll!"
\-\-\-

# Welcome

**Hello world**, this is my first Jekyll blog post.

I hope you like it!
```
```txt
ProTip™: Link to other posts
Use the post_url tag to link to other posts without having to worry about the URLs breaking when the site permalink style changes.
```
**专业提示™: 链接到其他帖子**
**使用post_url标签链接到其他帖子，而不必担心网站 permalink 样式更改时url会中断。**
```txt
Be aware of character sets
Content processors can modify certain characters to make them look nicer. 
For example, the smart extension in Redcarpet converts standard, ASCII quotation characters to curly, Unicode ones. 
In order for the browser to display those characters properly, define the charset meta value by including <meta charset="utf-8"> in the <head> of your layout.
```
**注意字符集**
**内容处理程序可以修改某些字符，使其看起来更好。**
**例如，Redcarpet(红地毯)中的智能扩展将标准ASCII引号字符转换为卷曲的Unicode字符。**
**为了让浏览器正确显示这些字符，请通过在布局的`<head>`中包含`<meta charset=“utf-8”>`来定义字符集元值。**

**Including images and resources(包括图像和资源)**
```txt
At some point, you’ll want to include images, downloads, or other digital assets along with your text content. 
One common solution is to create a folder in the root of the project directory called something like assets, into which any images, files or other resources are placed. 
Then, from within any post, they can be linked to using the site’s root as the path for the asset to include. 
The best way to do this depends on the way your site’s (sub)domain and path are configured, but here are some simple examples in Markdown:
```
**在某些情况下，您会希望在文本内容中包含图像、下载或其他数字资产(assets)。**
**一种常见的解决方案是在项目目录的根目录中创建一个文件夹，称为类似资产(assets)的文件夹，其中可以放置任何图像、文件或其他资源。**
**然后，在任何帖子中，它们都可以链接到使用网站的根作为要包含的资产的路径。**
**做到这一点的最佳方法取决于网站（子）域和路径的配置方式，但以下是Markdown中的一些简单示例：**

**Including an image asset in a post(在post中包含图像资产):**
```txt
... which is shown in the screenshot below(如下面的屏幕截图所示):
```
```markdown
![My helpful screenshot](/assets/screenshot.jpg)
```
**Linking to a PDF for readers to download(链接到PDF供读者下载):**
```markdown
... you can [get the PDF](/assets/mydoc.pdf) directly.
```

**Displaying an index of posts(显示帖子索引)**
```txt
Creating an index of posts on another page should be easy thanks to Liquid and its tags.
Here’s a simple example of how to create a list of links to your blog posts:
```
**由于Liquid及其标签，在另一个页面上创建帖子索引应该很容易。**
**以下是一个简单的示例，说明如何创建指向博客文章的链接列表：**
```html
<ul>
  \{\% for post in site.posts \%\}
    <li>
      <a href="\{\{ post.url \}\}">\{\{ post.title \}\}</a>
    </li>
  \{\% endfor \%\}
</ul>
```
```txt
You have full control over how (and where) you display your posts, and how you structure your site. 
You should read more about how templates work with Jekyll if you want to know more.

Note that the post variable only exists inside the for loop above. 
If you wish to access the currently-rendering page/posts’s variables (the variables of the post/page that has the for loop in it), use the page variable instead.
```
**你可以完全控制你如何（以及在哪里）展示你的帖子，以及你如何构建你的网站。**
**如果你想了解更多，你应该阅读更多关于模板如何使用Jekyll的信息。**
**请注意，post变量只存在于上面的for循环中。**
**如果希望访问当前呈现的页面/帖子的变量（其中包含for循环的帖子/页面的变量），请改用页面变量。**

**Tags and Categories(标记和类别)**
```txt
Jekyll has first class support for tags and categories in blog posts.
```
**Jekyll对博客文章中的标签和类别有一流的支持。**
*Tags*
```txt
Tags for a post are defined in the post’s front matter using either the key tag for a single entry 
or tags for multiple entries.

Since Jekyll expects multiple items mapped to the key tags, 
it will automatically split a string entry if it contains whitespace. 

For example, while front matter tag: classic hollywood will be processed into a singular entity "classic hollywood",
front matter tags: classic hollywood will be processed into an array of entries ["classic", "hollywood"].

Irrespective of the front matter key chosen, 
Jekyll stores the metadata mapped to the plural key which is exposed to Liquid templates.

All tags registered in the current site are exposed to Liquid templates via site.tags. 

Iterating over site.tags on a page will yield another array with two items, 
where the first item is the name of the tag and the second item being an array of posts with that tag.
```
帖子的标签是在帖子的front matter中定义 使用单个条目的关键标签或多个条目的标签来定义的。

由于Jekyll期望多个项目映射到键标签，因此如果字符串条目包含空格，它将自动拆分该条目。

例如，当front matter tag：classic hollywood 将被处理成一个单一的实体“classic hollywood”时，front-matter tag：classic hollywood 会被处理成条目数组[“classic”，“hollywood”]。

不管所选择的`前事项` key 如何，Jekyll都会存储映射到暴露于Liquid模板 的多个key的元数据。

当前网站中注册的所有tag 都通过`site.tags`暴露于Liquid模板。

在页面上的`site.tags`上迭代将产生另一个包含两个项目的数组，
其中第一项是标签的名称，第二项是具有该标签的帖子的阵列。

```html
\{\% for tag in site.tags \%\}
  <h3>\{\{ tag[0] \}\}</h3>
  <ul>
    \{\% for post in tag[1] \%\}
      <li><a href="\{\{ post.url \}\}">\{\{ post.title \}\}</a></li>
    \{\% endfor \%\}
  </ul>
\{\% endfor \%\}
```
**Categories(分类)**
```txt
Categories of a post work similar to the tags above:
They can be defined via the front matter using keys category or categories (that follow the same logic as for tags)
All categories registered in the site are exposed to Liquid templates via site.categories which can be iterated over (similar to the loop for tags above.)

The similarity between categories and tags however, ends there.

Unlike tags, categories for posts can also be defined by a post’s file path. Any directory above _posts will be read-in as a category. 
For example, if a post is at path movies/horror/_posts/2019-05-21-bride-of-chucky.markdown, then movies and horror are automatically registered as categories for that post.

When the post also has front matter defining categories, they just get added to the existing list if not present already.

The hallmark difference between categories and tags is that categories of a post may be incorporated into the generated URL for the post, while tags cannot be.

Therefore, depending on whether front matter has category: classic hollywood, or categories: classic hollywood, 
the example post above would have the URL as either movies/horror/classic%20hollywood/2019/05/21/bride-of-chucky.html or movies/horror/classic/hollywood/2019/05/21/bride-of-chucky.html respectively.
```
类似于上面标签的帖子的类别：
它们可以使用关键字类别或类别（遵循与标签相同的逻辑）通过前面的内容来定义。在网站中注册的所有类别都通过网站暴露于Liquid模板。可以迭代的类别（类似于上面标签的循环）
然而，类别和标签之间的相似性到此为止。
与标签不同，帖子的类别也可以由帖子的文件路径定义。_posts以上的任何目录都将作为一个类别读取。
例如，如果一篇帖子位于路径 movies/horror/_posts/2019-05-21-bride-of-chucky.markdown ，那么 movies and horror 将自动注册为该帖子的类别。
当帖子也有定义类别的 front matter(前事项) 时，如果还没有出现，它们就会被添加到现有列表中。
类别和标签之间的标志性区别在于，帖子的类别可以合并到为帖子生成的URL中，而标签不能。
因此，取决于 front matter(前事项) 是否有类别：classic hollywood，还是类别(categories)：classic hollywood，
上面的示例帖子的URL将分别为 movies/horror/classic%20hollywood/2019/05/21/bride-of-chucky.html 或 movies/horror/classic/hollywood/2019/05/21/bride-of-chucky.html。

**Post excerpts(张贴摘录)**
```txt
You can access a snippet of a posts’s content by using excerpt variable on a post. 

By default this is the first paragraph of content in the post, 
however it can be customized by setting a excerpt_separator variable in front matter or _config.yml.
```
您可以通过在帖子上使用摘录变量来访问帖子内容的片段。

默认情况下，这是文章内容的第一段，
但可以通过在 front matter(前事项) 或 _config.yml中设置一个`extract_separator`变量来自定义。
```liquid
\-\-\-
excerpt_separator: <!--more-->
\-\-\-

Excerpt with multiple paragraphs
摘录多段

Here's another paragraph in the excerpt.
这是摘录中的另一段。
<!--more-->
Out-of-excerpt
在摘录外

在<!--more-->上的，都是摘录的一部分，不在的，就不是
```
**Here’s an example of outputting a list of blog posts with an excerpt(下面是一个输出带有摘录的博客文章列表的示例):**
即：可以通过以下方式，来使用`post.excerpt`来获取帖子中摘录部分

```html
<ul>
  \{\% for post in site.posts \%\}
    <li>
      <a href="\{\{ post.url \}\}">\{\{ post.title \}\}</a>
      \{\{ post.excerpt \}\}
    </li>
  \{\% endfor \%\}
</ul>
```

**Drafts(草稿)**
```txt
Drafts are posts without a date in the filename. 
They’re posts you’re still working on and don’t want to publish yet. 
To get up and running with drafts, create a _drafts folder in your site’s root and create your first draft:
```
草稿是文件名中没有日期的帖子。
它们是你仍在处理的帖子，但还不想发布。
要启动并运行草稿，请在站点根目录中创建一个_drafts文件夹，然后创建您的第一份草稿：

```txt
To preview your site with drafts, run jekyll serve or jekyll build with the --drafts switch.

Each will be assigned the value modification time of the draft file for its date, 
and thus you will see currently edited drafts as the latest posts.
```
要使用草稿预览您的网站，请使用`--drafts` 开关 运行`jekyll serve`或`jekyll build`。
每个人都将被分配其日期的草案文件的值修改时间，因此您将看到当前编辑的草案作为最新的帖子。
***
#### Front Matter {#content-front_matter} 
[上](#content-posts) | [下](#content-collections)
```txt
Any file that contains a YAML front matter block will be processed by Jekyll as a special file. 

The front matter must be the first thing in the file 
and must take the form of valid YAML set between triple-dashed lines.

Here is a basic example:
```
**任何包含YAML前事务(front matter)块的文件都将由Jekyll作为特殊文件进行处理。**

**前事务(front matter)必须是文件中的第一个内容，并且必须采用在三条虚线之间设置有效YAML的形式。**

**以下是一个基本示例：**
```liquid
\-\-\-
layout: post
title: Blogging Like a Hacker
\-\-\-
```
```txt
Between these triple-dashed lines, you can set predefined variables (see below for a reference) 
or even create custom ones of your own. 

These variables will then be available for you to access 
using Liquid tags both further down in the file and also in any layouts 
or includes that the page or post in question relies on.
```
**在这三条虚线之间，您可以设置预定义的变量（请参阅下面的参考），**
**甚至可以创建自己的自定义变量。**

**这些变量将可供您访问**
**在文件中以及任何布局中使用Liquid标记**
**或者包括所述页面或帖子所依赖的内容。**
```txt
UTF-8 Character Encoding Warning

If you use UTF-8 encoding, make sure that no BOM header characters exist in your files or very,
very bad things will happen to Jekyll. 

This is especially relevant if you’re running Jekyll on Windows.
```
**UTF-8字符编码警告**

**如果使用UTF-8编码，请确保文件中不存在BOM头字符，否则Jekyll将发生非常非常糟糕的事情。**

**如果您在Windows上运行Jekyll，这一点尤其重要。**
```txt
Front Matter Variables Are Optional

If you want to use Liquid tags and variables but don’t need anything in your front matter, 
just leave it empty! 

The set of triple-dashed lines with nothing in between will still get Jekyll to process your file. 
(This is useful for things like CSS and RSS feeds!)
```
**front matter(前事项)变量是可选的**

如果你想使用Liquid标签和变量，但不需要任何内容，就把它留空！

这组中间没有任何内容的三条虚线仍然可以让Jekyll处理您的文件。

**Predefined Global Variables(预定义全局变量)**
```txt
There are a number of predefined global variables that you can set in the front matter of a page or post.
```
有许多预定义的全局变量，您可以在页面或帖子的 front matter(前事项) 进行设置。
| variable | description |
| :-: | :- |
| layout | If set, this specifies the layout file to use. <br>Use the layout file name without the file extension.  <br>Layout files must be placed in the _layouts directory.<br>Using null will produce a file without using a layout file. <br>This is overridden if the file is a post/document and has a layout defined in the front matter defaults. <br>Starting from version 3.5.0, using none in a post/document will produce a file without using a layout file regardless of front matter defaults. <br>Using none in a page will cause Jekyll to attempt to use a layout named "none". |
| 译 | 如果设置，则指定要使用的布局文件。<br>使用不带文件扩展名的布局文件名。<br>布局文件必须放在_layouts目录中。<br>**使用null将生成不使用布局文件的文件。**<br>如果文件是帖子/文档，并且在前面的默认设置中定义了布局，则会覆盖此选项。<br>从3.5.0版本开始，在帖子/文档中使用none将在不使用布局文件的情况下生成一个文件，而不管前面的内容默认值如何。<br>**在页面中使用none会导致Jekyll尝试使用名为“none”的布局。** |
| permalink | If you need your processed blog post URLs to be something other than the site-wide style (default /year/month/day/title.html), then you can set this variable and it will be used as the final URL. |
| 译 | 如果您需要处理的博客文章URL是站点范围以外的样式（默认/年/月/日/标题.html），那么您可以设置此变量，它将用作最终URL。 |
| published | Set to false if you don’t want a specific post to show up when the site is generated. |
| 译 | 如果您不希望在生成网站时显示特定的帖子，请设置为false。 |

**Render Posts Marked As Unpublished(渲染标记为未发布的帖子)**
```txt
To preview unpublished pages, run `jekyll serve` or `jekyll build` with the `--unpublished` switch. 
Jekyll also has a handy drafts feature tailored specifically for blog posts.
```
要预览未发布的页面，请使用 带上“--unpublished”开关 运行“jekyll serve”或“jekyll-build”。
Jekyll还有一个方便的草稿功能，专门为博客文章量身定制。

**Custom Variables(自定义变量)**
```txt
You can also set your own front matter variables you can access in Liquid. 
For instance, if you set a variable called food, you can use that in your page:
```
您也可以设置您自己的 front matter(前事项)变量，您可以在Liquid中访问这些变量。
例如，如果您设置了一个名为food的变量，您可以在页面中使用该变量：
```ruby
\-\-\-
food: Pizza
\-\-\-

<h1>\{\{ page.food \}\}</h1>
```

**Predefined Variables for Posts(帖子的预定义变量)**
```txt
These are available out-of-the-box to be used in the front matter for a post.
```
这些都是开箱即用的，可以在一篇帖子的front matte(前事项)中使用。

| variable | description |
| :-: | :- |
| date | A date here overrides the date from the name of the post. This can be used to ensure correct sorting of posts. A date is specified in the format YYYY-MM-DD HH:MM:SS +/-TTTT; hours, minutes, seconds, and timezone offset are optional. |
| 译 | 此处的日期会覆盖帖子名称中的日期。这可以用来确保帖子的正确排序。日期的指定格式为YYYY-MM-DD HH:MM:SS+/-TTTT；小时、分钟、秒和时区偏移是可选的。 |
| category categories | Instead of placing posts inside of folders, you can specify one or more categories that the post belongs to. When the site is generated the post will act as though it had been set with these categories normally. Categories (plural key) can be specified as a YAML list or a space-separated string. |
| 译 | 您可以指定帖子所属的一个或多个类别，而不是将帖子放在文件夹中。当生成网站时，帖子将表现为正常设置了这些类别。类别（复数键）可以指定为YAML列表或空格分隔的字符串。 |
| tags | Similar to categories, one or multiple tags can be added to a post. Also like categories, tags can be specified as a YAML list or a space-separated string. |
| 译 | 与类别类似，一个帖子可以添加一个或多个标签。与类别一样，标签也可以指定为YAML列表或以空格分隔的字符串。 |

```txt
Don't repeat yourself
If you don't want to repeat your frequently used front matter variables over and over, 
define defaults for them and only override them where necessary (or not at all). 
This works both for predefined and custom variables.
```
不要重复你自己
如果你不想一遍又一遍地重复你经常使用的 front matter变量，
为它们定义默认值，并且只在必要时覆盖它们（或者根本不覆盖）。
这既适用于预定义变量，也适用于自定义变量。
***
#### Collections {#content-collections} 
[上](#content-front_matter) | [下](#content-data_files)
```txt
Collections are a great way to group related content like members of a team or talks at a conference.
```
**集合是将相关内容分组的好方法，例如团队成员或会议上的会谈。**

**Setup(设置)**
```txt
To use a Collection you first need to define it in your _config.yml. For example here’s a collection of staff members:
```
要使用集合，您首先需要在 _config.yml 中定义它。
例如，这里有一个工作人员的集合：
```yaml
collections:
  - staff_members
```
```txt
In this case collections is defined as a sequence (i.e., array) with no additional metadata defined for each collection. 
You can optionally specify metadata for your collection by defining collections as a mapping (i.e., hashmap) instead of sequence, 
and then defining additional fields in it:
```
在这种情况下，集合被定义为一个序列（即数组），没有为每个集合定义额外的元数据。
您可以选择性地通过将集合定义为映射（即hashmap）而不是序列来指定集合的元数据，
然后在其中定义附加字段：
```yaml
collections:
  staff_members:
    people: true
```

```txt
When defining a collection as a sequence, its pages will not be rendered by default. 
To enable this, output: true must be specified on the collection, which requires defining the collection as a mapping. 
For more information, see the section Output.
```
将集合定义为序列时，默认情况下不会呈现其页面。
要启用此功能，必须在集合上指定output:true，这需要将集合定义为映射。
有关更多信息，请参阅“输出”一节。

```txt
Gather your collections 3.7.0
You can optionally specify a directory to store all your collections in the same place with collections_dir: my_collections.

Then Jekyll will look in my_collections/_books for the books collection, and in my_collections/_recipes for the recipes collection.
```
收集集合 3.7.0
您可以选择指定一个目录，将所有集合与collections_dir:my_collections存储在同一位置。
然后，Jekyll将在my_collections/_books中查找图书集合，并在my_cocollections/_recipes中查找食谱集合。

```txt
Be sure to move drafts and posts into custom collections directory
If you specify a directory to store all your collections in the same place with collections_dir: my_collections, 
then you will need to move your _drafts and _posts directory to my_collections/_drafts and my_collections/_posts.
Note that, the name of your collections directory cannot start with an underscore (`_`).
```
确保将草稿和帖子移动到自定义集合目录中
如果您指定一个目录将所有集合与collections_dir:my_collections存储在同一位置，
然后，您需要将drafts和posts目录移动到mycollections/drafts和mycollections/posts。
请注意，集合目录的名称不能以下划线（`_`）开头。

**Add content(新增内容)**
```txt
Create a corresponding folder (e.g. <source>/_staff_members) and add documents.
Front matter is processed if the front matter exists, and everything after the front matter is pushed into the document’s content attribute. 
If no front matter is provided, Jekyll will consider it to be a static file and the contents will not undergo further processing. 
If front matter is provided, Jekyll will process the file contents into the expected output.

Regardless of whether front matter exists or not, 
Jekyll will write to the destination directory (e.g. _site) only if output: true has been set in the collection’s metadata.

For example here’s how you would add a staff member to the collection set above. 
The filename is ./_staff_members/jane.md with the following content:
```
创建相应的文件夹（例如`<source>/_staff_members`）并添加文档。
如果前面的内容存在，则处理前面的内容，并且前面的内容之后的所有内容都被推送到文档的内容属性中。
如果没有提供前事项(front matter)，Jekyll将认为它是一个静态文件，内容将不会经过进一步处理。
如果提供了前端内容，Jekyll将把文件内容处理成预期的输出。
不管front matter(前事项)是否存在，
只有在集合的元数据中设置了output:true时，Jekyll才会写入目标目录（例如_site）。
例如，以下是如何将一名工作人员添加到上面的集合中。
文件名为/_staff_members/jane.md，包含以下内容：
```yaml
\-\-\-
name: Jane Doe
position: Developer
\-\-\-
Jane has worked on Jekyll for the past *five years*.
```
```txt
Do note that in spite of being considered as a collection internally, the above doesn’t apply to posts. 
Posts with a valid filename format will be marked for processing even if they do not contain front matter.
```
请注意，尽管在内部被认为是一个集合，但以上内容并不适用于帖子。
具有有效文件名格式的帖子将被标记为进行处理，即使它们不包含前置内容。

```txt
Be sure to name your directories correctly
The folder must be named identically to the collection you defined in your _config.yml file, with the addition of the preceding _ character.
```
请确保正确命名目录。
文件夹的名称必须与您在 _config.yml 文件中定义的集合相同，并添加前面的 _ 字符。

**Output(输出)**
```txt
Now you can iterate over site.staff_members on a page and output the content for each staff member. 
Similar to posts, the body of the document is accessed using the content variable:
```
现在，您可以在页面上迭代site.staff_members，并输出每个工作人员的内容。
与帖子类似，使用内容变量访问文档的正文：
```ruby
\{\% for staff_member in site.staff_members \%\}
  <h2>\{\{ staff_member.name \}\} - \{\{ staff_member.position \}\}</h2>
  <p>\{\{ staff_member.content | markdownify \}\}</p>
\{\% endfor \%\}
```

```txt
If you’d like Jekyll to create a rendered page for each document in your collection, 
you can set the output key to true in your collection metadata in _config.yml:
```
如果您希望Jekyll为集合中的每个文档创建一个渲染页面，
您可以在_config.yml中的集合元数据中将输出键设置为true：
```yaml
collections:
  staff_members:
    output: true
```
**You can link to the generated page using the url attribute(您可以使用url属性链接到生成的页面):**
```ruby
\{\% for staff_member in site.staff_members \%\}
  <h2>
    <a href="\{\{ staff_member.url \}\}">
      \{\{ staff_member.name \}\} - \{\{ staff_member.position \}\}
    </a>
  </h2>
  <p>\{\{ staff_member.content | markdownify \}\}</p>
\{\% endfor \%\}
```

**Permalinks(链接)**
```txt
There are special permalink variables for collections to help you control the output url for the entire collection.
```
集合有一些特殊的permalink变量，可以帮助您控制整个集合的输出url。


**Custom Sorting of Documents 4.0(自定义文档排序)**
```txt
By default, two documents in a collection are sorted by their date attribute when both of them have the date key in their front matter. 
However, if either or both documents do not have the date key in their front matter, they are sorted by their respective paths.

You can control this sorting via the collection’s metadata.
```
默认情况下，当集合中的两个文档的前事项中 都有日期key时，它们将按日期属性进行排序。
但是，如果其中一个或两个文档的首页都没有日期key，则会按各自的路径进行排序。
您可以通过集合的元数据来控制这种排序。

*Sort By Front Matter Key(按前事项key排序)*
```txt
Documents can be sorted based on a front matter key by setting a sort_by metadata to the front matter key string. 
For example, to sort a collection of tutorials based on key lesson, the configuration would be:
```
通过将sort_by元数据设置为front matter(前事项)关键字字符串，可以基于front matter关键字对文档进行排序。
例如，要根据关键课程对教程集合进行排序，配置为：
```yaml
collections:
  tutorials:
    sort_by: lesson
```
```txt
The documents are arranged in the increasing order of the key’s value. 
If a document does not have the front matter key defined then that document is placed immediately after sorted documents. 
When multiple documents do not have the front matter key defined, those documents are sorted by their dates or paths and then placed immediately after the sorted documents.
```
这些文档是按照关键值的递增顺序排列的。
如果一个文档没有定义前事项key，那么该文档将立即放置在排序后的文档之后。
当多个文档没有定义前事项key时，这些文档将按其日期或路径进行排序，然后立即放置在排序后的文档之后。

**Manually Ordering Documents(手动排序文档)**
```txt
You can also manually order the documents by setting an order metadata with the filenames listed in the desired order. 
For example, a collection of tutorials would be configured as:
```
您也可以通过使用按所需顺序列出的文件名设置订单元数据来手动订购文档。
例如，教程集合将配置为：
```yaml
collections:
  tutorials:
    order:
      - hello-world.md
      - introduction.md
      - basic-concepts.md
      - advanced-concepts.md
```
```txt
Any documents with filenames that do not match the list entry simply gets placed after the rearranged documents. 
If a document is nested under subdirectories, include them in entries as well:
```
任何文件名与列表条目不匹配的文档都会被放在重新排列的文档之后。
如果文档嵌套在子目录下，请将它们也包括在条目中：
```yaml
collections:
  tutorials:
    order:
      - hello-world.md
      - introduction.md
      - concepts/basics.md
      - concepts/advanced.md
```
```txt
If both metadata keys have been defined properly, order list takes precedence.
```
如果两个元数据key都已正确定义，则顺序列表优先。

**Liquid Attributes(Liquid属性)**
*Collections 集合*
```txt
Collections are also available under site.collections, 
with the metadata you specified in your _config.yml (if present) and the following information:
```
集合也可以在site.Collections下找到，
使用您在 _config.yml 中指定的元数据（如果存在）和以下信息：

| variable | description |
| :-: | :- |
| label | The name of your collection, e.g. my_collection. |
| 译 | 您集合的名称, e.g. my_collection. |
| docs | An array of documents. |
| 译 | 一系列文档。 |
| files | An array of static files in the collection. |
| 译 | 集合中的静态文件数组。 |
| relative_directory | The path to the collection's source directory, relative to the site source. |
| 译 | 集合的源目录的路径，相对于站点源。 |
| directory | The full path to the collections's source directory. |
| 译 | 集合的源目录的完整路径。 |
| output | Whether the collection's documents will be output as individual files. |
| 译 | 集合的文档是否将作为单个文件输出。 |

```txt
A Hard-Coded Collection
In addition to any collections you create yourself, the posts collection is hard-coded into Jekyll. 
It exists whether you have a _posts directory or not.
This is something to note when iterating through site.collections as you may need to filter it out.

You may wish to use filters to find your collection:
```
硬编码集合
除了您自己创建的任何集合外，posts集合也被硬编码为Jekyll。
无论是否有_posts目录，它都存在。
在迭代site.collections时需要注意这一点，因为您可能需要将其过滤掉。
您可能希望使用筛选器来查找您的集合：
```liquid
\{\{ site.collections | where: "label", "myCollection" | first \}\}
```

```txt
Collections and Time
Except for documents in hard-coded default collection posts, all documents in collections you create, 
are accessible via Liquid irrespective of their assigned date, if any, and therefore renderable.

Documents are attempted to be written to disk only if the concerned collection metadata has output: true. 
Additionally, future-dated documents are only written if site.future is also true.

More fine-grained control over documents being written to disk can be exercised 
by setting published: false (true by default) in the document's front matter.
```
集合和时间
除了硬编码默认集合帖子中的文档外，您创建的集合中的所有文档，
可以通过Liquid访问，而不考虑其指定的日期（如果有的话），因此可以渲染。

只有当相关的集合元数据输出为true时，才会尝试将文档写入磁盘。
此外，只有在site.future也是真实的情况下，才会编写未来日期的文件。

可以对写入磁盘的文档进行更细粒度的控制
通过在文档的首页中设置published：false（默认为true）。


**Documents(文档)**
```txt
In addition to any front matter provided in the document’s corresponding file, each document has the following attributes
```
除了文档对应文件中提供的任何前事项(front matter)外，每个文档都具有以下属性
| variable | description |
| :-: | :- |
| content | The (unrendered) content of the document. If no front matter is provided, Jekyll will not generate the file in your collection. If front matter is used, then this is all the contents of the file after the terminating `\-\-\-` of the front matter. |
| 译 | 文档的（未提交的）内容。如果没有提供前置内容，Jekyll将不会在您的集合中生成文件。如果使用了前置内容，那么这就是前置内容的终止“\-\-\-”之后的文件的所有内容。 |
| output | The rendered output of the document, based on the content. |
| 译 | 基于内容呈现的文档输出。 |
| path | The full path to the document's source file. |
| 译 | 文档源文件的完整路径。 |
| relative_path | The path to the document's source file relative to the site source. |
| 译 | 文档的源文件相对于网站源的路径。 |
| url | The URL of the rendered collection. The file is only written to the destination when the collection to which it belongs has output: true in the site's configuration. |
| 译 | 呈现的集合的URL。只有当文件所属的集合在站点配置中具有输出：true时，才会将文件写入目标。 |
| collection | The name of the document's collection. |
| 译 | 文档集合的名称。|
| date | The date of the document's collection. |
| 译 | 文档的集合日期。 |

***

#### Data Files {#content-data_files} 
[上](#content-collections) | [下](#content-assets)
```txt
In addition to the built-in variables available from Jekyll, 
you can specify your own custom data that can be accessed via the Liquid templating system.

Jekyll supports loading data from YAML, JSON, CSV, and TSV files located in the _data directory. 
Note that CSV and TSV files must contain a header row.

This powerful feature allows you to avoid repetition in your templates and to set site specific options without changing _config.yml.

Plugins/themes can also leverage Data Files to set configuration variables.
```
**除了可从Jekyll获得的内置变量之外，**
**您可以指定自己的自定义数据，这些数据可以通过Liquid模板系统访问。**
**Jekyll支持从_data目录中的YAML、JSON、CSV和TSV文件加载数据。**
**请注意，CSV和TSV文件必须包含一个标题行。**
**这个强大的功能使您可以避免模板中的重复，并在不更改 _config.yml 的情况下设置特定于站点的选项。**
**插件/主题还可以利用数据文件来设置配置变量。**

**The Data Folder(数据文件夹)**
```txt
The _data folder is where you can store additional data for Jekyll to use when generating your site. 

These files must be YAML, JSON, TSV or CSV files (using either the .yml, .yaml, .json, .tsv, or .csv extension), 
and they will be accessible via site.data.
```
_data文件夹是您可以存储额外数据的地方，供Jekyll在生成站点时使用。
这些文件必须是YAML、JSON、TSV或CSV文件（使用.yml、.yaml、.json、.tsv或.csv扩展名），
并且可以通过site.data访问它们。

**Example: List of members(例如：成员列表)**
```txt
Here is a basic example of using Data Files to avoid copy-pasting large chunks of code in your Jekyll templates:

In _data/members.yml:
```
以下是使用数据文件避免在Jekyll模板中复制粘贴大块代码的基本示例：
在_data/members.yml中：
```yaml
- name: Eric Mill
  github: konklone

- name: Parker Moore
  github: parkr

- name: Liu Fengyun
  github: liufengyun
```
```txt
Or _data/members.csv:
```
或 _data/members.csv：
```csv
name,github
Eric Mill,konklone
Parker Moore,parkr
Liu Fengyun,liufengyun
```
```txt
This data can be accessed via site.data.members (
  notice that the file’s basename determines the variable name and 
  therefore one should avoid having data files with the same basename but different extensions, in the same directory
).

You can now render the list of members in a template:
```
此数据可通过site.data.members访问(请注意，文件的basename决定了变量名 并且 因此，应该避免在同一目录中具有相同基本名称但不同扩展名的数据文件）。
现在可以在模板中呈现成员列表：
```yaml
<ul>
\{\% for member in site.data.members \%\}
  <li>
    <a href="https://github.com/\{\{ member.github \}\}">
      \{\{ member.name \}\}
    </a>
  </li>
\{\% endfor \%\}
</ul>
```
**Subfolders(子文件夹)**
```txt
Data files can also be placed in sub-folders of the _data folder. 
Each folder level will be added to a variable’s namespace. 
The example below shows how GitHub organizations could be defined separately in a file under the orgs folder:

In _data/orgs/jekyll.yml:
```
数据文件也可以放置在_Data文件夹的子文件夹中。
每个文件夹级别都将添加到变量的命名空间中。
下面的示例显示了如何在orgs文件夹下的文件中单独定义GitHub组织：
在_data/orgs/jekyll.yml中：
```yaml
username: jekyll
name: Jekyll
members:
  - name: Tom Preston-Werner
    github: mojombo

  - name: Parker Moore
    github: parkr
```
```txt
In _data/orgs/doeorg.yml:
```
```yaml
username: doeorg
name: Doe Org
members:
  - name: John Doe
    github: jdoe
```
```txt
The organizations can then be accessed via site.data.orgs, followed by the file name:
```
然后可以通过site.data.orgs访问这些组织，然后输入文件名：
```ruby
<ul>
\{\% for org_hash in site.data.orgs \%\}
\{\% assign org = org_hash[1] \%\}
  <li>
    <a href="https://github.com/\{\{ org.username \}\}">
      \{\{ org.name \}\}
    </a>
    (\{\{ org.members | size \}\} members)
  </li>
\{\% endfor \%\}
</ul>
```
**Example: Accessing a specific author(例如：访问特定作者)**
```txt
Pages and posts can also access a specific data item. The example below shows how to access a specific item:

_data/people.yml:
```
页面和帖子也可以访问特定的数据项。以下示例显示了如何访问特定项目：
_data/people.yml:
```yaml
dave:
    name: David Smith
    twitter: DavidSilvaSmith
```
```txt
The author can then be specified as a page variable in a post’s front matter:
```
然后，作者可以被指定为帖子标题中的页面变量：
```ruby
\-\-\-
title: sample post
author: dave
\-\-\-

\{\% assign author = site.data.people[page.author] \%\}
<a rel="author"
  href="https://twitter.com/\{\{ author.twitter \}\}"
  title="\{\{ author.name \}\}">
    \{\{ author.name \}\}
</a>
```
```txt
For information on how to build robust navigation for your site 
(especially if you have a documentation website or another type of Jekyll site with a lot of pages to organize), 
see Navigation.
```
有关如何为您的网站构建强大导航的信息
（尤其是如果你有一个文档网站或其他类型的Jekyll网站，有很多页面需要组织），
请参见导航。

**CSV/TSV Parse Options(CSV/TSV转换选项)**
```txt
The way Ruby parses CSV and TSV files can be customized with the csv_reader and tsv_reader configuration options. Each configuration key exposes the same options:

converters: What CSV converters should be used when parsing the file. Available options are integer, float, numeric, date, date_time and all. By default, this list is empty. 

encoding: What encoding the files are in. Defaults to the site encoding configuration option. 

headers: Boolean field for whether to parse the first line of the file as headers. When false, it treats the first row as data. Defaults to true.

Examples:
```
Ruby解析CSV和TSV文件的方式可以使用csv_reader和tsv_readeer配置选项进行自定义。每个配置key公开相同的选项：
converters：解析文件时应该使用什么CSV转换器。可用选项有 integer、float、numeric、date、date_time 和 all。默认情况下，此列表为空。
encoding：文件的编码方式。默认为站点编码配置选项。
headers：用于是否将文件的第一行解析为头的布尔字段。如果为false，则将第一行视为数据。默认为true。
示例：
```yaml
csv_reader:
    converters:
      - numeric
      - datetime
    headers: true
    encoding: utf-8
tsv_reader:
    converters:
      - all
    headers: false
```

***

#### Assets {#content-assets} 
[上](#content-data_files) | [下](#content-static_files)
```txt
Jekyll provides built-in support for Sass and can work with CoffeeScript via a Ruby gem. 
In order to use them, you must first create a file with the proper extension name (one of .sass, .scss, or .coffee) and start the file with two lines of triple dashes, like this:
```
**Jekyll提供了对Sass的内置支持，并且可以通过Ruby gem与 CoffeeScript 一起工作。**
**为了使用它们，您必须首先创建一个具有正确扩展名的文件（.sas、.scs或.coffee之一），并以两行三连字符开头，如下所示：**
```ruby
\-\-\-
\-\-\-

// start content
.my-definition
  font-size: 1.2em
```
```txt
Jekyll treats these files the same as a regular page, in that the output file will be placed in the same directory that it came from. 
For instance, if you have a file named css/styles.scss in your site’s source folder, Jekyll will process it and put it in your site’s destination folder under css/styles.css.
```
Jekyll将这些文件视为普通页面，因为输出文件将被放置在其来源的同一目录中。
例如，如果您在站点的源文件夹中有一个名为css/styles.scss的文件，Jekyll会对其进行处理，并将其放在css/styles.css下的站点目标文件夹中。

```txt
Jekyll processes all Liquid filters and tags in asset files
If you are using Mustache or another JavaScript templating language that conflicts with the Liquid template syntax, you will need to place \{\% raw \%\} and \{\% endraw \%\} tags around your code.
```
**Jekyll处理资产文件中的所有Liquid过滤器和标记。**
**如果您使用的是Mustache或其他与Liquid模板语法冲突的JavaScript模板语言，则需要在代码周围放置｛%raw%｝和｛%endraw%｝标记。**

**Sass/SCSS**
```txt
Jekyll allows you to customize your Sass conversion in certain ways.

Place all your partials in your sass_dir, which defaults to <source>/_sass. 
Place your main SCSS or Sass files in the place you want them to be in the output file, such as <source>/css. 
For an example, take a look at this example site using Sass support in Jekyll.

If you are using Sass @import statements, you’ll need to ensure that your sass_dir is set to the base directory that contains your Sass files:
```
Jekyll允许您以特定方式自定义Sass转换。
将所有的部分放在sass_dir中，默认为`<source>/_sass`。
将您的主要SCSS或Sass文件放在您希望它们在输出文件中的位置，例如`<source>/css`。
举个例子，看看这个在Jekyll中使用Sass支持的示例站点。
如果您使用Sass@import语句，则需要确保您的Sass_dir设置为包含Sass文件的基本目录：
```yaml
sass:
    sass_dir: _sass
```
```txt
The Sass converter will default the sass_dir configuration option to _sass.
```
Sass转换器将sass_dir配置选项默认为_sass。

```txt
The sass_dir is only used by Sass
Note that the sass_dir becomes the load path for Sass imports, nothing more. 
This means that Jekyll does not know about these files directly. 
Any files here should not contain the empty front matter as described above. 
If they do, they'll not be transformed as described above. 
This folder should only contain imports.
```
**sass_dir仅由sass使用**
**请注意，sass_dil将成为sass导入的加载路径，仅此而已。**
**这意味着Jekyll并不直接知道这些文件。**
**此处的任何文件都不应包含如上所述的空的front matter(前事项)。**
**如果它们这样做了，就不会像上面描述的那样进行转换。**
**此文件夹应仅包含导入。**

```txt
You may also specify the output style with the style option in your _config.yml file:
```
您也可以在 _config.yml 文件中使用样式选项指定输出样式：
```yaml
sass:
    style: compressed
```
```txt
These are passed to Sass, so any output style options Sass supports are valid here, too.

For more information on Sass configuration options, see the Sass configuration docs.
```
这些都被传递给Sass，所以Sass支持的任何输出样式选项在这里也是有效的。
有关Sass配置选项的更多信息，请参阅Sass配置文档。

**Coffeescript(coffeescript脚本语言)**
```txt
To enable Coffeescript in Jekyll 3.0 and up you must

Install the jekyll-coffeescript gem
Ensure that your _config.yml is up-to-date and includes the following:
```
要在Jekyll 3.0及更高版本中启用Coffeescrap，您必须
安装 `jekyll coffeescript` gem
确保您的 _config.yml 是最新的，并包括以下内容：
```yaml
plugins:
  - jekyll-coffeescript
```

***

#### Static Files {#content-static_files} 
[上](#content-assets) | [站点结构](#content-site_structure)
```txt
A static file is a file that does not contain any front matter.
These include images, PDFs, and other un-rendered content.

They’re accessible in Liquid via site.static_files and contain the following metadata:
```
**静态文件是指不包含任何 front matter 的文件。**
**其中包括图像、PDFs 和其他未渲染的内容。**
**它们可在Liquid中通过`site.static_files`访问，并包含以下元数据：**

| variable | description |
| :-: | :- |
| file.path | The relative path to the file, e.g. /assets/img/image.jpg |
| 译 | 文件的相对路径, e.g. /assets/img/image.jpg |
| file.modified_time | The `Time` the file was last modified, e.g. 2016-04-01 16:35:26 +0200 |
| 译 | 上次修改文件的“时间”, e.g. 2016-04-01 16:35:26 +0200 |
| `file.name` | The string name of the file e.g. image.jpg for image.jpg |
| 译 | 文件的字符串名称 e.g. image.jpg for image.jpg |
| file.basename | 文件的字符串基名称 e.g. image for image.jpg |
| 译 | The string basename of the file e.g. image for image.jpg |
| file.extname | The extension name for the file, e.g. .jpg for image.jpg |
| 译 | 文件的扩展名, e.g. .jpg for image.jpg |

```txt
Note that in the above table, file can be anything. 
It’s an arbitrarily set variable used in your own logic (such as in a for loop). 
It isn’t a global site or page variable.
```
请注意，在上表中，文件可以是任何内容。
它是一个任意设置的变量，用于您自己的逻辑（例如for循环）。
它不是全局网站或页面变量。

**Add front matter to static files(将 front matter 添加到静态文件)**
```txt
Although you can’t directly add front matter values to static files, you can set front matter values through the defaults property in your configuration file. 
When Jekyll builds the site, it will use the front matter values you set.

Here’s an example:

In your _config.yml file, add the following values to the defaults property:
```
虽然不能直接将 front matter 值添加到静态文件中，但可以通过配置文件中的defaults属性设置 front matter 的值。
当Jekyll构建网站时，它将使用您设置的 front matter 。
下面是一个例子：
在_config.yml文件中，将以下值添加到defaults属性：
```yaml
defaults:
  - scope:
      path: "assets/img"
    values:
      image: true
```

```txt
This assumes that your Jekyll site has a folder path of assets/img where you have images (static files) stored. 
When Jekyll builds the site, it will treat each image as if it had the front matter value of image: true.

Suppose you want to list all your image assets as contained in assets/img. 
You could use this for loop to look in the static_files object and get all static files that have this front matter property:
```
这假设您的Jekyll站点有一个assets/img的文件夹路径，其中存储了图像（静态文件）。
当Jekyll构建网站时，它会将每个图像视为具有图像的前体值：true。
假设您想列出assets/img中包含的所有图像资产。
您可以使用此for循环来查找static_files对象，并获取所有具有此front-matter属性的静态文件：
```ruby
\{\% assign image_files = site.static_files | where: "image", true \%\}
\{\% for myimage in image_files \%\}
  \{\{ myimage.path \}\}
\{\% endfor \%\}
```
```txt
When you build your site, the output will list the path to each file that meets this front matter condition.
```
当你建立你的网站时，输出会列出每个符合这个front matter(前事项)条件的文件的路径。

***

### **`Site Structure 站点结构`** {#content-site_structure}
[`返回大纲`](#content) | [`Content 内容`](#content-content) | [`上`](#content-static_files)
#### Directory Structure 目录结构 {#content-directory_structure}
[站点结构](#content-site_structure) | [下](#content-liquid)
```txt
A basic Jekyll site usually looks something like this:
```
**一个基本的Jekyll网站通常看起来是这样的：**
```
.
├── _config.yml
├── _data
│   └── members.yml
├── _drafts
│   ├── begin-with-the-crazy-ideas.md
│   └── on-simplicity-in-technology.md
├── _includes
│   ├── footer.html
│   └── header.html
├── _layouts
│   ├── default.html
│   └── post.html
├── _posts
│   ├── 2007-10-29-why-every-programmer-should-play-nethack.md
│   └── 2009-04-26-barcamp-boston-4-roundup.md
├── _sass
│   ├── _base.scss
│   └── _layout.scss
├── _site
├── .jekyll-cache
│   └── Jekyll
│       └── Cache
│           └── [...]
├── .jekyll-metadata
└── index.html # can also be an 'index.md' with valid front matter 也可以是具有有效 front matter(前事项)的“index.md”
```

```txt
Directory structure of Jekyll sites using gem-based themes

Since version 3.2 , a new Jekyll project bootstrapped with jekyll new uses gem-based themes to define the look of the site. 

This results in a lighter default directory structure: _layouts, _includes and _sass are stored in the theme-gem, by default.

minima is the current default theme, and bundle info minima will show you where minima theme's files are stored on your computer.
```
使用基于gem的主题的Jekyll网站的目录结构

自3.2版以来，一个由Jekyll new启动的新Jekyll项目使用基于gems的主题来定义网站的外观。

这导致了一个更轻的默认目录结构：_layouts、_includes和_sass默认存储在主题gem中。

minima是当前的默认主题，bundle info minima 将显示minima主题的文件存储在您的计算机上的位置。

```txt
An overview of what each of these does:
```
这些功能的概述：

| FILE / DIRECTORY | DESCRIPTION |
| file/directory | description |
| :-: | :- |
| _config.yml | Stores configuration data. Many of these options can be specified from the command line executable but it’s easier to specify them here so you don’t have to remember them. |
| 译 | 存储配置数据。其中许多选项可以从命令行可执行文件中指定，但在此处指定它们更容易，因此您不必记住它们。 |
| _drafts | Drafts are unpublished posts. The format of these files is without a date: title.MARKUP. Learn how to work with drafts. |
| 译 | 草稿是未发布的帖子。这些文件的格式没有日期：title.MARKUP。学习如何使用草稿。 |
| _includes | These are the partials that can be mixed and matched by your layouts and posts to facilitate reuse. The liquid tag \{\% include file.ext \%\} can be used to include the partial in _includes/file.ext. |
| 译 | 这些部分可以通过布局和帖子进行混合和匹配，以便于重用。liquid 标记｛% include file.ext %｝可用于包含分部 _includes/file.ext 。 |
| _layouts | These are the templates that wrap posts. Layouts are chosen on a post-by-post basis in the front matter, which is described in the next section. The liquid tag \{\{ content \}\} is used to inject content into the web page. |
| 译 | 这些是包装帖子的模板。布局是在前面的内容中逐个选择的，这将在下一节中进行描述。liquid标签\{\{ content \}\} 用于将内容注入网页。 |
| _posts | Your dynamic content, so to speak. The naming convention of these files is important, and must follow the format: YEAR-MONTH-DAY-title.MARKUP. The permalinks can be customized for each post, but the date and markup language are determined solely by the file name. |
| 译 | 可以说是你的动态内容。这些文件的命名约定很重要，必须遵循以下格式：YEAR-MMONTH-DAY-title.MARKUP。可以为每个帖子自定义永久链接（permalinks），但日期和标记语言仅由文件名决定。 |
| _data | Well-formatted site data should be placed here. The Jekyll engine will autoload all data files (using either the .yml, .yaml, .json, .csv or .tsv formats and extensions) in this directory, and they will be accessible via `site.data`. If there's a file members.yml under the directory, then you can access contents of the file through site.data.members. |
| 译 | 格式良好的站点数据应该放在这里。Jekyll引擎将自动加载此目录中的所有数据文件（使用.yml、.yaml、.json、.csv或.tsv格式和扩展名），并且可以通过“site.data”访问这些文件。如果目录下有一个 members.yml 文件，则可以通过 site.data.members 访问该文件的内容。 |
| _sass | These are sass partials that can be imported into your main.scss which will then be processed into a single stylesheet main.css that defines the styles to be used by your site. Learn how to work with assets. |
| 译 | 这些是sass部分，可以导入到您的main.scss中，然后将其处理到一个样式表main.css中，该样式表定义了您的网站要使用的样式。了解如何使用资产。 |
| _site | This is where the generated site will be placed (by default) once Jekyll is done transforming it. It’s probably a good idea to add this to your .gitignore file. |
| 译 | 一旦Jekyll完成转换，生成的网站就会放在这里（默认情况下）。最好将其添加到你的.gitignore文件中。 |
| .jekyll-cache | Keeps a copy of the generated pages and markup (e.g.: markdown) for faster serving. Created when using e.g.: jekyll serve. Can be disabled with an option and/or flag. This directory will not be included in the generated site. It’s probably a good idea to add this to your .gitignore file. |
| 译 | 保留生成的页面和标记（例如：markdown）的副本，以便更快地提供服务。使用时创建，例如：jekyll serve。可以使用选项和/或标志禁用。此目录将不会包含在生成的站点中。将其添加到.gitignore文件中可能是个好主意。 |
| .jekyll-metadata | This helps Jekyll keep track of which files have not been modified since the site was last built, and which files will need to be regenerated on the next build. Only created when using incremental regeneration (e.g.: with jekyll serve -I). This file will not be included in the generated site. It’s probably a good idea to add this to your .gitignore file. |
| 译 | 这有助于Jekyll跟踪自上次构建网站以来哪些文件没有被修改，以及哪些文件需要在下次构建时重新生成。仅在使用增量再生时创建（例如：使用jekyll serve-I）。此文件将不会包含在生成的站点中。将其添加到.gitignore文件中可能是个好主意。 |
| index.html or index.md and other HTML, Markdown files | Provided that the file has a front matter section, it will be transformed by Jekyll. The same will happen for any .html, .markdown, .md, or .textile file in your site’s root directory or directories not listed above. |
| 译 | 如果该文件有一个前端部分，它将由jekyll转换。对于站点根目录或上面未列出的目录中的任何.html、.markdown、.md或.textile 文件，也会发生同样的情况。 |
| Other Files/Folders | Except for the special cases listed above, every other directory and file—such as css and images folders, favicon.ico files, and so forth—will be copied verbatim to the generated site. There are plenty of sites already using Jekyll if you’re curious to see how they’re laid out. |
| 译 | 除了上面列出的特殊情况外，其他所有目录和文件，如css和images文件夹、favicon.ico文件等，都将被逐字复制到生成的站点。如果你好奇的话，有很多网站已经在使用Jekyll了。 |

```txt
Every file or directory beginning with the following characters: ., _ , # or ~ in the source directory will not be included in the destination folder. 
Such paths will have to be explicitly specified via the config file in the include directive to make sure they’re copied over:
```
以 以下字符开头的每个文件或目录：.、_、# 或 源目录中的~  将不会包含在目标文件夹中。
这些路径必须通过include指令中的配置文件明确指定，以确保它们被复制：
```yaml
include:
 - _pages
 - .htaccess
```

***

#### Liquid `\{\{ \}\}`语法 {#content-liquid}
[上](#content-directory_structure) | [下](#content-variables)
```txt
Jekyll uses the Liquid templating language to process templates.

Generally in Liquid you output content using two curly braces e.g. \{\{ variable \}\} and perform logic statements by surrounding them in a curly brace percentage sign e.g. \{\% if statement \%\}. 
To learn more about Liquid, check out the official Liquid Documentation.

Jekyll provides a number of useful Liquid additions to help you build your site:

Filters
Tags
```
**Jekyll使用Liquid模板语言来处理模板。**
**通常在Liquid中，您使用两个大括号（例如`｛｛variable｝｝`）输出内容，并通过用大括号百分号（例如`｛%if statement%｝`）包围它们来执行逻辑语句。**
**要了解更多关于Liquid的信息，请查看官方的Liquid文档。**
**Jekyll提供了许多有用的Liquid添加剂，可以帮助您建立网站：**

##### filters [过滤器](./jekyll-liquid/filter.md "去查看")  {#liquid-filters}
##### tags [标记](./jekyll-liquid/tag.md "去查看") {#liquid-tags}

***

#### Variables 变量 {#content-variables}
[上](#content-liquid) | [下](#content-includes)
```txt
Jekyll traverses your site looking for files to process. 
Any files with front matter are subject to processing. 
For each of these files, Jekyll makes a variety of data available via Liquid. 
The following is a reference of the available data.
```
**Jekyll浏览您的网站，寻找要处理的文件。**
**任何有前沿问题的文件都要经过处理。**
**对于这些文件中的每一个，Jekyll都会通过Liquid提供各种数据。**
**以下是可用数据的参考。**
**Global Variables(全局变量)**
| variable | description |
| :-: | :- |
| site | Site wide information + configuration settings from _config.yml. See below for details. |
| 译 | 站点范围的信息 + _config.yml中的配置设置。有关详细信息，请参阅下文。 |
| page | Page specific information + the front matter. Custom variables set via the front matter will be available here. See below for details. |
| 译 | 页面特定信息 + 标题。通过前面的内容设置的自定义变量将在这里可用。详见下文。 |
| layout | Layout specific information + the front matter. Custom variables set via front matter in layouts will be available here. |
| 译 | 布局特定信息 + 前面的内容。通过布局中的前置物设置的自定义变量将在此处可用。 |
| theme | Theme-gem specific information as defined in the theme's gemspec. Useful for rendering information in the theme demo's "About" page, for example. See below for details. |
| 译 | 主题gem的gem规格中定义的主题gem特定信息。例如，对于在主题演示的“关于”页面中呈现信息很有用。详见下文。 |
| content | In layout files, the rendered content of the Post or Page being wrapped. Not defined in Post or Page files. |
| 译 | 在布局文件中，被包装的文章或页面的呈现内容。未在Post或Page文件中定义。 |
| paginator | When the paginate configuration option is set, this variable becomes available for use. See Pagination for details. |
| 译 | 当设置了分页配置选项时，该变量就可以使用了。有关详细信息，请参阅寻呼。 |

**Site Variables(站点变量)**
| variable | description |
| :-: | :- |
| site.time | The current time (when you run the jekyll command). |
| 译 | 当前时间（当您运行jekyll命令时）。 |
| site.pages | A list of all Pages. |
| 译 | 所有页面的列表。 |
| site.posts | A reverse chronological list of all Posts. |
| 译 | 所有帖子的倒序列表。 |
| site.related_posts | If the page being processed is a Post, this contains a list of up to ten related Posts. By default, these are the ten most recent posts. For high quality but slow to compute results, run the jekyll command with the --lsi (latent semantic indexing) option. Also note GitHub Pages does not support the lsi option when generating sites. |
| 译 | 如果正在处理的页面是一个帖子，则它包含最多10个相关帖子的列表。默认情况下，这是最近发布的十条帖子。对于高质量但计算速度较慢的结果，请运行带有--lsi（潜在语义索引）选项的jekyll命令。还要注意，GitHub Pages在生成网站时不支持lsi选项。 |
| site.static_files | A list of all static files (i.e. files not processed by Jekyll's converters or the Liquid renderer). Each file has five properties: path, modified_time, name, basename and extname. |
| 译 | 所有静态文件的列表（即Jekyll的转换器或Liquid渲染器未处理的文件）。每个文件都有五个财产：path、modified_time、name、basename和extname。 |
| site.html_pages | A subset of site.pages listing those which end in .html. |
| 译 | site.pages的一个子集，列出了以.html结尾的内容。 |
| site.html_files | A subset of site.static_files listing those which end in .html. |
| 译 | site.static_files的一个子集，列出了以.html结尾的文件。 |
| site.collections | A list of all the collections (including posts). |
| 译 |所有集合（包括帖子）的列表。 |
| site.data | A list containing the data loaded from the YAML files located in the _data directory. |
| 译 | 包含从位于_data目录中的YAML文件加载的数据的列表。 |
| site.documents | A list of all the documents in every collection. |
| 译 | 每个集合中所有文档的列表。 |
| site.categories.CATEGORY | The list of all Posts in category CATEGORY. |
| 译 | 类别category中所有帖子的列表。 |
| site.tags.TAG | The list of all Posts with tag TAG. |
| 译 | 标记为tag的所有帖子的列表。 |
| site.url | Contains the url of your site as it is configured in the _config.yml. For example, if you have url:` http://mysite.com `in your configuration file, then it will be accessible in Liquid as site.url. For the development environment there is an exception, if you are running jekyll serve in a development environment site.url will be set to the value of host, port, and SSL-related options. This defaults to url: `http://localhost:4000.` |
| 译 | 包含在_config.yml中配置的网站的url。例如，如果您有url：`http://mysite.com` 在您的配置文件中，它将作为site.url在Liquid中访问。对于开发环境，如果您在开发环境中运行jekyll serve，则有一个例外。url将设置为主机、端口和SSL相关选项的值。这默认为url:`http://localhost:4000`. |
| site.[CONFIGURATION_DATA] | All the variables set via the command line and your _config.yml are available through the site variable. For example, if you have foo: bar in your configuration file, then it will be accessible in Liquid as site.foo. Jekyll does not parse changes to _config.yml in watch mode, you must restart Jekyll to see changes to variables. |
| 译 | 通过命令行设置的所有变量和_config.yml都可以通过站点变量使用。例如，如果您的配置文件中有foo:bar，那么它将在Liquid中作为site.foo访问。Jekyll在监视模式下不会解析对_config.yml的更改，您必须重新启动Jekyll才能查看变量的更改。 |

**Page Variables(页面变量)**
| variable | description |
| :-: | :- |
| page.content | The content of the Page, rendered or un-rendered depending upon what Liquid is being processed and what page is. |
| 译 | 页面的内容，渲染或未渲染取决于正在处理的Liquid和页面。 |
| page.title | The title of the Page. |
| 译 | 页面的标题。 |
| page.excerpt | The un-rendered excerpt of a document. |
| 译 | 未呈现的文件摘录。 |
| page.url | The URL of the Post without the domain, but with a leading slash, e.g. /2008/12/14/my-post.html |
| 译 | 帖子的URL，不带域，但带前导斜杠，例如/2008/12/14/my-post.html |
| page.date | The Date assigned to the Post. This can be overridden in a Post’s front matter by specifying a new date/time in the format YYYY-MM-DD HH:MM:SS (assuming UTC), or YYYY-MM-DD HH:MM:SS +/-TTTT (to specify a time zone using an offset from UTC. e.g. 2008-12-14 10:30:00 +0900). |
| 译 | 分配给帖子的日期。通过以YYYY-MM-DD HH:MM:SS（假设为UTC）或YYYY-MM-DD HH:MM:SS+/-TTTT（使用与UTC的偏移量指定时区，例如2008-12-14 10:30:00+0900）的格式指定新的日期/时间，可以在帖子中的front matter(前事项)中覆盖这一点。 |
| page.id | An identifier unique to a document in a Collection or a Post (useful in RSS feeds). e.g. /2008/12/14/my-post/my-collection/my-document |
| 译 | 集合或帖子中文档的唯一标识符（在RSS提要中很有用）。例如/2008/12/14/my-post/my-collection/my-document |
| page.categories | The list of categories to which this post belongs. Categories are derived from the directory structure above the _posts directory. For example, a post at /work/code/_posts/2008-12-24-closures.md would have this field set to ['work', 'code']. These can also be specified in the front matter. |
| 译 | 此帖子所属的类别列表。类别派生自_posts目录上方的目录结构。例如，位于`/work/code/posts/2008-12-24-closures.md`的帖子会将此字段设置为`['work'，'code']`。这些也可以在front matter(前事项)中指定。 |
| page.collection | The label of the collection to which this document belongs. e.g. posts for a post, or puppies for a document at path _puppies/rover.md. If not part of a collection, an empty string is returned. |
| 译 | 此文档所属集合的标签。例如，posts for a post，或 puppets for a document at path _puppies/rrove.md。如果不是集合的一部分，则返回一个空字符串。 |
| page.tags | The list of tags to which this post belongs. These can be specified in the front matter. |
| 译 | 此帖子所属的标签列表。这些可以在前面的内容中指定。 |
| page.dir | The path between the source directory and the file of the post or page, e.g. /pages/. This can be overridden by permalink in the front matter. |
| 译 | 源目录和帖子或页面的文件之间的路径，例如/pages/。这可以被前面的内容中的permalink覆盖。 |
| `page.name` | The filename of the post or page, e.g. `about.md` |
| 译 | 文章或页面的文件名, e.g. `about.md `|
| page.path | The path to the raw post or page. Example usage: Linking back to the page or post’s source on GitHub. This can be overridden in the front matter. |
| 译 | 原始文章或页面的路径。示例用法：链接回GitHub上的页面或帖子来源。这可以在前面的内容中被覆盖。 |
| page.next | The next post relative to the position of the current post in site.posts. Returns nil for the last entry. |
| 译 | 相对于当前帖子在site.posts中的位置的下一个帖子。返回最后一个条目的nil。 |
| page.previous | The previous post relative to the position of the current post in site.posts. Returns nil for the first entry. |
| 译 | 上一篇文章相对于当前文章在site.posts中的位置。第一个条目返回nil。 |

```txt
ProTip™: Use Custom Front Matter
Any custom front matter that you specify will be available under page. 
For example, if you specify custom_css: true in a page’s front matter, that value will be available as page.custom_css.

If you specify front matter in a layout, access that via layout. 
For example, if you specify class: full_page in a layout’s front matter, that value will be available as layout.class in the layout and its parents.
```
专业提示™: 使用自定义 Front matter 
您指定的任何自定义 Front Matter 都将在页面下提供。
例如，如果在页面的front matter(前事项 即前言)指定custom_css：true，则该值将作为page.custom.css可用。
如果您在布局中指定了front matter，请通过布局访问该内容。
例如，如果在布局的前面指定class:full_page，则该值将在布局及其父级中作为layout.class可用。

**Theme Variables4.3.0(主题变量)**
VARIABLE	DESCRIPTION
| variable | description |
| :-: | :- |
| theme.root | Absolute path to the theme-gem. |
| 译 | 通往 theme-gem 的绝对路径。 |
| theme.authors | Comma separated string composed of the authors of the theme-gem. |
| 译 | 由 theme-gem 的作者组成的逗号分隔字符串。 |
| theme.description | Description or summary of the theme-gem as specified in the theme gemspec. |
| 译 | theme-gem规范中指定的主题宝石的描述或摘要。 |
| theme.version | The version string of current theme. |
| 译 | 当前主题的版本字符串。 |
| theme.dependencies | List of runtime dependencies of the theme. |
| 译 | 主题的运行时依赖项列表。 |
| theme.metadata | A mapping of key-value pairs as defined in the theme gemspec. |
| 译 | 主题gemspec中定义的键值对映射。 |

**Paginator(分页)**
VARIABLE	DESCRIPTION
| variable | description |
| :-: | :- |
| paginator.page | The number of the current page |
| 译 | 当前页面的编号 |
| paginator.per_page | Number of posts per page |
| 译 | 每页帖子数 |
| paginator.posts | Posts available for the current page |
| 译 | 当前页面可用的帖子 |
| paginator.total_posts | Total number of posts |
| 译 | 帖子总数 |
| paginator.total_pages | Total number of pages |
| 译 | 页面的总数 |
| paginator.previous_page | The number of the previous page, or nil if no previous page exists |
| 译 | 前一页的编号，如果不存在前一页，则为零 |
| paginator.previous_page_path | The path to the previous page, or nil if no previous page exists |
| 译 | 前一页的路径，如果不存在前一页，则为零 |
| paginator.next_page | The number of the next page, or nil if no subsequent page exists |
| 译 | 下一页的编号，如果没有下一页，则为零 |
| paginator.next_page_path | The path to the next page, or nil if no subsequent page exists |
| 译 | 下一页的路径，如果不存在后续页，则为零 |

```txt
Paginator variable availability
These are only available in index files, however they can be located in a subdirectory, such as /blog/index.html.
```
分页器变量可用性
这些仅在index文件中可用，但可以位于子目录中，如/blog/index.html。

***

#### Includes 包含(有组件的用处) {#content-includes}
[上](#content-variables) | [下](#content-layouts)
```txt
The include tag allows you to include the content from another file stored in the _includes folder:
```
**include标记允许您包含存储在_includes文件夹中的另一个文件中的内容：**
```liquid
\{\% include footer.html \%\}
```
```txt
Jekyll will look for the referenced file (in this case, footer.html) 
in the _includes directory at the root of your source directory and insert its contents.
```
Jekyll将查找被引用的文件（在本例中为footer.html）
在源目录根目录的includes目录中，并插入其内容。

**Including files relative to another file(包括相对于另一个文件的文件)**
```txt
You can choose to include file fragments relative to the current file by using the include_relative tag:
```
您可以使用`include_relative`标记来选择包含相对于当前文件的文件片段：
```liquid
\{\% include_relative somedir/footer.html \%\}
```
```txt
You won’t need to place your included content within the _includes directory. 
Instead, the inclusion is specifically relative to the file where the tag is being used. 

For example, if _posts/2014-09-03-my-file.markdown uses the include_relative tag, 
the included file must be within the _posts directory or one of its subdirectories.

Note that you cannot use the ../ syntax to specify an include location that refers to a higher-level directory.

All the other capabilities of the include tag are available to the include_relative tag, such as variables.
```
您不需要将 included 的内容放在 _includes目录中。
相反，所包含的内容是专门相对于使用标记的文件的。

例如，如果_posts/2014-09-03-my-file.markdown使用include_relative标记，
包含的文件必须位于_posts目录或其子目录中。
请注意，您不能使用../用于指定引用更高级别目录的包含位置的语法。

include标记的所有其他功能都可用于include_relative标记，例如变量。

**Using variables names for the include file(使用包含文件的变量名)**
```txt
The name of the file you want to embed can be specified as a variable instead of an actual file name. 
For example, suppose you defined a variable in your page’s front matter like this:
```
可以将要嵌入的文件名指定为变量，而不是实际的文件名。
例如，假设您在页面的front matter中定义了一个变量，如下所示：
```liquid
\-\-\-
title: My page
my_variable: footer_company_a.html
\-\-\-
```
```txt
You could then reference that variable in your include:
```
然后，您可以在include中引用该变量：
```liquid
\{\% if page.my_variable \%\}
  \{\% include \{\{ page.my_variable \}\} \%\}
\{\% endif \%\}
```
```txt
In this example, the include would insert the file footer_company_a.html from the _includes/footer_company_a.html directory.
```
在本例中，include将插入 `_includes/footer_company_a.html` 目录中的文件 `footer_company_a.html`。
```txt
Passing parameters to includes
```
将参数传递到include
```txt
You can also pass parameters to an include. 
For example, suppose you have a file called note.html in your _includes folder that contains this formatting:
```
您也可以将参数传递给include。
例如，假设_includes文件夹中有一个名为note.html的文件，该文件包含以下格式：
```liquid
<div markdown="span" class="alert alert-info" role="alert">
  <i class="fa fa-info-circle"></i> <b>Note:</b>
  \{\{ include.content \}\}
</div>
```
```txt
The \{\{ include.content \}\} is a parameter that gets populated when you call the include and specify a value for that parameter, 
like this:
```
`\{\{include.content\}\}`是一个参数，当您调用include并为该参数指定值时，
这样地：
```liquid
\{\% include note.html content="This is my sample note." \%\}
```
```txt
The value of content (which is This is my sample note) will be inserted into the \{\{ include.content \}\} parameter.

Passing parameters to includes is especially helpful when you want to hide away complex formatting from your Markdown content.

For example, suppose you have a special image syntax with complex formatting, and you don’t want your authors to remember the complex formatting. 
As a result, you decide to simplify the formatting by using an include with parameters. 
Here’s an example of the special image syntax you might want to populate with an include:
```
content的值（这是我的示例注释）将插入到`\{\{include.content\}\}`参数中。\

当您想隐藏Markdown内容中的复杂格式时，将参数传递给includes尤其有用。

例如，假设您有一个具有复杂格式的特殊图像语法，并且您不希望作者记住复杂的格式。
因此，您决定通过使用包含参数来简化格式设置。
以下是您可能希望使用include填充的特殊图像语法的示例：
```html
<figure>
   <a href="https://jekyllrb.com">
   <img src="logo.png" style="max-width: 200px;"
      alt="Jekyll logo" />
   </a>
   <figcaption>This is the Jekyll logo</figcaption>
</figure>
```
```txt
You could templatize this content in your include and make each value available as a parameter, 
like this:
```
您可以在include中模板化此内容，并将每个值作为参数使用，
这样地：
```html
<figure>
   <a href="\{\{ include.url \}\}">
   <img src="\{\{ include.file \}\}" style="max-width: \{\{ include.max-width \}\};"
      alt="\{\{ include.alt \}\}"/>
   </a>
   <figcaption>\{\{ include.caption \}\}</figcaption>
</figure>
```
```txt
This include contains 5 parameters:
url
max-width
file
alt
caption
```
这包括5个参数：
url
max-width
file
alt
caption

```txt
Here’s an example that passes all the parameters to this include (the include file is named image.html):
```
下面是一个将所有参数传递给include的示例（include文件名为image.html）：
```liquid
\{\% include image.html url="http://jekyllrb.com" max-width="200px" file="logo.png" alt="Jekyll logo" caption="This is the Jekyll logo." \%\}
```
```txt
The result is the original HTML code shown earlier.

To safeguard situations where users don’t supply a value for the parameter, 
you can use Liquid’s default filter.

Overall, you can create includes that act as templates for a variety of uses — inserting audio or video clips, alerts, special formatting, and more. Note that you should avoid using too many includes, as this will slow down the build time of your site. 
For example, don’t use includes every time you insert an image. (The above technique shows a use case for special images.)
```
结果是前面显示的原始HTML代码。

为了保护用户不提供参数值的情况，
您可以使用Liquid的默认过滤器。

总的来说，您可以创建 includes ，作为各种用途的模板——插入音频或视频片段、警报、特殊格式等等。请注意，您应该避免使用过多的include，因为这会减慢网站的构建时间。
例如，不要每次插入图像时都使用includes。（上面的技术显示了一个用于特殊图像的用例。）

**Passing parameter variables to includes(将参数变量传递到include)**
```txt
Suppose the parameter you want to pass to the include is a variable rather than a string. 
For example, you might be using \{\{ site.product_name \}\} to refer to every instance of your product rather than the actual hard-coded name. 
(In this case, your _config.yml file would have a key called product_name with a value of your product’s name.)

The string you pass to your include parameter can’t contain curly braces. 
For example, you can’t pass a parameter that contains this: "The latest version of \{\{ site.product_name \}\} is now available."

If you want to include this variable in your parameter that you pass to an include, 
you need to store the entire parameter as a variable before passing it to the include. 

You can use capture tags to create the variable:
```
假设要传递给include的参数是一个变量，而不是字符串。
例如，您可能使用 `\{\{site.product_name\}\}` 来引用产品的每个实例，而不是实际的硬编码名称。
（在这种情况下，您的 _config.yml 文件将有一个名为 product_name 的key，其值为您的产品名称。）
传递给include参数的字符串不能包含大括号。
例如，您不能传递包含以下内容的参数：`\{\{site.product_name\}\}`的最新版本现已可用。”
如果要将此变量包含在传递给include的参数中，
在将整个参数传递给include之前，需要将其存储为一个变量。
您可以使用捕获标记来创建变量：
```liquid
\{\% capture download_note \%\}
The latest version of \{\{ site.product_name \}\} is now available.
\{\% endcapture \%\}
```
```txt
Then pass this captured variable into the parameter for the include. 
Omit the quotation marks around the parameter content because it’s no longer a string (it’s a variable):
```
然后将这个捕获的变量传递到include的参数中。
省略参数内容周围的引号，因为它不再是字符串（它是一个变量）：
```liquid
\{\% include note.html content=download_note \%\}
```

***

#### Layouts 布局(有模板的用处) {#content-layouts}
[上](#content-includes) | [下](#content-permalinks)
```txt
Layouts are templates that wrap around your content. 
They allow you to have the source code for your template in one place so you don’t have to repeat things like your navigation and footer on every page.

Layouts live in the _layouts directory. 
The convention is to have a base template called default.html and have other layouts inherit from this as needed.
```
**布局是围绕内容的模板。**
**它们允许您将模板的源代码放在一个地方，这样您就不必在每一页上重复导航和页脚之类的内容。**
**布局位于_Layouts目录中。**
**惯例是有一个名为default.html的基本模板，并根据需要从中继承其他布局。**
```txt
Layouts Directory
Jekyll looks for the _layouts directory either at the root of your site's source or at the root of your theme.

While you can configure the directory name in which your layouts can reside by setting the layouts_dir key in your config file, 
the directory itself should be located at the root of your site's source directory.
```
Layouts Directory 
Jekyll在站点源的根目录或主题的根目录中查找_Layouts目录。

虽然您可以通过在配置文件中设置layouts_dir键来配置布局所在的目录名，
目录本身应该位于站点源目录的根目录中。

**Usage(使用)**
```txt
The first step is to put the template source code in default.html. content is a special variable, 
the value is the rendered content of the post or page being wrapped.
```
第一步是将模板源代码放在default.html中。content是一个特殊的变量，
该值是要包装的帖子或页面的呈现内容。
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>\{\{ page.title \}\}</title>
    <link rel="stylesheet" href="/css/style.css">
  </head>
  <body>
    <nav>
      <a href="/">Home</a>
      <a href="/blog/">Blog</a>
    </nav>
    <h1>\{\{ page.title \}\}</h1>
    <section>
      \{\{ content \}\}
    </section>
    <footer>
      &copy; to me
    </footer>
  </body>
</html>
```
```txt
You have full access to the front matter of the origin. 
In the example above, page.title comes from the page front matter.

Next you need to specify what layout you’re using in your page’s front matter. 
You can also use front matter defaults to save you from having to set this on every page.
```
你可以完全访问起源的front matter。
在上面的例子中，page.title来自front matter。

接下来，您需要指定您在页面 front matter 的布局。
您也可以使用 front matter 默认值来避免在每一页上都设置这个选项。
```liquid
\-\-\-
title: My First Page
layout: default
\-\-\-

This is the content of my page
```
```
The rendered output of this page is:
```
此页面的呈现输出为：
```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>My First Page</title>
    <link rel="stylesheet" href="/css/style.css">
  </head>
  <body>
    <nav>
      <a href="/">Home</a>
      <a href="/blog/">Blog</a>
    </nav>
    <h1>My First Page</h1>
    <section>
      This is the content of my page
    </section>
    <footer>
      &copy; to me
    </footer>
  </body>
</html>
```

**Inheritance(继承)**
```txt
Layout inheritance is useful when you want to add something to an existing layout for a portion of documents on your site. 
A common example of this is blog posts, you might want a post to display the date and author but otherwise be identical to your base layout.

To achieve this you need to create another layout which specifies your original layout in front matter. 
For example this layout will live at _layouts/post.html:
```
当您想为网站上的一部分文档向现有布局添加内容时，布局继承非常有用。
一个常见的例子是博客文章，你可能希望一篇文章显示日期和作者，但在其他方面与你的基本布局相同。

为了实现这一点，你需要创建另一个布局，在前面指定你的原始布局。
例如，此布局将位于_layouts/post.html：
```liquid
\-\-\-
layout: default
\-\-\-
<p>\{\{ page.date \}\} - Written by \{\{ page.author \}\}</p>

\{\{ content \}\}
```
```txt
Now posts can use this layout while the rest of the pages use the default.
```
现在帖子可以使用这种布局，而其他页面则使用默认布局。

**Variables(变量)**
```txt
You can set front matter in layouts, the only difference is when you’re using in Liquid, you need to use the layout variable instead of page. 
For example:
```
你可以在布局中设置front matter，唯一的区别是当你在Liquid中使用时，你需要使用布局变量而不是页面。
例如：
```liquid
\-\-\-
city: San Francisco
\-\-\-
<p>\{\{ layout.city \}\}</p>

\{\{ content \}\}
```

***

#### Permalinks {#content-permalinks}
[上](#content-layouts) | [下](#content-themes)
```txt
Permalinks are the output path for your pages, posts, or collections. 
They allow you to structure the directories of your source code different from the directories in your output.
```
**Permalinks(永久链接) 是页面、帖子或收藏的输出路径。**
**它们允许您构建不同于输出目录的源代码目录。**
> **注意**  *实现方法如下：*
```txt
The simplest way to set a permalink is using front matter. 
You set the permalink variable in front matter to the output path you’d like.
```
**设置 permalink 的最简单方法是使用 front matter 。**
```txt
For example, you might have a page on your site located at /my_pages/about-me.html and you want the output url to be /about/. In front matter of the page you would set:
```
**例如，您的网站上可能有一个位于/my_pages/about-me.html的页面，并且您希望输出url为/about/。在页面的front matter(前言)，您将设置：**
```ruby
\-\-\-
permalink: /about/
\-\-\-
```
**Global(全局)**
```txt
Setting a permalink in front matter for every page on your site is no fun. 
Luckily, Jekyll lets you set the permalink structure globally in your _config.yml.
To set a global permalink, you use the permalink variable in _config.yml. 
You can use placeholders to your desired output. For example:
```
**为你的网站上的每个页面设置一个 permalink(永久链接)并不是一件有趣的事。**
**幸运的是，Jekyll允许您在 _config.yml 中全局设置 permalink 结构。**
**要设置全局 permalink，请使用_config.yml中的 permalink 变量。**
**您可以将占位符用于所需的输出。例如：**
```ruby
permalink: /:categories/:year/:month/:day/:title:output_ext
```
```txt
Note that pages and collections (excluding posts and drafts) don’t have time and categories (for pages, the above :title is equivalent to :basename),
these aspects of the permalink style are ignored for the output.
```
**请注意，页面和集合（不包括帖子和草稿）没有时间和categories（对于页面，上面的 :title 相当于 :basename），输出忽略了permalink样式的这些方面。**
```txt
For example, a permalink style of /:categories/:year/:month/:day/:title:output_ext for the posts collection becomes /:title.html for pages and collections (excluding posts and drafts).
```
**例如，posts集合的 /:categories/:year/:month/:day/:title:output_ext 的 permalink 样式 对于页面和集合（不包括帖子和草稿）变为 /:title.html。**
**Placeholders Permalink(占位符固定链接)**
**Here’s the full list of placeholders available(以下是可用占位符的完整列表):**

| VARIABLE(variable变量) | DESCRIPTION(description说明) |
| :-: | :- |
| year | Year from the post’s filename with four digits. May be overridden via the document’s date front matter. |
| 译 | 从帖子的文件名开始的年份，有四位数字。可以通过文档的日期 前言(front matter)进行覆盖。 |
| short_year | Year from the post’s filename without the century. (00..99) May be overridden via the document’s date front matter. |
| 译 | 从帖子的文件名算起的年份没有世纪。（00..99）可能会通过文档的日期前事项(front matter)被覆盖。 |
| month | Month from the post’s filename. (01..12) May be overridden via the document’s date front matter. |
| 译 | 文章文件名后的月份。（01.12）可能会通过文档的日期前事项被覆盖。 |
| i_month | Month without leading zeros from the post’s filename. May be overridden via the document’s date front matter. |
| 译 | 帖子文件名中没有前导零的月份。可以通过文档的日期前事项进行覆盖。 |
| short_month | Three-letter month abbreviation, e.g. “Jan”. |
| 译 | 三个字母的月份缩写, e.g. “Jan”. |
| long_month 4.0 | Full month name, e.g. “January”. |
| 译 | 完整月份名称, e.g. “January”. |
| day | Day of the month from the post’s filename. (01..31) May be overridden via the document’s date front matter. |
| 译 | 帖子文件名中的月份日期。（01.31）可以通过文档的日期前事项进行覆盖。 |
| i_day | Day of the month without leading zeros from the post’s filename. May be overridden via the document’s date front matter. |
| 译 | 文章文件名中没有前导零的月份的哪一天。可以通过文档的日期前事项进行覆盖。 |
| y_day | Ordinal day of the year from the post’s filename, with leading zeros. (001..366) |
| 译 | 帖子文件名中的一年中的序号，以零开头。(001..366) |
| w_year 4.0 | Week year which may differ from the month year for up to three days at the start of January and end of December |
| 译 | 周-年，可能与月-年不同，在1月初和12月底最多有三天 |
| week 4.0 | Week number of the current year, starting with the first week having a majority of its days in January. (01..53) |
| 译 | 本年度的周数，从第一周开始，第一周的大部分时间都在一月。(01..53) |
| w_day  4.0 | Day of the week, starting with Monday. (1..7) |
| 译 | 一周中的某一天，从星期一开始. (1..7) |
| short_day 4.0	| Three-letter weekday abbreviation, e.g. “Sun”. |
| 译	| 三个字母的工作日缩写, e.g. “Sun”. |
| long_day 4.0 | Weekday name, e.g. “Sunday”. |
| 译文 | 工作日名称, e.g. “Sunday”. |
| hour | Hour of the day, 24-hour clock, zero-padded from the post’s date front matter. (00..23) |
| 译 | 一天中的一小时，24小时的时钟，从帖子的日期前的内容中填充零。(00..23) |
| minute | Minute of the hour from the post’s date front matter. (00..59) |
| 译 | 从帖子的日期开始的一小时中的一分钟。(00..59) |
| second | Second of the minute from the post’s date front matter. (00..59) |
| 译 | 从帖子的日期开始的第二分钟。(00..59) |
| title | Title from the document’s filename. May be overridden via the document’s slug front matter. Preserves case from the source. |
| 译 | 文档文件名中的标题。可以通过文档的slug front matter(前事项 即前言)覆盖。从源头上保留案例。 |
| slug | Slugified title from the document’s filename (any character except numbers and letters is replaced as hyphen). May be overridden via the document’s slug front matter. |
| 译 | 文档文件名中的标题模糊不清（除数字和字母外的任何字符都被替换为连字符）。可以通过文档的slug front内容覆盖。 |
| categories | The specified categories for this post. If a post has multiple categories, Jekyll will create a hierarchy (e.g. /category1/category2). Also Jekyll automatically parses out double slashes in the URLs, so if no categories are present, it will ignore this. |
| 译 | 为此帖子指定的类别。如果一篇文章有多个类别，Jekyll将创建一个层次结构（例如/category1/category2）。此外，Jekyll会自动解析URL中的双斜杠，因此如果不存在任何类别，它将忽略这一点。 |
| slugified_categories 4.1 | The specified categories for this post but slugified. If a category is a composite of multiple words, Jekyll will downcase all alphabets and replace any non-alphanumeric character with a hyphen. (e.g. "Work 2 Progress" will be converted into "work-2-progress") If a post has multiple categories, Jekyll will create a hierarchy (e.g. /work-2-progress/category2). Also Jekyll automatically parses out double slashes in the URLs, so if no categories are present, it will ignore this. |
| 译 | 为这篇文章指定的类别，但有污点。如果一个类别是多个单词的组合，Jekyll会将所有字母降频，并将任何非字母数字字符替换为连字符。（例如，“工作2进度”将转换为“工作2进展”）如果一个帖子有多个类别，Jekyll将创建一个层次结构（例如/Work-2-Progress/category2）。此外，Jekyll会自动解析URL中的双斜杠，因此如果不存在任何类别，它将忽略这一点。|
| :output_ext | Extension of the output file. (Included by default and usually unnecessary.) |
| 译 | 输出文件的扩展名。（默认情况下包括在内，通常不必要) |
***
**Built-in formats Permalink(内置格式Permalink)**
```txt
For posts, Jekyll also provides the following built-in styles for convenience:
```
**对于帖子，为了方便起见，Jekyll还提供了以下内置样式：**
| permalink |	url template |
| :-: | :- |
| date | /:categories/:year/:month/:day/:title:output_ext |
| pretty | /:categories/:year/:month/:day/:title/ |
| ordinal | /:categories/:year/:y_day/:title:output_ext |
| weekdate 4.0 | /:categories/:year/W:week/:short_day/:title:output_ext (W will be prefixed to the value of :week) W 将作为 :week值的前缀 |
| none | /:categories/:title:output_ext |

```txt
Rather than typing permalink: /:categories/:year/:month/:day/:title/, you can just type permalink: pretty.
```
**不必键入 permalink:/：categories/：year/：month/：day/：title/ ，只需键入permalink: pretty。**
```txt
Specifying permalinks through the front matter。
Built-in permalink styles are not recognized in front matter. As a result, permalink: pretty will not work.
```
**通过front matter(前事项 即前言)指定 permalinks**
**内置 permalink 的样式在 front matter 中不被认可。因此，permalink: pretty 是行不通的。**

**Collections Permalink(收藏永久链接)**
```txt
For collections (including posts and drafts), you have the option to override the global permalink in the collection configuration in _config.yml:
```
**对于集合（包括帖子和草稿），您可以选择覆盖 _config.yml中集合配置中的全局 permalink**
```yaml
collections:
  my_collection:
    output: true
    permalink: /:collection/:name
```
**Collections have the following placeholders available(集合有以下占位符可用)**
| variable | description |
| :-: | :- | 
| :collection | Label of the containing collection. |
| 译 | 包含集合的标签。 |
| :path | Path to the document relative to the collection's directory, including base filename of the document. |
| 译 | 文档相对于集合目录的路径，包括文档的基本文件名。|
| :name | The document's base filename, with every sequence of spaces and non-alphanumeric characters replaced by a hyphen. |
| 译 | 文档的基本文件名，每个空格序列和非字母数字字符都用连字符替换。 |
| :title | The :title template variable will take the slug front matter variable value if any is present in the document; if none is defined then :title will be equivalent to :name, aka the slug generated from the filename. Preserves case from the source. |
| 译 | 如果文档中存在 :title模板变量将采用slug 前事项(front matter) 变量值；如果没有定义，那么 :title将等效于 :name，也就是由文件名生成的slug。从源头上保留案例。 |
| :output_ext | Extension of the output file. (Included by default and usually unnecessary.) |
| 译 | 输出文件的扩展名。（默认情况下包括在内，通常不必要。） |

**Pages(页面)**
```txt
For pages, you have to use front matter to override the global permalink, and if you set a permalink via front matter defaults in _config.yml, it will be ignored.
```
**对于页面，您必须使用front-matter来覆盖全局 permalink，如果您在_config.yml中通过front-matter默认值设置permalink，它将被忽略**

**Pages have the following placeholders available(页面有以下占位符可用):**
| variable | description |
| :-: | :- |
| :path | Path to the page relative to the site's source directory, excluding base filename of the page. |
| 译 | 相对于网站源目录的页面路径，不包括页面的基本文件名。 |
| :basename | The page's base filename |
| 译 | 页面的基本文件名 |
| :output_ext | Extension of the output file. (Included by default and usually unnecessary.) |
| 译 | 输出文件的扩展名。（默认情况下包括在内，通常不必要。） |

***

#### Themes {#content-themes}
[上](#content-permalinks) | [下](#content-pagination)
```txt
Jekyll has an extensive theme system that allows you to leverage community-maintained templates and styles to customize your site’s presentation. 

Jekyll themes specify plugins and package up assets, layouts, includes, and stylesheets in a way that can be overridden by your site’s content.
```
**Jekyll有一个广泛的主题系统，允许您利用社区维护的模板和样式来定制网站的演示。**
**Jekyll主题指定插件，并以一种可以被网站内容覆盖的方式打包资产、布局、包含和样式表。**

**Pick up a theme(选择一个主题)**
```txt
You can find and preview themes on different galleries:

GitHub.com #jekyll-theme repos

jamstackthemes.dev

jekyllthemes.org

jekyllthemes.io

jekyll-themes.com
```
您可以在不同的库中查找和预览主题：
`GitHub.com #jekyll-theme repos`
`jamstackthemes.dev`
`jekyllthemes.org`
`jekyllthemes.io`
`jekyll-themes.com`

```txt
See also: resources.
```
另请参阅：资源。

**Understanding gem-based themes(了解基于gem的主题)**
```txt
When you create a new Jekyll site (by running the jekyll new <PATH> command), 
Jekyll installs a site that uses a gem-based theme called Minima.

With gem-based themes, some of the site’s directories (such as the assets, _data, _layouts, _includes, and _sass directories) are stored in the theme’s gem, 
hidden from your immediate view. Yet all of the necessary directories will be read and processed during Jekyll’s build process.

In the case of Minima, you see only the following files in your Jekyll site directory:
```
当您创建一个新的Jekyll站点时（通过运行Jekyll new＜PATH＞命令），
Jekyll安装了一个网站，该网站使用了一个名为Minima的基于gem的主题。

对于基于gem的主题，站点的一些目录（例如assets、_data、_layouts、_includes和_sass目录）存储在主题的gem中，
隐藏在您的眼前。然而，所有必要的目录都将在Jekyll的构建过程中读取和处理。
在Minima的情况下，您在Jekyll站点目录中只能看到以下文件：
```
.
├── Gemfile
├── Gemfile.lock
├── _config.yml
├── _posts
│   └── 2016-12-04-welcome-to-jekyll.markdown
├── about.markdown
└── index.markdown
```
```txt
The Gemfile and Gemfile.lock files are used by Bundler to keep track of the required gems and gem versions you need to build your Jekyll site.

Gem-based themes make it easier for theme developers to make updates available to anyone who has the theme gem. When there’s an update, 
theme developers push the update to RubyGems.

If you have the theme gem, you can (if you desire) run bundle update to update all gems in your project. 
Or you can run bundle update <THEME>, replacing <THEME> with the theme name, such as minima, to just update the theme gem. 

Any new files or updates the theme developer has made (such as to stylesheets or includes) will be pulled into your project automatically.

The goal of gem-based themes is to allow you to get all the benefits of a robust, 
continually updated theme without having all the theme’s files getting in your way and over-complicating what might be your primary focus: creating content.
```
Bundler使用`Gemfile`和`Gemfile.lock`文件来跟踪构建Jekyll网站所需的gem和gem版本。
基于Gem的主题使主题开发人员更容易向任何拥有主题Gem的人提供更新。当有更新时，
主题开发人员将更新推送给RubyGems。

如果您有主题gem，您可以（如果您愿意）运行`bundle update`来更新项目中的所有gem。
或者，您可以运行`bundle update <THEME>`，将`<THEME>`替换为主题名称，例如minima，只更新主题gem。

主题开发人员所做的任何新文件或更新（如样式表或includes）都将自动拉入您的项目中。

基于gem的主题的目标是让您获得稳健的所有好处，
不断更新主题，而不会让所有主题的文件妨碍您，并使您的主要关注点：创建内容过于复杂。

**Overriding theme defaults(替代主题默认值)**
```txt
Jekyll themes set default data, layouts, includes, and stylesheets. 
However, you can override any of the theme defaults with your own site content.

To replace layouts or includes in your theme, make a copy in your _layouts or _includes directory of the specific file you wish to modify, 
or create the file from scratch giving it the same name as the file you wish to override.

For example, if your selected theme has a page layout, 
you can override the theme’s layout by creating your own page layout in the _layouts directory (that is, _layouts/page.html).

To locate a theme’s files on your computer:
```
Jekyll主题设置默认数据、布局、包含和样式表。
但是，您可以使用自己的网站内容覆盖任何主题默认值。

要替换主题中的布局或包含，请在_layouts或_includes目录中复制要修改的特定文件，
或者从头开始创建文件，使其与要覆盖的文件具有相同的名称。

例如，如果您选择的主题具有页面布局，
您可以通过在layouts目录（即layouts/page.html）中创建自己的页面布局来覆盖主题的布局。

要在计算机上查找主题的文件，请执行以下操作：
```
1.Run bundle info --path followed by the name of the theme’s gem, e.g., bundle info --path minima for Jekyll’s default theme.
This returns the location of the gem-based theme files. 
For example, the Minima theme’s files might be located in /usr/local/lib/ruby/gems/2.6.0/gems/minima-2.5.1 on macOS.

2.Open the theme’s directory in Finder or Explorer:
```
1.运行`bundle info --path` 后面跟着主题gem的名称，例如： Jekyll默认主题 `bundle info --path minima` 。
这将返回基于gem的主题文件的位置。
例如，Minima主题的文件可能位于macOS上的`/usr/local/lib/ruby/gems/2.6.0/gems/minimu-2.5.1`中。

2.在Finder或Explorer中打开主题的目录：
```shell
# On MacOS
open $(bundle info --path minima)

# On Windows
# First get the gem's installation path:
#
#   bundle info --path minima
#   => C:/Ruby26-x64/lib/ruby/gems/3.1.3/gems/minima-2.5.1
#
# then invoke explorer with above path, substituting `/` with `\`
explorer C:\Ruby26-x64\lib\ruby\gems\3.1.3\gems\minima-2.5.1

# On Linux
xdg-open $(bundle info --path minima)
```

```txt
A Finder or Explorer window opens showing the theme’s files and directories. The Minima theme gem contains these files:
```
将打开“查找器”或“资源管理器”窗口，显示主题的文件和目录。Minima主题gem包含以下文件：
```
.
├── LICENSE.txt
├── README.md
├── _includes
│   ├── disqus_comments.html
│   ├── footer.html
│   ├── google-analytics.html
│   ├── head.html
│   ├── header.html
│   ├── icon-github.html
│   ├── icon-github.svg
│   ├── icon-twitter.html
│   └── icon-twitter.svg
├── _layouts
│   ├── default.html
│   ├── home.html
│   ├── page.html
│   └── post.html
├── _sass
│   ├── minima
│   │   ├── _base.scss
│   │   ├── _layout.scss
│   │   └── _syntax-highlighting.scss
│   └── minima.scss
└── assets
    └── main.scss
```
```txt
With a clear understanding of the theme’s files, 
you can now override any theme file by creating a similarly named file in your Jekyll site directory.

Let’s say, for a second example, you want to override Minima’s footer. 
In your Jekyll site, create an _includes folder and add a file in it called footer.html. 
Jekyll will now use your site’s footer.html file instead of the footer.html file from the Minima theme gem.

To modify any stylesheet you must take the extra step of also copying the main sass file (_sass/minima.scss in the Minima theme) into the _sass directory in your site’s source.

Jekyll will look first to your site’s content before looking to the theme’s defaults for any requested file in the following folders:
```
通过对主题文件的清晰理解，
现在，您可以通过在Jekyll站点目录中创建一个类似名称的文件来覆盖任何主题文件。

举第二个例子，您想要覆盖Minima的页脚。
在Jekyll网站中，创建一个_includes文件夹，并在其中添加一个名为footer.html的文件。
Jekyll现在将使用您网站的footer.html文件，而不是Minima主题宝石中的footerhtml文件。

要修改任何样式表，您还必须采取额外的步骤，将主sass文件（minima主题中的_sass/minimal.scss）复制到站点源中的_sass目录中。

Jekyll将首先查看您的网站内容，然后在以下文件夹中查找任何请求文件的主题默认值：
```
/assets
/_data
/_layouts
/_includes
/_sass
```

```txt
Note that making copies of theme files will prevent you from receiving any theme updates on those files. 

An alternative, to continue getting theme updates on all stylesheets, is to use higher specificity CSS selectors in your own additional, 
originally named CSS files.
```
请注意，复制主题文件将阻止您接收这些文件的任何主题更新。
另一种选择是，继续在所有样式表上获得主题更新，在您自己的附加样式表中使用更高特定性的CSS选择器，
最初命名为CSS文件。

```txt
Refer to your selected theme’s documentation and source repository for more information on which files you can override.
```
**有关可以覆盖哪些文件的详细信息，请参阅所选主题的文档和源存储库。**

**Themes with _data directory4.3.0(具有 _data 目录的主题4.3.0)**
```txt
Starting with version 4.3.0, Jekyll also takes into account the _data directory of themes. 
This allows data to be distributed across themes.

A typical example is text used within design elements.

Imagine a theme provides the include file testimonials.html. 
This design element creates a new section on the page, and puts a h3 heading over the list of testimonials.

A theme developer will probably formulate the heading in English and put it directly into the HTML source code.

Consumers of the theme can copy the included file into their project and replace the heading there.

With the consideration of the _data directory there is another solution for this standard task.

Instead of entering the text directly into the design template, the designer adds a reference to a text catalog 
(e.g. site.data.i18n.testimonials.header) and create a file _data/i18n/testimonials.yml in the data directory of the theme.

In this file the header is put under the key header and Jekyll takes care of the rest.

For theme developers, this, at first sight, is of course a bigger effort than before.

However, for the consumers of the theme, the customization is greatly simplified.

Imagine the theme is used by a customer from Germany. 
In order for her to get the translated header for the testimonials design element in, 
she just has to create a data file in her project directory with the key site.data.i18n.testimonials.header, 
put the German translation or a header of her choice on top of it and the design element is already customized.

She no longer has to copy the included file into her project directory, customize it there and, what weighs heaviest, waiver all updates of the theme, 
simply because the theme developer offered her the possibility to make changes to text modules centrally via text files.
```
```
从4.3.0版本开始，Jekyll还考虑了主题的_data目录。

这允许数据跨主题分布。
一个典型的例子是在设计元素中使用的文本。

想象一下，一个主题提供了include文件recommendations.html。

这个设计元素在页面上创建了一个新的部分，并在推荐列表上加上h3标题。
主题开发人员可能会用英语制定标题，并将其直接放入HTML源代码中。

主题的使用者可以将包含的文件复制到他们的项目中，并替换其中的标题。
考虑到_data目录，这个标准任务还有另一个解决方案。

设计者没有将文本直接输入到设计模板中，而是添加了对文本目录的引用
（例如site.data.i18n.certifications.header），并在主题的数据目录中创建一个文件_data/i18n/certifications.yml。

在这个文件中，头被放在密钥头下面，其余的由Jekyll负责。

对于主题开发人员来说，乍一看，这当然比以前付出了更大的努力。
然而，对于主题的消费者来说，定制被大大简化了。

想象一下，这个主题是由一位来自德国的客户使用的。

为了让她在中获得推荐设计元素的翻译标题，
她只需要在她的项目目录中创建一个数据文件，其中包含密钥site.data.i18n.commerces.header，
把德语翻译或她选择的标题放在上面，设计元素就已经定制好了。

她不再需要将包含的文件复制到她的项目目录中，在那里进行自定义，最重要的是，放弃主题的所有更新，
这仅仅是因为主题开发人员为她提供了通过文本文件集中更改文本模块的可能性。
```

```txt
Data files provide a high degree of flexibility. 
The place where theme developers put text modules may differ from that of the consumer of the theme which can cause unforeseen troubles!
```
数据文件提供了高度的灵活性。
主题开发人员放置文本模块的位置可能与主题消费者的位置不同，这可能会导致无法预见的麻烦！

```txt
Related to above example the overriding key 

site.data.i18n.testimonials.header from the theme’s _data/i18n/testimonials.yml file 
on the consumer site can be located in three different locations:

  _data/i18n.yml with key testimonials.header
  _data/i18n/testimonials.yml with key header (which mirrors the layout of the given example)
  _data/i18n/testimonials/header.yml without any key, the headline can go straight into the file

Theme developers should have this ambiguity in mind, 
when supporting consumers that feel lost in setting their text modules for the design elements the theme provides.
```
与上述示例相关的替代key

`site.data.i18n.commerces.header`来自主题的`_data/i18n/commerces.yml`文件
在消费者网站上可以位于三个不同的位置：

`_data/i18n.yml` 带 `testimonials.header` key
`_data/i18n/testimonials.yml，`带有 key头（反映了给定示例的布局）
`_data/i18n/testimonials/header.yml`  没有任何key，标题可以直接进入文件

主题开发人员应该记住这种模糊性，
当支持那些在为主题提供的设计元素设置文本模块时感到迷失的消费者时。

```txt
When using the data feature ask yourself, is the key that you introduce something that changes the behaviour of the theme when present or not, 
or is it just data that’s displayed anyway. 

If it’s changing the behaviour of the theme it should go into site.config otherwise it’s fine to be provided via site.data.
```
**当使用数据功能时，问问自己，你引入的东西在出现或不出现时会改变主题的行为，这是关键吗，**
**还是仅仅是显示的数据。**

**如果它正在改变主题的行为，它应该进入site.config，否则可以通过site.data提供。**

```txt
Bundling data that modifies the behavior of a theme is considered an anti-pattern whose use is strongly discouraged. 
It is solely up to the author of the theme to ensure that every provided data can be easily overridden by the consumer of the theme if they desire to.
```
修改主题行为的绑定数据被认为是一种反模式，强烈反对使用这种模式。
这完全取决于主题的作者，以确保所提供的每一个数据都可以很容易地被主题的消费者覆盖，如果他们愿意的话。

**Converting gem-based themes to regular themes(将基于gem的主题转换为常规主题)**
```txt
Suppose you want to get rid of the gem-based theme and convert it to a regular theme, 
where all files are present in your Jekyll site directory, with nothing stored in the theme gem.

To do this, copy the files from the theme gem’s directory into your Jekyll site directory. 
(For example, copy them to /myblog if you created your Jekyll site at /myblog. See the previous section for details.)

Then you must tell Jekyll about the plugins that were referenced by the theme. 
You can find these plugins in the theme’s gemspec file as runtime dependencies. 
If you were converting the Minima theme, for example, you might see:
```
假设你想去掉基于gem的主题，并将其转换为常规主题，
所有文件都存在于Jekyll站点目录中，而主题gem中没有存储任何内容。

要做到这一点，请将主题gem目录中的文件复制到Jekyll站点目录中。
（例如，如果您在/myblog上创建了Jekyll网站，请将它们复制到/myblog。有关详细信息，请参阅上一节。）

然后你必须告诉Jekyll主题引用的插件。
您可以在主题的gemspec文件中找到这些插件作为运行时依赖项。
例如，如果您正在转换Minima主题，您可能会看到：

```liquid
spec.add_runtime_dependency "jekyll-feed", "~> 0.12"
spec.add_runtime_dependency "jekyll-seo-tag", "~> 2.6"
```
```txt
You should include these references in the Gemfile in one of two ways.

You could list them individually in both Gemfile and _config.yml.
```
您应该以两种方式之一将这些引用包含在Gemfile中。

您可以在Gemfile和_config.yml中分别列出它们。
```ruby
# ./Gemfile

gem "jekyll-feed", "~> 0.12"
gem "jekyll-seo-tag", "~> 2.6"
```
```yaml
# ./_config.yml

plugins:
  - jekyll-feed
  - jekyll-seo-tag
```

```txt
Or you could list them explicitly as Jekyll plugins in your Gemfile, and not update _config.yml, like this:
```
或者，您可以在Gemfile中将它们明确列为Jekyll插件，而不是更新_config.yml，如下所示：
```ruby
# ./Gemfile

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag", "~> 2.6"
end
```
```txt
Either way, don’t forget to bundle update.

If you’re publishing on GitHub Pages you should update only your _config.yml as GitHub Pages doesn’t load plugins via Bundler.

Finally, remove references to the theme gem in Gemfile and configuration. For example, to remove minima:

Open Gemfile and remove gem "minima", "~> 2.5".
Open _config.yml and remove theme: minima.

Now bundle update will no longer get updates for the theme gem.
```
无论哪种方式，都不要忘记 bundle update。

如果你在GitHub Pages上发布，你应该只更新你的_config.yml，因为GitHub Page不会通过Bundler加载插件。

最后，在Gemfile和configuration(配置)中删除对主题gem的引用。例如，要删除minima：
打开Gemfile并移除 gem "minima", "~> 2.5"。
打开_config.yml并删除主题：minima。

现在 bundle update 将不再获得主题gem的更新。

**Installing a gem-based theme(安装基于gem的主题)**
```txt
The jekyll new <PATH> command isn’t the only way to create a new Jekyll site with a gem-based theme. 
You can also find gem-based themes online and incorporate them into your Jekyll project.

For example, search for jekyll theme on RubyGems to find other gem-based themes. 
(Note that not all themes are using jekyll-theme as a convention in the theme name.)

To install a gem-based theme:
```
jekyll new ＜PATH＞ 命令并不是创建一个基于gem主题的新jekyll站点的唯一方法。
你也可以在网上找到基于gem的主题，并将它们融入你的Jekyll项目中。

例如，在RubyGems上搜索jekyll主题可以找到其他基于gem的主题。
（请注意，并非所有主题都使用jekyll-theme 作为主题名称中的约定。）

要安装基于gem的主题：
```txt
Add the theme gem to your site’s Gemfile:
```
1.将主题gem添加到您的网站的Gemfile中：
```ruby
# ./Gemfile

# This is an example, declare the theme gem you want to use here
gem "jekyll-theme-minimal"
```
```txt
Or if you’ve started with the jekyll new command, replace gem "minima", "~> 2.0" with the gem you want, e.g:
```
或者，如果您已经开始使用`jekyll new`命令，请将 gem "minima", "~> 2.0" 替换为您想要的gem，例如：
```ruby
# ./Gemfile

- gem "minima", "~> 2.5"
+ gem "jekyll-theme-minimal"
```
```txt
Install the theme:
```
2.安装主题：
```shell
$ bundle install
```
```txt
Add the following to your site’s _config.yml to activate the theme:
```
3.将以下内容添加到网站的_config.yml以激活主题：
```yaml
theme: jekyll-theme-minimal
```
```txt
Build your site:
```
4.构建你的站点
```shell
$ bundle exec jekyll serve
```

```txt
You can have multiple themes listed in your site’s Gemfile, but only one theme can be selected in your site’s _config.yml.
```
**您可以在站点的Gemfile中列出多个主题，但在站点的_config.yml中只能选择一个主题。**

```txt
If you’re publishing your Jekyll site on GitHub Pages, note that GitHub Pages supports only some gem-based themes. 

GitHub Pages also supports using any theme hosted on GitHub using the remote_theme configuration as if it were a gem-based theme.
```
如果你在GitHub Pages上发布你的Jekyll网站，请注意GitHub Page只支持一些基于gem的主题。

GitHub Pages还支持使用托管在GitHub上的任何主题，使用remote_theme配置，就好像它是一个基于gem的主题一样。

**Creating a gem-based theme(创建基于gem的主题)**
```txt
If you’re a Jekyll theme developer (rather than a consumer of themes), 
you can package up your theme in RubyGems and allow users to install it through Bundler.

If you’re unfamiliar with creating Ruby gems, don’t worry. Jekyll will help you scaffold a new theme with the new-theme command. 
Run jekyll new-theme with the theme name as an argument.

Here is an example:
```
如果你是Jekyll主题开发者（而不是主题消费者），
您可以将您的主题打包到RubyGems中，并允许用户通过Bundler进行安装。

如果您不熟悉创建Ruby宝石，请不要担心。Jekyll将帮助您使用新主题命令构建新主题。
以主题名称为参数运行jekyll new主题。

以下是一个示例：
```
jekyll new-theme jekyll-theme-awesome
    create /path/to/jekyll-theme-awesome/_layouts
    create /path/to/jekyll-theme-awesome/_includes
    create /path/to/jekyll-theme-awesome/_sass
    create /path/to/jekyll-theme-awesome/_layouts/page.html
    create /path/to/jekyll-theme-awesome/_layouts/post.html
    create /path/to/jekyll-theme-awesome/_layouts/default.html
    create /path/to/jekyll-theme-awesome/Gemfile
    create /path/to/jekyll-theme-awesome/jekyll-theme-awesome.gemspec
    create /path/to/jekyll-theme-awesome/README.md
    create /path/to/jekyll-theme-awesome/LICENSE.txt
    initialize /path/to/jekyll-theme-awesome/.git
    create /path/to/jekyll-theme-awesome/.gitignore
Your new Jekyll theme, jekyll-theme-awesome, is ready for you in /path/to/jekyll-theme-awesome!
For help getting started, read /path/to/jekyll-theme-awesome/README.md.
```

```txt
Add your template files in the corresponding folders. Then complete the .gemspec and the README files according to your needs.
```
将模板文件添加到相应的文件夹中。然后根据您的需要完成.gemspec和自述文件。

**Layouts and includes(布局和包括)**
```txt
Theme layouts and includes work just like they work in any Jekyll site. 
Place layouts in your theme’s /_layouts folder, and place includes in your themes /_includes folder.

For example, if your theme has a /_layouts/page.html file, and a page has layout: page in its front matter, 
Jekyll will first look to the site’s _layouts folder for the page layout, and if none exists, will use your theme’s page layout.
```
主题布局和包括工作，就像他们在任何杰基尔网站上工作一样。
将布局放置在主题的/_layouts文件夹中，并将includes放置在主题/_icludes文件夹中。

例如，如果你的主题有一个/_layouts/page.html文件，而一个页面的首页有layout:page，
Jekyll将首先在网站的_layouts文件夹中查找页面布局，如果不存在，则使用主题的页面布局。

**Assets(资产)**
```txt
Any file in /assets will be copied over to the user’s site upon build unless they have a file with the same relative path. 
You can ship any kind of asset here: SCSS, an image, a webfont, etc. 
These files behave like pages and static files in Jekyll:

If the file has front matter at the top, it will be rendered.
If the file does not have front matter, it will simply be copied over into the resulting site.
This allows theme creators to ship a default /assets/styles.scss file which their layouts can depend on as /assets/styles.css.

All files in /assets will be output into the compiled site in the /assets folder just as you’d expect from using Jekyll on your sites.
```
/assets中的任何文件都将在生成时复制到用户的站点，除非它们有一个具有相同相对路径的文件。
您可以在这里运送任何类型的资产：SCSS、图像、网络字体等。
这些文件的行为类似于Jekyll中的页面和静态文件：

如果文件的顶部有正面内容，则会对其进行渲染。
如果文件没有前端内容，则只需将其复制到生成的站点中即可。
这允许主题创建者发送默认的 /assets/styles.scss 文件，他们的布局可以依赖该文件作为 /assets/styles.css。

/assets 中的所有文件都将输出到/assets文件夹中已编译的站点中，正如您在站点上使用Jekyll所期望的那样。

**Stylesheets(样式表)**
```txt
Your theme’s stylesheets should be placed in your theme’s _sass folder, again, just as you would when authoring a Jekyll site.
```
您的主题的样式表应该放在主题的 _sass 文件夹中，就像您在创作Jekyll网站时一样。
```
_sass
└── jekyll-theme-awesome.scss
```
```txt
Your theme’s styles can be included in the user’s stylesheet using the @import directive.
```
可以使用@import指令将主题的样式包含在用户的样式表中。
```sass
@import "\{\{ site.theme \}\}";
```

**Theme-gem dependencies3.5.0(主题gem依赖项3.5.0)**
```txt
Jekyll will automatically require all whitelisted runtime_dependencies of your theme-gem even if they’re not explicitly included under the plugins array in the site’s config file. 
(Note: whitelisting is only required when building or serving with the --safe option.)

With this, the end-user need not keep track of the plugins required to be included in their config file for their theme-gem to work as intended.
```
Jekyll将自动要求主题gem的所有白名单运行时依赖项，即使它们没有明确包含在网站配置文件中的插件数组中。
（注意：只有在构建或使用--safe选项时才需要白名单。）

这样，最终用户就不需要跟踪需要包含在配置文件中的插件，以便主题宝石按预期工作。

**Pre-configuring Theme-gems4.0(预配置主题gems 4.0)**
```txt
Jekyll will read-in a _config.yml at the root of the theme-gem and merge its data into the site’s existing configuration data.

But unlike other entities loaded from within the theme, loading the config file comes with a few restrictions, as summarized below:

Jekyll’s default settings cannot be overridden by a theme-config. That ball is still in the user’s court.
The theme-config-file cannot be a symlink, irrespective of safe mode and whether the file pointed to by the symlink is a legitimate file within the theme-gem.

The theme-config should be a set of key-value pairs. 
An empty config file, a config file that simply lists items under a key, or a config file with just a simple string of text will simply be ignored silently. 

Users will not get a warning or any log output regarding this discrepancy.
Any settings defined by the theme-config can be overridden by the user.

While this feature is to enable easier adoption of a theme, 
the restrictions ensure that a theme-config cannot affect the build in a concerning manner. 

Any plugins required by the theme will have to be listed manually by the user or provided by the theme’s gemspec file.

This feature will let the theme-gem to work with theme-specific config variables out-of-the-box.
```
Jekyll将读取主题gem根目录下的_config.yml，并将其数据合并到站点现有的配置数据中。

但与从主题中加载的其他实体不同，加载配置文件有一些限制，总结如下：
Jekyll的默认设置不能被主题配置覆盖。那个球还在使用者的球场上。

主题配置文件不能是符号链接，无论安全模式以及符号链接指向的文件是否是主题gem中的合法文件。
主题配置应该是一组键值对。

一个空的配置文件、一个只列出键下项目的配置文件，或者一个只有一个简单文本字符串的配置文件都将被忽略。
用户将不会收到关于此差异的警告或任何日志输出。
用户可以覆盖由主题配置定义的任何设置。

虽然该特征是为了能够更容易地采用主题，
这些限制确保了主题配置不会以相关的方式影响构建。

主题所需的任何插件都必须由用户手动列出或由主题的gemspec文件提供。
此功能将使主题gem能够开箱即用地处理特定于主题的配置变量。

**Documenting your theme(记录您的主题)**
```txt
Your theme should include a /README.md file, which explains how site authors can install and use your theme. 

What layouts are included? What includes? Do they need to add anything special to their site’s configuration file?
```
您的主题应该包括一个/README.md文件，该文件解释了网站作者如何安装和使用您的主题。

包括哪些布局？包括哪些内容？他们是否需要在站点的配置文件中添加一些特殊内容？

**Adding a screenshot(添加屏幕截图)**
```txt
Themes are visual. 
Show users what your theme looks like by including a screenshot as /screenshot.png within your theme’s repository where it can be retrieved programmatically. 

You can also include this screenshot within your theme’s documentation.
```
主题是可视化的。
通过在主题的存储库中以/screenshot.png的形式包含屏幕截图，向用户显示您的主题是什么样子的，在存储库中可以通过编程方式检索。

您也可以将此屏幕截图包含在主题文档中。

**Previewing your theme(预览您的主题)**
```txt
To preview your theme as you’re authoring it, it may be helpful to add dummy content in, for example, /index.html and /page.html files. 

This will allow you to use the jekyll build and jekyll serve commands to preview your theme, just as you’d preview a Jekyll site.
```
要在创作主题时预览主题，在例如/index.html和/page.html文件中添加伪内容可能会有所帮助。

这将允许您使用jekyll build和jekyll serve命令预览主题，就像预览jekyll网站一样。

```txt
If you do preview your theme locally, 
be sure to add /_site to your theme’s .gitignore file to prevent the compiled site from also being included when you distribute your theme.
```
如果你在本地预览你的主题，
请确保将/site添加到主题的.gitignore文件中，以防止在分发主题时也包含编译后的网站。

**Publishing your theme(发布您的主题)**
```txt
Themes are published via RubyGems.org. You will need a RubyGems account, which you can create for free.

First, you need to have it in a git repository:
```
主题通过RubyGems.org发布。您需要一个RubyGems帐户，可以免费创建。

1.首先，您需要将其保存在git存储库中：
```bash
$ git init # Only the first time
$ git add -A
$ git commit -m "Init commit"
```
```txt
Next, package your theme, 
by running the following command, replacing jekyll-theme-awesome with the name of your theme:
```
2.接下来，打包你的主题，
通过运行以下命令，将 jekyll-theme-awesome 替换为您的主题名称：
```bash
gem build jekyll-theme-awesome.gemspec
```
```txt
Finally, push your packaged theme up to the RubyGems service, 
by running the following command, again replacing jekyll-theme-awesome with the name of your theme:
```
3.最后，将打包后的主题推送到RubyGems服务，
通过运行以下命令，再次将jekyll主题真棒替换为您的主题名称：
```bash
gem push jekyll-theme-awesome-*.gem
```
```txt
To release a new version of your theme, update the version number in the gemspec file, 
( jekyll-theme-awesome.gemspec in this example ), and then repeat Steps 1 - 3 above. 

We recommend that you follow Semantic Versioning while bumping your theme-version.
```
要发布主题的新版本，请更新gemspec文件中的版本号，
（本例中为jekyll-theme-awesome.gemspec），然后重复上述步骤1-3。
我们建议您在调整主题版本时遵循语义版本控制。

***

#### Pagination {#content-pagination}
[上](#content-themes) | [返回目录](#content) 
```txt
With many websites — especially blogs — it’s very common to break the main listing of posts up into smaller lists and display them over multiple pages. 

Jekyll offers a pagination plugin, so you can automatically generate the appropriate files and folders you need for paginated listings.

For Jekyll 3, include the jekyll-paginate plugin in your Gemfile and in your _config.yml under plugins. For Jekyll 2, this is standard.
```
**对于许多网站，尤其是博客，将主要的帖子列表分解为较小的列表并在多个页面上显示是非常常见的。**
**Jekyll提供了一个分页插件，因此您可以自动生成分页列表所需的适当文件和文件夹。**
**对于Jekyll 3，在Gemfile和插件下的_config.yml中包含Jekyll分页插件。对于Jekyll 2来说，这是标准配置。**

```txt
Pagination only works within HTML files

Pagination does not work from within Markdown files from your Jekyll site. 

Pagination works when called from within the HTML file, named index.html, 
which optionally may reside in and produce pagination from within a subdirectory, via the paginate_path configuration value.
```
分页仅适用于HTML文件
从Jekyll网站的Markdown文件中分页不起作用。

当从名为index.HTML的HTML文件中调用分页时，
其可选地可以驻留在子目录中并通过paginate_path配置值从子目录中产生分页。

**Enable pagination(启用分页)**
```txt
To enable pagination for posts on your blog, 
add a line to the _config.yml file that specifies how many items should be displayed per page:
```
要为博客上的帖子启用分页，
在_config.yml文件中添加一行，指定每页应显示的项目数：
```yaml
paginate: 5
```
```txt
The number should be the maximum number of Posts you’d like to be displayed per-page in the generated site.

You may also specify the destination of the pagination pages:
```
该数字应该是您希望在生成的网站中每页显示的帖子的最大数量。
您也可以指定分页页面的目的地：
```yaml
paginate_path: "/blog/page:num/"
```
```txt
This will read in blog/index.html, send it each pagination page in Liquid as paginator and write the output to blog/page:num/, 
where :num is the pagination page number, starting with 2.

If a site has 12 posts and specifies paginate: 5, Jekyll will write blog/index.html with the first 5 posts, 
blog/page2/index.html with the next 5 posts and blog/page3/index.html with the last 2 posts into the destination directory.
```
这将在blog/index.html中读取，将其作为分页器发送到Liquid中的每个分页页面，并将输出写入blog/page:num/，
其中：num是分页页码，从2开始。

如果一个网站有12个帖子，并指定paginat:5，Jekyll将用前5个帖子编写blog/index.html，
将包含接下来5篇文章的blog/page2/index.html和包含最后2篇文章的blog/page3/index.html放入目标目录。

```txt
Don't set a permalink

Setting a permalink in the front matter of your blog page will cause pagination to break. Just omit the permalink.
```
不要设置永久链接
在博客页面的首页设置永久链接会导致分页中断。只需省略永久链接即可。

```txt
Pagination for categories, tags and collections

The more recent jekyll-paginate-v2 plugin supports more features. See the pagination examples in the repository. 
This plugin is not supported by GitHub Pages.
```
类别、标签和集合的分页
最近的jekyll-paginate-v2插件支持更多功能。请参阅存储库中的分页示例。
GitHub Pages不支持此插件。

**Liquid Attributes Available**
```txt
The pagination plugin exposes the paginator liquid object with the following attributes:
```
分页插件使用以下属性公开分页器Liquid对象：

| variable | description |
| :-: | :- |
| paginator.page | The number of the current page |
| 译 | 当前页面的编号 |
| paginator.per_page | Number of posts per page |
| 译 | 每页帖子数 |
| paginator.posts | Posts available for the current page |
| 译 | 当前页面可用的帖子 |
| paginator.total_posts | Total number of posts |
| 译 | 帖子总数 |
| paginator.total_pages | Total number of pages |
| 译 | 页面总数 |
| paginator.previous_page | The number of the previous page, or nil if no previous page exists |
| 译 | 前一页的编号，如果不存在前一页，则为零 |
| paginator.previous_page_path | The path to the previous page, or nil if no previous page exists |
| 译 | 前一页的路径，如果不存在前一页，则为零 |
| paginator.next_page | The number of the next page, or nil if no subsequent page exists |
| 译 | 下一页的编号，如果没有下一页，则为零 |
| paginator.next_page_path | The path to the next page, or nil if no subsequent page exists |
| 译 | 下一页的路径，如果不存在后续页，则为零 |

```txt
Pagination does not support tags or categories
Pagination pages through every post in the posts variable unless a post has hidden: true in its front matter. 
It does not currently allow paging over groups of posts linked by a common tag or category. 
It cannot include any collection of documents because it is restricted to posts.
```
分页不支持标签或类别
对posts变量中的每一篇文章进行分页，除非一篇文章在标题中隐藏了：在 front matter 上是 true。
它目前不允许在由公共标签或类别链接的帖子组上进行分页。
它不能包括任何文档集合，因为它仅限于发布。

**Render the paginated Posts(渲染分页的帖子)**
```txt
The next thing you need to do is to actually display your posts in a list using the paginator variable that will now be available to you. 
You’ll probably want to do this in one of the main pages of your site. 
Here’s one example of a simple way of rendering paginated Posts in a HTML file:
```
您需要做的下一件事是使用现在可以使用的paginator变量在列表中实际显示您的帖子。
你可能想在你网站的一个主页上做这件事。
下面是一个在HTML文件中呈现分页帖子的简单方法示例：
```liquid
\-\-\-
layout: default
title: My Blog
\-\-\-

<!-- This loops through the paginated posts -->
\{\% for post in paginator.posts \%\}
  <h1><a href="\{\{ post.url \}\}">\{\{ post.title \}\}</a></h1>
  <p class="author">
    <span class="date">\{\{ post.date \}\}</span>
  </p>
  <div class="content">
    \{\{ post.content \}\}
  </div>
\{\% endfor \%\}

<!-- Pagination links -->
<div class="pagination">
  \{\% if paginator.previous_page \%\}
    <a href="\{\{ paginator.previous_page_path \}\}" class="previous">
      Previous
    </a>
  \{\% else \%\}
    <span class="previous">Previous</span>
  \{\% endif \%\}
  <span class="page_number ">
    Page: \{\{ paginator.page \}\} of \{\{ paginator.total_pages \}\}
  </span>
  \{\% if paginator.next_page \%\}
    <a href="\{\{ paginator.next_page_path \}\}" class="next">Next</a>
  \{\% else \%\}
    <span class="next ">Next</span>
  \{\% endif \%\}
</div>
```

```txt
Beware the page one edge-case
Jekyll does not generate a ‘page1’ folder, so the above code will not work when a /page1 link is produced. 
See below for a way to handle this if it’s a problem for you.
```
**注意页面一侧的情况Jekyll不会生成“page1”文件夹，因此当生成/page1链接时，上述代码将不起作用。**
**如果这对你来说是个问题，请参阅下面的处理方法。**

```txt
The following HTML snippet should handle page one, and render a list of each page with links to all but the current page.
```

下面的HTML片段应该处理第一页，并呈现每个页面的列表，其中包含除当前页面之外的所有页面的链接。

```html
\{\% if paginator.total_pages > 1 \%\}
<div class="pagination">
  \{\% if paginator.previous_page \%\}
    <a href="\{\{ paginator.previous_page_path | relative_url \}\}">&laquo; Prev</a>
  \{\% else \%\}
    <span>&laquo; Prev</span>
  \{\% endif \%\}

  \{\% for page in (1..paginator.total_pages) \%\}
    \{\% if page == paginator.page \%\}
      <em>\{\{ page \}\}</em>
    \{\% elsif page == 1 \%\}
      <a href="\{\{ '/' | relative_url \}\}">\{\{ page \}\}</a>
    \{\% else \%\}
      <a href="\{\{ site.paginate_path | relative_url | replace: ':num', page \}\}">\{\{ page \}\}</a>
    \{\% endif \%\}
  \{\% endfor \%\}

  \{\% if paginator.next_page \%\}
    <a href="\{\{ paginator.next_page_path | relative_url \}\}">Next &raquo;</a>
  \{\% else \%\}
    <span>Next &raquo;</span>
  \{\% endif \%\}
</div>
\{\% endif \%\}

```

***
到底了...
***