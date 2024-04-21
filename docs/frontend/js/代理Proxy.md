# 代理Proxy
* 代理的实例不能用intanceof来判断,会抛出异常
* Proxy的原型是undefined
* 无论施加在目标对象还是代理对象身上的行为,最终两个都会变化
* 可以用===来区分是代理对象还是目标对象
new Proxy(targrt,handle)
target是目标对象
handle也是一个对象,用来处理行为的
# 1.代理撤销
```javascript
 const target = {
            foo:'bar'
        }
        const handler = {
            get(){
                return 'qux'
            }
        }
        const {proxy,revoke }= new Proxy.revocable(target,handler)
         console.log(proxy.foo)
         console.log(target.foo)
         revoke()
         console.log(proxy.foo)
```
<!-- ![image](images/PdnxTM45TL3qC1ieYxrG2mOd5BT-8PzuMXsLcBDoQvM.png) -->
# 2.捕获器参数
```javascript
    const target = {
            id:'foo'
        }
        const proxy = new Proxy(target,{
            get(trapTarget,prop,receiver){
              console.log(trapTarget===target)
              console.log(prop)
              console.log(receiver===proxy)
            }
        })
        proxy.id
//true,id,true
```
反射api参数和每个捕获器是一样的

```javascript
  const target = {
            id:'foo'
        }
        const proxy = new Proxy(target,{
            get(){
            return Reflect.get(...arguments)
            }
        })
        console.log(proxy.id)
        console.log(target.id)
```
```javascript
  const target = {
            id:'foo'
        }
        const proxy = new Proxy(target,Reflect)
        console.log(proxy.id)
        console.log(target.id)

```
* 对于一些只读的属性,Reflect也不能改变

```javascript
 const target = {}
            Object.defineProperties(target,'foo',{
                configurable:false,
                writable:false,
                value:'bar'
            })
            const proxy = new Proxy(target,{
                get(){
                    return 'quk'
                }
            })
            proxy.foo
```
<!-- ![image](images/7xx70Hj-3a-f58tYhS5tNGn8fI7RvruVP1dgKWdYafs.png) -->

# 3.代理可以去代理另一个代理,
**可以拦截反射API的操作,相当于几层拦截**
# 3.代理捕获器.
同一时间只会有一个捕获器触发
1.get()
2.set()
3.has()
4.defineProperty()
5.getOwnPropertyDescriptor()
6.deleteProperty()
7.ownKeys()
8.getPrototypeOf()
9.setPrototypeOf()
10.isExtensible()
11.preventExtensible()
12.apply()
13.constructor()

# 代理模式可以实现的功能
1.跟踪属性访问

2.隐藏属性

3.属性验证

4.函数和构造函数参数验证

5.数据绑定与可观察对象