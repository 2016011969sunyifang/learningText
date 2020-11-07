var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { 
//     header:'我是头部',
//     title: 'Express',
//     num:123456,
//     arr:['北京','上海','深圳','广州'],
//     flag:true,
//     html:"<h1>我是h1标签</h1>"
//   });
// });


router.get('/', function(req, res, next) {
   res.render('index',{
     index:0
   })
});

module.exports = router;
