# CSS3 有哪些新特性？
CSS3 实现

1. 圆角（border-radius），
2. 阴影（box-shadow），
3. 对文字加特效（text-shadow、），
4. 线性渐变（gradient），
5. 旋转（transform）
      :transform:rotate(9deg) scale(0.85,0.90) translate(0px,-30px) skew(-9deg,0deg);//旋转,缩放,定位,倾斜
6. 增加了更多的 CSS 选择器 多背景 rgba
7. 在 CSS3 中唯一引入的伪元素是::selection.
8. 媒体查询，多栏布局
9. border-image
10. CSS3 中新增了一种盒模型计算方式：box-sizing。盒模型默认的值是

content-box, 新增的值是 padding-box 和 border-box，几种盒模型计算元

       素宽高的区别如下：

*           content-box（默认）

布局所占宽度 Width：

Width = width + padding-left + padding-right + border-left + border+right

布局所占高度 Height:Height = height + padding-top + padding-bottom + border-top +   border+bottom

*         padding-box

布局所占宽度 Width：

Width = width(

 包 含

padding-left + padding-right) + border

top + border-bottom

布局所占高度 Height:

Height = height(

包 含

padding-top + padding-bottom) + border

top + border-bottom

      * border-box

布局所占宽度 Width：

Width = width(

包 含

padding-left + padding-right + border

left + border-right)

布局所占高度 Height:Height = height(

包 含

padding-top + padding-bottom + border

top + border-bottom)