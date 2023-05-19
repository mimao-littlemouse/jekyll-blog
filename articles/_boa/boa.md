---
order: 1
text: boa服务器部署
---

# boa服务器部署步骤

## 准备

### 下载好，boa服务器源码
```
在linux系统中的home目录下，创建如下的目录结构:
home:
	share:
		myboa:
			boa
			log
			www:
				cgi-bin
```
### 然后，下载相关工具：
```
sudo apt-get install bison 
sudo apt-get install flex
```
### 将 下载好的boa服务器源码，放置在 share 目录下：
并对其进行解压：
tar zxvf 压缩包名.tar.gz

#### 然后进入 解压后的目录，再进入src目录 并执行 ./configure，之后，修改配置文件
修改一下 defines.h文件中的 #define SERVER_ROOT ""中地址即可
即：设置为 /home/stu/share/myboa/boa 即可
这个设置的路径对后面有影响

#### 然后，注释一下 boa.c中第225行左右if语句(含有icky Linux kernel bug语句)的代码，使用 #if 0  #endif 进行注释

#### 然后，再修改 compat.h中120行左右的#define TIMEZONE_OFFSET中的  foo##修改为 (foo)  即可
再在当前目录下，执行 make

#### 然后，就可以得到我们所需要的三个文件
将 当前文件夹下的 boa boa_indexer 文件 复制到  /home/share/myboa/boa中
然后，在解压后的文件夹中，找到 boa.conf文件，将其也复制到 /home/share/myboa/boa文件夹中
然后，在log中创建 access_log  和  error_log 普通文件
大概目录，如下所示:
```
myboa:
	boa:
		boa
		boa_indexer
		boa.conf
	log:
		access_log
		error_log
	www:
		cgi-bin
		index.html
```

#### 然后，需要对 boa文件夹中的  boa.conf文件，进行配置

```
配置内容
User Group 将其值None改为0
ErrorLog的地址改为  error_log文件所在的地址
	比如：ErrorLog /home/stu/share/myboa/log/error_log
AccessLog的地址改为  access_log文件所在的地址
	比如：AccessLog /home/stu/share/myboa/log/access_log
DocumentRoot的地址改为 www文件夹所在地址
	比如：DocumentRoot /home/stu/share/myboa/www
DirectoryMaker的地址改为 boa_indexer文件所在地址
	比如：DirectoryMaker /home/stu/share/myboa/boa/boa_indexer
DirectoryIndex可改可不改，即，访问 网页的时候，直接使用ip进时候，默认访问的网页
ScriptAlias改为 /cgi-bin/ /home/stu/share/myboa/www/cgi-bin/
```

> 配置完，即可运行boa服务器了
> sudo ./boa 进行运行
> 可以使用： ps -e 查看是否运行

#### 如果需要将boa添加到系统环境变量中，方法是：

```
打开配置文件：sudo vi /etc/bash.bashrc
添加：export PATH=$PATH:/home/stu/share/myboa/boa

然后，更新配置文件：

source /etc/bash.bashrc
```

#### 停用该boa程序，可以通过杀死进程实现

```
kill boa对应的进程id

ps -e可以查找到boa对应的进程id

注意：下次运行boa服务器，一定要加上 sudo，否则没用

准备成功之后，就可以在 index.html中进行书写代码了，并使用浏览器进行访问 index.html页面
```
