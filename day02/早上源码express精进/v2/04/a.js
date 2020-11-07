const express = require('express')
const goodsRouter = require('./routes/goods')
const usersRouter = require('./routes/users')
const app = express()


app.use('/goods', goodsRouter)
app.use('/users', usersRouter)

app.listen(8002, () => {
    console.log('服务器启动到8000端口了')
})
