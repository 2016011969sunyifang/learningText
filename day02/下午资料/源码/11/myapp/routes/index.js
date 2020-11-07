var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // 我要渲染view中的index 模板  第二个对象 我给了你一堆数据
  res.render('index', { 
    title: 'Express',
    num:123456,
    arr:['北京','上海','深圳','广州'],
    flag:true,
    html:"<h1>我是h1标签</h1>"
  });
});

module.exports = router;
