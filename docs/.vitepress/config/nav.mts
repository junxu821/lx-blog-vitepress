import { DefaultTheme } from 'vitepress';
export const nav: DefaultTheme.NavItem[] = [
    {
        text: '首页',
        link: '/',
    },
    {
        text: '前端开发',
        items: [
            {
                text: 'HTML',
                link: '/frontend/html/',
            },
            {
                text: 'CSS',
                link: '/frontend/css/',
            },
            {
                text: 'Javascript',
                link: '/frontend/js/',
            },
            {
                text: 'Typescript',
                link: '/frontend/ts/',
            },
           
            {
                text: 'Vue',
                link: '/frontend/vue/',
            },
            {
                text: 'React',
                link: '/frontend/react/',
            },
            {
                text: 'Webpack',
                link: '/frontend/webpack/',
            },
            {
                text: '浏览器',
                link: '/frontend/browser/',
            },
        ],
    },
    {
        text: '后端开发',
        items: [
            {
                text: 'Java',
                link: '/backend/java/',
            },
            {
                text: 'Golang',
                link: '/backend/golang/',
            },
            {
                text: 'Node',
                link: '/backend/nodeJs/',
            },
            {
                text: 'Python',
                link: '/backend/python/',
            },
            {
                text: 'MySQL',
                link: '/backend/mysql/',
            },
            {
                text: 'Redis',
                link: '/backend/redis/',
            },
        ],
    },
    {
        text: '计算机基础',
        items: [
            {
                text: '数据结构与算法',
                link: '/basics/algorithm/',
            },
            {
                text: '计算机网络',
                link: '/basics/net/',
            },
            {
                text: '操作系统',
                link: '/basics/os/',
            },
        ],
    },
    {
        text: '关于我',
        items: [
            { text: 'Github', link: 'https://github.com/xvjun821' },
            { text: 'Gitee', link: 'https://gitee.com/xv_jun' },
            { text: 'Lx博客', link: 'http://xjlyh.site/' },
            
        ],
    }

]