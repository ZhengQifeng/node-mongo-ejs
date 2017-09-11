var express = require('express');
var router = express.Router();
var async = require('async');
var data;

var find = require('../dafind.js');


/* GET home page. */
router.get('/', function(req, res, next) {
    find(function(result) {
        data = result;
        res.render('findData', { data: data });
    });
});

module.exports = router;