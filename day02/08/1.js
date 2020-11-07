const express = require('express');
const moment = require('moment');
const app = express();

app.use(function (req, res, next) {
    moment.locale('zh-cn');
    console.log('time ' + Date.now());
    var time = moment(Date.now()).format("MMM Do");
    console.log(time);
    // 请求方啊是什么
    console.log(req.method)
    next()
})
app.get('/a', (req, res) => {
    console.log('有人访问我了/car/bmw 汽车资讯 之bmw')
    res.send({
        name: '最新讯息',
        content: '最新讯息。。。。。。。。。。。。'
    })
})

app.listen(9999, () => {
    console.log('9999启动了')
})