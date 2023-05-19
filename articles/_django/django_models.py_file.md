---
order: 5
text: models.py
---

# django中的models.py介绍

1.使用 
python manage.py makemigrations
python manage.py migrate
将写好的models.py中的表结构，在配置好的数据库中生成对应的表结构

2.生成models.py文件，利用已经存在的数据库生成
配置好数据库的配置项，然后，输入：
#(1). 如果已经执行过 python manage.py startapp app名称 命令生成应用,直接写
python manage.py  inspectdb > app名称/models.py 
#(2). 如果没有执行过 python manage.py startapp app名称 命令生成应用，可以直接将生成的models内容输出为 models.py文件
python manage.py  inspectdb > models.py 

3.models.py中，书写规范：
from django.db import models

class UserInfo(models.Model):
	name=models.CharField(verbose_name='用户名',max_length=32)
	password=models.CharField(verbose_name='密码',max_length=64)
	age=models.IntegerField(verbose_name='年龄')

4.讲解
(1).verbose_name 可以看作是备注
(2).创建字段的类型的方法有：
字符字段（可以用：max_length来明确字符长度，其实，这可以当作 string字符串类型）
.CharField()
短整形字段
.SmallIntegerField()
整形字段
.IntegerField()
长整形字段
.BigIntegerField()
小数字段
.DecimalField()    max_digits 最大长度   decimal_places 小数点占位个数
时间字段
.DateTimeField()   #含有 年月日 时分秒
日期字段
.DateField()       #只含有  年月日
(3).对该字段创建外键约束：
UserInfo  与  DepartmentInfo    UserInfo表中 含有DepartmentInfo中的Id，此时 UserInfo表中的部门ID要参照DepartmentInfo中的ID
此时，在UserInfo表中 对depart_id字段建立外键约束
所以：
depart=models.ForeignKey(to='DepartmentInfo',to_field='id',on_delete=models.CASCADE)   设置参照DepartmentInfo表中的id字段对该字段进行外键约束
其中：
on_delete=models.CASCADE  是对其外键设置级联（即：当DepartmentInfo中对应的id值所在一整行数据要被删除时，UserInfo表中有着对应关系的depart字段的值的这一行数据，将会一同被删除）
on_delete=models.SET_NULL,null=True,blank=True  是对其外键设置为  置空（即：当DepartmentInfo中对应的id值所在一整行数据要被删除时，UserInfo表中有着对应关系的depart字段的值的这一行数据，将会一同设置为空(null)）
在使用 ForeignKey()方法绑定的字段，该字段， 
会有两种调用方法：
注意：该字段不要加_id  因为在创建该表字段的时候，会自己加上一个 id
使用该字段的时候:
第一种，调用方法：字段_id  可以获取到存储到数据库中的对应的id值
第二种，调用方法：字段  可以获取到一个 对象，该对象就是 约束该字段的那张表的对象，对此 你可以获取到对应的id相等的那行数据

(4).对字段创建 值约束（可以理解为 选择约束（由 django自带的约束））
比如：
gender_choices=(
	(1,'男'),
	(2,'女')
)

gender=models.SmallIntegerField(verbose_name='性别',choices=gender_choices)
代码中 choices=gender_choices 便是值约束
注意：在使用models.py模块访问到数据之后，
第一种，可以通过 get_gender_display() 方法 获取该字段gender的值 1对应的"男"  
第二种，通过字段gender可以获取 1
