# ES6
# 1、ES6新特性
1. let,const
2. 解构赋值
3. 函数默认参数
4. 字符串模板 \`\${}\`
5. 箭头函数
6. Promise函数
7. Generator函数
8. Async函数
9. 模块化 import export

# 2.let const
【1】let,const声明的变量具有块级作用域，const声明一个只读的常量

【2】不存在变量提升，在声明变量前调用变量会报错

【3】不能重复声明

【4】顶层对象：let,const声明的变量不属于顶层对象的属性

# 3.箭头函数
（）=>{}

用处：代码更简洁清晰；简化回调函数

【1】箭头函数this指向定义函数时所处作用域的对象，而不是执行时的对象

【2】箭头函数没有自己的this，因此不能用作构造函数

【3】箭头函数没有arguments对象

【4】不可以使用yield命令，不能用作Generator函数