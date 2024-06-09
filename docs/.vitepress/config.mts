import { defineConfig } from "vitepress";
import { nav } from "./config/nav.mts";
import { sidebar } from "./config/sidebar";
export default defineConfig({
  title: "一船霜白",
  description: "一船霜白的个人博客",
  cleanUrls: true,

  themeConfig: {
   
    logo: {
      src: "/avatar.jpg",
      alt: "一船霜白",
    },
    outline: {
      level: [1, 6],
      label: "目录",
    },
    docFooter: { prev: '上一篇', next: '下一篇' },
    // https://vitepress.dev/reference/default-theme-config
    nav,

    sidebar,

    socialLinks: [{ icon: "github", link: "https://github.com/xvjun821" }],
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    footer: {
      message: "Released under the MIT License.",
      copyright:
        'Copyright © 2024-present <a href="https://github.com/xvjun821">一船霜白</a>',
    },
  },
  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // ["link", { rel: "stylesheet", href: "/styles/custom.css" }],
  ],
  // base:'//',
  // srcDir: "./src",
  markdown: {
    lineNumbers: true, // 是否显示行数，默认false
  },
  
});
