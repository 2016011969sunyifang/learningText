const express = require('express');

const app = express();

const router = express.Router();
//整理一下路由 写成表
router.get('/a', (req, res) => {
    res.send('我是get请求的/a');
})

router.get('/b', (req, res) => {
    res.send('我是get请求的/b');
})
// 如果使用需要引用
app.use(router);

app.listen(9003, () => {
    console.log('服务器启动成功！');
})