(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{391:function(s,t,e){"use strict";e.r(t);var i=e(43),n=Object(i.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"通过python调用top命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#通过python调用top命令"}},[s._v("#")]),s._v(" 通过python调用top命令")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("top -bi | tee cpuHistory.log\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("import os,time\n\ntime2sleep = 2.5\nwhile True:\n        print int(time.time()),\n        print os.popen('top -bi -n 2 -d 0.02').read().split('\\n\\n\\n')[1].split('\\n')[2]\n        time.sleep(time2sleep)\n")])])]),e("p",[s._v("执行效果如下：")]),s._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1591856261 Cpu(s): 71.4%us, 14.3%sy,  0.0%ni, 14.3%id,  0.0%wa,  0.0%hi,  0.0%si,  0.0%st\n1591856264 Cpu(s): 50.0%us, 33.3%sy,  0.0%ni, 16.7%id,  0.0%wa,  0.0%hi,  0.0%si,  0.0%st\n1591856267 Cpu(s): 57.1%us, 28.6%sy,  0.0%ni, 14.3%id,  0.0%wa,  0.0%hi,  0.0%si,  0.0%st\n1591856270 Cpu(s): 57.1%us, 28.6%sy,  0.0%ni, 14.3%id,  0.0%wa,  0.0%hi,  0.0%si,  0.0%st\n1591856274 Cpu(s): 66.7%us, 16.7%sy,  0.0%ni, 16.7%id,  0.0%wa,  0.0%hi,  0.0%si,  0.0%st\n1591856277 Cpu(s): 57.1%us, 14.3%sy,  0.0%ni, 28.6%id,  0.0%wa,  0.0%hi,  0.0%si,  0.0%st\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);