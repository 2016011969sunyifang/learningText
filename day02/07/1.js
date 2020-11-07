const express = require('express');
const textRouter = require('./route/test');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(textRouter);

app.listen(9003, () => {
    console.log('服务器启动成功');
})
