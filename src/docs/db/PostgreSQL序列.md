# PostgreSQL 序列（SEQUENCE）

一、简介

序列对象（也叫序列生成器）就是用CREATE SEQUENCE 创建的特殊的单行表。一个序列对象通常用于为行或者表生成唯一的标识符。

二、创建序列

方法一：直接在表中指定字段类型为serial 类型

```
david=# create table tbl_xulie (
david(# id serial,
david(# name text);
NOTICE:  CREATE TABLE will create implicit sequence "tbl_xulie_id_seq" for serial column "tbl_xulie.id"
CREATE TABLE
david=#
```

方法二：先创建序列名称，然后在新建的表中列属性指定序列就可以了，该列需int 类型

创建序列的语法：
```

CREATE [ TEMPORARY | TEMP ] SEQUENCE name [ INCREMENT [ BY ] increment ]
    [ MINVALUE minvalue | NO MINVALUE ] [ MAXVALUE maxvalue | NO MAXVALUE ]
    [ START [ WITH ] start ] [ CACHE cache ] [ [ NO ] CYCLE ]
    [ OWNED BY { table.column | NONE } ]


```

实例：
```
david=# create sequence tbl_xulie2_id_seq increment by 1 minvalue 1 no maxvalue start with 1;     
CREATE SEQUENCE
david=#
```

```
david=# create table tbl_xulie2 (
david(# id int4 not null default nextval('tbl_xulie2_id_seq'),
david(# name text);
CREATE TABLE
david=# 
```
三、查看序列

```
david=# \d tbl_xulie
                         Table "public.tbl_xulie"
 Column |  Type   |                       Modifiers                        
--------+---------+--------------------------------------------------------
 id     | integer | not null default nextval('tbl_xulie_id_seq'::regclass)
 name   | text    | 

david=# \d tbl_xulie2
                         Table "public.tbl_xulie2"
 Column |  Type   |                        Modifiers                        
--------+---------+---------------------------------------------------------
 id     | integer | not null default nextval('tbl_xulie2_id_seq'::regclass)
 name   | text    | 

david=#
```
查看序列属性


```
复制代码

david=# \d tbl_xulie_id_seq
      Sequence "public.tbl_xulie_id_seq"
    Column     |  Type   |        Value        
---------------+---------+---------------------
 sequence_name | name    | tbl_xulie_id_seq
 last_value    | bigint  | 1
 start_value   | bigint  | 1
 increment_by  | bigint  | 1
 max_value     | bigint  | 9223372036854775807
 min_value     | bigint  | 1
 cache_value   | bigint  | 1
 log_cnt       | bigint  | 0
 is_cycled     | boolean | f
 is_called     | boolean | f
Owned by: public.tbl_xulie.id

david=#
```

```
david=# select * from tbl_xulie2_id_seq;
   sequence_name   | last_value | start_value | increment_by |      max_value      | min_value | cache_value | log_cnt | is_cycled | is_called 
-------------------+------------+-------------+--------------+---------------------+-----------+-------------+---------+-----------+-----------
 tbl_xulie2_id_seq |          1 |           1 |            1 | 9223372036854775807 |         1 |           1 |       0 | f         | f
(1 row)

david=# 
```
四、序列应用

4.1 在INSERT 命令中使用序列

```
david=# insert into tbl_xulie values (nextval('tbl_xulie_id_seq'), 'David');      
INSERT 0 1
david=# insert into tbl_xulie values (nextval('tbl_xulie_id_seq'), 'Sandy');
INSERT 0 1
david=# select * from tbl_xulie;
 id | name  
----+-------
  1 | David
  2 | Sandy
(2 rows)

david=# 
```
4.2 数据迁移后更新序列

```
david=# truncate tbl_xulie;
TRUNCATE TABLE
david=# 
david=# insert into tbl_xulie values (nextval('tbl_xulie_id_seq'), 'Sandy');
INSERT 0 1
david=# insert into tbl_xulie values (nextval('tbl_xulie_id_seq'), 'David');
INSERT 0 1
david=# insert into tbl_xulie values (nextval('tbl_xulie_id_seq'), 'Eagle');
INSERT 0 1
david=# insert into tbl_xulie values (nextval('tbl_xulie_id_seq'), 'Miles');
INSERT 0 1
david=# insert into tbl_xulie values (nextval('tbl_xulie_id_seq'), 'Simon');
INSERT 0 1
david=# insert into tbl_xulie values (nextval('tbl_xulie_id_seq'), 'Rock'); 
INSERT 0 1
david=# insert into tbl_xulie values (nextval('tbl_xulie_id_seq'), 'Peter');
INSERT 0 1
david=# insert into tbl_xulie values (nextval('tbl_xulie_id_seq'), 'Sally');
INSERT 0 1
david=# insert into tbl_xulie values (nextval('tbl_xulie_id_seq'), 'Nicole');
INSERT 0 1
david=# insert into tbl_xulie values (nextval('tbl_xulie_id_seq'), 'Monica');
INSERT 0 1
david=# insert into tbl_xulie values (nextval('tbl_xulie_id_seq'), 'Renee'); 
INSERT 0 1
david=# select * from tbl_xulie;
 id |  name  
----+--------
 15 | Sandy
 16 | David
 17 | Eagle
 18 | Miles
 19 | Simon
 20 | Rock
 21 | Peter
 22 | Sally
 23 | Nicole
 24 | Monica
 25 | Renee
(11 rows)

david=# copy tbl_xulie to '/tmp/tbl_xulie.sql';
COPY 11
david=# truncate tbl_xulie;
TRUNCATE TABLE
david=# alter sequence tbl_xulie_id_seq restart with 100;
ALTER SEQUENCE
david=# select currval('tbl_xulie_id_seq');
 currval 
---------
      25
(1 row)

david=# select nextval('tbl_xulie_id_seq');
 nextval 
---------
     100
(1 row)

david=# select nextval('tbl_xulie_id_seq');
 nextval 
---------
     101
(1 row)

david=# begin;
BEGIN
david=# copy tbl_xulie from '/tmp/tbl_xulie.sql';
COPY 11
david=# select setval('tbl_xulie_id_seq', max(id)) from tbl_xulie;
 setval 
--------
     25
(1 row)

david=# end;
COMMIT
david=# insert into tbl_xulie values (nextval('tbl_xulie_id_seq'), 'Flash');
INSERT 0 1
david=# select * from tbl_xulie;
 id |  name  
----+--------
 15 | Sandy
 16 | David
 17 | Eagle
 18 | Miles
 19 | Simon
 20 | Rock
 21 | Peter
 22 | Sally
 23 | Nicole
 24 | Monica
 25 | Renee
 26 | Flash
(12 rows)

david=# select nextval('tbl_xulie_id_seq');
 nextval 
---------
      27
(1 row)

david=#
```
五、序列函数

下面序列函数，为我们从序列对象中获取最新的序列值提供了简单和并发读取安全的方法。

![image](https://note.youdao.com/yws/public/resource/2a20757ad59ce9e71b04a45b83d5d74a/xmlnote/F3C08D7FBF384DB7B30D40E8F790EAA9/9444)

5.1 查看下一个序列值

```
david=# select nextval('tbl_xulie_id_seq');
 nextval 
---------
       3
(1 row)

david=# select nextval('tbl_xulie_id_seq');
 nextval 
---------
       4
(1 row)

david=# 
```
5.2 查看序列最近使用值

```
david=# select nextval('tbl_xulie_id_seq');
 nextval 
---------
       4
(1 row)

david=# select currval('tbl_xulie_id_seq');
 currval 
---------
       4
(1 row)

david=# select currval('tbl_xulie_id_seq');
 currval 
---------
       4
(1 row)

david=# 
```

5.3 重置序列

方法一：使用序列函数

a. setval(regclass, bigint)

```
david=# truncate tbl_xulie;
TRUNCATE TABLE
david=# select setval('tbl_xulie_id_seq', 1);
 setval 
--------
      1
(1 row)

david=# insert into tbl_xulie values (nextval('tbl_xulie_id_seq'), 'Sandy');                  
INSERT 0 1
david=# insert into tbl_xulie values (nextval('tbl_xulie_id_seq'), 'David');     
INSERT 0 1
david=# select * from tbl_xulie;
 id | name  
----+-------
  2 | Sandy
  3 | David
(2 rows)

david=# select currval('tbl_xulie_id_seq');
 currval 
---------
       3
(1 row)

david=# select nextval('tbl_xulie_id_seq');
 nextval 
---------
       4
(1 row)

david=# 
```
b. setval(regclass, bigint, boolean)

b.1 setval(regclass, bigint, true)


```
david=# truncate tbl_xulie;
TRUNCATE TABLE
david=# select setval('tbl_xulie_id_seq', 1, true);
 setval 
--------
      1
(1 row)

david=# insert into tbl_xulie values (nextval('tbl_xulie_id_seq'), 'Sandy');
INSERT 0 1
david=# insert into tbl_xulie values (nextval('tbl_xulie_id_seq'), 'David');
INSERT 0 1
david=# select * from tbl_xulie;
 id | name  
----+-------
  2 | Sandy
  3 | David
(2 rows)

david=#
```
效果同a. setval(regclass, bigint)

b.2 setval(regclass, bigint, false)


```
david=# truncate tbl_xulie;
TRUNCATE TABLE
david=# select setval('tbl_xulie_id_seq', 1, false);
 setval 
--------
      1
(1 row)

david=# insert into tbl_xulie values (nextval('tbl_xulie_id_seq'), 'Sandy');
INSERT 0 1
david=# insert into tbl_xulie values (nextval('tbl_xulie_id_seq'), 'David');
INSERT 0 1
david=# select * from tbl_xulie;
 id | name  
----+-------
  1 | Sandy
  2 | David
(2 rows)

david=# 

复制代码
```
方法二：修改序列

修改序列的语法：

```
ALTER SEQUENCE name [ INCREMENT [ BY ] increment ]
    [ MINVALUE minvalue | NO MINVALUE ] [ MAXVALUE maxvalue | NO MAXVALUE ]
    [ START [ WITH ] start ]
    [ RESTART [ [ WITH ] restart ] ]
    [ CACHE cache ] [ [ NO ] CYCLE ]
    [ OWNED BY { table.column | NONE } ]
ALTER SEQUENCE name OWNER TO new_owner
ALTER SEQUENCE name RENAME TO new_name
ALTER SEQUENCE name SET SCHEMA new_schema
```

实例：

```
david=# truncate tbl_xulie;
TRUNCATE TABLE
david=# alter sequence tbl_xulie_id_seq restart with 0;
ERROR:  RESTART value (0) cannot be less than MINVALUE (1)
david=# alter sequence tbl_xulie_id_seq restart with 1;
ALTER SEQUENCE
david=# insert into tbl_xulie values (nextval('tbl_xulie_id_seq'), 'David');
INSERT 0 1
david=# insert into tbl_xulie values (nextval('tbl_xulie_id_seq'), 'Sandy');
INSERT 0 1
david=# select * from tbl_xulie;
 id | name  
----+-------
  1 | David
  2 | Sandy
(2 rows)

david=# select nextval('tbl_xulie_id_seq');
 nextval 
---------
       3
(1 row)

david=# 
```
六、删除序列

语法：

```
DROP SEQUENCE [ IF EXISTS ] name [, ...] [ CASCADE | RESTRICT ]
```
当有表字段使用到PG序列时，不能直接删除。

```
david=# drop sequence tbl_xulie2_id_seq;
ERROR:  cannot drop sequence tbl_xulie2_id_seq because other objects depend on it
DETAIL:  default for table tbl_xulie2 column id depends on sequence tbl_xulie2_id_seq
HINT:  Use DROP ... CASCADE to drop the dependent objects too.
david=# drop table tbl_xulie2;
DROP TABLE
david=# drop sequence tbl_xulie2_id_seq;
DROP SEQUENCE
david=# 
```
说明：对于序列是由建表时指定serial 创建的，删除该表的同时，对应的序列也会被删除。
