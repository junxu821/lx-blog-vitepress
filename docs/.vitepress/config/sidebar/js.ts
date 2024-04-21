import { DefaultTheme } from 'vitepress';
export const jsSidebar: DefaultTheme.Sidebar = {
  '/frontend/js/': [
     // 第一部分
    {
      text: '深拷贝与浅拷贝',
      link: '/frontend/js/copy'
    },
    {
      text: '连续多个bind的this',
      link: '/frontend/js/bind'
    },
    {
      text: 'js中的defer和async',
      link: '/frontend/js/deferAndAsync'
    },
  ]
};
