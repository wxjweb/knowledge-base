- [Python 列表(List)](#python-%e5%88%97%e8%a1%a8list)
  - [Python列表介绍](#python%e5%88%97%e8%a1%a8%e4%bb%8b%e7%bb%8d)
  - [访问列表中的值](#%e8%ae%bf%e9%97%ae%e5%88%97%e8%a1%a8%e4%b8%ad%e7%9a%84%e5%80%bc)
## Python 列表(List)

### Python列表介绍

序列是Python中最基本的数据结构。序列中的每个元素都分配一个数字 - 它的位置，或索引，第一个索引是0，第二个索引是1，依此类推。  
Python有6个序列的内置类型，但最常见的是列表和元组。  
序列都可以进行的操作包括索引，切片，加，乘，检查成员。  
此外，Python已经内置确定序列的长度以及确定最大和最小的元素的方法。  
列表是最常用的Python数据类型，它可以作为一个方括号内的逗号分隔值出现。  
列表的数据项不需要具有相同的类型  
创建一个列表，只要把逗号分隔的不同的数据项使用方括号括起来即可。如下所示：
```
list1 = ['physics', 'chemistry', 1997, 2000]
list2 = [1, 2, 3, 4, 5 ]
list3 = ["a", "b", "c", "d"]
```
与字符串的索引一样，列表索引从0开始。列表可以进行截取、组合等。

### 访问列表中的值
使用下标索引来访问列表中的值，同样你也可以使用方括号的形式截取字符，如下所示：
```
#!/usr/bin/python
 
list1 = ['physics', 'chemistry', 1997, 2000]
list2 = [1, 2, 3, 4, 5, 6, 7 ]
 
print "list1[0]: ", list1[0]
print "list2[1:5]: ", list2[1:5]
```
以上实例输出结果：
```
list1[0]:  physics
list2[1:5]:  [2, 3, 4, 5]
```











