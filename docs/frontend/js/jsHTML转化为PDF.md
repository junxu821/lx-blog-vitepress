# jsHTML转化为PDF
# 1.下载插件
```javascript
npm i html2canvas jspdf --save
```
* html2canvas  html转化为图片
* jspdf 图片转化为paf

# 2.封装转化方法
```javascript
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
export const downloadPDF = page => {
  html2canvas(page).then(function (canvas) {
    canvas2PDF(canvas)
  })
}
const canvas2PDF = canvas => {
  const contentWidth = canvas.width

  const contentHeight = canvas.height

  // a4纸的尺寸[595.28,841.89]，html页面生成的canvas在pdf中图片的宽高

  const imgWidth = 595.28

  const imgHeight = 592.28 / contentWidth * contentHeight

  // let imgHeight = 700/contentWidth * contentHeight;

  // 一页pdf显示html页面生成的canvas高度;

  var pageHeight = contentWidth / 592.28 * 841.89

  let totalHeight = contentHeight

  // 第一个参数： l：横向  p：纵向

  // 第二个参数：测量单位（"pt"，"mm", "cm", "m", "in" or "px"）

  // eslint-disable-next-line new-cap
  const pdf = new jsPDF('p', 'pt')

  let position = 0

  //   pdf.addImage(

  //     canvas.toDataURL("image/jpeg", 1.0),

  //     "JPEG",

  //     0,

  //     0,

  //     imgWidth,

  //     imgHeight

  //   );

  if (totalHeight < pageHeight) {
    pdf.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, 0, imgWidth, imgHeight)
  } else {
    while (totalHeight > 0) {
      pdf.addImage(canvas.toDataURL('image/jpeg', 1.0), 'JPEG', 0, position, imgWidth, imgHeight)

      totalHeight -= pageHeight

      position -= 841.89

      // 避免添加空白页

      if (totalHeight > 0) {
        pdf.addPage()
      }
    }
  }

  // pdf.addImage(

  //     canvas.toDataURL("image/jpeg", 1.0),

  //     "JPEG",

  //     0,

  //     position,

  //     imgWidth,

  //     imgHeight

  // );

  pdf.save('导出.pdf')
}

```
# 3.使用
```javascript
        <el-button
          type="warning"
          size="small"
          class="yellow-btn-global"
          @click="handleExport"
        >生成PDF</el-button>
```
```javascript
 handleExport () {
      downloadPDF(this.$refs.pdf)
    }
```
