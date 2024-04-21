# 深拷贝
```js
function clone(obj){
    if(typeof obj !== 'object'||obj===null) return obj;
    var newObj = obj instanceof Array ? [] : {};
    for(var key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = typeof obj[key] === 'object' ? clone(obj[key]) : obj[key];
        }
    }
    return newObj;
}
```
---
# 浅拷贝
 1. Object.assign()
 2. 扩展运算符