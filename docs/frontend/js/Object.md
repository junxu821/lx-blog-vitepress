# Object
1.字面量创建对象,不会实际调用Object函数 

# 1.Object.assign(dest,src),浅拷贝
# 2.Object.is()
```javascript
        console.log(+0===-0) //true
        console.log(+0===0)//true
        console.log(-0===0)//true
        console.log(NaN===NaN)//false
       
        Object.is(+0,-0)//false
        Object.is(+0==0)//true
        Object.is(-0===0)//false
        Object.is(NaN,NaN)//true
```


# 3.对象的解构
* 结构会在内部调用一个ToObject()的方法,会把每个数据转化为对象,包括原始值也会当作对象,所以null,undefined不能被结构,会报错
(1)嵌套结构

```javascript
 let person1 = {
        name:'dd',
        age:20,
        job:{
            title:'eee'
        }
       };
       let person2 = {};
       ({
        name:person2.name,
        age:person2.age,
        job:person2.job
        } = person1)
       console.log(person2)
//{
    "name": "dd",
    "age": 20,
    "job": {
        "title": "eee"
    }
}
```
这里的job是浅拷贝
(2)部分解构
当结构的其中一个抛出异常,结果只有它之前的
(3)参数上下文解构
即函数的行参结构
# 4.new关键字的过程
(1)在内存中创建一个新对象

(2)新对象内部的\[\[prototype\]\]被赋值为构造函数的prototype属性

(2)构造函数内部的this指向这个对象

(4)执行构造函数的内部的代码,给这个对象添加属性

(5)如果构造函数返回非空对象,则返回这个对象,否则,返回刚刚创建的对象

* 对象的constructor属性指向它的构造函数,其实contractor,本质是在构造函数的prototype对象身上的,所以可以访问到,但是一般认为intanceof是判断它属于哪个对象更可靠
* new()的时候后面的括号可以省略
# 5.构造函数的问题
问题:构造函数内部的方法,实例化后每个对象都有该方法,但是不同实例之间的同名方法,并不相等,因为函数本质是对象,每次都被重新构建,同一个作用的函数,没必要引用不相等

解决:把函数定义到,构造函数外部,但是这样代码太分散了,所以一般定义到构造函数的原型上



# 6.Object.create();通过已有的对象创建新对象
# 7.Object.setPrototypeOf,getPrototypeOf
# 8.Object.kes(),Object.ValuesOf(),Object.entries()