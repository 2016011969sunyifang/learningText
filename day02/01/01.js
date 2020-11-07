const express = require('express');
const app = express();

app.listen(9002, () => {
    console.log('服务器启动成功');
})
app.get('/a', (req, res) => {
    res.send({
        disc: '你好青春',
        url: {
            no1: '123',
            no2: '123',
            no3: '123',
            no4: '123',
        }
    })
})
