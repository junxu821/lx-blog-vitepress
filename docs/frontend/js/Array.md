# Array
* 与Object一样,如果是字面量形式创建数组,不会调用Array构造函数
* 新建数组时,可以省略new 关键字
* 构造函数传一个数组,代表数组长度,传其他的一个或多个参数,会视为数组的一项
# 1.from方法:
Array.from(object, mapFunction, thisValue)

object为要转为数组的对象，此对象的必须有length值，索引为数字的字符,或为set（）得到的对象,或字符串(必须参数)

如果object是一个数组，返回的仍是此数组

```javascript
let arrayLike = {
 0: 'tom', 
 1: '65',
 2: '男',
 3: ['jane','john','Mary'],
 'length':2
}
let arr2 = Array.from(arrayLike)//["tom", "65"]

```
```javascript
let arr = [12,45,97,9797,564,134,45642]
let set = new Set(arr)
console.log(Array.from(set)) // [ 12, 45, 97, 9797, 564, 134, 45642 ]
```
mapFunction,处理object的map函数（非必须参数）

```javascript
a = [{a: "1", b: 9},{a: "2", b: 8},{a: "3", b: 7}];
b= Array.from(a,function (x) {
    return x.b;
});
//b[0] == 9;
//b[1] == 8;
//b[2] == 7;
```
thisValue,map函数中this指向的对象（非必须参数）

```javascript
let diObj = {
  handle: function(n){
    return n + 2
  }
}

console.log('%s', Array.from(
  [1, 2, 3, 4, 5], 
  function (x){
    return this.handle(x)
  }, 
  diObj))
//3,4,5,6,7
```
# 2.of方法
Array.of()可以把一组参数转换为数组。这个方法用于替代在ES6之前常用的Array.prototype. slice.call(arguments)，一种异常笨拙的将arguments对象转换为数组的写法：



```javascript
console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]
console.log(Array.of(undefined));   // [undefined]
const a = Array.of({a:1,b:2},{c:1,d:2})
  console.log(a)// [{…}, {…}]
```


# 3.数组空位
**es6之前**

```javascript
// Es5
let array = [,1,,2,,3];
array = array.map((i) => ++i)  
//结果为 [,2,,3,,4],从这里可以看出 map方法跳过了empty空位

```
ES5中 forEach()、for in、filter()、every()和some()都会跳过空位，map()会跳过空位，但会保留这个值，join()和toString()会将空位与undefined以及null处理成空字符串。

**es6会把空位转化为undefined**

# 4.数组的length
* length可以修改,来删除或者添加元素
* 数组的最大值是十位数(4 294 967 295)
# 5.isArray和intenceof()区别
如果只有一个网页,两者没区别
但是有多个网页,两个不同网页的Array构造函数是为不同,两个网页框架传值时容易产生错误,isArray就是解决这样的问题的.
# 6.keys(),values(),entries()
* keys():返回索引的迭代器(key)
* values()返回值的迭代器(value)
* entries()返回索引和值的迭代器(key/value)
可以用迭代器或者for...of..遍历

```javascript
let a =[1,2,3,4,5]
let arrEntries=a.entries();
let entry=arrEntries.next();
while(!entry.done){
  console.log(entry.value);
  entry=arrEntries.next();
}
/*
[ 0, 1 ]
[ 1, 2 ]
[ 2, 3 ]
[ 3, 4 ]
[ 4, 5 ]
*/

```
# 7.fill(value,startIndex,endIndex)

* 索引左闭右开
* 索引可以省略
* 索引为负代表从末尾开始计算,或者理解为数组长度加上他的正索引
* 会忽略超出索引范围
# 8.copyWithIn(index,startIndex,endIndex)
* 复制制定范围元素,然后插入指定索引
* 开始索引和结束索引规则和fill一样
* 指定位置的索引支持负数
# 9.toString()
返回,隔开的字符串
# 10.valueOf
* 隐式调用返回数组本身
* 显示调用和toString()结果一样
# 11.toLocaleString()
会将,每个值调用自己的toLocaleString()方法,然后用逗号拼起来

如果数组中有空值.undefined,null,经过join和toString,toLocaleString,valueOf转换后会变成空串

# 12.reverse和sort()
sort :(1) 第一个要在第二个数前面,返回-1

        (2)相等返回0

        (1)第一个在第二个后面返回1

如果是数值,或者是valueOf返回值是数字(例如Date()),可简写,返回两个相减,怎上面三种情况,对应小于0,0,大于0

# 12.concat()
参数可以是一系列的数值,或者是一个字符串,或者是两个一起.

# 13.数组搜索方法
严格相等:

# 14.迭代方法every,some,filter,map,forEach
# 15.归并方法reduce和reduceRight
# 16.定型数组 
* **Float32Array**,为了解决性能问题主要是和webgl等配合使用,传输原生二进制数据
* 可以通过ArryBuffer构造函数创建,创建后,不能修改
* 可以通过DataView构造包装ArrayBuffer的数据进行读写
* 与普通数组相比多了两个方法,set(),subarry,一个指定数组的值,另一个复制,子数组 

