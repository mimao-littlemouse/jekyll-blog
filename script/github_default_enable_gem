#!/bin/sh

cat << EOF
github中默认启动的插件及其使用方法和配置：

其中，插件在jekyll中的默认配置：
在 Gemfile中添加：gem "插件名称"
_config中，在plugins中添加 插件
即：
plugins:
    - 插件名称

当安装完依赖之后，可以将Gemfile中的插件名称 移动至 自定义的.gemspec中（这种方式，可参考 该项目的中mimao.gemspec的方式）
对于特定的配置方式，将会列出来，没有列出来的便是以上的配置方式


jekyll-coffeescript 插件
可参见：https://github.com/jekyll/jekyll-coffeescript
关于Jekyll的CoffeeScript转换器
注意：jekyll coffeescript 需要Ruby 2.4或更高版本。
此外，对execjs的依赖意味着您的项目还必须有一个有效的JavaScript运行时
使用方式：
在Jekyll站点中，创建以以下行开头的CoffeeScript文件：
---
---
你需要这三个破折号才能让jekyll认出它是“可转换的”。
否则 它们不会包含 并传递给CoffeeScript编译器的内容中
coffeescript 可参见：
http://coffee-script.org/


jekyll-default-layout 插件
可参见：https://github.com/benbalter/jekyll-default-layout
静默设置Jekyll页面和帖子的默认布局
如果没有为Markdown帖子或页面指定布局，插件会自动设置"home", "post", "page", or "default" 布局（如果存在）。
/index.md the home layout, the page layout, or the default layout（如果存在）按顺序
一个页面的布局 会自动设置 the page layout or the default layout（如果有的话）按顺序
一个帖子的布局 会自动设置 the page layout or the default layout（如果有的话）按顺序
对于特定的帖子或页面，在 front matter中添加 layout: null


jekyll-gist 插件
可参见：https://github.com/jekyll/jekyll-gist
作用：用Liquid标签，以便在Jekyll网站中显示GitHub Gists。
对于 gist的介绍可参见：https://docs.github.com/zh/get-started/writing-on-github/editing-and-sharing-content-with-gists/creating-gists
关于 gist:
Gist 提供了一种与他人共享代码片段的简单方法。 
每个 gist 都是一个 Git 仓库，意即可以复刻和克隆。
如果您在创建 Gist 时登录了 GitHub，则该 Gist 将与您的帐户相关联， 
当您导航到 gist 主页 时，您会在 Gist 列表中看到它。
Gist 可以是公开或机密。 公开 gist 在 发现 中显示，其中人员可以在新 gist 创建时查看这些 gist。 
它们也可供搜索，因此，如果您希望其他人查找和查看您的工作，便可使用公共 gists。
使用方法：
在Jekyll页面、帖子和collections中使用以下标签：
{% gist gist_id [文件名.扩展名] %}
例如：
这将生成正确的URL，并显示整个Gist
{% gist c08ee0f2726fd0e3909d %}
输出：<script src="https://gist.github.com/parkr/c08ee0f2726fd0e3909d.js"></script>来加载内容
这将生成正确的URL，您可以选择在gist_id之后指定一个文件名：（只显示指定的文件，而不是整个Gist）
{% gist c08ee0f2726fd0e3909d test.md %}
注意：
专业提示：如果您提供具有Gist作用域的个人访问令牌，作为环境变量JEKYLL_GITHUB_TOKEN，JEKYLL Gist将使用Gist API来加快站点生成。
配置选项：
gist:
  # 此信息用于为不支持JavaScript的搜索引擎和浏览器传播noscript标记
  # 如果 向提升网页的加载速度，将noscript设置为 false 即可
  # 默认：true  开启
  noscript: false



jekyll-github-metadata 插件
可参见：https://github.com/jekyll/github-metadata
作用：
使用存储库元数据传播site.github命名空间将site.title设置为存储库名称（如果未设置）
将site.description设置为存储池口号（如果未设定）
将site.url设置为github Pages域（cname或用户域）（如果未设置）
将site.baseurl设置为项目页面的项目名称（如果没有设置）
该配置如下，如有不懂之处请通过参见地址 进行深入
1.首先，没有个人访问令牌 是不能对 该插件进行安装的（去为这个目的 去创建一个（命名时 最好能知道用于什么，便于以后销毁令牌时，方便知道什么地方用过））
(1)选择作用域public_repository，并添加说明。
(2)确认并保存设置。复制您在页面上看到的令牌。
地址：https://github.com/settings/tokens/new
拿到令牌之后， 可以这样： JEKYLL_GITHUB_TOKEN=复制的令牌 [bundle exec] jekyll serve [...] 运行命令（即：在命令的前部分添加令牌）
2.配置 NWO(Name with Owener)仓库名称 和 所有者（即：所有者/仓库）
repository: username/repo-name
其中 site.github.*中所有字段，都可被环境变量 所覆盖，对于这些环境变量，请参考：https://github.com/jekyll/github-metadata/blob/main/docs/configuration.md 末尾处
3.使用方法：
# 列出所有者的所有公共仓库
{% for repository in site.github.public_repositories %}
  * [{{ repository.name }}]({{ repository.html_url }})
{% endfor %}
其site.github中的所有元数据，可参考：https://github.com/jekyll/github-metadata/blob/main/docs/site.github.md 
4.该插件还提供了一个标记，用于生成链接或路径，可链接到 "编辑GitHub上的当前页面" 的页面。
例如：
{% raw %}{% github_edit_link "Improve this page" %}{% endraw %}
会生成一下链接：
<a href="https://github.com/benbalter/jekyll-edit-link/edit/master/README.md">Improve this page</a>
也可生成路径，例如：
<a href="{% raw %}{% github_edit_link %}{% endraw %}">Improve this page</a>
可生成（注意：标记中间不要添加任何文本和内容，如此添加即可）
<a href="https://github.com/benbalter/jekyll-edit-link/edit/master/README.md">Improve this page</a>


jekyll-optional-front-matter 插件
可参见：https://github.com/benbalter/jekyll-optional-front-matter
开箱即用，Jekyll要求任何markdown文件都有YAML前端内容（由两组三点划线分隔的键/值对），以便进行处理并转换为HTML。
虽然这种行为可能对大型、复杂的网站有帮助，但有时只需添加一个普通的markdown文件并在不大张旗鼓的情况下进行渲染会更容易。
这个插件就是这么做的。网站源代码中的任何Markdown文件都将被视为一个页面，并呈现为HTML，即使它没有YAML前端内容。

该插件可以把不带---yaml---内容的front matter的markdown文件 标记为需要转化的markdown
但如果您想要标记文件，如README、CONTRIBUTING文件、CODE_OF_CONDUCT或LICENSE，等等，你需要在 _config中的include中进行包含
除此之外，默认情况下，原件也会包含在输出中（即：会出现.md .html两个同名文件）这是就需要如下配置：
optional_front_matter:
  # 是否 启用（默认：启用）
  enabled: true
  # 是否移除原件（默认：false 不移除）
  remove_originals: false


jekyll-paginate 插件
可参见：https://github.com/jekyll/jekyll-paginate

Jekyll的默认分页生成器。
作用：
生成分页
分页仅适用于HTML文件分页不适用于Jekyll网站的Markdown文件。
当从名为index.HTML的HTML文件中调用时，分页可以工作，
该文件可以通过paginate_path配置值驻留在子目录中并从子目录中生成分页。

要为博客上的帖子启用分页，请在_config.yml文件中添加一行，指定每页应显示的项目数：
paginate: 5
该数字应该是您希望在生成的网站中每页显示的帖子的最大数量
您也可以指定分页页面的目的地：
paginate_path: "/blog/page:num/"
这将在blog/index.html中读取，将其作为分页器发送到Liquid中的每个分页页面，并将输出写入blog/page:num/，
其中：num是分页页码，从2开始
如果一个网站有12个帖子，并指定paginat:5，
Jekyll将把前5个帖子写在blog/index.html，
下5个帖子和最后2个帖子分别写在博客/page2/index.html和博客/page3/index.html。
注意：不要设置永久链接在博客页面的首页设置永久链接会导致分页中断。只需省略永久链接即可。
注意：Jekyll不会生成“page1”文件夹，因此当生成/page1链接时，无法跳转到/page1链接的页面，所以，需要确保，总页数为1时，不显示分页器。
{% if paginator.total_pages > 1 %}
分页内容
{% endif %}
分页插件使用以下属性公开分页器liquid对象：
paginator.page
当前页面的编号（即：页码）
paginator.per_page
每页帖子数
paginator.posts
当前页面可用的帖子
paginator.total_posts
帖子总数
paginator.total_pages
总页数
paginator.previous_page
前一页的编号，如果不存在前一页，则为零
paginator.previous_page_path
前一页的路径，如果不存在前一页，则为nil
paginator.next_page
下一页的编号，如果没有下一页，则为零
paginator.next_page_path
下一页的路径，如果不存在后续页，则为nil

例如：
{% if paginator.total_pages > 1 %}
<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path }}" class="previous">
      Previous
    </a>
  {% else %}
    <span class="previous">Previous</span>
  {% endif %}
  <span class="page_number ">
    Page: {{ paginator.page }} of {{ paginator.total_pages }}
  </span>
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path }}" class="next">Next</a>
  {% else %}
    <span class="next ">Next</span>
  {% endif %}
</div>
{% endif %}

使用方法：
在 Gemfile中添加：gem "jekyll-paginate"
_config中，在plugins中添加 jekyll-paginate
即：
plugins:
    - jekyll-paginate

配置选项：
无需配置，jekyll会自动引用
但，可以设置 paginate: num  分页显示的最大数量
也可设置分页页面的目的地：paginate_path: "/blog/page:num/"
其中： blog page可自定义，该 页面器可以在任何 html页面使用，指示链接地址指示的地址 是固定的


jekyll-readme-index 插件
可参见：https://github.com/benbalter/jekyll-readme-index

一个Jekyll插件，用于将项目的自述文件作为网站的索引。
作用：
假设您有一个带有README.md文件的GitHub存储库，您想将其用作GitHub Pages网站的索引（主页）。
你可以将文件重命名为index.md，但它不会在GitHub.com上呈现。
你可以在README中添加带有permalink: / 的YAML front matter，但为什么要强迫人类做Jekyll可以自动化的事情呢？
如果你有一个自述文件，而你的网站没有索引文件，这个插件会指示Jekyll使用自述作为网站的索引。就是这样。不多也不少。
使用方法：
在 Gemfile中添加：gem "jekyll-readme-index"
_config中，在plugins中添加 jekyll-readme-index
即：
plugins:
    - jekyll-readme-index

配置选项：
readme_index:
  enabled: true
  remove_originals: false
  with_frontmatter: false
默认情况下，原始README标记文件将作为静态页面包含在输出中。
要从输出中删除它们，请将remove_originals键设置为true。



jekyll-titles-from-headings 插件
可参见：https://github.com/benbalter/jekyll-titles-from-headings

一个Jekyll插件，用于在未指定任何内容时从第一个Markdown标题(h1 h2 h3)中提取页面标题。
使用方法：
在 Gemfile中添加：gem "jekyll-titles-from-headings"
_config中，在plugins中添加 jekyll-titles-from-headings
即：
plugins:
    - jekyll-titles-from-headings

配置选项：
titles_from_headings:
  enabled: true
  strip_title: false
  collections: false

如果主题基于page.title渲染标题，则可以通过设置strip_title来从内容中删除标题，以防止渲染两次
为了将这种行为限制在特定的布局或路径上，您可以使用前端默认值，例如：
defaults:
  - scope:
      path: some-path
      layout: some_layout
    values:
      strip_title: true
如果要为集合项启用此插件，请将集合选项设置为true
由于集合项（包括帖子）已经有了从其文件名推断出的标题
因此此选项会更改此插件的行为以覆盖推断出的名称
推断出的标题仅在文档没有以标题开头的情况下用作后备



jekyll-relative-links 插件
可参见：https://github.com/benbalter/jekyll-relative-links

用于将Markdown文件的相对链接转换为其渲染的等效链接
比如：
假设您在Markdown文件中有这样的链接：
[foo]（bar.md）
虽然这会在GitHub.com上显示为有效链接，但在Pages上不是有效链接。而，这个插件将会把链接转换为：
[foo]（bar.html）
它甚至可以处理带有自定义永久链接的页面
如果在bar.md文件中有以下内容：
---
permalink: /bar/
---
# bar

之后，[foo](bar.md)，将不是转化为：[foo]（bar.html），而是：[foo](/bar/)
这样，GitHub Pages呈现的Markdown文件的行为 就可以与GitHub.com上呈现的Markdown文件类似
使用方法：
在 Gemfile中添加：gem "jekyll-relative-links"
_config中，在plugins中添加 jekyll-relative-links
即：
plugins:
    - jekyll-relative-links

配置项：（在 _config.yml中配置）（默认： 如下所示）
relative_links:
  enabled: true
  collections: false

可通过 exclude 排除文件或文件夹，比如：
relative_links:
  exclude:
    - directory
    - file.md

将collections选项设置为true 将启用集合项（包括帖子）的相对链接。
假设这种结构是这样的：
├── _my_collection
│   ├── some_doc.md
│   └── some_subdir
│       └── another_doc.md
├── _config.yml
└── index.md
将可以有一下的作用：
File	Link
index.md	[Some Doc](_my_collection/some_doc.md)
index.md	[Another Doc](_my_collection/some_subdir/another_doc.md)
_my_collection/some_doc.md	[Index](../index.md)
_my_collection/some_doc.md	[Another Doc](some_subdir/another_doc.md)
_my_collection/some_subdir/another_doc.md	[Index](../../index.md)
_my_collection/some_subdir/another_doc.md	[Some Doc](../some_doc.md)

这就是 生成相对链接的插件，如需禁用该插件，只需配置：
relative_links:
  enabled: false

EOF
