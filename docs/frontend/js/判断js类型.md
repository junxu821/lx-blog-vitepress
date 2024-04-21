# 判断js类型
# 1.typeof
***typeof只能判断基本类型和函数function***

返回值：字符串

typeof对于一些类型的处理只返回了处于其原型链最顶端的object类型。

***引用类型***除了function返回function类型之外，其他都返回object。

* NaN的数据类型是number
*  数组(Array)和日期Date的数据类型是object
* 不能检测出null，检测null的数据类型是object
* 检验正则表达式也是object(早期的safri和谷歌可能会是function)

```typescript
typeof NaN //number
const a = ()=>{}
console.log(typeof a)//function
typeof null //object
typeof undefined //undefined
typeof Symbol() // symbol
```
# 2.instanceof
***instanceof只能判断两个对象之间是否属于实例关系，不能判断一个对象属于哪种类型。***

返回值：true或false

可以看出\[\] 的原型指向Array.prototype，间接指向Object.prototype，因此 \[\] instanceof Array 返回true，\[\] instanceof Object 也返回true。

# 3.判断数组
1. Array.isArray(arr)== true;
2. arr.constructor()=== Array ;
3. Object.prototype.toString.call(arr) === “\[object Array\]”

# 4.Object.prototype.toString().call()
万能方法

```typescript
两个toString根本不是同个方法，object本身是一个构造函数，任意一个函数自身的toString方法都是继承自function构造函数。而Object原型下面的构造函数是返回对象内部的class值。

虽然Array也继承自Object，但js在Array.prototype上重写了toString，而我们通过toString.call(arr)实际上是通过原型链调用了。

```
```javascript
Object.prototype.toString.call([])  //"[object Array]"
Object.prototype.toString.call({}) //"[object Object]"
Object.prototype.toString.call("") //"[object String]"
Object.prototype.toString.call(null) //"[object Null]"
Object.prototype.toString.call(undefined) //"[object Undefined]"
Object.prototype.toString.call(0) //"[object Number]"
Object.prototype.toString.call(NaN)  //"[object Number]"
Object.prototype.toString.call(true) //"[object Boolean]"
Object.prototype.toString.call(Symbol())  //"[object Symbol]"
```


# 5.constructor
***无法判断null和undefined***

原型prototype的一个属性，函数被定义的时候，js引擎会为函数添加原型prototype，并且这个prototype种constructor属性指向函数应用。

使用：

```typescript
[].constructor ==Array //true
new Date().constructor == Date //true
```



instanceof只能判断两个对象之间是否属于实例关系，不能判断一个对象属于哪种类型。
