# js包装类型
# 前言
***ps：包装类类型是针对number,string,boolean三种基本类型来说的 ***

*例如：三种基本类型,原则上只有值,没有对应的方法,或属性,但为了方便,咋们往往会直接调用一些,方法或属性,例如str.replace(),true.toString()等方法.这就是包装类带来的好处.*

# 包装类产生的时机
*基本数据,在调用一些方法时,js会自动生成一个临时的对应的包装类(Number,Boolean,String)的对象,每次产生的对象都不一样,也没办法记录.*

```javascript
let a=123;
let b= true;
let c='abc'
console.log(typeof a==='number')//true;
console.log(a instanceof Number)//false

const a1=a.toString();
b.substring(0,2);
b.length;
c.toString();
b.replace(/a/,'')
```
等等...

可以显示的用Number,String,Boolean去创建包装类型