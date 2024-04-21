# 连续多个 bind，最后this指向是什么？
#### 
在 `JavaScript` 中，连续多次调用 `bind` 方法，最终函数的 `this` 上下文是由**第一次调用 bind 方法**的参数决定的

```javascript
js复制代码const obj1 = { name: 'obj1' };
const obj2 = { name: 'obj2' };
const obj3 = { name: 'obj3' };

function getName() {
  console.log(this.name);
}

const fn1 = getName.bind(obj1).bind(obj2).bind(obj3);
fn1(); // 输出

```
