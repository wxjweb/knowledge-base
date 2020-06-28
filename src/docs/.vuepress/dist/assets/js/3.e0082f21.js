(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{349:function(t,s,a){t.exports=a.p+"assets/img/011.1f8ab814.png"},350:function(t,s,a){t.exports=a.p+"assets/img/012.ba60ea31.png"},351:function(t,s,a){t.exports=a.p+"assets/img/013.d6ac5c0a.png"},352:function(t,s,a){t.exports=a.p+"assets/img/014.24d6f1ee.png"},353:function(t,s,a){t.exports=a.p+"assets/img/015.38d4f350.png"},375:function(t,s,a){"use strict";a.r(s);var e=a(43),p=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"linux中python应用cpu占用高问题排查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#linux中python应用cpu占用高问题排查"}},[t._v("#")]),t._v(" Linux中Python应用CPU占用高问题排查")]),t._v(" "),e("p",[t._v("1、通过top命令查看其CPU占用")]),t._v(" "),e("p",[e("img",{attrs:{src:a(349),alt:"img"}})]),t._v(" "),e("p",[t._v("可以看到其load占用为“20.14, 16.42, 19.16”，三个数字分别表示cpu在1分钟、5分钟及15分钟的load，cpu的使用率也偏高，达到了68.8％，占用cpu较高的进程ID为281020。")]),t._v(" "),e("p",[t._v("2、通过ps查看该应用")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ ps aux|grep 281020\nroot     212891  0.0  0.0 103328   848 pts/3    S+   15:41   0:00 grep 281020\nipcc     281020 39.5  2.6 1025560 425540 ?      Sl   01:18 341:29 /usr/bin/python ./ctiRealtimeCdrMain.py default.xml\n")])])]),e("p",[t._v("结果显示该应用为python应用。\n3、查看进程中线程的CPU占用情况")]),t._v(" "),e("p",[t._v("在top中加入-H参数，查看该进程中线程的cpu战胜情况：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ top -H -p 281020\n")])])]),e("p",[t._v("结果如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(350),alt:"img"}})]),t._v(" "),e("p",[t._v("可以看到进程281020中线程号为281042的线程战胜的CPU最多。\n4、跟踪进程的执行栈")]),t._v(" "),e("p",[t._v("通过watch和pstack命令查看线程中命令的执行情况：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("watch pstack 281042\n")])])]),e("p",[e("img",{attrs:{src:a(351),alt:"img"}})]),t._v(" "),e("p",[t._v("可以看到从mysql中读取数据占用资源较多。\n5、跟踪函数的调用")]),t._v(" "),e("p",[t._v("进一步通过strace命令进行验证：")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("$ strace -f -p 281042\n")])])]),e("p",[t._v("结果如下：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(352),alt:"img"}})]),t._v(" "),e("p",[t._v("其中大量的数据在执行数据库的写入（write）及读取（read）操作，上面的pstack命令并没有反映出write的问题，那问题应该出现在数据库的read操作上，初步猜测是数据库的select语句有问题，或者是没有走索引。\n6、检查MySql的慢日志")]),t._v(" "),e("p",[t._v("进一步检查MySql的慢日志发现：")]),t._v(" "),e("p",[e("img",{attrs:{src:a(353),alt:"img"}})]),t._v(" "),e("p",[t._v("其中有大量的查询慢日志，SQL中使用了全表扫描的count、max、min这样的函数，终于确认问题造成的原因了，余下的就是让对方对做优化了。")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"实际案例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实际案例"}},[t._v("#")]),t._v(" 实际案例")]),t._v(" "),e("p",[t._v("通过抓包分析数据发现，系统周期性的每分钟告警一次，CPU占用率较高")]),t._v(" "),e("p",[t._v("查看进程发现是统计数据库对表进行insert和delete操作。")]),t._v(" "),e("p",[t._v("业务中为snmp_server 会1分钟、10分钟、1小时定期插入stats表")]),t._v(" "),e("p",[t._v("操作的数据是从日志中统计而来。因为操作数据库时数据量较大，暂时性的占用较高资源。")])])}),[],!1,null,null,null);s.default=p.exports}}]);