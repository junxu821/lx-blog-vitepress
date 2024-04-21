# js之事件循环(event loop)
# 前言
JavaScript 是一门单线程语言,为了防止主线程阻塞,就产生了所谓的同步任务和异步任务.简单的来说不耗时的程序语句就是同步任务,反之耗时的则是异步任务.为了有机协调同步任务和异步任务的执行顺序,所以出现了事件循环的概念.

# 一、同步任务和异步任务
## 1.异步任务:异步任务又分为宏任务和微任务(在任务队列中,不进入主线程)
* 宏任务: 包括整体代码script，setTimeout，setInterval,
* 微任务: Promise，process.nextTick
* ps:Promise中的内容是同步代码,resolve和reject返回的内容是异步代码,也就是.then()执行算异步任务

### 2.同步任务就是平常见到的普通代码语句,除了异步任务的代码(在主线程运行,存在于执行栈)


# 二、事件循环的过程
## 1.流程图
<!-- ![image](images/cai_ufevi_2sq3oSDysygYoqbzNE5SggeifjicdTnRI.png) -->



## 2.文字描述:
* 1.先执行所有同步任务，碰到异步任务放到任务队列中
* 2.同步任务执行完毕，开始执行当前所有的异步任务
* 3.先执行任务队列里面所有的微任务
* 4.然后执行一个宏任务
* 5.然后再执行所有的微任务
* 6.再执行一个宏任务，再执行所有的微任务·······依次类推到执行结束。

ps:当异步完成后，会通知到我们，但是此时可能程序正在做其他的事情，所以即使异步完成了也需要在一旁等待，等到程序空闲下来才有时间去看哪些异步已经完成了，再去执行。

### 3.代码如下（示例）：
```javascript
//1
console.log('1');    
//2
setTimeout(function() {
    console.log('2');
    process.nextTick(function() {
        console.log('3');
    })
    new Promise(function(resolve) {
        console.log('4');
        resolve();
    }).then(function() {
        console.log('5')
    })
})
//3
process.nextTick(function() {
    console.log('6');
})
//4
new Promise(function(resolve) {
    console.log('7');
    resolve();
}).then(function() {
    console.log('8')
})
//5
setTimeout(function() {
    console.log('9');
    process.nextTick(function() {
        console.log('10');
    })
    new Promise(function(resolve) {
        console.log('11');
        resolve();
    }).then(function() {
        console.log('12')
    })
})
//1 7 6 8 2 4 3 5 9 11 10 12
```
