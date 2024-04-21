# Web Worker 和 webSocket
# worker 主线程:
1.通过 worker = new Worker( url ) 加载一个 JS 文件来创建一个 worker，同时返回

一个 worker 实例。

 2.通过 worker.postMessage( data ) 方法来向 worker 发开数

据。

 3.绑定 worker.onmessage 方法来接收 worker 发开过来的数据。 

4.可以使用

worker.terminate() 来终止一个 worker 的执行。



# WebSocket 是 Web 应用程序的传输协议，
它提供了双向的，按序到达的数

据流。

他是一个 Html5 协议，WebSocket 的连接是持久的，他通过在客户

端和服务器之间保持双工连接，服务器的更新可以被及时推开给客户端，

而不需要客户端以一定时间间隔去轮询。