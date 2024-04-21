# Js的getYear、getFullYear、getUTCFullYear异同
### 1、getYear()函数
使用getYear()方法可返回两位或四位数的年份，用getYear()返回的数并不一定是4位的！处于1900年和1999年间的getYear()方法返回的只有两位数。在此之前的或是在此之后的年份返回的都是四位数的，比如2009年，Javascript解析器应该是返回2009的，而浏览器则计算返回109。这应该是早期的约定，而IE埋头改掉了。该函数已经被逐渐废弃并不推荐使用。

var d = new Date(); document.write(d.getYear());//IE输出2009，FIREFOX输出109

### 2、getFullYea()函数
getFullYear函数则不存在此问题。getFullYear()方法可返回一个四位数年份，这样大家（IE和FIREFOX等）都不需要运算，直接把解析值输出来即可。

var d = new Date(); document.write(d.getFullYear());//IE输出2009，FIREFOX输出2009

### 3、getUTCFullYear()函数
getUTCFullYear()函数则是根据UTC时间返回了四位数来代表年份。与getFullYear()方法理论角度是完全不同，虽然在大部分的时间里输出是相同的，但是假如当天日期是12月31日或1月1日，则getUTCFullYear() 返回值与getFullYear()返回值就有可能不同，具体取决于当地时区和UTC通用时间之间的关系，也就是差值。

var d = new Date(); document.write(d.getUTCFullYear());//IE输出2009，FIREFOX输出2009

比如在中国大陆、、香港、澳门、蒙古国、台湾、新加坡、马来西亚、菲律宾等地区的本地时间比UTC快8小时，记作UTC+8，意思就是比UTC时间快8小时。减的类似理解，比如UTC-10等。

