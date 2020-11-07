const express = require('express');
const viewsRouter = require('./routes/view');
const app = express();

app.use('/views', viewsRouter)
app.use('/public', express.static('./public'))

app.listen(9005, () => {
    console.log('服务器启动成功');
})