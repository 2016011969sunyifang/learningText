const express = require('express')
const goodsRouter = require('./routes/goods')
const usersRouter = require('./routes/users')
const app = express()


app.use(goodsRouter)
app.use(usersRouter)

app.listen(8000,()=>{
    console.log('服务器启动到8000端口了')
})
