import { DefaultTheme } from 'vitepress';
export const browserSidebar: DefaultTheme.Sidebar = {
  '/frontend/browser/': [
     // 第一部分
    {
      text: 'XSS和CSRF',
      link: '/frontend/browser/XSS和CSRF'
    },
    {
      text:'如何防止回流和重绘',
      link: '/frontend/browser/如何防止回流和重绘'
    },
    {
      text:'如何删除一个cookie',
      link: '/frontend/browser/如何删除一个cookie'
    },
    {
      text:'五大主流浏览器的内核名称',
      link: '/frontend/browser/五大主流浏览器的内核名称'
    }
  ]
};
