
# Linux中find命令用法汇总

Linux 查找命令是Linux系统中最重要和最常用的命令之一。查找用于根据与参数匹配的文件指定的条件来搜索和查找文件和目录列表的命令。查找可以在各种条件下使用，您可以通过权限，用户，组，文件类型，日期，大小等可能的条件查找文件。 
通过这篇文章，我们以实例的形式分享我们的日常Linux查找命令体验及其用法。在本文中，我们将向您展示Linux中最常用的35查找命令示例。我们将该部分分为五个部分，从基本到提前使用find命令。

- 第一部分：查找名称查找文件的基本查找命令
- 第二部分：根据他们的权限查找文件
- 第三部分：基于所有者和组的搜索文件
- 第四部分：根据日期和时间查找文件和目录
- 第五部分：根据大小查找文件和目录

## 第一部分：查找名称查找文件的基本查找命令
### 1.使用当前目录中的名称查找文件  
在当前工作目录中查找名称为test.py的所有文件。 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find test.py 
test.py
[root@iz2zeiax0dicvv2jo13gytz ~]# 

```
### 2.在主目录下查找文件
查找/ home目录下的所有文件，名称为test。 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find /home -name test 
```
### 3.使用名称和忽略案例查找文件
找到名称为test的所有文件，并在/ home目录中同时包含大写和小写字母。 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find /home -iname test
```
### 4.使用名称查找目录
在/目录中查找名称为test的所有目录。 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find / -type d -name test
```
### 5.使用名称查找PHP文件
在当前工作目录中查找名为test.PHP的所有PHP文件。 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find -type f -name test.php
```
### 6.查找目录中的所有PHP文件
查找目录中的所有php文件。 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find -type f -name "*.php" 
```

## 第二部分：根据他们的权限查找文件

### 7.查找777个权限的文件
查找权限为777的所有文件  
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find -type f -perm 0777 -print 
```
### 8.查找没有777权限的文件
查找所有文件未经许可777   
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find / -type f ! -perm 0777
```
### 9.查找具有644个权限的SGID文件
查找权限设置为644的所有SGID位文件。 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find / -perm 2644
```
### 10.找到具有551权限的粘滞位文件
查找权限为551的所有Sticky Bit设置文件。 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find / -perm 1551
```
### 11.查找SUID文件
查找所有SUID集文件。 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find / -perm /u=s 
```

### 12.查找SGID文件
查找所有SGID设置文件  
``` 
[root@iz2zeiax0dicvv2jo13gytz ~]# find / -perm /u=s 
```
### 13.查找只读文件
查找所有只读文件。 
``` 
[root@iz2zeiax0dicvv2jo13gytz ~]# find / -perm /u=r 
```
### 14.查找可执行文件
查找所有可执行文件。 
``` 
[root@iz2zeiax0dicvv2jo13gytz ~]# find / -perm /a=x 
```
### 15.找到777个权限和Chmod到644的文件
查找所有777个权限文件，并使用chmod命令将权限设置为644 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find / -type f -perm 0777 -print -exec chmod 644 {} \;
```
### 16.找到具有777个权限的目录和Chmod到755
查找所有777个权限目录，并使用chmod命令将权限设置为755。 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find / -type d -perm 777 -print -exec chmod 755 {} \;
```
### 17.查找并删除单个文件
找到一个名为test.c的文件并将其删除 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find -type f -name "test.py" -exec rm -f {} \;
```
### 18.查找并删除多个文件
查找和删除多个文件，如.mp3或.txt。 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find -type f -name "*.txt" -exec rm -f {} \;
[root@iz2zeiax0dicvv2jo13gytz ~]# find -type f -name "*.mp3" -exec rm -f {} \;
```
### 19.查找所有空文件
在特定路径下查找所有空文件。 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find /tmp -type f -empty 
```
### 20.查找所有空目录
将特定路径下的所有空目录归档。 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find /tmp -type d -empty 
```
### 21.查找所有隐藏文件
要查找所有隐藏的文件，请使用以下命令。 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find /tmp -type f -name ".*"
```

## 第三部分：基于所有者和组的搜索文件

### 22.查找基于用户的单个文件
在所有者root的/ root目录下查找名为test.py的所有或单个文件。 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find / -user root -name test.py
```
### 23.查找基于用户的所有文件
查找~目录下属于用户neil的所有文件。 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find ~ -user neil 
```
### 24.查找基于组的所有文件
查找/home目录下属于Group Developer的所有文件。 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find /home -group developer 
```
### 25.查找用户的特定文件
查找~目录下的用户neil的所有.txt文件 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find ~ -user neil -iname "*.c"
```
## 第四部分：根据日期和时间查找文件和目录

### 26.查找最近50天访问的文件
查找50天后访问的所有文件。 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find / -atime 50
```
### 27.查找最后50-100天修改的文件
查找所有被修改超过50天以及少于100天的文件。 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find / -mtime +50 -mtime -100
```
### 28.在过去1小时内查找更改的文件
查找最近1小时内更改的所有文件 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find / -cmin -60
```
### 20.在最近1小时内查找修改的文件
查找最近1小时内修改的所有文件。
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find / -mmin -60
```
### 30.查找最近1小时内访问的文件
查找最近1小时内访问的所有文件
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find / -amin -60
```

## 第五部分：根据大小查找文件和目录
### 31.找到50MB的文件
要找到所有50MB的文件，请使用。 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find / -size 50M 
```
### 32.查找大小在50MB到100MB之间
找到大于50MB且小于100MB的所有文件。 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find / -size +50M -size -100M 
```
### 33.查找并删除100MB的文件
查找所有100MB文件并使用一个命令删除它们。 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find / -size 100M -exec rm -rf {} \;
```
### 34.查找特定文件并删除
查找超过10MB的所有.mp3文件，并使用一个命令删除它们 
```
[root@iz2zeiax0dicvv2jo13gytz ~]# find / -type -name *.mp3 -size +10M -exec rm {} \;
```






























































