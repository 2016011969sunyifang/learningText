const express = require('express');
const goodsRouter = require('./routes/goods');
const userRouter = require('./routes/users');
const app = express();

app.use('/goods', goodsRouter);
app.use('/users', userRouter);

app.listen('9004', () => {
    console.log('服务器启动成功');
})