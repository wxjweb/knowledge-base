
## 解决向github提交代码是老要输入用户名密码

1. 在你的用户目录下新建一个文本文件, 名曰.git-credentials

用户目录:
```
windows: C:/Users/username
mac os x: /Users/username
linux:  /home/username
```

2. 在上一步创建的文件中输入一下内容:
```
https:{username}:{password}@github.com
```

当然上述{username}和{password}要换成你的github的账号名和密码

3. 修改git配置
```
执行命令git config --global credential.helper store
```

上述命令会在~/.gitconfig文件末尾添加如下配置:

```
[credential]
    helper = store
```

经过上述三步配置之后, 你push代码到github时, 便无需再输入用户名密码了~~


后来发现, 不用上面三步这么麻烦, 简化流程如下:

1. 在命令行输入命令:

```
git config --global credential.helper store
```
这一步会在用户目录下的.gitconfig文件最后添加:

```
[credential]
    helper = store
```
2. 现在push你的代码 (git push), 这时会让你输入用户名密码, 这一步输入的用户名密码会被记住, 下次再push代码时就不用输入用户名密码啦!

- 这一步会在用户目录下生成文件.git-credential记录用户名密码的信息.

- git config --global 命令实际上在操作用户目录下的.gitconfig文件, 我们cat一下此文件(cat .gitconfig), 其内容如下

```
[user]
    name = alice
    email = alice@aol.com
[push]
    default = simple
[credential]
    helper = store

git config --global user.email "alice@aol.com" 操作的就是上面的email
git config --global push.default matching 操作的就是上面的push段中的default字段
git config --global credential.helper store 操作的就是上面最后一行的值
```
