# CSS 选择符有哪些？哪些属性可以继承？优先级算法如何计算？
1.id 选择器（# myid） 

2.类选择器（.myclassname）

 3.标签选择器（div, h1, p）

4.相邻选择器（h1 + p）

 5.子选择器（ul > li）

 6.后代选择器（li a）

 7.通配符选择器（\* ）

 8.属性选择器（a\[rel = "external"\]）

 9.伪类选择器（a: hover, li:nthchild）



# 优先级为:
!important > id > class > tag

important 比 内联优先级高,但内联比 id 要高

# CSS3 新增伪类举例：
1. p:first-of-type 选择属于其父元素的首个  元素的每个  元素。
2.  p:last-of-type 选择属于其父元素的最后  元素的每个  元素。
3.  p:only-of-type 选择属于其父元素唯一的  元素的每个  元素。
4.  p:only-child 选择属于其父元素的唯一子元素的每个  元素。
5.  p:nth-child(2) 选择属于其父元素的第二个子元素的每个 元素。
6.  :enabled :disabled 控制表单控件的禁用状态。
7.  :checked 单选框或复选框被选中