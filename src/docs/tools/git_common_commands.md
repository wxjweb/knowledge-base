## Git常用命令

### git分支
获取本地分支：git branch  
获取远程分支：git branch -r  
获取本地和远程的分支：git branch -a  
git checkout dev_youxie：分支 dev_youxie 设置为跟踪来自 origin 的远程分支 dev_youxie。切换到一个新分支 'dev_youxie'  
[root@localhost youxie]# git branch -d dev_youxie
已删除分支 dev_youxie 2b076f0）  
git branch -d -r origin/dev_youxie
已删除远程分支 origin/dev_youxie 2b076f0）

### 查询git提交数 
```
git log --oneline | wc -l
```

