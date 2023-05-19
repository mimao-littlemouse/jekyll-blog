---
order: 1
text: sqlite介绍
---

# sqlite简单介绍

```
SQLite数据库
	简介
		数据模型
			应满足的三个要求
				最大情况下，较为真实的模拟现实世界
				容易理解
				便于实现
			构成数据模型的三要素
				数据结构
				数据操作
				完整性约束
					目的
						防止不符合规范的数据进入数据库
							确保数据的正确 有效 相容
			常见分类
				层次模型
					是一种典型的树形结构
					特点
						有且只有一个节点，并且无父节点，该节点称之为：根节点
						其他节点，有且只有一个父节点
						同一父节点的子节点，称之为：兄弟节点
						没有子节点的节点，称之为：叶节点
				网状模型
					特点
						允许一个以上的节点，无父结点
						一个节点，可以有多个父节点
					可用于 数据共享，减少数据的冗余
				关系模型
					特点
						像一张二维表
						每一行可以代表一个对象的数据
						没一列可以代表每一个对象的属性
		sqlite数据库
			特点
				开源的，内嵌式的关系型数据库
			下载
				ubantu中
					字符界面
						sudo apt-get install sqlite3
					图形界面
						sudo apt-get install sqliteman
			特性
				零配置
				可移植
				紧凑
				简单
				灵活
				自由的授权
				可靠
				易用
			五种类型
				简介
					sqlite采用的是，动态的数据类型，会根据存入的值自动判断
				interger
					带符号的整形
						最多64位
				real
					8字节表示的浮点类型
				text
					字符类型，支持多种编码
						比如:utf-8   utf-16
						大小无限制
				blob
					任意类型的数据
						大小无限制
					BLOB(Binary Large Object)
						二进制大对象
						使用二进制保存数据
				null
					表示空值
			操作sqlite数据库
				创建或打开数据库
					sqlite3 数据库名.db
					当数据库不存在的时候，创建数据库并打开，存在该数据库，直接打开数据库
				退出数据库
					.exit  或  .quit
				查询数据库中的表
					.table
				修改查询到的数据的显示格式
					.mode column
						使用表的列对其的方式呈现
					.header on
						显示表头
				查询数据库中表的结构
					.schema
			操作sqlite数据库结构和数据
				对表进行操作
					创建表
						create table 表名(字段名 字段类型,.....)
					创建表时，对表中字段创建约束
						创建主键
							create table 表名(字段名 字段类型 primary key,.....)
					复制表
						create table 表名 as select * from 被复制的表名;
或者
create table 表名 as select * from 被复制的表名 where 字段=或like或>=等等条件;
					修改表名
						alter table 表名 rename 新名称;
					表中添加新的一列
						alter table 表名 add 字段名 字段类型;
					修改表结构
						先创建一个新表(该表有你修改结构后的效果)
						然后，插入你想修改的那张表的数据 插入到创建的新表当中
							insert into 新表名(字段名,...) select * from 旧表名;
						之后，将原来的表删掉
						然后，将新表重命名为之前表的名称
					删除表
						删除表的内容
						删除表的内容和结构
							drop table 表名;
				使用sql语句进行查询
					注意：一句sql结束之后，需使用;进行结尾，否则系统会认为，你还要继续进行输入
					而且sql语句不区分大小写
				使用sql语句操作数据
					增删改查
						增
							insert into 表名(字段名,...) values(对应的值,...);
							insert into 表名 values(所有列对应的值1,...); 
							insert into 表名(字段名,...) select * from 表名;
						删
							delete from 表名 where 字段条件;
								删除表中符合条件的数据
							delete from 表名;
								删除表中所有数据
						改
							update 表名 set 字段=新值 and ...;
								更新所有这些字段的值
							update 表名 set 字段=新值 and ... where 字段条件;
								更新符合条件的 所有这些字段的值
						查
							select *或字段 from 表名;
								查询表中所有，或指定字段的数据
							select *或字段 from 表名 where 字段条件;
								查询表中符合条件的 所有，或指定字段的数据
				事务
					begin;
						开始事务
					commit;
						事务的提交
							begin之后的所有操作都会生效
					rollback;
						事务的回滚
							begin之后的所有操作都不会生效
				熟悉sql语句中常用的函数
					常用的函数
						upper()
							将字符串转化为 大写
						lower()
							将字符串转化为 小写
						length()
							获取字符串的长度
						使用方法：
select upper(字段名),lower(字段名),length(字段名) from 表名;
					常用的聚集函数
						avg()
							返回某列的平均值
						count()
							返回某列的行数
						max()
							返回某列的最大值
						min()
							返回某列的最小值
						sum()
							返回某列值之和
					注意：
这些函数只是为了便于查看数据，对本身数据没有影响
				分组和过滤分组
					group by
						分组
					having 函数()条件
						过滤分组
						注意：这个 要写在 group by 的后面，必须要有group by 才能使用
				三种约束
					主键约束
						primary key
						用法
							create table 表名(字段名 数据类型 primary key,...);
					唯一约束
						unique
						用法
							create table 表名(字段名 数据类型 unique,...);
					检查约束
						check
						用法
							create table 表名(字段名 数据类型 check(条件，比如 age<50...),...);
							关系符号
								and or >= <= != length()
									等等
				插值和修改值的时候，可以用到的函数有
					time('now')   date('now')
				多表查询(联接表)
					select *或指定的一些字段名,.. from 表1,表2 where 表1.字段一=表2.字段1 ;
				视图
					创建视图
						create view 视图名 as 查询语句;
					使用视图
						select * from 视图名;
					视图只能用于查询，不能用于修改
					删除视图
						drop view 视图名;
				触发器
					创建触发器
						create trigger 触发器名 [before|after] [insert|update|delete] on 表名 begin 触发时需要执行的sql语句 end;
					触发器中，对应的条件中，对应表的选择，即：new  和  old来进行条件的书写
					删除触发器
						drop trigger 触发器名;
				索引
					创建索引
						create index 索引名 on 表名(字段名 [asc,desc],...);
					删除索引
						drop index 索引名;
					使用场合
						1.一般在主键上，创建索引
						2.在经常需要进行排序的列，创建索引
						3.经常需要使用 where语句进行判断的列，创建索引
					避免使用的场合
						1.表的数据量不大
						2.表的大部分操作不是查询
						子主题 3
					优缺点
						优点
							提高查询速度
						缺点
							会生成虚拟表进行排序，会占比较大的内存，影响增删改操作的效率
					使用
						查看索引
							.indices
	c语言编程接口：目前还未理清
```