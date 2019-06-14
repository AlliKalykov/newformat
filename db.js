var mysql  = require('mysql');
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var app = express();
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'NF'
});



module.exports.conn = connection;
