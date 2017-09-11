var MongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/runoob';
var data;

var selectData = function(db, a, callback) {
    //连接到表  
    var collection = db.collection('site');
    collection.find().toArray(function(err, result) {
        if (err) {
            console.log('Error:' + err);
            return;
        }
        data = result;
        a(result);
        callback(result);
    });
}

function find(callback) {
    MongoClient.connect(DB_CONN_STR, function(err, db) {
        console.log("连接成功！");
        var result;
        selectData(db, callback, function(result) {
            db.close();
        });
    })
};

module.exports=find;