# defer和 async
1. 1.js的默认行为是并行下载,后面的先下载完,也要等前面的加载完再执行.引用js是会阻塞后面的元素加载执行的
2. 页面中只有一个 async 和 defer 时，他俩的功能是一样的，唯一的区别是defer必须要等到 DOMContentLoaded 事件
3. 2当页面有多个async和defer时，async同样还是下载完立马执行，而defer必须从上到下按序执行，就算是排在后面的js比前面的js先下载好也不能执行，必须等到前面的js下载执行完毕，后面的才能按序执行
4. async优先级比defer高