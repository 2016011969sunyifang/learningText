const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/student', { useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on('connected', () => { console.log('我在监听成功状态') })
mongoose.connection.on('disconnected', () => { console.log('我在监听连接断开状态') })
mongoose.connection.on('error', () => { console.log('我在监听连接错误状态') })
module.exports = { mongoose: mongoose }



