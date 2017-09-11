var express = require('express');
var path = require('path');
var app = express();
var server=require('./server.js');
var add=require('./daadd.js');

var addData = require('./router/addData.js');
var findData = require('./router/findData.js');

// add.add([{"name":"菜鸟教程","url":"www.runoob.com"},{"name":"菜鸟工具","url":"c.runoob.com"}]);

app.set('views', path.join(__dirname, 'views'));  
app.set('view engine', 'ejs');  
 
app.use(express.static('public'));
 
app.use('/add', addData);
app.use('/find', findData);
 
server.start(app);