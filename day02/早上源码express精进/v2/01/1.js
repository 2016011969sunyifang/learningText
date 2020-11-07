const express = require('express') 

const app = express ()
// 视频方面的api都在这里
app.get('/video',(req,res)=>{
    console.log('有人访问我了/video  索要视频')
    res.send([
        {
            name:'我是视频1',
            url:'https://www.baidu.com/',
     
        },
        {
            name:'我是视频2',
            url:'https://www.baidu.com/',
     
        },
        {
            name:'我是视频3',
            url:'https://www.baidu.com/',
     
        },
        {
            name:'我是视频4',
            url:'https://www.baidu.com/',
     
        }
    ])
})



app.get('/car',(req,res)=>{
    console.log('有人访问我了/car 汽车资讯')
    res.send({
       name:'汽车资讯',
       content:'最新新车资讯 。。。。。。。。。。。。。。。。。。。'
   })
})

app.get('/car/benz',(req,res)=>{
    console.log('有人访问我了/car/benz 汽车资讯 之benz')
    res.send({
        name:'汽车资讯之奔驰最新讯息',
        content:'梅赛德斯-奔驰（Mercedes-Benz），德国豪华汽车品牌，汽车的发明者，被认为是世界上最成功的高档汽车品牌之一，其完美的技术水平、过硬的质量标准、推陈出新的创新能力，以及一系列经典轿跑车款式令人称道。奔驰三叉星已成为世界上最著名的汽车及品牌标志之一'
    })
})

app.get('/car/bmw',(req,res)=>{
    console.log('有人访问我了/car/bmw 汽车资讯 之bmw')
    res.send({
        name:'汽车资讯之奔驰最新讯息',
        content:' 宝马汽车，是指宝马汽车公司（Bayerische Motoren Werke AG，简称BMW）生产的汽车，主要的系列车型有1、2、3、4、5、6、7、8等系列。以生产豪华轿车、摩托车和高性能发动机而闻名于世。宝马汽车公司是世界著名的轿车公司'
    })
})


app.listen(9999,()=>{
    console.log('9999启动了')
})

