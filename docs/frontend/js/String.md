# String
* **js的字符串中每个字符是由16位码元组成**
* js内部内部是以UTF-16组成
* 码点:unicode中一个字符的完整表示,例如‘c'的码点是0x0063,码点可能是16位也可能是32位
* 字符串就是码元组成,字符串的长度就是多少16个码元的个数

# 1.codePointAt() (unicode)
从字符串中指定位置找出码元所对应的码点

与charCodeAt作用一样,只是在unicode编码中charCodeAt结果不准确,所以用该方法,找出字符串中索引位置码点的编码

# 2.charCodeAt() (utf-16)
找出制定索引位置的字符的码元值(一个16进制数)

# 3.fromCharCode() (utf-16)
将一组码元值拼成字符串

# 4.fromCodePoint()(unicode)
将码点拼成字符串

# 5.normalize()
由于标准不一样,不好比较字符,用该方法可以规范化一个字符,

取值:NFD,NFC,NFKD,NFKC 

# 6.slice(),substr(),substring()
* 第一个参数都表示开始的位置
* 第二个参数传,代表后面全部
* slice,substring第二个参数代表结束索引的后一个位置,substr代表要截取的字符串的长度
参数负数时
* slice会将负数转化为负数加上字符串的长度
* substr会将第一个参数转化为负数加上字符串的长度,第二个负数转化为0
* substring会将所有负数转化为0
# 7.indexOf(),lastIndexOf()
* 第二个参数表示开始搜索的位置,lastIndexOf会从指定位置向前搜索


# 8、startsWith
代码如下（示例）

```javascript
let a ='abcd'
console.log(a.startsWith('a')//true
console.log(a.startsWith('b')//false

console.log(a.startsWith('')//true
console.log(a.startsWith('b',1))//true 第二个参数表示是从那个索引开始
```
# 9、endsWith
代码如下（示例）

```javascript
let a ='abcd'
console.log(a.endsWith('d')//true
console.log(a.endsWith('b')//false

console.log(a.endsWith('')//true

console.log(a.endsWith('b',2))//true 
//它的判断过程是这样的，首先读取第二个参数，先截取前2位字符串 "ab", 然后开始判断这
```
# 10.match
```javascript
stringObject.match(searchvalue)
stringObject.match(regexp)

```
<!-- ![image](images/pNFSeBb3gDKPI7aZcuAnuuyzIwMw7AqtzlwaaI1j8kM.png) -->

```javascript
// 参数为searchvalue时：
var str="Hello world!"
str.match("world")  // ["world", index: 6, input: "Hello world!", groups: undefined]
str.match("World")  // null
str.match("worlld")  // null
str.match("world!") // ["world!", index: 6, input: "Hello world!", groups: undefined]

// 参数为正则表达式时：
var str=" mm -4193 1 with words"
str.match(/\d+/g) // ["4193", "1"]
str.match(/\d+/)  // 未加全局时：["4193", index: 5, input: " mm -4193 1 with words", groups: undefined]

var str2="-6754 uuuid" //获取带符号的整数
str2.match(/^(-|\+)?\d+/) // ["-6754", "-", index: 0, input: "-6754 uuuid", groups: undefined]

```
# 11.padStart,padEnd
# 12.repeat()
接受一个整数,复制多次拼接成一个新串

# 13.for ... of...
# 14.toUpperCase,toLowerCase()
# 15.toLocaleUpperCase(),toLocaleLowerCase()
用法和toUpperCase,toLowerCase()一样,但是在某些语言中,unicode大小写转换需要特定规则,例如土耳其语,所以用该方法,**带有时区的概念,更保险**

# 16.search方法,
接受一个正则表达式或者字符串,返回所在的字符串开始索引,没找到则是-1

# 17.replace()
js中没有replaceAll方法

# 18.localeCompare()
比较两个字符串大小,该方法和地区有关,例如在美国,小写字母比大写的小,在其他地区未必这样