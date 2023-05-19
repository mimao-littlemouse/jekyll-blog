---
order: 4
text: 基础 下
---

# scrapy基础知识 下篇


1.一个scrapy项目，可用有多个子项目：（即：一个scrapy项目的根目录，可用有多个项目进行共享）
通过配置scrapy.conf 中的 settings配置项中，进行配置：
默认情况下：
[settings]
default = myproject.settings
设置配置：
[settings]
default = myproject1.settings	#设置默认的项目
project1 = myproject1.settings	#设置项目1的别名
project2 = myproject2.settings #设置项目2的别名
注意：
设置完之后，项目的运行，默认是按default项目进行运行，所以，可用使用下面命令更改默认设置：
(在终端中，运行下面命令)
>>scrapy settings --get BOT_NAME
Project 1 Bot
>> export SCRAPY_PROJECT=project2
>> scrapy settings --get BOT_NAME
Project 2 Bot

