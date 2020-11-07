const express = require('express');

const router = express.Router();
//整理一下路由 写成表
router.get('/userinfo', (req, res) => {
    res.send('获取用户信息');
})

module.exports = router;