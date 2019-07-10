var express = require('express');
var router = express.Router();
var connection = require('../db');
var cookieParser = require('cookie-parser');
var Cookies = require('cookies');
router.get('/', function(req, res, next) {
    res.render('login', { title: "Hello" });
});
router.post('/',function(req,res,next){
    let login = req.body.login;
    let password = req.body.Password;
    connection.conn.query("SELECT *  FROM admin WHERE login = '"+login+"' AND password = '"+password+"' ",function(err,results){
       if (Number(results.length) > 0){
           let users  = {
               name: results[0].login,
               password: results[0].password
           }
           res.cookie('admin',users);

            res.redirect('/admin');
       }
       else{
           res.redirect('/login');
       }

    });


});

module.exports = router;
