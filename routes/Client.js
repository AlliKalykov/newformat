var express = require('express');
var router = express.Router();
var connection = require('../db');
var path = require('path');
var fs = require('fs');
var base64Img = require('base64-img');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('Client/index');
});
router.post('/',function (req,res){
    var login =  req.body.login;

    connection.conn.query("SELECT  * FROM folders where login = '"+login+"'",function (err,result) {
        if(result.length >0){
            res.cookie('Client',login);
            res.redirect('/photo_download');
        }
        else{
            res.redirect('/Client');

        }
    })
})

router.get('/photo_download',function (req,res){
    connection.conn.query("SELECT * FROM  folders",function (err,result) {
        var url = result[0].folder
        var title = result[0].title;
        var subText = "";
        var gallArr = [];
        var r =  fs.readdirSync(url);
        gallArr[0] = base64Img.base64Sync('' + url + '/' + r[0]);
        res.render('gallary',{gallArr:gallArr,title:title,subText:subText});
    });
});


module.exports = router;
