var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
   res.render('order',{index:4})
});

module.exports = router;
