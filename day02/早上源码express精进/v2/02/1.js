const express = require('express')

const app = express()

const router = express.Router()

// 这是第一个路由表
router.get('/a',(req,res)=>{
     res.send('我是get请求的/a')
})
//这是第二个路由表
router.get('/b',(req,res)=>{
    res.send('我是get请求的/b')
})

router.post('/c',(req,res)=>{
    res.send('我是post请求的/c')
})


//路由表只是类似于 wps excel那种文档  想要使用 要明确声明要用
app.use(router)



app.listen(8001,()=>{
    console.log('服务器8001端口启动了')
})