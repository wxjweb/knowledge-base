// .vuepress/config.js
module.exports = {
    title: '知识库',
    description: '知识库',
    themeConfig: {
        nav: [
            {
                text: 'python',
                link: '/python/'
            },
            {
                text: '其他',
                items: [
                    { 
                        text: 'talk',
                        link: "/talk"
                    },
                    {
                        text: 'other',
                        link: "/other/"
                    }
                ]
            },
            {
                text: 'FAQ',
                link: 'https://github.com/wxjweb'
            },
        ],
        sidebar: {
            "/": getRootSidebar(),
            // '/all/': getAllSidebar(),
            // '/ga/': getGaSidebar(),
            // '/extra/': getExtraSidebar()
        }
    }
};

function getRootSidebar() {
    return [
        {
            title: "welcome", //侧边栏名称
            collapsable: true, //可折叠
            sidebarDepth: 3,
            children: [
                ['/welcome/brief introduction', "brief introduction"],
            ]
        },
        {
            title: "Python", //侧边栏名称
            collapsable: true, //可折叠
            sidebarDepth: 3,
            children: [
                ['/python/python_string', "python 字符串(string)"], // 你的md文件地址, 页面显示的HTML名称
                ['/python/python_list', "python 列表(list)"], 
                ['/python/python_dict', "python 字典(dict)"],
                ['/python/python_set', "python 集合(set)"],
                ['/python/通过python调用top命令', "通过python调用top命令"],
                ['/python/新冠疫情数据爬取', "新冠疫情数据爬取"],
            ]
        },
        {
            title: "Frame", //侧边栏名称
            collapsable: true, //可折叠
            sidebarDepth: 3,
            children: [
                ['/frame/django rest framework', "DRF首页"], // 你的md文件地址, 页面显示的HTML名称
                ['/frame/RESTful 架构基础', "RESTful 架构基础"],
            ]
        },
        {
            title: "Linux", //侧边栏名称
            collapsable: true, //可折叠
            sidebarDepth: 3,
            children: [
                ['/linux/cd', "cd命令"], // 你的md文件地址, 页面显示的HTML名称
                ['/linux/cat', "cat命令"],
                ['/linux/Linux中find命令用法汇总', "Linux中find命令用法汇总"],
                ['/linux/linux 系统监控、诊断工具之 top 详解', "linux 系统监控、诊断工具之 top 详解"],
                ['/linux/Linux中Python应用CPU占用高问题排查', "Linux中Python应用CPU占用高问题排查"],
                ['/linux/shell $ 变量和命令行参数', "shell $ 命令和命令行参数"],
                ['/linux/shell sed', "shell sed"],
            ]
        },
        {
            title: "DB", //侧边栏名称
            collapsable: true, //可折叠
            sidebarDepth: 3,
            children: [
                ['/db/PostgreSQL序列', "PostgreSQL序列(SEQUENCE)"], // 你的md文件地址, 页面显示的HTML名称
                ['/db/PostgreSQL按照自定义字段值顺序排序', "PostgreSQL按照自定义(字段值)顺序排序"],
                ['/db/PostgreSQL upsert功能insert on conflict do的用法', "PostgreSQL upsert功能(insert on conflict do)的用法"],
            ]
        },
        {
            title: "Leetcode", //侧边栏名称
            collapsable: true, //可折叠
            sidebarDepth: 3,
            children: [
                ['/leetcode/20200606 无重复字符的最长子串', "20200606 无重复字符的最长子串"], // 你的md文件地址, 页面显示的HTML名称
            ]
        },
        {
            title: "Tools", //侧边栏名称
            collapsable: true, //可折叠
            sidebarDepth: 3,
            children: [
                ['/tools/Pycharm快捷键', "Pycharm快捷键"],  // 你的md文件地址, 页面显示的HTML名称
                ['/tools/samba协议过期', "此共享需要过时的SMB1协议，而此协议是不安全的"],
                ['/tools/centos锁定文件失败导致打不开虚拟机', "centos锁定文件失败导致打不开虚拟机"],
                ['/tools/git_common_commands', "Git常用命令"],
                ['/tools/git_checkout_branch', "git创建分支并关联远程分支"],
                ['/tools/github_always_need_password', "解决向github提交代码总是要输入用户名密码"],
                ['/tools/git_error_info_solutions', "git错误信息解决方法"],
                ['/tools/markdown小语法', "markdown小语法"], 
                ['/tools/markdown插入表格语法', "markdown插入表格语法"],
                //['/tools/01 获取配置并写入文件', "获取配置并写入文件"],
                //['/tools/02 devmd与bad', "devmd与bad"],
            ]
        },
        {
            title: "Other", //侧边栏名称
            collapsable: true, //可折叠
            sidebarDepth: 3,
            children: [
                ['/Other/messages', "messages"],  // 你的md文件地址, 页面显示的HTML名称
            ]
        }
    ]
}

// function getAllSidebar() {
//     return [
//         {
//             title: "all", //侧边栏名称
//             collapsable: true, //可折叠
//             sidebarDepth: 3,
//             children: [
//                 ['pdt', "all-pdt"],
//                 ['pdt2', "all-pdt2"],
//             ]
//         }
//     ]
// }

// function getGaSidebar() {
//     return [
//         {
//             title: "通用", //侧边栏名称
//             collapsable: true, //可折叠
//             sidebarDepth: 3,
//             children: [
//                 ['/ga/docker', "docker知识"],
//                 ['/ga/git', "git知识"],
//                 ['/ga/linux', "linux知识"],
//                 ['/ga/markdown', "markdown知识"],
//             ]
//         }
//     ]
// }

// function getExtraSidebar() {
//     return [
//         {
//             title: "other", //侧边栏名称
//             collapsable: true, //可折叠
//             sidebarDepth: 3,
//             children: [
//                 ['/extra/talk', "留言的地方"],
//             ]
//         }
//     ]
// }

