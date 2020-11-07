const express = require('express')
const viewsRouter = require('./route/view')
const app = express()



// 挂载静态资源
// 所有的 /public 开头的都会去到 public 文件夹下寻找内容
// 按照你请求路径后面的内容去寻找
app.use('/public', express.static('./public'))
app.use('/views',viewsRouter)

app.listen(8080,()=>{
    console.log('8080启动了')
})