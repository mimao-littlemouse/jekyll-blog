---
order: 3
text: 深入
---

# jekyll深入了解 

## [`返回目录`](./navbar.md)

### `深入了解jekyll` {#content}
- [**`Guides`**](#content "指南")指南：
  [`Plugins`](#content-plugins "插件")插件、[`Blog Migrations`](#content-blog_migrations "博客迁移")博客迁移、[`Upgrading`](#content-upgrading "升级")升级、[`Deployment`](#content-deployment "部署")部署

  ***

- [**`Build`**](#content "构建")构建：
  [`Command Line Usage`](#content-command_line_usage "命令行用法")命令行用法、[`Configuration`](#content-configuration "配置")配置、[`Rendering Process`](#content-rendering_process "渲染过程")渲染过程
  ***

### **`Guides 指南`**  {#content-guides}
[`返回大纲`](#content) | [`Build 构建`](#content-build)

#### Plugins 插件 {#content-plugins}
[目录](#content) | [下](#content-blog_migrations)

```txt
Jekyll has a plugin system with hooks that allow you to create custom generated content specific to your site. 
You can run custom code for your site without having to modify the Jekyll source itself.
```
Jekyll有一个带有钩子的插件系统，允许您创建特定于您的网站的自定义生成内容。
您可以为您的网站运行自定义代码，而无需修改Jekyll源代码本身。


```txt
You can add specific plugins to the whitelist key in _config.yml to allow them to run in safe mode.
```
**您可以在_config.yml中的白名单密钥中添加特定的插件，以允许它们在安全模式下运行。**

```txt
Installation - How to install plugins
Your first plugin - How to write plugins
Generators - Create additional content on your site
Converters - Change a markup language into another format
Commands - Extend the jekyll executable with subcommands
Tags - Create custom Liquid tags
Filters - Create custom Liquid filters
Hooks - Fine-grained control to extend the build process
```
Installation - 如何安装插件
Your first plugin - 如何编写插件
Generators - 在您的网站上创建其他内容
Converters - 将标记语言更改为其他格式
Commands - 使用子命令扩展jekyll可执行文件
Tags - 创建自定义Liquid标记
Filters - 创建自定义Liquid过滤器
Hooks - 细粒度控制以扩展构建过程

***

#### Blog Migrations 博客迁移 {#content-blog_migrations}
[上](#content-plugins) | [下](#content-upgrading)

```txt
If you’re switching to Jekyll from another blogging system, Jekyll’s importers can help you with the move. 
To learn more about importing your site to Jekyll, visit our jekyll-import docs site.
```
如果你从另一个博客系统切换到Jekyll，Jekyll的进口商可以帮助你。
要了解有关将您的网站导入Jekyll的更多信息，请访问我们的jekyll-import文档网站。

***

#### Upgrading 升级 {#content-upgrading}
[上](#content-blog_migrations) | [下](#content-deployment)

```txt
Upgrading from an older version of Jekyll? 
Upgrading to a new major version of Jekyll (e.g. from v2.x to v3.x) may cause some headaches. 
Take the following guides to aid your upgrade:
```
从旧版本的Jekyll升级？
升级到Jekyll的新主要版本（例如从v2.x升级到v3.x）可能会引起一些头痛。
请参阅以下指南以帮助您升级：

```
From 0.x to 1.x and 2.x
From 2.x to 3.x
From 3.x to 4.x
```

**Minor updates(次要更新)**
```txt
Stay Up to Date
We recommend you update Jekyll as often as possible to benefit from the latest bug fixes.
```
**保持最新**
**我们建议您尽可能频繁地更新Jekyll，以从最新的错误修复中获益。**

```txt
If you followed our setup recommendations and installed Bundler, 
run bundle update jekyll or simply bundle update and all your gems will update to the latest versions.

If you don’t have Bundler installed, run gem update jekyll.

The procedure is similar if you use the github-pages gem.
```
如果您遵循了我们的设置建议并安装了Bundler，
运行`bundle update jekyll` 或简单地运行 `bundle update`，所有gem都将更新到最新版本。
如果您没有安装Bundler，请运行gem更新jekyll。
如果您使用github pages gem，则过程与此类似。

***

#### Deployment 部署 {#content-deployment}
[上](#content-upgrading) | [下](#content-build)

```txt
Sites built using Jekyll can be deployed in a large number of ways due to the static nature of the generated output. 
Here’s some of the most common ways:
Manually
Automated
Third Party
```
由于生成的输出具有静态性质，使用Jekyll构建的站点可以通过多种方式进行部署。
以下是一些最常见的方法：
Manually 手动
Automated 自动化
Third Party 第三方

***

### **`Build 构建`**  {#content-build}
[`返回大纲`](#content) | [下](#content-command_line_usage)

#### Command Line Usage  命令行用法 {#content-command_line_usage}
[目录](#content) | [Guides 指南](#content-guides) | [下](#content-configuration)

```txt
The Jekyll gem makes a jekyll executable available to you in your terminal.

The jekyll program has several commands but the structure is always:
```
Jekyll gem使您可以在终端中使用Jekyll可执行文件。
jekyll程序有几个命令，但其结构始终是：

```bash
jekyll command [argument] [option] [argument_to_option]

Examples:
    jekyll new site/ --blank
    jekyll serve --config _alternative_config.yml
```

```txt
Typically you’ll use jekyll serve while developing locally and jekyll build when you need to generate the site for production.

For a full list of options and their argument, see Build Command Options.

Here are some of the most common commands:
```
通常，您将在本地开发时使用jekyll serve，并在需要生成用于生产的站点时使用jekyll build。
有关选项及其参数的完整列表，请参见生成命令选项。
以下是一些最常见的命令：

| command | description |
| :-: | :- |
| jekyll new PATH | Creates a new Jekyll site with default gem-based theme at specified path. The directories will be created as necessary. |
| 译 | 在指定的路径上创建一个新的Jekyll站点，该站点具有默认的基于gem的主题。将根据需要创建目录。 |
| jekyll new PATH --blank | Creates a new blank Jekyll site scaffold at specified path. |
| 译 | 在指定的路径上创建一个新的空白Jekyll站点脚手架。 |
| jekyll build or jekyll b | Performs a one off build your site to ./_site (by default). |
| 译 | 对执行一次性构建您的网站到 ./_site（默认情况下）。 |
| jekyll serve or jekyll s | Builds your site any time a source file changes and serves it locally. |
| 译 | 在源文件更改时随时构建您的网站，并在本地提供服务. |
| jekyll clean | Removes all generated files: destination folder, metadata file, Sass and Jekyll caches. |
| 译 | 删除所有生成的文件：目标文件夹、元数据文件、Sass和Jekyll缓存。 |
| jekyll help | Shows help, optionally for a given subcommand, e.g. jekyll help build. |
| 译 | 显示给定子命令的帮助（可选），例如jekyll help build。 |
| jekyll new-theme | Creates a new Jekyll theme scaffold. |
| 译 | 创建一个新的Jekyll主题脚手架。 |
| jekyll doctor | Outputs any deprecation or configuration issues. |
| 译 | 输出任何弃用或配置问题。 |

```txt
To change Jekyll’s default build behavior have a look through the configuration options.
```
要更改Jekyll的默认构建行为，请查看配置选项。

***
#### Configuration  配置 {#content-configuration}
[上](#content-command_line_usage) | [下](#content-rendering_process)

```txt
Jekyll gives you a lot of flexibility to customize how it builds your site. 
These options can either be specified in a _config.yml or _config.toml file placed in your site’s root directory, 
or can be specified as flags for the jekyll executable in the terminal.

Configuration Options
Default Configuration
Front Matter Defaults
Environments
Markdown Options
Liquid Options
Sass/SCSS Options
Webrick Options
Incremental Regeneration
```
Jekyll为您提供了很大的灵活性来定制它如何构建您的网站。
这些选项可以在位于站点根目录中的_config.yml或_config.toml文件中指定，
或者可以被指定为在终端中可执行的jekyll的标志。

配置选项
默认配置
Front Matter默认
环境
Markdown选项
Liquid选项
Sass/SCSS选项
Webrick选项
增量再生

***

#### Rendering Process  渲染过程 {#content-rendering_process}
[上](#content-configuration)

```txt
For any Jekyll site, a build session consists of discrete phases in the following order
— setting up plugins, reading source files, running generators, rendering templates, and finally writing files to disk.

While the phases above are self-explanatory, the one phase that warrants dissection is the rendering phase.

The rendering phase is further divisible into three optional stages. 
Every file rendered, passes through one or more of these stages as determined by the file’s content string, front matter and extension. 
The stages are akin to an assembly line, with the output from a stage being the input for the succeeding stage:

Interpreting Liquid expressions in the file
This stage evaluates Liquid expressions in the current file. 
By default, the interpretation is shallow — in that any Liquid expression in resulting output is not further interpreted. 
Moreover, any Liquid expression in the file’s front matter is left untouched.

Unleashing the converters
This stage invokes the converter mapped to the current file’s extension and converts the input string. 
This is when Markdown gets converted into HTML and Sass / Scss into CSS or CoffeeScript into JavaScript, etc, etc. 
Since this stage is determined by the file’s extension, Markdown or Sass inside a .html file will remain untouched.

Populating the layouts
By this stage, the source file is considered rendered and it will not be revisited. However, 
based on the file’s extension and consequently based on the front matter, 
it is determined whether to take the output string from the preceding stage and place into layouts or not. 

Whereas output from Sass files or CoffeeScript files are never placed into a layout, 
regular text output can go either ways based on whether a layout has been assigned via the front matter.

Placement into layouts work similar to how Russian dolls encase the smaller ones within itself or how an oyster generates a pearl 
— the converted output from the preceding stage forms the core and layout(s) are successively rendered separately onto the core.
```
对于任何Jekyll站点，构建会话由以下顺序的离散阶段组成
-设置插件，读取源文件，运行生成器，渲染模板，最后将文件写入磁盘。

虽然上面的阶段是不言自明的，但有必要进行解剖的一个阶段是渲染阶段。

渲染阶段可以进一步划分为三个可选阶段。
渲染的每个文件都经过一个或多个阶段，这取决于文件的内容字符串、主题和扩展名。
这些阶段类似于装配线，一个阶段的输出是下一阶段的输入：

解释文件中的Liquid表达式此阶段评估当前文件中的Liquid表达式。
默认情况下，解释是浅的，因为结果输出中的任何Liquid表达式都不会被进一步解释。
此外，文件前面的内容中的任何Liquid表达式都保持不变。

释放转换器
此阶段调用映射到当前文件扩展名的转换器并转换输入字符串。
这是当Markdown被转换成HTML，Sass/Scss被转换成CSS或CoffeeScript被转换成JavaScript等时。
由于这个阶段是由文件的扩展名决定的，因此.html文件中的Markdown或Sass将保持不变。

填充布局
在此阶段，源文件被视为已渲染，不会重新访问。然而
基于文件的扩展名并且因此基于前面的内容，
确定是否从前一阶段取得输出字符串并将其放入布局中。

尽管来自Sass文件或CoffeeScript文件的输出从未被放置到布局中，
常规文本输出可以根据是否已通过前面的内容指定布局来进行任何一种方式。

布局的方式类似于俄罗斯玩偶如何将较小的玩偶包裹在自己体内，或者牡蛎如何产生珍珠
-来自前一阶段的转换输出形成核心，并且布局被连续地分别呈现到核心上。

***
到底了...
***
