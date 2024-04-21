# JS继承
1.【原型链继承】 不能向父构造函数传参

Child.prototype=new Parent();

2.【构造函数继承】 不能访问原型链

Parent.call(this)

3.【组合式继承】

4.【寄生组合式继承】 

5.【class继承】 

class Child extends Parent

 

6.call、apply、bind

改变this指向

【call】参数一个一个传入

【apply】参数作为数组整体传入

【bind】执行后返回一个新函数，新函数this指向新对象，再向向新函数传参