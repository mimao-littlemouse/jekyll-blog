---
order: 1
text: common method
---

# python中常见方法

1.列表
添加
[].append(object) 在列表后面添加元素 (无返回值)
[].insert(index,object) 在指定的索引处添加元素 (无返回值)
删除
[].pop()  删除列表后面一个元素 并返回删除掉的那个元素
[].pop(index)  删除列表中对应索引的元素 并返回删除掉的那个元素
[].remove(value) 删除第一次出现的元素 如果元素不存在则报错
修改

合并列表
列表1.extend(列表2) 无返回值，不会将重复部分清除，如果需要清除重复部分可( list(set(列表)) )
统计
[].count(元素)  统计元素在列表中的个数
找到第一次出现的位置
[].index(元素)

字典
dict_example = {}
添加/更改：dict_example["name"]="xiaoli"
删除：del dict_example["name"]
查：dict_example["name"]
dict_example.values() 返回一个列表
dict_example.keys() 返回一个列表
dict_example.items()  返回的结果是一个元组列表

集合


其他方法：
lamba
分为
无参匿名函数
有参匿名函数

reduce(,)
从 functool中导入

map方法，返回的是一个对象
大于序列做映射
但只能使用一次，因为使用过一次之后，指针就会被指向空，所以，在将map对象赋值的时候，先将其转化为可迭代的对象之后，再使用
map_test = map(lambda x, y: x + y, [1, 3, 5, 7, 9], [2, 4, 6, 8, 10])
print(map_test)   # 计算列表各个元素的平方
for i in map_test:
    print(i)
print(list(map_test))   # 计算列表各个元素的平方


filter

sorted
