---
order: 2
text: 列表推导式
---

# python中列表推导式

new_list = [expression(item) for item in iterable if condition]
可以写成：
new_list = []
for item in iterable:
    if condition:
        new_list.append(expression(item))

其他例子：
numbers = [2*x for x in range(1,11) if x>2 and x<5]
print(numbers)
>>> [6, 8]

# 如果 x 的值介于2和5之间，则列表推导式返回 2*x，否则返回 3*x。
numbers = [2*x if x > 2 and x < 5 else 3*x for x in range(10)]
print(numbers)
>>> [0, 3, 6, 6, 8, 15, 18, 21, 24, 27]

numbers = []
for x in range(10):
	if x>2 and x<5:
		numbers.append(2*x)
	elif x<=2:
		numbers.append(3*x)
	else:
		numbers.append(4*x)
numbers = [2*x if x > 2 and x < 5 else 3*x if x <=2 else 4*x for x in range(10)]
print(numbers)
>>> [0, 3, 6, 6, 8, 20, 24, 28, 32, 36]


zip() 方法的使用：
cities = ['Rome', 'Warsaw', 'London']
countries = ['Italy', 'Poland', 'United Kingdom']
abc = [(city, country) for city, country in zip(cities, countries)]
print(abc)
>>> [('Rome', 'Italy'), ('Warsaw', 'Poland'), ('London', 'United Kingdom')]


嵌套列表推导式：
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for row in matrix:
    for item in row:
        item  *= 2
print(matrix)
>>> [[2, 4, 6], [8, 10, 12], [14, 16, 18]]

变换成嵌套列表推导式
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
matrix = [[item*2 for item in row] for row in matrix]
print(matrix)
>>> [[2, 4, 6], [8, 10, 12], [14, 16, 18]]


reduce和lamba算式
from functools import reduce
numbers = [3, 6, 8, 23]
print(reduce(lambda a,b: a+b, numbers))
>>> 40
变换成列表推导式
print(sum([number for number in numbers]))
>>> 40

