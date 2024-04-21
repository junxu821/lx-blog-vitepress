# Js中保证精度的算术运算
* 加法

```javascript
/**
 * 加法
 * @param {*} num1 加数
 * @param {*} num2 加数
 * @returns
 */
export const usePlus = (num1, num2) => {
  const n1 = num1.toString().split('.')[1] ? num1.toString().split('.')[1].length : 1
  const n2 = num2.toString().split('.')[1] ? num2.toString().split('.')[1].length : 1
  const n = n1 > n2 ? n1 : n2
  const precision = Math.pow(10, n)
  return (num1 * precision + num2 * precision) / precision
}
```
* 减法

```javascript
/**
 * 减法
 * @param {*} num1 被减数
 * @param {*} num2 减数
 * @returns
 */
export const useMinus = (num1, num2) => {
  const n1 = num1.toString().split('.')[1] ? num1.toString().split('.')[1].length : 1
  const n2 = num2.toString().split('.')[1] ? num2.toString().split('.')[1].length : 1
  const n = n1 > n2 ? n1 : n2
  const precision = Math.pow(10, n)
  return (num1 * precision - num2 * precision) / precision
}

```
* 乘法
* 除法



