const express = require('express')
const testRouer = require('./route/test')
//这是一个body-parser模块 用于请求post body请求  
// 
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json());
//语义 使用urlencoded请求体
//返回的对象是一个键值对，当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的则可为任何数据类型。

app.use(bodyParser.urlencoded({ extended: true }));
app.use(testRouer)
app.listen(8085, () => {
    console.log('running at port 8085 !!!')
})