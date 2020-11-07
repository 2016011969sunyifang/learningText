var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
   res.render('pro',{index:1})
});

module.exports = router;
