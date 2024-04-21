import { DefaultTheme } from 'vitepress';
export const cssSidebar: DefaultTheme.Sidebar = {
  '/frontend/css/': [
     // 第一部分
    {
      text: 'float和absolute的区别',
      link: '/frontend/css/absoluteVsFloat'
    },
    {
      text: '清除浮动',
      link: '/frontend/css/clearFloat'
    },
    {
      text: 'fixed定位是相对于谁',
      link: '/frontend/css/fixed'
    },
    {
        text:'css可以继承的属性',
        link:'/frontend/css/inherit'
    },
    {
        text:'媒体查询media',
        link:'/frontend/css/media'
    },
    {
        text:'css选择器',
        link:'/frontend/css/cssMatchTag'
    },
    {
        text:'css3新特性',
        link:'/frontend/css/css3'
    },
    {
        text:'美化滚动条',
        link:'/frontend/css/scrollbar'
    },
    {
        text:'margin注意事项',
        link:'/frontend/css/margin'
    }
    
  ]
};
