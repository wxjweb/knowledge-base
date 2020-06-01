- [错误一：Untracked working tree file](#%e9%94%99%e8%af%af%e4%b8%80untracked-working-tree-file)
  - [错误描述](#%e9%94%99%e8%af%af%e6%8f%8f%e8%bf%b0)
  - [处理方式](#%e5%a4%84%e7%90%86%e6%96%b9%e5%bc%8f)
- [错误二：git bash 不显示中文](#%e9%94%99%e8%af%af%e4%ba%8cgit-bash-%e4%b8%8d%e6%98%be%e7%a4%ba%e4%b8%ad%e6%96%87)
- [错误三：git pull时出现错误提示](#%e9%94%99%e8%af%af%e4%b8%89git-pull%e6%97%b6%e5%87%ba%e7%8e%b0%e9%94%99%e8%af%af%e6%8f%90%e7%a4%ba)
  - [方法1. stash](#%e6%96%b9%e6%b3%951-stash)
  - [方法2. 放弃本地修改，直接覆盖之](#%e6%96%b9%e6%b3%952-%e6%94%be%e5%bc%83%e6%9c%ac%e5%9c%b0%e4%bf%ae%e6%94%b9%e7%9b%b4%e6%8e%a5%e8%a6%86%e7%9b%96%e4%b9%8b)

## 错误一：Untracked working tree file
### 错误描述
git使用的时候，常常会出先很多unTracked working tree files（一般是在解冲突时产生的一些暂存的数据）放在files in working tree中，一般git控制软件会在这些文件前打了一个问号，提交的时候很麻烦。如何处理呢？
### 处理方式
打开命令行，cd到对应的程序目录中，输入
```
git clean -d -fx
```
即可清理对应unTracked working tree files.
-d是清楚对应的问题目录，-fx是清除对应的问题文件。

```
例：

# root @ ba in ~/at/ba3 on git:GSGL/develop o [18:20:36] 
$ git pull
reverse mapping checking getaddrinfo for bogon [10.95.135.41] failed - POSSIBLE BREAK-IN ATTEMPT!
remote: Enumerating objects: 71, done.
remote: Counting objects: 100% (71/71), done.
remote: Compressing objects: 100% (71/71), done.
remote: Total 71 (delta 12), reused 0 (delta 0)
Unpacking objects: 100% (71/71), done.
From git-biz.qianxin-inc.cn:irp/ba/ba3
   7f5df71..473cb83  GSGL/develop -> origin/GSGL/develop
   df149c5..30ae82f  GSGL/feature/IRP-891 -> origin/GSGL/feature/IRP-891
Updating 19a4450..473cb83
error: Untracked working tree file 'src/basite/DEBUG' would be overwritten by merge.  Aborting

# root @ ba in ~/at/ba3 on git:GSGL/develop o [19:03:52] C:1
$ git clean -d -fx
Removing build/
Removing report_generator.log
Removing src/.idea/
Removing src/basite/DEBUG
Removing src/basite/analysis/__init__.pyc
Removing src/basite/analysis/asset.pyc
Removing src/basite/common/aes.pyc
Removing src/basite/common/api_views.pyc
Removing src/basite/common/async_thread.pyc
Removing src/basite/common/call_ext.pyc
Removing src/basite/common/capacity.pyc
Removing src/basite/common/common_check.pyc
Removing src/basite/common/common_functions.pyc
Removing src/basite/common/common_memory_cache.pyc
Removing src/basite/common/data_serializers.pyc
Removing src/basite/common/db_tables.pyc
Removing src/basite/common/debug.pyc
Removing src/basite/common/demo_test.py
Removing src/basite/common/disk.pyc
Removing src/basite/common/file_value_md5.pyc

```

## 错误二：git bash 不显示中文
git不能正常显示中文
```
ba@PC01 MINGW64 /e/at/ba-project-docs (develop)
$ git status
On branch develop
Your branch is up to date with 'origin/develop'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        "docs/\345\274\200\345\217\221\346\214\207\345\215\227/ba\345\217\221\347\211\210\350\247\204\350\214\203.md"

nothing added to commit but untracked files present (use "git add" to track)
```
修改配置文件：
```
ba@PC01 MINGW64 /e/at/ba-project-docs (develop)
$ git config --global core.quotepath false
```
再次查看，可以正确显示中文
```
ba@PC01 MINGW64 /e/at/ba-project-docs (develop)
$ git status
On branch develop
Your branch is up to date with 'origin/develop'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        docs/开发指南/ba发版规范.md

nothing added to commit but untracked files present (use "git add" to track)
```

## 错误三：git pull时出现错误提示
今天用git pull来更新代码，遇到了下面的问题：
```
$ git pull
Address 172.24.11.90 maps to bogon, but this does not map back to the address - POSSIBLE BREAK-IN ATTEMPT!
Updating 4719bbd..dab69ed
error: Your local changes to 'src/basite/device/ipsec/ipsec_auto_tunnel.py' would be overwritten by merge.  Aborting.
Please, commit your changes or stash them before you can merge.
```
提示已经很友好了，从网友处得到的答案直接帮我解决问题。  
### 方法1. stash  
通常遇到这个问题，你可以直接commit你的修改；但我这次不想这样。 
看看git stash是如何做的。  

```
git stash
git pull
git stash pop
```
接下来diff一下此文件看看自动合并的情况，并作出相应修改。  
git stash: 备份当前的工作区的内容，从最近的一次提交中读取相关内容，让工作区保证和上次提交的内容一致。同时，将当前的工作区内容保存到Git栈中。  
git stash pop: 从Git栈中读取最近一次保存的内容，恢复工作区的相关内容。由于可能存在多个Stash的内容，所以用栈来管理，pop会从最近的一个stash中读取内容并恢复。  
git stash list: 显示Git栈内的所有备份，可以利用这个列表来决定从那个地方恢复。  
git stash clear: 清空Git栈。此时使用gitg等图形化工具会发现，原来stash的哪些节点都消失了。  


```
# root @ ba in ~/at/ba3 on git:GSGL/develop o [17:57:59] C:1
$ git stash
Saved working directory and index state WIP on GSGL/develop: 4719bbd fix bug IRP-1083 无法添加或编辑IPsec隧道数据
HEAD is now at 4719bbd fix bug IRP-1083 无法添加或编辑IPsec隧道数据
```
```
# root @ ba in ~/at/ba3 on git:GSGL/develop o [18:02:56] 
$ git pull
reverse mapping checking getaddrinfo for bogon [172.24.11.90] failed - POSSIBLE BREAK-IN ATTEMPT!
Updating 4719bbd..dab69ed
Fast-forward
 src/basite/device/ipsec/ipsec_auto_tunnel.py  |    1 +
 src/basite/device/network/route_policy.py     |   40 ++++++++++++++++++++++-
 src/basite/language/error_info.py             |    1 +
 src/basite/language/error_string.py           |    1 +
 src/basite/locale/zh_CN/LC_MESSAGES/django.po |    4 ++
 5 files changed, 46 insertions(+), 1 deletions(-)
```
```
# root @ ba in ~/at/ba3 on git:GSGL/develop o [18:03:33] 
$ git stash pop
Auto-merging src/basite/device/ipsec/ipsec_auto_tunnel.py
# On branch GSGL/develop
# Changed but not updated:
#   (use "git add <file>..." to update what will be committed)
#   (use "git checkout -- <file>..." to discard changes in working directory)
#
#	modified:   src/basite/device/ipsec/ipsec_auto_tunnel.py
#	modified:   src/basite/system/admin/auth.py
#
no changes added to commit (use "git add" and/or "git commit -a")
Dropped refs/stash@{0} (a9cf993734b7c36631f954a6119fc5f9634aefb6)
```

### 方法2. 放弃本地修改，直接覆盖之
```
git reset --hard
git pull
```



























































