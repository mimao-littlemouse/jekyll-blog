---
order: 6
text: admin.py
---

# django中的admin.py介绍

from django.contrib import admin

# Register your models here.
# 1.从django的contrib版本中调用admin包,该包 包含admin等自动化站点管理工具
# 需要在admin后台中显示哪些数据, 则相应从models中导入对应模型类用以调用数据
# from app名称.models import model中表的类名

# 2.
# class 表类名Admin(admin.ModelAdmin):
    # '''表对应的类模型admin管理类'''
    # 3.
    # 指定每页显示多少条信息
    # list_per_page = 10  
    # 4.
    # list_display中不仅可以写模型类的属性(即 表的列名), 也可以写模型类的方法
    # list_display = ['','',...]
    # 5.
    # 指定下拉列表框的位置以及存在与否
    # actions_on_top = False  # 上面的下拉列表开关设置
    # actions_on_bottom = True  # 下面的下拉列表开关设置
    # 6.
    # list_filter = ['属性名']  # 列表过滤栏设置指定过滤的['属性']
    # search_fields = True      # 搜索框的开关设置
    # search_fields = ['属性名']  # 搜索栏设置指定搜索属性['属性']
    # 7.
    # fields = ['属性名','属性名',...]  # fields 修改每个objects在admin中属性的排列顺序

    # fieldsets 设置组, 在组内放入属性分类
    # fieldsets = (  
    #     ('基本或其他名称',{'fields':['属性名']}),
    #     ('高级或其他名称',{'fields':['属性名']})
    # )

    # 注意： fields 和 fieldsets 两个通常情况下只选择一个使用

    # 8.
    # 嵌套或者叫关联子对象和父对象
    # (1). 创建嵌套对象, 声明嵌套类型(块嵌套或表格嵌套)以及额外编辑数量:(以块嵌套为例)
    # class 自定义关联类名StackedInline(admin.StackedInline):
    #       model = 类名  # 关联的子对象
    #       extra = 2  # 额外编辑2个子对象

    # (2).使用方法 
    # 在需要进行关联的'表类名Admin'类后加上 inline = [上方定义的关联类] :
    # inline = [自定义关联类名StackedInline]


# 自定义admin自动化管理工具, 要改写admin中的ModelAdmin(模型_管理)的参数
# 9.修改列表显示, 则更改list_display中的列表内容
# class 类名Admin(admin.ModelAdmin):
#     list_display = ['列名', '列名',...]

# 用admin包内的site站点模块, 使用register注册方法, 注册从模型中导入的模型类(单个)
# admin.site.register(类名,类名Admin)

