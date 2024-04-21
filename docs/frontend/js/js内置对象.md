# js内置对象
# 1.Math
Math是一个内置对象,而不是构造函数.

**(1)Math.fround()方法**

用于将一个数字转换为离它最近的单精度浮点数。调用Math.fround()方法的语法形式如下：

Math.fround(x);

其实在JavaScript中并不区分双精度浮点数和单精度浮点数，所有的数字都属于Number类型，而且所有的浮点数都是64位的。因此Math.fround()方法的实际执行过程如下：

1\. 如果参数x不是Number类型的，那么先将它转换为Number类型；

2\. 如果x是NaN，那么返回NaN；

3\. 如果x是+0、-0、正无穷（+Infinity）或负无穷（-Infinity），那么返回x；

4\. 将x转换为IEEE 754-2019标准的32位浮点数格式，转换过程中使用“舍入到偶数”策略，我们称这一步的结果为x32；

5\. 将x32转换为IEEE 754-2019标准的64浮点数格式，我们称这一步的结果为x64；

6\. 在具体的JavaScript实现中，返回和x64对应的Number类型的值。

如果某个数本身就能用单精度浮点数精确表示，那么Math.fround()方法的返回值还是它本身。但如果某个数不能用单精度浮点数格式精确表示，那么Math.fround()方法的返回值就可能是一个较接近但不相同的数；如果这个数在单精度浮点数范围之外（即它太过于大或太过于小），那么返回正无穷或负无穷。

**(2)random()和window.crypto.getRandomValues()**

***作用一样,后者随机性更高,做加密***
# 2.Object
# 3.Array
# 4.String
# 5.Global
* isNaN(),isFinite(),parseInt(),parseFloat()都是Global的属性
* undefined,NaN,Infinity都是Global的属性
* 原生引用类型的构造函数,Object,Function,Array,Boolean,String,Number,Date,RegExp,Symbol,Error,EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URLError等的构造函数都是Global的属性

在浏览器的环境中,window是Global的代理,所以上面这些都是window的属性,window还实现了其他的东西,不光是Global

