# 反射Reflect
# 1.反射存在的问题
* 代理中的this,有些方法属性依赖于目标对象的this,就会出问题
* 内部插槽,有的目标对象身上有,但是代理没有,就会出问题
# 2.反射相比对象操作
反射与Object身上的同名方法相比较,反射更加细腻,往往不会抛出异常,而是会返回布尔值,显示当前操作的状态.

**状态标记**的方法有:

```javascript
            Reflect.defineProperty()
            Reflect.preventExtensions()
            Reflect.setPrototypeOf()
            Reflect.set()
            Reflect.defineProperty()
```
# 3.可以替代一些操作符
1. Reflect.get():可以代替对象属性访问符
2. Reflect.set():可以替代=赋值运算符
3. Reflectct.has():可以替代in和with
4. Reflect.deleteProperty():可以替代delete运算符
5. Reflect.construct():可以替代new
# 4.安全的使用函数
通过函数的apply来调用函数,被调用的函数也定义了apply属性

解决方案:

1\. Function.prototype.apply(myfunc,thisVal,arguments)

**代码太长**

2.可以通过Reflect.apply简洁的实现

 Reflect.apply(myfunc,thisVal,arguments)