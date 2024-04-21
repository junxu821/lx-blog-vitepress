# Number
# (1)isInteger()方法
```javascript
//JavaScript 内部，整数和浮点数采用的是同样的储存方法，所以 25 和 25.0 被视为同一个值。
Number.isInteger(25) // true
Number.isInteger(25.1) // false

//如果参数不是数值，Number.isInteger返回false。
Number.isInteger(25) // true
Number.isInteger(25.0) // true
Number.isInteger() // false
Number.isInteger(null) // false
Number.isInteger('15') // false
Number.isInteger(true) // false

//注意，由于 JavaScript 采用 IEEE 754 标准，数值存储为64位双精度格式，数值精度最多可以达到 53 个二进制位（1 个隐藏位与 52 个有效位）。如果数值的精度超过这个限度，第54位及后面的位就会被丢弃，这种情况下，Number.isInteger可能会误判。
Number.isInteger(3.0000000000000002) // true

```
# (2)isSafeInteger() 方法
用来判断传入的参数值是否是一个"**安全整数**"（safe integer），如果是安全整数返回 true，否则返回 false。

一个安全整数是一个符合下面条件的整数：

* 可以准确地表示为一个 IEEE-754 双精度数字。
* 其 IEEE-754 表示不能是舍入任何其他整数以适应 IEEE-754 表示的结果。

比如，2^53 - 1 是一个安全整数，它能被精确表示，在任何 IEEE-754 舍入模式（rounding mode）下，没有其他整数舍入结果为该整数。作为对比，2^53 就不是一个安全整数，它能够使用 IEEE-754 表示，但是 2^53 + 1 不能使用 IEEE-754 直接表示，在就近舍入（round-to-nearest）和向零舍入中，会被舍入为 2^53。

安全整数范围为 -(2^53 - 1) 到 2^53 - 1 之间的整数，包含 -(2^53 - 1) 和 2^53 - 1。