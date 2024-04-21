# js生成随机数
# 1.随机生成一个有上下限的随机整数
```javascript
/**
 * 随机生成一个有上下限的随机整数
 * @param {number} minNum 下限
 * @param {nmuber} maxNum 上限
 * @returns {number}
 */
export const userRandomInt = function (minNum, maxNum) {
  //生成从minNum到maxNum的随机数
  const len = arguments.length;
  if (len === 1) {
    return parseInt(Math.random() * minNum + 1, 10);
  } else if (len === 2) {
    return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
  } else {
    return parseInt(Math.random() * 10);
  }
};

```
