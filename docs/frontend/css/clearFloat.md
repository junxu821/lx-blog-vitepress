# 清除浮动方法
# 1.clearfix
```css
@mixin clearfix {
  &:after {
    content: "";
    display: table;
    clear: both;
  }
}
```
2.overflow:hidden(开启bfc)

3.使用flex和grid布局

4.或者浮动元素后面跟一个空元素设置有clear属性的元素