---
order: 4
text: 进一步深入
---

可以为 前事项(front matter)设置默认值

defaults:
  -
    scope:
      path: "" # an empty string here means all files in the project
      type: "posts" # previously `post` in Jekyll 2.2.
    values:
      layout: "default"


jekyll中的生产环境和开发环境 判断
生产环境
{% if jekyll.environment == "production" %}
   {% include disqus.html %}
{% endif %}
生产环境
{% if jekyll.environment == "production" %}
   {% include disqus.html %}
{% endif %}

默认 运行环境为：development （开发环境）
JEKYLL_ENV=development 是默认值

如果需要 生产环境中需要显示的内容显示，需要在运行构建命令上指定，例如：
JEKYLL_ENV=production jekyll build 
该命令 才会让上述的 生产环境变量 判断中的内容 才会执行

这样做的目的：
通过指定环境值，可以使某些内容仅在特定环境中可用。

除此之外，还可以使用build命令，来指定 特定环境中使用的 _config.yaml文件：
在build命令中，添加 --config _config.yml 或--config _config_development.yml 则可以实现



Markdown 选项（介绍 Kramdown ）
Jekyll支持的各种Markdown渲染器有时会提供额外的选项。

Kramdown是Jekyll的默认Markdown渲染器，通常在没有额外配置的情况下运行良好。但是，它确实支持许多配置选项。

Kramdown 处理器 介绍：
默认情况下，Jekyll为Kramdown使用GitHub Flavored Markdown（GFM）处理器。（指定输入：GFM很好，但是多余的。）
GFM支持几个额外的Kramdown选项，由Kramdown解析器GFM记录。
这些选项可以直接在Kramdown Jekyll配置中使用，如下所示：
```yaml
kramdown:
  gfm_quirks: [paragraph_end]

这样的配置是多余的，因为 jekyll为其提供了默认的 GFM处理器

如果 不想使用 jekyll默认提供的处理器，可以这样做：
kramdown:
  input: Kramdown

Kramdown文档中提供了Kramdowns解析器的文档。如果您使用的是Kramdown或GFM以外的Kramdown解析器，则需要为其添加gem。（也就是 安装gem依赖）
```
如果 需要使用 kramdown 中的语法高亮，则 必须 安装 其gem依赖，命令如下：
```ruby
$ bundle add kramdown-syntax-coderay
```
然后，您可以在syntax_highlighter配置项中指定CodeRay，例如：
```yaml
kramdown:
  syntax_highlighter: coderay
```
除了可以使用之外，还有其自己的配置选项，，可以作为syntax_highlighter_opts 配置项的值进行传递，如下所示：
(CodeRay支持几个自己的配置选项，这些选项记录在kramdown语法CodeRay文档中 [`去文档看看`](https://github.com/kramdown/syntax-coderay))
```yaml
kramdown:
  syntax_highlighter: coderay
  syntax_highlighter_opts:
    line_numbers: table
    bold_every: 5
```


Liquid 配置

```yaml
liquid:
  error_mode: strict
  strict_variables: true
  strict_filters: true
```
如上所述进行配置将停止生成/服务，并调用有问题的错误并停止。当您希望通过停止构建或服务过程来发现与液体相关的问题，
并允许您处理任何问题时，这是很有帮助的。

帖子 摘录
在前事项中添加：excerpt_separator: <!--more--> 可以指定 摘录部分
默认：分隔是<!--more-->，所以可以通过 excerpt_separator 指定

可以通过：post.excerpt 来使用

为静态文件添加front matter变量：
```yaml
defaults:
  - scope:
      path: "assets/img"
    values:
      image: true
```
```liquid
{% assign image_files = site.static_files | where: "image", true %}
{% for myimage in image_files %}
  {{ myimage.path }}
{% endfor %}
```
当你建立你的网站时，输出会列出每个符合这个front matter 条件的文件的路径。

