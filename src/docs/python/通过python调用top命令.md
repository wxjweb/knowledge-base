# 通过python调用top命令

```
top -bi | tee cpuHistory.log
```

```
import os,time

time2sleep = 2.5
while True:
        print int(time.time()),
        print os.popen('top -bi -n 2 -d 0.02').read().split('\n\n\n')[1].split('\n')[2]
        time.sleep(time2sleep)
```

执行效果如下：
```
1591856261 Cpu(s): 71.4%us, 14.3%sy,  0.0%ni, 14.3%id,  0.0%wa,  0.0%hi,  0.0%si,  0.0%st
1591856264 Cpu(s): 50.0%us, 33.3%sy,  0.0%ni, 16.7%id,  0.0%wa,  0.0%hi,  0.0%si,  0.0%st
1591856267 Cpu(s): 57.1%us, 28.6%sy,  0.0%ni, 14.3%id,  0.0%wa,  0.0%hi,  0.0%si,  0.0%st
1591856270 Cpu(s): 57.1%us, 28.6%sy,  0.0%ni, 14.3%id,  0.0%wa,  0.0%hi,  0.0%si,  0.0%st
1591856274 Cpu(s): 66.7%us, 16.7%sy,  0.0%ni, 16.7%id,  0.0%wa,  0.0%hi,  0.0%si,  0.0%st
1591856277 Cpu(s): 57.1%us, 14.3%sy,  0.0%ni, 28.6%id,  0.0%wa,  0.0%hi,  0.0%si,  0.0%st
```
