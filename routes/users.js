var express = require('express');
var router = express.Router();
var connection = require('../db');
var base64Img = require('base64-img');
var path = require('path');
var fs = require('fs');

router.get('/',function (req,res) {
    let arr1 = [
        "images/g1.jpg", "images/news1.jpg", "images/g4.jpg", "images/t6.jpg", "images/g5.jpg", "images/g6.jpg", "images/g7.jpg", "images/g8.jpg"
    ]



    let subT = '';


    connection.conn.query("SELECT * FROM category",function (err,result) {
        let catObj2 = [


        ]
        for(var i =0; i<result.length;i++){
            var el  ={
                href: "/Gallary/" + result[i].id,
                rekTitle: result[i].name,
                rekText: '',
                image: result[i].url_photo
            }



            catObj2.push(el);
        }
        console.log()
        res.render('gallaryCat', {title: "Категории", subText: subT, catObj: catObj2, gallArr: arr1 });
    })




})


module.exports = router;
