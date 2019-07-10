var express = require('express');
var router = express.Router();
var connection = require('../db');
var base64Img = require('base64-img');
var path = require('path');
var fs = require('fs');
var app = express();


router.get('/', function (req, res, next) {
    let arr1 = [
        "images/g1.jpg", "images/news1.jpg", "images/g4.jpg", "images/t6.jpg", "images/g5.jpg", "images/g6.jpg", "images/g7.jpg", "images/g8.jpg"
    ]



    let subT = 'Здесь вы можете найти интересующие вас фотографии. ' +
        'Для просмотра и загрузки вы должны иметь пароль! Так же со дня ' +
        'мероприятие не должно пройти больше <br><b style="font-style: italic;color: red;">10 дней</b>'


    connection.conn.query("SELECT * FROM folders",function (err,result) {
        let catObj2 = [
            {
                href: "http://htmlbook.ru/",
                rekTitle: "htmlbook",
                rekText: "Свадьба Бакыта и Бегимжан, которая проходила в рестаране Салкын Тор в городе Бишкек",
                image: "images/blog2.jpg"
            }

        ]
        for(var i =0; i<result.length;i++){
            var el  ={
                href: "/Client",
                rekTitle: result[i].name,
                rekText: result[i].title,
                image: "images/blog2.jpg"
            }
            var url = path.resolve(__dirname + '/../' + result[i].folder);
            var r =  fs.readdirSync(url);
              el.image = base64Img.base64Sync('' + url + '/' + r[0]);


            catObj2.push(el);
        }
        console.log()
        res.render('gallaryCat', {title: "Фотоотчеты", subText: subT, catObj: catObj2, gallArr: arr1 });
    })


});

router.post('/', (req, res, next) => {
    res.render('gallaryCat', { gallArr: arr1, catObj: catObj2 });
});

router.get('/:id', function (req, res, next) {

    var cat = req.params.id;
    let arr1 = [
        "images/g1.jpg", "images/news1.jpg", "images/g4.jpg", "images/t6.jpg", "images/g5.jpg", "images/g6.jpg", "images/g7.jpg", "images/g8.jpg"
    ]



    let subT = 'Здесь вы можете найти интересующие вас фотографии. ' +
        'Для просмотра и загрузки вы должны иметь пароль! Так же со дня ' +
        'мероприятие не должно пройти больше <br><b style="font-style: italic;color: red;">10 дней</b>'


    connection.conn.query("SELECT * FROM folders WHERE  category_id = '"+cat+"'",function (err,result) {
        let catObj2 = [
            {
                href: "http://htmlbook.ru/",
                rekTitle: "htmlbook",
                rekText: "Свадьба Бакыта и Бегимжан, которая проходила в рестаране Салкын Тор в городе Бишкек",
                image: "images/blog2.jpg"
            }

        ]
        for(var i =0; i<result.length;i++){
            var el  ={
                href: "/Client",
                rekTitle: result[i].name,
                rekText: result[i].title,
                image: "images/blog2.jpg"
            }
            var url = path.resolve(__dirname + '/../' + result[i].folder);
            var r =  fs.readdirSync(url);
            el.image = base64Img.base64Sync('' + url + '/' + r[0]);


            catObj2.push(el);
        }
        console.log()
        res.render('gallaryCat', {title: "Фотоотчеты", subText: subT, catObj: catObj2, gallArr: arr1 });
    })


});

router.post('/', (req, res, next) => {
    res.render('gallaryCat', { gallArr: arr1, catObj: catObj2 });
});





module.exports = router;
