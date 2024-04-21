# Map
* 与object不同,它会维护,键值对的插入顺序
* Map的性能更高
* set ,get,has,delete,clear方法
* size属性
# WeakMap()
* 键只能是对象
* 键是弱引用,不会阻止垃圾回收机制
* 没有迭代方法
* 适合保存dom元数据,因为,dom被销毁了,如果,用Map或者其他的,没有被销毁,那么,dom还会在内存中,WeakMap,dom删了,它就跟着删了.
* set方法可以链式调用
弱引用

```javascript
 const weakMap = new WeakMap()
        let obj = {a:1,b:2}
        const obj1 = {a:2,f:3}
        weakMap.set(obj,1)
        weakMap.set(obj1,2)
        console.log(weakMap)
       console.log(weakMap.get(obj))
       console.log(weakMap.has(obj))
       obj= null
       console.log(weakMap.has(obj))//false,弱引用,若对象被销毁,对应的map中的键值对就会被销毁,不会阻止垃圾回收机制
       console.log(weakMap)

       const map = new Map()
        let obj2 = {a:1,b:2}
        const obj3 = {a:2,f:3}
        map.set(obj2,1)
        map.set(obj3,2)
        console.log(map)
       console.log(map.get(obj2))
       console.log(map.has(obj2))
       obj2= null
       console.log(map.has(obj2),'obj2')//
      console.log(map)
```

