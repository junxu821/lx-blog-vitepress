import { DefaultTheme } from "vitepress";
export const webpackSidebar: DefaultTheme.Sidebar = {
  "/frontend/webpack/": [
    // 开发模式
    {
      text: "开发环境配置",
      collapsed: false,
      items: [
        {
          text: "01.webpack的作用",
          link: "/frontend/webpack/index",
        },
        {
          text: "02.基本使用",
          link: "/frontend/webpack/02.基本使用",
        },
        {
          text: "03.基本配置",
          link: "/frontend/webpack/03.基本配置",
        },
        {
          text: "04.开发模式介绍",
          link: "/frontend/webpack/04.开发模式介绍",
        },
        {
          text: "05.处理样式资源",
          link: "/frontend/webpack/05.处理样式资源",
        },
        {
          text: "06.处理图片资源",
          link: "/frontend/webpack/06.处理图片资源",
        },
        {
          text: "07.修改输出资源的名称和路径",
          link: "/frontend/webpack/07.修改输出资源的名称和路径",
        },
        {
          text: "08.处理字体图标资源",
          link: "/frontend/webpack/08.处理字体图标资源",
        },
        {
          text: "09.自动清空上次打包资源",
          link: "/frontend/webpack/09.自动清空上次打包资源",
        },
        {
          text: "10.处理其他资源",
          link: "/frontend/webpack/10.处理其他资源",
        },
        {
          text: "11.处理js资源",
          link: "/frontend/webpack/11.处理js资源",
        },
        {
          text: "12.处理Html资源",
          link: "/frontend/webpack/12.处理Html资源",
        },
        {
          text: "13.开发服务器&自动化",
          link: "/frontend/webpack/13.开发服务器&自动化",
        },
      ],
    },
    {
      text: "生产模式",
      collapsed: false,
      items: [
        {
          text: "14.生产模式介绍",
          link: "/frontend/webpack/14.生产模式介绍",
        },
        {
          text: "15.Css处理",
          link: "/frontend/webpack/15.Css处理",
        },
        {
          text: "16.html压缩",
          link: "/frontend/webpack/16.html压缩",
        },
        {
            text: "17.总结",
            link: "/frontend/webpack/17.总结",
            
        }
      ],
    },
    {
        text:'面试题',
        collapsed: false,
        items:[
            {
                text:'常见的loader和plugin',
                link:'/frontend/webpack/常见的loader和plugin'
            },
            {
                text:'clean-webpack-plugin和clean:true',
                link:'/frontend/webpack/clean-webpack-plugin和clean'
            
            }
        ]
    }
  ],
};
