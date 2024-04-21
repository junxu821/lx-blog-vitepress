# vue项目防止浏览器缓存
原理改变webpack打包的chunk名字，类似于早期原生js和jQuery开发导入js用时间戳一个道理

在vue.config.js中加入以下代码

```javascript
configureWebpack: {
    output: { // 输出重构 打包编译后的js文件名称,添加时间戳.
      filename: `static/js/js[name].${timeStamp}.js`,
      chunkFilename: `static/js/chunk.[id].${timeStamp}.js`
    }
  },

  css: {
    extract: { // 打包后css文件名称添加时间戳
      filename: `static/css/[name].${timeStamp}.css`,
      chunkFilename: `static/css/chunk.[id].${timeStamp}.css`
    }
  },
```
