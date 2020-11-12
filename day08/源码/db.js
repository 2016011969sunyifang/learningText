//引入mongoose 模块
const mongoose = require('mongoose')
//2 连接mongodb并选择指定数据库 dbName
//
mongoose.connect('mongodb+srv://123qwe:123qwe@cluster0.i5rfs.mongodb.net/summer?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
//3 连接成功
mongoose.connection.on('connected', () => {
    console.log('我在监听成功状态')
})
//4 连接断开
mongoose.connection.on('disconnected', () => {
    console.log('我在监听连接断开状态')
})
//5 连接错误
mongoose.connection.on('error', () => {
    console.log('我在监听连接错误状态')
})
var a = 1
//6 连接成功之后 将模块暴露出来
module.exports = {
    mongoose: mongoose,
    a: a
}


// module.exports =  mongoose









