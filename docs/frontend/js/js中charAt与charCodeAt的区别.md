# js中charAt与charCodeAt的区别
# charAt(\[index\])
返回字符串指定索引下的字符,不传入索引或传入的不是一个数字默认为0,不在索引范围内一律返回空字符串。

# charCodeAt(\[index\])
返回字符串指定索引下的字符对应的Unicode编码，不传入索引或传入的不是一个数字默认索引为0，不在索引范围内一律返回Nan。