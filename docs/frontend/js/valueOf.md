# valueOf
# JS 中 valueOf() 方法的详解
1. JavaScript 中的 valueOf() 方法用于返回指定对象的原始值，若对象没有原始值，则将返回对象本身。**通常由JavaScript内部调用，而不是在代码中显式调用。**
2. 默认情况下，valueOf 方法由 Object 后面的每个对象继承。 每个内置的核心对象都会覆盖此方法以返回适当的值。
3. JavaScript 的许多内置对象都重写了该函数，以实现更适合自身的功能需要。因此，不同类型对象的 valueOf() 方法的返回值和返回值类型均可能不同。

```Plain Text
Array：返回数组对象本身。

Boolean： 返回布尔值

Date：存储的时间是从 1970 年 1 月 1 日午夜开始计的毫秒数 UTC。

Function： 返回函数本身。

Number： 返回数字值。

Object：返回对象本身。这是默认情况。

String：返回字符串值。

Math 和 Error 对象没有 valueOf 方法。

```
```javascript
// Array：返回数组对象本身
var array = ["ABC", true, 12, -5];
console.log(array.valueOf() === array);   // true

// Date：当前时间距1970年1月1日午夜的毫秒数
// Sun Aug 18 2013 23:11:59 GMT+0800 (中国标准时间)
var date = new Date(2013, 7, 18, 23, 11, 59, 230); 
console.log(date.valueOf());   // 1376838719230

// Number：返回数字值
var num =  15.26540; // 15.2654
num.valueOf() // 15.2654
console.log(num.valueOf() === num);   // true

// 布尔：返回布尔值true或false
var bool = true;
console.log(bool.valueOf() === bool);   // true

// new一个Boolean对象
var newBool = new Boolean(true); // Boolean {true}
newBool.valueOf() // true
// valueOf()返回的是true，两者的值相等
console.log(newBool.valueOf() == newBool);   // true
// 但是不全等，两者类型不相等，前者是boolean类型，后者是object类型
console.log(newBool.valueOf() === newBool);   // false


// Function：返回函数本身
function foo(){}
console.log( foo.valueOf() === foo );   // true

var foo2 =  new Function("x", "y", "return x + y;");
console.log( foo2.valueOf() === foo2); // true
/*
ƒ anonymous(x,y) {
return x + y;
}
*/

// Object：返回对象本身
var obj = {name: "张三", age: 18};
console.log( obj.valueOf() === obj );   // true

// String：返回字符串值
var str = "http://www.xyz.com";
console.log( str.valueOf() === str );   // true

// new一个字符串对象
// String {"http://www.xyz.com"}
var str2 = new String("http://www.xyz.com"); 
str2.valueOf() // "http://www.xyz.com"
// 两者的值相等，但不全等，因为类型不同，前者为string类型，后者为object类型
console.log( str2.valueOf() === str2 );   // false

```


