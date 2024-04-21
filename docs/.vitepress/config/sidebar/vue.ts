import { DefaultTheme } from 'vitepress';
export const vueSidebar: DefaultTheme.Sidebar = {
  '/frontend/vue/': [
     // 第一部分
    {
      text: '拆分vue路由',
      link: '/frontend/vue/拆分vue路由'
    },
    {
      text: '全局导入CSS',
      link: '/frontend/vue/全局导入CSS'
    },
    {
      text: 'vue3关闭选项API',
      link: '/frontend/vue/vue3关闭选项API'
    },
    {
      text: 'vue路由守卫',
      link: '/frontend/vue/vue路由守卫'
    },
    {
      text: 'vue项目防止浏览器缓存',
      link: '/frontend/vue/vue项目防止浏览器缓存'
    },
  ]
};
