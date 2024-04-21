# js伪数组
# 一、伪数组是啥是什么？
## 定义：没有真数组那些方法,但有固定的长度可以遍历。
## 关键点:
1. 具有length的属性
2. 按索引方式存储
3. 不具有pop(),shift()等方法

# 二、常见的伪数组
1. function内arguments对象.
2. 还有像调用getElementsByTagName, document.childNodes之类的，
3. 它们都返回的NodeList对象都属于伪数组，也称为类数组.
4. jQuery中的\$()方法获取到的全部是伪数组,本质都是html标签序列.
5. 自定义的伪数组,例如 let obj={0:‘a’,1:‘b’,length:2}

