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
                        link: "/extra/"
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
                ['/python/新冠疫情数据爬取', "新冠疫情数据爬取"],
            ]
        },
        {
            title: "Django", //侧边栏名称
            collapsable: true, //可折叠
            sidebarDepth: 3,
            children: [
                ['/django/django rest framework', "DRF首页"], // 你的md文件地址, 页面显示的HTML名称
                ['/django/RESTful 架构基础', "RESTful 架构基础"],
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
            ]
        },
        {
            title: "Shell", //侧边栏名称
            collapsable: true, //可折叠
            sidebarDepth: 3,
            children: [
                ['/shell/shell $ 变量和命令行参数', "shell $ 命令和命令行参数"], // 你的md文件地址, 页面显示的HTML名称
                ['/shell/shell sed', "shell sed"],
            ]
        },
        {
            title: "每日力扣", //侧边栏名称
            collapsable: true, //可折叠
            sidebarDepth: 3,
            children: [
                ['/docker/20200606无重复字符的最长子串', "20200606 无重复字符的最长子串"], // 你的md文件地址, 页面显示的HTML名称
                ['/docker/docker相关的小技巧', "docker相关的小技巧"],
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
                ['/git-svn/git_common_commands', "Git常用命令"],
                ['/git-svn/git_checkout_branch', "git创建分支并关联远程分支"],
                ['/git-svn/github_always_need_password', "解决向github提交代码总是要输入用户名密码"],
                ['/git-svn/git_error_info_solutions', "git错误信息解决方法"],
                ['/markdown/markdown小语法', "markdown小语法"], 
                ['/markdown/markdown插入表格语法', "markdown插入表格语法"],
                //['/tools/01 获取配置并写入文件', "获取配置并写入文件"],
                //['/tools/02 devmd与bad', "devmd与bad"],
            ]
        },
        {
            title: "talk", //侧边栏名称
            collapsable: true, //可折叠
            sidebarDepth: 3,
            children: [
                ['/talk', "talk"],  // 你的md文件地址, 页面显示的HTML名称
            ]
        },
        {
            title: "other", //侧边栏名称
            collapsable: true, //可折叠
            sidebarDepth: 3,
            children: [
                ['/extra/messages', "messages"],  // 你的md文件地址, 页面显示的HTML名称
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

