const express = require('express') 

//建立表
const router = express.Router()

// 进行路由表的配置
router.get('/userinfo', (req, res) => {
    res.send('我是用户信息')
  })
 
router.post('/userage', (req, res) => {
    res.send('我是用户年龄18')
  })


module.exports = router