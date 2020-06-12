###  按照指定顺序排序
```
select * from person
order by case constellation
	when '白羊' then 1
	when '金牛' then 2
	when '双子' then 3
	when '巨蟹' then 4
	when '狮子' then 5
	when '处女' then 6
	when '天秤' then 7
	when '天蝎' then 8
	when '射手' then 9
	when '摩羯' then 10
	when '水瓶' then 11
	when '双鱼' then 12 end desc
```


```
SELECT * FROM log_alarm
 ORDER BY case severity 
 when 'high' then 2 
 when 'medium' then 1 
 when 'low' then 0 end desc
```
