const url = require('url');
//解析url  true可以查询字符串 有query就转换成字符串
const res2 = url.parse('http://www.name.com:8080/a/b/c/hello.html?a=100&b=200#abx', true);
console.log(res2);