var express = require('express');
var router = express.Router();
var connection = require('../db');
var path = require('path');
var fs = require('fs');
var base64Img = require('base64-img');
var cookieParser = require('cookie-parser');
var Cookies = require('cookies');
router.get('/',function (req,res){
    let Client = req.cookies.Client;
    console.log(Client);
    connection.conn.query("SELECT * FROM  folders WHERE login  = '"+Client+"'",function (err,result) {
        setInterval(function () {
            connection.conn.query('SELECT 1');
        }, 5000);
        var url = result[0].folder;
        var title = result[0].title;
        var count  =  result[0].photoesAmount;
        var count_img = fs.readdirSync(url).length;
        var folder  =  result[0].folder;
        var subText = "";
        var gallArr = [];
        var r =  fs.readdirSync(url);
        for (var i=0;i < count_img;i++){
            gallArr[i] = base64Img.base64Sync('' + url + '/' + r[i]);
        }
        res.render('gallary',{gallArr:gallArr,title:title,subText:subText,folder:folder});
    });
});

router.post('/image',function (req,res) {
    var array = eval('(' + req.body.array + ')');
   // console.log(array);
    var obj_file ={
        img: new Array()
    };
   var url  = fs.readdirSync(array.folder_name);
    for(var i=0;i< array.arr.length; i++){

        obj_file.img[i] = base64Img.base64Sync(array.folder_name+ '/' + url[array.arr[i]]);
    }
    res.end(JSON.stringify(obj_file));

});
module.exports = router;