---
index: 3
text: 案例讲解
---

# 案例介绍
#### [`返回目录`](./navbar.md)
##### `使用jekyll-blog博客案例` {#content}
###  {#title-1}
[**查看笔记介绍**](#introduction) | [**下一节**](#title-2) 

1.***安装jekyll环境***
安装jekyll 和 bundler 依赖
```
$ gem install jekyll bundler
```

2.***创建第一个jekyll项目***
创建jekyll项目，并命名为 myblog
```
$ jekyll new myblog
```
> 创建的过程非常长，请耐心等待

3.***项目结构***
```
_site #这是运行项目之后，才生成的文件夹（功能如其名）
    jekyll
        update
            2023
                03
                    16
                        welcome-to-jekyll.html
    assets
        main.css 
        main.css.map
        minima-social-icons.svg
    about
        index.html
    feed.xml
    404.html
    index.html
_ports
    2023-03-16-welcome-to-jekyll.markdown
_config.yml
404.html
about.markdown
index.markdown
Gemfile
Gemfile.lock
```

4.***运行项目***
```
$ bundler exec jekyll serve
```

```
在运行之后，可能会报有关sass方面的错误，解决方法：
$ gem install sass
$ gem install compass
(是否安装完成，输入sass -v  和  compass -v 看是否可以输出版本好)
安装上面两个依赖就行，继续
```

> 将--livereload选项传递给serve，以便在对源文件进行每次更改时自动刷新页面：
> $ bundle exec jekyll serve--livereload
>
> 指定 --host  --post
> 可以更改服务运行时的 主机名 和 端口号
> 例如：
> $ bundler exec jekyll serve --host 0.0.0.0 --post 4000
> 
> 运行之后，出现的sass警告 不用管

**扩展**
其他使用方法，请参考：
[入门教程](https://juejin.cn/post/6844903623567081486)(来源掘金)
