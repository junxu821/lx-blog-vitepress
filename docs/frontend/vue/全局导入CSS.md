# 全局导入CSS
vue.config.js

```js
  // css相关配置
  css: {
    // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
    extract: process.env.NODE_ENV === "production"
    ? {
        ignoreOrder: true
      }
    : false,
    // 开启 CSS source maps?
    sourceMap: false,
    //productionSourceMap: process.env.NODE_ENV === "production" ? false : true,
    // css预设器配置项
    loaderOptions: {
      scss: {
        implementation: require("sass"),
        prependData: `@use "~@/styles/element-theme.scss" as *;@use "~@/styles/index.scss" as *;`,
      },
    },
    // 启用 CSS modules for all css / pre-processor files.
    requireModuleExtension: true,
  },
```
