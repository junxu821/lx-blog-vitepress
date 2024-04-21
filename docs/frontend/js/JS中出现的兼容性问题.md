# JS 中出现的兼容性问题的总结
## 1.关于获取行外样式 currentStyle 和 getComputedStyle 出现的兼容性问题
1. 我们都知道 js 通过 style 不可以获取行外样式，当我们需要获取行外样式时:

我们一般通过这两个方法获取行外样式：

* IE 下: currentStyle
* Chrome,FF 下: getComputedStyle(oDiv,false)
2. 兼容两个浏览器的写法:

```javascript
if(oDiv.currentStyle){
alert(oDiv.currentStyle.width);
}else{
alert(getComputedStyle(oDiv,false).width);
}
```
3. 封装一个获取行外样式的函数:(兼容所有浏览器,包括低版本 IE6,7)

```javascript
funtion getStyle(obj,name){
if(obj.currentStyle){
//IE
return obj.currentStyle[name];
}else{
//Chrom,FF
return getComputedStyle(obj,false)[name];
}
}
//调用：
getStyle(oDiv,'width');
```


## 2.关于用“索引”获取字符串每一项出现的兼容性问题:
* 对于字符串也有类似于 数组 这样的通过 下标索引 获取每一项的值,

```javascript
var str="abcde";
aletr(str[1]);
```
* 但是低版本的浏览器 IE6,7 不兼容兼容方法:

```javascript
str.charAt(i) 
```
* 全部浏览器都兼容

```javascript
var str="abcde";
for(var i=0;i<str.length;i++){
alert(str.charAt(i)); //放回字符串中的每一项
}

```


## 3.关于 DOM 中 childNodes 获取子节点出现的兼容性问题
childNodes:获取子节点,
* IE6-8:获取的是元素节点,正常
* 高版本浏览器:但是会包含文本节点和元素节点(不正常)
* 解决方法: 使用 nodeType:节点的类型，并作出判断

\--nodeType=3-->文本节点

\--nodeTyPE=1-->元素节点

例: 获取 ul 里所有的子节点，让所有的子节点背景色变成红色

```javascript
//获取元素子节点兼容的方法:
var oUl=document.getElementById('ul');
for(var i=0;i<oUl.childNodes.length;i++){
if(oUl.childNodes[i].nodeType==1){
oUl.childNodes[i].style.background='red';
}
}

```
***注：上面 childNodes 为我们带来的困扰完全可以有 children 属性来代替。***

* children 属性:只获取元素节点,不获取文本节点,兼容所有的浏览器，

比上面的好用所以我们一般获取子节点时,最好用 children 属性。

```javascript
var oUl=document.getElementById('ul');
oUl.children.style.background="red";
```


## 4.关于使用 firstChild,lastChild 等，获取第一个/最后一个元素节点时产生的问题
* IE6-8 下:
     firstChild,lastChild,nextSibling,previousSibling,获取第一个元素节点
* (高版本浏览器 IE9+,FF,Chrome 不兼容,其获取的空白文本节点)--高版本浏览器下:
      firstElementChild,lastElementChild,nextElementSibling,previousElementSibling

(低版本浏览器 IE6-8 不兼容)

* 兼容写法: 找到 ul 的第一个元素节点,并将其背景色变成红色

```javascript
var oUl=document.getElementById('ul');
if(oUl.firstElementChild){
//高版本浏览器
oUl.firstElementChild.style.background='red';
}else{
//IE6-8
oUl.firstChild.style.background='red';
}
```


## 5.关于使用 event 对象，出现的兼容性问题
如: 获取鼠标位置

* IE/Chrom: event.clientX;event.clientY
* FF/IE9 以上/Chrom: 传参 ev--> ev.clientX;ev.clientY
* 获取 event 对象兼容性写法: 

```javascript
var oEvent==ev||event;
document.oncilck=function(ev){
var oEvent==ev||event;
if(oEvent){
alert(oEvent.clientX);
}
}

```
## 6.关于为一个元素绑定两个相同事件：attachEvent/attachEventLister 出现的兼容问题
事件绑定:(不兼容需要两个结合做兼容 if..else..)

* IE8 以下用: attachEvent('事件名',fn);
* FF,Chrome,IE9-10 用: attachEventLister('事件名',fn,false);
* 多事件绑定封装成一个兼容函数:

```javascript
function myAddEvent(obj,ev,fn){if(obj.attachEvent){
//IE8 以下
obj.attachEvent('on'+ev,fn);
}else{
//FF,Chrome,IE9-10
obj.attachEventLister(ev,fn,false);
}
}
myAddEvent(oBtn,'click',function(){
alert(a);
});
myAddEvent(oBtn,'click',function(){
alert(b);
});

```


## 7.关于获取滚动条距离而出现的问题
当我们获取滚动条滚动距离时:

* IE,Chrome: document.body.scrollTop
* FF: document.documentElement.scrollTop
* 兼容处理:

```javascript
var scrollTop=document.documentElement.scrollTop||document.body.scrollTop
```
