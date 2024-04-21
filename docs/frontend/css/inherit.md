# css可继承的属性
# 一、css不可以继承的属性
1. 　　display、
2. 　　margin、padding、border、
3. 　　background、
4. 　　width、min-width、max-width、height、min-height、max-height、
5. 　　overflow、
6. 　　position、top、bottom、left、right、z-index、
7. 　　float、clear、table-layout、vertical-align、
8. 　　page-bread-before、page-bread-after、unicode-bidi

# 二、所有元素都可以继承
1. 　　visibility、
2. 　　cursor

# 三、子元素可以继承
1. 　　letter-spacing（字符间距）
2. 　　word-spacing（单词间距）
3. 　　white-space（如何处理元素内的空白）
4. 　　line-height（设置行高，内联元素不可以继承，设置为行内块元素可以继承）
5. 　　color、font、font-size、font-family、font-style、font-weight、font-variant（大写字母）
6. 　　text-decoration（文本下划线、中划线）、text-transform（首字母大写、转大写）、                   direction（rtl-文本方向从右向左）  
7. 　　text-indent（首行缩进）、text-align（文本对齐）

# 四、列表元素（li）可继承
　　list-style、list-style-type、list-style-position、list-style-image

# 五、表格元素可继承
　　border-collapse

# 六、对于不可继承的属性，如果希望子元素可以保持和父元素一致，可以将该属性值设置为inherit
```css
    border: inherit;
```