# 常见的loader和plugin
# loader
1. **babel-loader:**

  用于将 ECMAScript 2015+ 代码转译为向后兼容的 JavaScript

2. **style-loader 和 css-loader:**

* style-loader 用于将 CSS 代码注入到 DOM 中
* ,css-loader 用于处理 CSS 文件中的 import 和 url()
3. **file-loader 和 url-loader:**
* file-loader 用于处理文件，将文件复制到输出目录，并返回文件路径,
* url-loader 类似于 file-loader，但是可以将小于指定大小的文件转换成 Data URL【就是base64，多用于图片】
4. **sass-loader 和 less-loader:**

      用于处理 Sass 和 Less 样式文件，并将其转换为 CSS

5. **image-webpack-loader:**

      用于优化和压缩图片文件
# Plugin

1. **HtmlWebpackPlugin:**

    用于生成 HTML 文件，并将打包生成的脚本自动注入到 HTML 文件中

2. **MiniCssExtractPlugin:**

   将 CSS 从 bundle 中提取到单独的文件，以便异步加载样式

3. **css-minimizer-webpack-plugin**:

  优化和压缩css代码

```javascript
module.exports = {
  // ...
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
  // ...
};
```


4. **terser-webpack-plugin**:

  压缩css/js

5. **uglifyjs-webpack-plugin**:

  压缩es6，压缩混淆js文件

```javascript
plugins: [		
    new UglifyJsPlugin({
        uglifyOptions: {           // 压缩配置
	        output: {              // 输出
	            comments: false,   // 是否保留注释
	            beautify: false,   // 是否美观
	        },
	        warnings: false,       // 是否显示提醒    
		},
	    cache: true,
	    sourceMap: true                     // 默认是false，不开启map
    })

```


6. **inline-chunk-html-plugin:**

  将模块内联到 html

7. **CleanWebpackPlugin:**

  用于在每次构建前清理输出目录

8. **HotModuleReplacementPlugin:**

  启用模块热替换（HMR），允许在运行时更新各种模块，而无需进行完全刷新

9. **Webpack-merge:**

   用于合并多个配置文件，使得配置更加灵活

10. **ProvidePlugin:**

   自动加载模块，而不必到处 import 或 require，

```javascript
plugins: [
    new webpack.ProvidePlugin({
      $_: 'lodash',
    }),
],
```


11. **CopyWebpackPlugin:**

   用于将单个文件或整个目录复制到构建目录

12. **ESLintWebpackPlugin**

  检查语法，可以指定检查路径

13. **optimize-css-assets-webpack-plugin**

  压缩css，`OptimizeCssAssetsPlugin` ccs压缩后，webpack就不会自动压缩js，需自己配置。

```javascript
module.exports = {
  // 优化配置
  optimization: {
        // 自己配置 js 压缩，配置了 OptimizeCssAssetsPlugin ccs压缩后要想压缩js，必须配置此处
        minimize: true,
        minimizer: [
            new TerserPlugin()
        ]
    }
};

```


14. **BundleAnalyzerPlugin**

 体积分析

```javascript
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
};


new BundleAnalyzerPlugin({
	analyzerHost: 'localhost',      //指定HTTP服务器
	analyzerPort: 3002,              // 指定端口
})
```
15. **speed-measure-webpack-plugin 速度分析**

```javascript
onst SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

//将默认的webpack配置文件包裹起来
const webpackConfig = smp.wrap({
  plugins: [
    new MyPlugin(),
    new MyOtherPlugin()
  ]
});

```
16. **DllPlugin**
dll 全称是：dynamic link library（动态链接库），dll方式是通过配置告诉webpack指定库在项目中的位置，build构建的时候不将其打包在模块内，使用时直接引用。需要配置DllReferencePlugin 插件一起使用

```javascript

module.exports = {
    entry: {
        'vendor': ['a', 'b', 'c', 'd'],  // verdor 所包含的资源       
    },
    output: {
        path: resolve('../../htdocs/res/vendor'),  // 指定输出的模块vendor路径
        filename: '[name].bundle.js',
        library: '[name]_bundle'
    },
    resolve: {       
        extensions: ['.js', '.vue'],
        alias: {                               // 指定项目别名
            'vue$': 'vue/dist/vue.min.js',
            'vue-resource': 'vue-resource/dist/vue-resource.min.js',
            'vue-awesome-swiper': 'vue-awesome-swiper/dist/vue-awesome-swiper.min.js',
            'promise': 'promise-polyfill/promise.min.js',
            'a': resolve('a'),	   
            'b': resolve('b'),            
        }
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',     // 将manifest.json输出到config目录下 
            name: '[name]_bundle',
            context: __dirname
        }),  
    
    ]

```
```javascript
 plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./manifest.json'), // 引用DllPlugin生成的映射文件
    }),
  ],

```
17. **HashedModuleIdsPlugin**
作用：根据模块的相对路径生成一个四位数的hash作为模块id, 建议用于生产环境

```javascript

new webpack.HashedModuleIdsPlugin({
  hashFunction: 'sha256',   // 散列算法，默认为 'md4'。
  hashDigest: 'hex',        // 在生成 hash 时使用的编码方式，默认为 'base64'
  hashDigestLength: 20      // 散列摘要的前缀长度，默认为 4。
})

```
