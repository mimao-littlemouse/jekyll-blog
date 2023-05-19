---
order: 2
text: django经验
---
{% raw %}

创建django项目：
1.首先，决定好项目名称
在存放项目的文件夹中，打开cmd,输入：django-admin startproject 项目名称
2.创建好基本目录之后，该目录只是用作url以及项目配置的，真正用于开发的，是创建app进行页面和路由的开发
3.创建app,将目录切入到含有manage.py的文件夹中，打开cmd输入: python manage.py startapp 项目名称_web也行(自己定义)
4.对 app进行注册，在settings.py中的install_app配置项中，添加：app名称.apps.app名称所有单词大写Config  即可
5.并在settings.py中配置好static文件夹，找到static_url选项，在其下面书写：STATICFILES_DIRS=[os.path.join(BASE_DIR,'static')] 
注意：os模块需自己在文件内容顶部(导入path的下面)导入
6.在项目根目录(即：含有manage.py文件的文件夹中)，创建static文件夹，并搭建好： css js img plugins的目录结构
7.然后，在app目录下，创建templates文件夹，并创建 app名称 app名称_layout 两个文件夹
（注意：在views中render templates中的html文件的时候，带上app名称 app名称_layout 或其他app中的app名称 app名称_layout 
（这样可以避免 render的时候使用同一个html文件）） 这是一个重点
8.之后，便可以在根目录下，打开cmd，输入 python manage.py migrate 实现迁移去使用sqlite数据
（默认使用sqlite数据库，如需使用其他数据库，可以在settings.py中配置(例如：mysql数据库，配置项有：engine name user password host port)）
9.之后，就是修改urls.py views.py 增加html文件，书写views中的逻辑代码，并在根目录中，打开cmd,输入 python manage.py runserver [port] 运行项目了（[port可填，可不填，不填默认端口号 8000]）

使用bootstrap中的 字体图标库
1.下载图标库中的源码，将源码中的svg图标拷贝一份，在html中，使用img进行引入即可（在django中有用）
或者
2.将其源码中的font拷贝一份，在html中，使用 <i class="bi bi-svg图标名称"></i>（在django中没用）

组件的灵活使用，以及模板的灵活使用，将大大提高开发效率，减少代码冗余
注意：html模板名称：可以写成 (  templates目录下文件夹名称或不写 )/模板名称.html 例如：项目名称_layout/模板名称.html 或 模板名称.html
1.导入( include )
{% include "html模板名称" %}
2.继承(extends)与占位(block)
在母模板中：{% block 占位名称 %}{% endblock %}
在子模版中：{% extends 'html模板名称' %}  {% block 占位名称 %}占位内容{% endblock %}
（其实可以一致套下去，但不建议这样做，套两三个就可以了，以免出现辨别困难，增加开发难度）



{% endraw %}