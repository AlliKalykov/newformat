var express = require('express');
var router = express.Router();
var connection = require('../db');
router.get('/', function(req, res, next) {
    res.render('login', { title: connection.conn });

});





module.exports = router;
