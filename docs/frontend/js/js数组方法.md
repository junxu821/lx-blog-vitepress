# js数组方法
# 1.Array.filter
```javascript
//ECMAScirpt5 中 Array 类中的 filter 方法使用目的是移除所有的 ”false“ 类型元素  (false, null, undefined, 0, NaN or an empty string)：
var a=[1,2,"b",0,{},"",NaN,3,undefined,null,5];
var b=a.filter(Boolean); // [1,2,"b",{},3,5]
/*Boolean 是一个函数，它会对遍历数组中的元素，并根据元素的真假类型，对应返回 true 或 false.*/
//例如：
Boolean(0); // false
Boolean(true); // true
Boolean(1); // true
Boolean(""); // false
Boolean("false"); // true. "false"是一个非空字符串
//实际上，下面这样的写法是一种简写模式
b = a.filter(Boolean);
它等价于
b = a.filter(function (x) { return Boolean(x); });

```
# 2.map方法
提示：手动实现数组map方法

```javascript
Array.prototype.fakeMap=function (fn,context){
 let arr=this
 let temp=[]
 for(let i = 0;i<arr.length;i++){
   let result = fn.call(context,arr[i],i,arr)
   temp.push(result)
 }
 return temp
}

```
* ps: 上面的context 代表触发每个回调方法的对象,在这里,无论他的值是啥都不影响结果,一般就是全局的this

# 3.slice方法
1.手动实现

```javascript
Array.prototype.myslice = function (start, end) {
    var newArray = []
    var start = start || 0
    var end = end || this.length
    for (var i = start; i < end; i++) {
        newArray.push(this[i])
    }
    return newArray
}

```
# 4.forEach方法
1.手动实现

```javascript
Array.prototype.for_each=function (fn,context){
    for(var i = 0;i<this.length;i++){
      fn(this[i],i,this)
      //fn.call(context,this[i],i,this)
    }
   }
   //context 代表触发每个回调方法的对象,在这里,无论他的值是啥都不影响结果,一般就是全局的this
   let testArray=[1,2,3,4,5,{a:1}]
    testArray.forEach((item,i)=>{
      item=1
   })
```
