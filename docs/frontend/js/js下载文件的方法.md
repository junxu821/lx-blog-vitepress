# js下载文件的方法
注意：如果文件是来自于后端，需要注意限制接口的返回类型 responseType为blob或者buffer

# 1.原生实现
```javascript
/**
 * 下载文件
 * @param {file} file  文件
 * @param {string} fileName 文件名称
 * @param {string} format 扩展名
 */
export default function downLoadFile (file, fileName, format = '.xlsx') {
  const blob = new Blob([file])
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = fileName + format
  a.click()
  window.URL.revokeObjectURL(url)
}

```
# 2.插件实现
## 1.下载插件
```javascript
npm i js-file-download --save
yarn add js-file-download
```
## 2.引入
```javascript
import fileDownload from "js-file-download";
```
## 3.使用
```javascript
fileDownload(res, "region.xlsx");
```
