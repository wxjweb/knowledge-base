### 背景

PostgreSQL 9.5 引入了一项新功能，UPSERT(insert on conflict do)，当插入遇到约束错误时，直接返回，或者改为执行UPDATE。

### 语法如下

```
Command:     INSERT  
Description: create new rows in a table  
Syntax:  
[ WITH [ RECURSIVE ] with_query [, ...] ]  
INSERT INTO table_name [ AS alias ] [ ( column_name [, ...] ) ]  
    { DEFAULT VALUES | VALUES ( { expression | DEFAULT } [, ...] ) [, ...] | query }  
    [ ON CONFLICT [ conflict_target ] conflict_action ]  
    [ RETURNING * | output_expression [ [ AS ] output_name ] [, ...] ]  
  
where conflict_target can be one of:  
  
    ( { index_column_name | ( index_expression ) } [ COLLATE collation ] [ opclass ] [, ...] ) [ WHERE index_predicate ]  
    ON CONSTRAINT constraint_name  
  
and conflict_action is one of:  
  
    DO NOTHING  
    DO UPDATE SET { column_name = { expression | DEFAULT } |  
                    ( column_name [, ...] ) = ( { expression | DEFAULT } [, ...] ) |  
                    ( column_name [, ...] ) = ( sub-SELECT )  
                  } [, ...]  
              [ WHERE condition ]  
```

PostgreSQL 9.5以前的版本，可以通过函数，或者with语法来实现UPSERT类似的功能。

### 9.5+ UPSERT用法举例

创建一张测试表，其中一个字段为唯一键或者主键。

```
create table test(id int primary key, info text, crt_time timestamp);  
```
1. 不存在则插入，存在则更新

```
test03=# insert into test values (1,'test',now()) on conflict (id) do update set info=excluded.info,crt_time=excluded.crt_time;  
INSERT 0 1  
  
test03=# select * from test;  
 id | info |          crt_time            
----+------+----------------------------  
  1 | test | 2017-04-24 15:27:25.393948  
(1 row)  
  
test03=# insert into test values (1,'hello digoal',now()) on conflict (id) do update set info=excluded.info,crt_time=excluded.crt_time;  
INSERT 0 1  
  
test03=# select * from test;  
 id |     info     |          crt_time            
----+--------------+----------------------------  
  1 | hello digoal | 2017-04-24 15:27:39.140877  
(1 row)  
```

2. 不存在则插入，存在则直接返回(不做任何处理)

```
test03=# insert into test values (1,'hello digoal',now()) on conflict (id) do nothing;  
INSERT 0 0  
test03=# insert into test values (1,'pu',now()) on conflict (id) do nothing;  
INSERT 0 0  
test03=# insert into test values (2,'pu',now()) on conflict (id) do nothing;  
INSERT 0 1  
test03=# select * from test;  
 id |     info     |          crt_time            
----+--------------+----------------------------  
  1 | hello digoal | 2017-04-24 15:27:39.140877  
  2 | pu           | 2017-04-24 15:28:20.37392  
(2 rows)  
```

### 9.5- UPSERT用法举例

用户可以根据实际需求，使用不同的方法

1. 函数

```
test03=# create or replace function f_upsert(int,text,timestamp) returns void as $$  
declare  
  res int;  
begin  
  update test set info=$2,crt_time=$3 where id=$1;  
  if not found then  
    insert into test (id,info,crt_time) values ($1,$2,$3);  
  end if;  
  exception when others then  
    return;  
end;  
$$ language plpgsql strict;  
CREATE FUNCTION  
  
test03=# select f_upsert(1,'digoal',now()::timestamp);  
 f_upsert   
----------  
   
(1 row)  
  
test03=# select * from test;  
 id |  info  |          crt_time            
----+--------+----------------------------  
  2 | pu     | 2017-04-24 15:28:20.37392  
  1 | digoal | 2017-04-24 15:31:29.254325  
(2 rows)  
  
test03=# select f_upsert(1,'digoal001',now()::timestamp);  
 f_upsert   
----------  
   
(1 row)  
  
test03=# select * from test;  
 id |   info    |         crt_time            
----+-----------+---------------------------  
  2 | pu        | 2017-04-24 15:28:20.37392  
  1 | digoal001 | 2017-04-24 15:31:38.0529  
(2 rows)  
  
test03=# select f_upsert(3,'hello',now()::timestamp);  
 f_upsert   
----------  
   
(1 row)  
  
test03=# select * from test;  
 id |   info    |         crt_time            
----+-----------+---------------------------  
  2 | pu        | 2017-04-24 15:28:20.37392  
  1 | digoal001 | 2017-04-24 15:31:38.0529  
  3 | hello     | 2017-04-24 15:31:49.14291  
(3 rows)  
```
2. WITH语法，用法1

```
create table test(id int primary key, info text, crt_time timestamp); 
```
存在则更新，不存在则插入。

```
with upsert as (update test set info=$info,crt_time=$crt_time where id=$id returning *) insert into test select $id,$info,$crt_time where not exists (select 1 from upsert where id=$id); 
```
替换变量，进行测试

```
with upsert as (update test set info='test',crt_time=now() where id=1 returning *) insert into test select 1,'test',now() where not exists (select 1 from upsert where id=1);    
```
同时插入一条不存在的值，只有一个会话成功，另一个会话会报PK约束错误。

3. WITH语法，用法2

即使表没有PK或者唯一约束，也能保证并发。

```
create table test(id int, info text, crt_time timestamp);  
```
3.1 对于记录不存在，可以保证只有一个session插入数据，对于同一条数据更新，先来的session会lock着记录，后来的session会wait。

```
with     
  w1 as(select ('x'||substr(md5('$id'),1,16))::bit(64)::bigint as tra_id),    
  upsert as (update test set info=$info,crt_time=$crt_time where id=$id returning *)    
  insert into test select $id, $info, $crt_time from w1     
    where pg_try_advisory_xact_lock(tra_id) and not exists (select 1 from upsert where id=$id);    
```

替换变量，进行测试

```
with     
  w1 as(select ('x'||substr(md5('1'),1,16))::bit(64)::bigint as tra_id),    
  upsert as (update test set info='digoal0123',crt_time=now() where id=1 returning *)    
  insert into test select 1, 'digoal0123', now() from w1     
    where pg_try_advisory_xact_lock(tra_id) and not exists (select 1 from upsert where id=1);    
  
INSERT 0 0  
  
test03=# select * from test;  
 id |    info    |         crt_time            
----+------------+---------------------------  
  2 | pu         | 2017-04-24 15:28:20.37392  
  3 | hello      | 2017-04-24 15:31:49.14291  
  1 | digoal0123 | 2017-04-24 15:31:38.0529  
(3 rows)  
  
with     
  w1 as(select ('x'||substr(md5('4'),1,16))::bit(64)::bigint as tra_id),    
  upsert as (update test set info='digoal0123',crt_time=now() where id=4 returning *)    
  insert into test select 4, 'digoal0123', now() from w1     
    where pg_try_advisory_xact_lock(tra_id) and not exists (select 1 from upsert where id=4);    
  
INSERT 0 1  
  
test03=# select * from test;  
 id |    info    |          crt_time            
----+------------+----------------------------  
  2 | pu         | 2017-04-24 15:28:20.37392  
  3 | hello      | 2017-04-24 15:31:49.14291  
  1 | digoal0123 | 2017-04-24 15:31:38.0529  
  4 | digoal0123 | 2017-04-24 15:38:39.801908  
(4 rows)  
```

3.2 对于记录不存在，可以保证只有一个session插入数据，对于同一条数据更新，先来的session会更新数据，后来的session不等待，直接失败。

```
with w1 as(select ('x'||substr(md5('$id'),1,16))::bit(64)::bigint as tra_id),    
  upsert as (update test set info=$info,crt_time=$crt_time from w1 where pg_try_advisory_xact_lock(tra_id) and id=$id returning *)    
  insert into test select $id,$info,$crt_time from w1   
    where pg_try_advisory_xact_lock(tra_id) and not exists (select 1 from upsert where id=$id);     
```

替换变量，进行测试

```
with w1 as(select ('x'||substr(md5('1'),1,16))::bit(64)::bigint as tra_id),    
  upsert as (update test set info='test',crt_time=now() from w1 where pg_try_advisory_xact_lock(tra_id) and id=1 returning *)    
  insert into test select 1,'test',now() from w1   
    where pg_try_advisory_xact_lock(tra_id) and not exists (select 1 from upsert where id=1);    
  
INSERT 0 0  
  
test03=# select * from test;  
 id |    info    |          crt_time            
----+------------+----------------------------  
  2 | pu         | 2017-04-24 15:28:20.37392  
  3 | hello      | 2017-04-24 15:31:49.14291  
  4 | digoal0123 | 2017-04-24 15:42:50.912887  
  1 | test       | 2017-04-24 15:44:44.245167  
(4 rows)  
```
