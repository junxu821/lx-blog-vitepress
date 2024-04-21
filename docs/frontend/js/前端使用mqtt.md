# 前端使用mqtt
# 1.下载
```javascript
npm i mqtt.min.js --save
```
# 2.封装连接函数
```javascript
//引入mqtt文件
const $mqtt = require("@/commonJs/mqtt.min.js");
/**
 * 使用mqtt
 * @param {object} mqttInfo 建立连接的配置信息
 * @param {array|string} topicList //topic
 * @param {function} callback 回调
 */
export const useMqtt = (mqttInfo, topicList, callback) => {
  //短路运算将topicList变成一个数组
  Array.isArray(topicList) || (topicList = [topicList]);
  let host = mqttInfo.host;
  let port = Number(mqttInfo.port);
  let clientIds = "mqttjs_" + Math.random().toString(10).substr(2, 16);
  let userNames = mqttInfo.userName;
  let passwords = mqttInfo.passWord;
  const mqttOptions = {
    clientId: clientIds,
    username: userNames,
    password: passwords,
    connectTimeout: 3000,
    //connectTimeout:60*1000,
    keepalive: 10,
    reconnectPeriod: 1000,
    resubscribe: true,
  };
  const connectUrl = `${host}:${port}/mqtt`;
  let client = $mqtt.connect("ws://" + connectUrl, mqttOptions);
  // 自动重连
  client.on("reconnect", (msg) => {
    console.log("mqtt自动重连", msg);
  });
  // 错误
  client.on("error", () => {
    console.log("mqtt错误");
  });
  // 断开
  client.on("end", () => {
    console.log("mqtt断开");
  });
  // 掉线
  client.on("offline", (msg) => {
    console.log("mqtt掉线", msg);
  });
  //监听连接完毕,订阅和发布
  client.on("connect", () => {
    console.log("mqtt连接成功");

    for (let i = 0; i < topicList.length; i++) {
      client.subscribe(
        topicList[i],
        {
          qos: 1,
        },
        (err) => {
          if (!err) {
            console.log(topicList[i] + "订阅成功");
            client.publish(topicList);
          }
        }
      );
    }
  });
  //监听数据的推送
  client.on("message", (topic, message) => {
    // 把arrayBuffer转成字符串
    let encodedString = String.fromCharCode.apply(
      null,
      new Uint8Array(message)
    ); // 全局发送消息
    encodedString = decodeURIComponent(escape(encodedString));
    if (encodedString) {
      //短路运算返回数据
      callback && callback(topic, JSON.parse(encodedString));
    }
  });
  return client;
};

```
