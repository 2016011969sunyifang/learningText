const express = require('express');

const router = express.Router();
//整理一下路由 写成表
router.get('/goodList', (req, res) => {
    res.send('添加商品');
})

module.exports = router;