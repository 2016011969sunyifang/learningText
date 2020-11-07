const express = require('express');
const testRouer = require('./route/test');

const app = express();

app.use(testRouer)
app.listen(9002, () => {
    console.log('服务器启动成功');
})
