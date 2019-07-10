var express = require('express');
var router = express.Router();
var connection = require('../db');
var base64Img = require('base64-img');
var path = require('path');
var fs = require('fs');
var app = express();

router.get('/',function (req,res) {
    let restObj = {
        restTitle: ["Заведение 1", "Заведение 2", "Заведение 3", "Заведение 4", "Заведение 5", "Заведение 6"],
        facebook: ["https://facebook.com", "https://facebook.com", "https://facebook.com", "https://facebook.com", "https://facebook.com", "https://facebook.com"],
        instagram: ["https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com"],
        restHref: ["https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com"],
        image: ["/images/t1.jpg", "/images/t2.jpg", "/images/t3.jpg", "/images/t4.jpg", "/images/t5.jpg", "/images/t6.jpg"]
    }

    res.render('restaurant',{title: 'Новый формат',subText:'1',restObj:restObj});
});

module.exports = router;


