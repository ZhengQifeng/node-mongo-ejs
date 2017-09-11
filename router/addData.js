var express = require('express');
var router = express.Router();

var add = require('../daadd.js');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('addData');
});

router.get('/manager', function(req, res, next) {
	console.log(req.query.user);
	add(req.query.user);
    res.end(JSON.stringify(1))
});

module.exports = router;