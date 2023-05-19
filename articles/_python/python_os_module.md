---
order: 3
text: os模块
---

# python 内置模块os

import os


os.listdir(path)
参数为文件夹路径，可以返回文件夹下的所有子文件夹(该子文件夹下的文件不给予返回，仅返回名称)、文件名称

os.walk(path)
参数为文件夹路径，返回3个内容：绝对路径(root)、子文件夹(dirs)、文件名(files)
此方法可以遍历文件夹下的所有文件、子文件及内的所有文件

glob.glob
glob：参数为路径以及文件过滤条件，若不设置过滤需填写为*，此函数会返回包括路径的文件夹和文件名
例如：
import glob
[print(file_abs) for file_abs in glob.glob(path)]

os.getcwd()
获取当前项目的路径

os.path.join('','',....)

os.abspath(path)



    
