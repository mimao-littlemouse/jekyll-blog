---
order: 7
text: tests.py
---

# django中的tests.py介绍

测试的格式，大致是：
# # Create your tests here.
# 1.导入相关模块
# from django.test import TestCase, Client
# from .models import Student
# 2.创建一个 类名TestCase的类，继承TestCase 并在类中书写setup 和 以test开头的方法的需要测试的方法 在最好虽然可以写tearDown方法，但不需要这样，因为django会帮咱们做
# class StudentTestCase(TestCase):
#     """
#     3.在student类中，首先书写 setup进行初始化 进行测试的准备工作
#     def setUp(self)：用来初始化环境，包括创建初始数据，或做一些其他准备工作
#     setUp的功能，可以对 模型student表进行添加数据，添加的数据会放到一个临时的数据库中，前提是 settings中的数据库已配置好
#     4.书写 需要进行测试的方法 可以通过 self.assertEqual(变量, 值, 提示内容) 或 self.assertTrue(bool值,需要print打印出来的信息)  进行断言
#     如果需要测试请求是否有问题，则可以通过client = Client() response = client.get('/') 或 response = client.post('/',data)
#     def test_xxx(self)：xxx可以是任何东西，以test_开头的方法，都会被django认为是需要测试的方法，跑测试时会被执行
#     注：每个需要被测试的方法都是相互独立的
#     def tearDown(self)：跟setUp相对，用来清理测试环境和测试数据（在django中可以不关心这个）
#     """
#     5.例如：
#     def setUp(self):
#         print('setUp')

#     # 需要进行测试的方法
#     def test_xxx(self):
#         print('test_xxx')
#         self.assertEqual(变量, 值, 需要print打印出来的信息)


案例：
from django.test import TestCase, Client
from .models import Student


class StudentTestCase(TestCase):
    """
    def setUp(self)：用来初始化环境，包括创建初始数据，或做一些其他准备工作
    def test_xxx(self)：xxx可以是任何东西，以test_开头的方法，都会被django认为是需要测试的方法，跑测试时会被执行。
        注：每个需要被测试的方法都是相互独立的
    def tearDown(self)：跟setUp相对，用来清理测试环境和测试数据（在django中可以不关心这个）
    """
    def setUp(self):
        print('setUp')
        Student.objects.create(
            name='stu1',
            sex=1,
            email='test1@qq.com',
            qq='333',
            phone='111',
        )

    # 测试数据创建以及sex字段的正确展示
    def test_create_and_sex_show(self):
        print('test_create_and_sex_show')
        student = Student.objects.create(
            name='huyang',
            sex=1,
            email='test2@qq.com',
            profession='t1',
            qq='123',
            phone='test2123',
        )
        # django提供了get_xxx_display方法，可以替换sex_show
        self.assertEqual(student.sex_show, '男', '性别字段内容跟展示不一样')
        # self.assertEqual(student.get_sex_display, '男', '性别字段内容跟展示不一样')

    # 测试查询是否可用
    def test_filter(self):
        print('test_filter')
        Student.objects.create(
            name='huyang',
            sex=1,
            email='testfilter@qq.com',
            profession='t2',
            qq='222',
            phone='22322',
        )
        name = 'stu1'
        students = Student.objects.filter(name=name)
        self.assertEqual(students.count(), 1, '应该只存在一个名称为{}的记录'.format(name))

    # 测试首页的可用性
    def test_get_index(self):
        print('test_get_index')
        client = Client()
        response = client.get('/')
        self.assertEqual(response.status_code, 200, 'status code must be 200!')

    # 测试post请求
    def test_post_student(self):
        print('test_post_student')
        client = Client()
        data = dict(
            name='test_for_post',
            sex=1,
            email='333@dd.com',
            profession='t2',
            qq='2323',
            phone='3222'
        )
        response = client.post('/', data)
        self.assertEqual(response.status_code, 302, 'status code must be 302!')

        response = client.get('/')
        with open('temp.html', 'wb') as f:
            f.write(response.content)
        self.assertTrue(b'test_for_post' in response.content,
                        'response content must contain `test_for_post`')
