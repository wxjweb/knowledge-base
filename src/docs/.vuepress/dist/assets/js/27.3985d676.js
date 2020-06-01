(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{345:function(a,t,s){"use strict";s.r(t);var e=s(33),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"linux中find命令用法汇总"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux中find命令用法汇总"}},[a._v("#")]),a._v(" Linux中find命令用法汇总")]),a._v(" "),s("p",[a._v("Linux 查找命令是Linux系统中最重要和最常用的命令之一。查找用于根据与参数匹配的文件指定的条件来搜索和查找文件和目录列表的命令。查找可以在各种条件下使用，您可以通过权限，用户，组，文件类型，日期，大小等可能的条件查找文件。\n通过这篇文章，我们以实例的形式分享我们的日常Linux查找命令体验及其用法。在本文中，我们将向您展示Linux中最常用的35查找命令示例。我们将该部分分为五个部分，从基本到提前使用find命令。")]),a._v(" "),s("ul",[s("li",[a._v("第一部分：查找名称查找文件的基本查找命令")]),a._v(" "),s("li",[a._v("第二部分：根据他们的权限查找文件")]),a._v(" "),s("li",[a._v("第三部分：基于所有者和组的搜索文件")]),a._v(" "),s("li",[a._v("第四部分：根据日期和时间查找文件和目录")]),a._v(" "),s("li",[a._v("第五部分：根据大小查找文件和目录")])]),a._v(" "),s("h2",{attrs:{id:"第一部分：查找名称查找文件的基本查找命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第一部分：查找名称查找文件的基本查找命令"}},[a._v("#")]),a._v(" 第一部分：查找名称查找文件的基本查找命令")]),a._v(" "),s("h3",{attrs:{id:"_1-使用当前目录中的名称查找文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-使用当前目录中的名称查找文件"}},[a._v("#")]),a._v(" 1.使用当前目录中的名称查找文件")]),a._v(" "),s("p",[a._v("在当前工作目录中查找名称为test.py的所有文件。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find test.py \ntest.py\n[root@iz2zeiax0dicvv2jo13gytz ~]# \n\n")])])]),s("h3",{attrs:{id:"_2-在主目录下查找文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-在主目录下查找文件"}},[a._v("#")]),a._v(" 2.在主目录下查找文件")]),a._v(" "),s("p",[a._v("查找/ home目录下的所有文件，名称为test。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find /home -name test \n")])])]),s("h3",{attrs:{id:"_3-使用名称和忽略案例查找文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用名称和忽略案例查找文件"}},[a._v("#")]),a._v(" 3.使用名称和忽略案例查找文件")]),a._v(" "),s("p",[a._v("找到名称为test的所有文件，并在/ home目录中同时包含大写和小写字母。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find /home -iname test\n")])])]),s("h3",{attrs:{id:"_4-使用名称查找目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-使用名称查找目录"}},[a._v("#")]),a._v(" 4.使用名称查找目录")]),a._v(" "),s("p",[a._v("在/目录中查找名称为test的所有目录。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find / -type d -name test\n")])])]),s("h3",{attrs:{id:"_5-使用名称查找php文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-使用名称查找php文件"}},[a._v("#")]),a._v(" 5.使用名称查找PHP文件")]),a._v(" "),s("p",[a._v("在当前工作目录中查找名为test.PHP的所有PHP文件。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find -type f -name test.php\n")])])]),s("h3",{attrs:{id:"_6-查找目录中的所有php文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-查找目录中的所有php文件"}},[a._v("#")]),a._v(" 6.查找目录中的所有PHP文件")]),a._v(" "),s("p",[a._v("查找目录中的所有php文件。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('[root@iz2zeiax0dicvv2jo13gytz ~]# find -type f -name "*.php" \n')])])]),s("h2",{attrs:{id:"第二部分：根据他们的权限查找文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第二部分：根据他们的权限查找文件"}},[a._v("#")]),a._v(" 第二部分：根据他们的权限查找文件")]),a._v(" "),s("h3",{attrs:{id:"_7-查找777个权限的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-查找777个权限的文件"}},[a._v("#")]),a._v(" 7.查找777个权限的文件")]),a._v(" "),s("p",[a._v("查找权限为777的所有文件")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find -type f -perm 0777 -print \n")])])]),s("h3",{attrs:{id:"_8-查找没有777权限的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-查找没有777权限的文件"}},[a._v("#")]),a._v(" 8.查找没有777权限的文件")]),a._v(" "),s("p",[a._v("查找所有文件未经许可777")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find / -type f ! -perm 0777\n")])])]),s("h3",{attrs:{id:"_9-查找具有644个权限的sgid文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_9-查找具有644个权限的sgid文件"}},[a._v("#")]),a._v(" 9.查找具有644个权限的SGID文件")]),a._v(" "),s("p",[a._v("查找权限设置为644的所有SGID位文件。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find / -perm 2644\n")])])]),s("h3",{attrs:{id:"_10-找到具有551权限的粘滞位文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_10-找到具有551权限的粘滞位文件"}},[a._v("#")]),a._v(" 10.找到具有551权限的粘滞位文件")]),a._v(" "),s("p",[a._v("查找权限为551的所有Sticky Bit设置文件。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find / -perm 1551\n")])])]),s("h3",{attrs:{id:"_11-查找suid文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_11-查找suid文件"}},[a._v("#")]),a._v(" 11.查找SUID文件")]),a._v(" "),s("p",[a._v("查找所有SUID集文件。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find / -perm /u=s \n")])])]),s("h3",{attrs:{id:"_12-查找sgid文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_12-查找sgid文件"}},[a._v("#")]),a._v(" 12.查找SGID文件")]),a._v(" "),s("p",[a._v("查找所有SGID设置文件")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find / -perm /u=s \n")])])]),s("h3",{attrs:{id:"_13-查找只读文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_13-查找只读文件"}},[a._v("#")]),a._v(" 13.查找只读文件")]),a._v(" "),s("p",[a._v("查找所有只读文件。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find / -perm /u=r \n")])])]),s("h3",{attrs:{id:"_14-查找可执行文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_14-查找可执行文件"}},[a._v("#")]),a._v(" 14.查找可执行文件")]),a._v(" "),s("p",[a._v("查找所有可执行文件。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find / -perm /a=x \n")])])]),s("h3",{attrs:{id:"_15-找到777个权限和chmod到644的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_15-找到777个权限和chmod到644的文件"}},[a._v("#")]),a._v(" 15.找到777个权限和Chmod到644的文件")]),a._v(" "),s("p",[a._v("查找所有777个权限文件，并使用chmod命令将权限设置为644")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find / -type f -perm 0777 -print -exec chmod 644 {} \\;\n")])])]),s("h3",{attrs:{id:"_16-找到具有777个权限的目录和chmod到755"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_16-找到具有777个权限的目录和chmod到755"}},[a._v("#")]),a._v(" 16.找到具有777个权限的目录和Chmod到755")]),a._v(" "),s("p",[a._v("查找所有777个权限目录，并使用chmod命令将权限设置为755。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find / -type d -perm 777 -print -exec chmod 755 {} \\;\n")])])]),s("h3",{attrs:{id:"_17-查找并删除单个文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_17-查找并删除单个文件"}},[a._v("#")]),a._v(" 17.查找并删除单个文件")]),a._v(" "),s("p",[a._v("找到一个名为test.c的文件并将其删除")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('[root@iz2zeiax0dicvv2jo13gytz ~]# find -type f -name "test.py" -exec rm -f {} \\;\n')])])]),s("h3",{attrs:{id:"_18-查找并删除多个文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_18-查找并删除多个文件"}},[a._v("#")]),a._v(" 18.查找并删除多个文件")]),a._v(" "),s("p",[a._v("查找和删除多个文件，如.mp3或.txt。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('[root@iz2zeiax0dicvv2jo13gytz ~]# find -type f -name "*.txt" -exec rm -f {} \\;\n[root@iz2zeiax0dicvv2jo13gytz ~]# find -type f -name "*.mp3" -exec rm -f {} \\;\n')])])]),s("h3",{attrs:{id:"_19-查找所有空文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_19-查找所有空文件"}},[a._v("#")]),a._v(" 19.查找所有空文件")]),a._v(" "),s("p",[a._v("在特定路径下查找所有空文件。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find /tmp -type f -empty \n")])])]),s("h3",{attrs:{id:"_20-查找所有空目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_20-查找所有空目录"}},[a._v("#")]),a._v(" 20.查找所有空目录")]),a._v(" "),s("p",[a._v("将特定路径下的所有空目录归档。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find /tmp -type d -empty \n")])])]),s("h3",{attrs:{id:"_21-查找所有隐藏文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_21-查找所有隐藏文件"}},[a._v("#")]),a._v(" 21.查找所有隐藏文件")]),a._v(" "),s("p",[a._v("要查找所有隐藏的文件，请使用以下命令。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('[root@iz2zeiax0dicvv2jo13gytz ~]# find /tmp -type f -name ".*"\n')])])]),s("h2",{attrs:{id:"第三部分：基于所有者和组的搜索文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第三部分：基于所有者和组的搜索文件"}},[a._v("#")]),a._v(" 第三部分：基于所有者和组的搜索文件")]),a._v(" "),s("h3",{attrs:{id:"_22-查找基于用户的单个文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_22-查找基于用户的单个文件"}},[a._v("#")]),a._v(" 22.查找基于用户的单个文件")]),a._v(" "),s("p",[a._v("在所有者root的/ root目录下查找名为test.py的所有或单个文件。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find / -user root -name test.py\n")])])]),s("h3",{attrs:{id:"_23-查找基于用户的所有文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_23-查找基于用户的所有文件"}},[a._v("#")]),a._v(" 23.查找基于用户的所有文件")]),a._v(" "),s("p",[a._v("查找~目录下属于用户neil的所有文件。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find ~ -user neil \n")])])]),s("h3",{attrs:{id:"_24-查找基于组的所有文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_24-查找基于组的所有文件"}},[a._v("#")]),a._v(" 24.查找基于组的所有文件")]),a._v(" "),s("p",[a._v("查找/home目录下属于Group Developer的所有文件。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find /home -group developer \n")])])]),s("h3",{attrs:{id:"_25-查找用户的特定文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_25-查找用户的特定文件"}},[a._v("#")]),a._v(" 25.查找用户的特定文件")]),a._v(" "),s("p",[a._v("查找~目录下的用户neil的所有.txt文件")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v('[root@iz2zeiax0dicvv2jo13gytz ~]# find ~ -user neil -iname "*.c"\n')])])]),s("h2",{attrs:{id:"第四部分：根据日期和时间查找文件和目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第四部分：根据日期和时间查找文件和目录"}},[a._v("#")]),a._v(" 第四部分：根据日期和时间查找文件和目录")]),a._v(" "),s("h3",{attrs:{id:"_26-查找最近50天访问的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_26-查找最近50天访问的文件"}},[a._v("#")]),a._v(" 26.查找最近50天访问的文件")]),a._v(" "),s("p",[a._v("查找50天后访问的所有文件。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find / -atime 50\n")])])]),s("h3",{attrs:{id:"_27-查找最后50-100天修改的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_27-查找最后50-100天修改的文件"}},[a._v("#")]),a._v(" 27.查找最后50-100天修改的文件")]),a._v(" "),s("p",[a._v("查找所有被修改超过50天以及少于100天的文件。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find / -mtime +50 -mtime -100\n")])])]),s("h3",{attrs:{id:"_28-在过去1小时内查找更改的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_28-在过去1小时内查找更改的文件"}},[a._v("#")]),a._v(" 28.在过去1小时内查找更改的文件")]),a._v(" "),s("p",[a._v("查找最近1小时内更改的所有文件")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find / -cmin -60\n")])])]),s("h3",{attrs:{id:"_20-在最近1小时内查找修改的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_20-在最近1小时内查找修改的文件"}},[a._v("#")]),a._v(" 20.在最近1小时内查找修改的文件")]),a._v(" "),s("p",[a._v("查找最近1小时内修改的所有文件。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find / -mmin -60\n")])])]),s("h3",{attrs:{id:"_30-查找最近1小时内访问的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_30-查找最近1小时内访问的文件"}},[a._v("#")]),a._v(" 30.查找最近1小时内访问的文件")]),a._v(" "),s("p",[a._v("查找最近1小时内访问的所有文件")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find / -amin -60\n")])])]),s("h2",{attrs:{id:"第五部分：根据大小查找文件和目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#第五部分：根据大小查找文件和目录"}},[a._v("#")]),a._v(" 第五部分：根据大小查找文件和目录")]),a._v(" "),s("h3",{attrs:{id:"_31-找到50mb的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_31-找到50mb的文件"}},[a._v("#")]),a._v(" 31.找到50MB的文件")]),a._v(" "),s("p",[a._v("要找到所有50MB的文件，请使用。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find / -size 50M \n")])])]),s("h3",{attrs:{id:"_32-查找大小在50mb到100mb之间"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_32-查找大小在50mb到100mb之间"}},[a._v("#")]),a._v(" 32.查找大小在50MB到100MB之间")]),a._v(" "),s("p",[a._v("找到大于50MB且小于100MB的所有文件。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find / -size +50M -size -100M \n")])])]),s("h3",{attrs:{id:"_33-查找并删除100mb的文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_33-查找并删除100mb的文件"}},[a._v("#")]),a._v(" 33.查找并删除100MB的文件")]),a._v(" "),s("p",[a._v("查找所有100MB文件并使用一个命令删除它们。")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find / -size 100M -exec rm -rf {} \\;\n")])])]),s("h3",{attrs:{id:"_34-查找特定文件并删除"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_34-查找特定文件并删除"}},[a._v("#")]),a._v(" 34.查找特定文件并删除")]),a._v(" "),s("p",[a._v("查找超过10MB的所有.mp3文件，并使用一个命令删除它们")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("[root@iz2zeiax0dicvv2jo13gytz ~]# find / -type -name *.mp3 -size +10M -exec rm {} \\;\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);