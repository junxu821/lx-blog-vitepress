# rem适配
# PC端
### 1.下载插件 postcss-px2rem
```javascript
npm i  postcss-px2rem --save
```
### 2.rem.js
```javascript
// rem等比适配配置文件
// 基准大小
const baseSize = 16
// 设置 rem 函数
function setRem () {
  // 当前页面屏幕分辨率相对于 1280宽的缩放比例，可根据自己需要修改
  const scale = document.documentElement.clientWidth / 1920
  // 设置页面根节点字体大小（“Math.min(scale, 3)” 指最高放大比例为3，可根据实际业务需求调整）
  document.documentElement.style.fontSize = `${baseSize * Math.min(scale, 1)}px`
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = () => {
  setRem()
}

```
### 3.vue.config.js
```javascript
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      },
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  },
```
### 总结
只能改变文件的px不能改变行内样式

# 移动端
 提示：移动端rem适配的两种方案，vw适配

##  一、rem方案一（淘宝，京东的移动端方案)
### 1.开启理想视口
```html
<meta name="viewport" content="width=device-width, initial-scale=1/>
```
### 2.计算根节点字体
```Plain Text
   公式 根节点字体 = （视口宽度*100）/设计稿宽度
   样式尺寸 = 设计值/100
```
```javascript
function init(){
 const depWidth = document.documentElementWidth.clientWidth;//获取视口宽度
const rootFontSize = (depWidth*100)/375;
document.documentElement.style.fontSize = rootFontSize +'px';
 }
window.addEventListener('resize',init)
```


## \# 二、rem方案二（搜狐，唯品会的移动端方案)
### 1.开启理想视口
```html
<meta name="viewport" content="width=device-width, initial-scale=1/>
```
### 2.计算根节点字体
```Plain Text
  公式 根节点字体 = 视口宽度/10
     样式尺寸 = 设计值/（设计稿宽度/10）
```
```javascript
function init(){
 const depWidth = document.documentElementWidth.clientWidth;//获取视口宽度
const rootFontSize = depWidth/10;
document.documentElement.style.fontSize = rootFontSize +'px';
 }
window.addEventListener('resize',init)
```
### 1.开启理想视口
```html
<meta name="viewport" content="width=device-width, initial-scale=1/>
```
### 2.计算根节点字体
```Plain Text
  公式 根节点字体 = 视口宽度/10
  样式尺寸 = 设计值/（设计稿宽度/10）
```
```javascript
function init(){
 const depWidth = document.documentElementWidth.clientWidth;//获取视口宽度
const rootFontSize = depWidth/10;
document.documentElement.style.fontSize = rootFontSize +'px';
 }
window.addEventListener('resize',init)
```


##  三、vw适配
```Plain Text
样式尺寸 = （设计稿的宽度/视口宽度）*100
```
