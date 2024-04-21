# vue3关闭选项API
# 1.vue.config.js
```js
  chainWebpack:(config=>{
    config.plugin('feature-flags').use(webpack.DefinePlugin, [{
          __VUE_OPTIONS_API__: false,//关闭 options api
          __VUE_PROD_DEVTOOLS__:false //这个也需要定义，不然报错
        }])
  }),
```
# 2.vite.config.js
```typescript
 define: {
    __VUE_OPTIONS_API__: false,   // 关闭 Vue2 中的 options选项API
    __VUE_PROD_DEVTOOLS__:false//默认值为false可不写
  },
```
