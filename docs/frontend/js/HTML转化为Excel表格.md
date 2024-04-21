# HTML转化为Excel表格
# 1.方法1
依赖插件file-saver xlsx

```javascript
npm i 件file-saver xlsx --save
```
```javascript
import FileSaver from 'file-saver'
import XLSX from 'xlsx'
/**
 * 将标签导出为excel
 */
export const useHtmlToExcel = (dom, title = '默认标题', length) => {
  if (!dom) return
  var excelTitle = title
  var wb = XLSX.utils.table_to_book(dom)
  if (length > 0) {
    for (var i = 0; i < length; i++) {
      var json = { wpx: 90 }
      wb.Sheets.Sheet1['!cols'][i] = json
    }
  }
  /* 获取二进制字符串作为输出 */
  var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: false, type: 'array', raw:true })
  // var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: false, type: 'binary' })
  try {
    FileSaver.saveAs(
      new Blob([wbout], { type: 'application/octet-stream' }),
      excelTitle + '.xlsx'
    )
  } catch (e) {
    if (typeof console !== 'undefined') console.log(e, wbout)
  }
  return wbout
}

```
