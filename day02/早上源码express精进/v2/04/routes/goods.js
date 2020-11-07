const express = require('express') 

//建立表
const router = express.Router()

// 进行路由表的配置
router.get('/goodsList', (req, res) => {
    res.send('获取商品信息')
  })
 
router.post('/addGoods', (req, res) => {
    res.send('添加商品')
  })


module.exports = router