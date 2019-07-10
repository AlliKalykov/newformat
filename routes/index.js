var express = require('express');
var router = express.Router();
var connection = require('../db');
var path = require('path');
var fs = require('fs');
var base64Img = require('base64-img');
var async = require("async");
var Promise = require('promise');
var sizeOf = require('image-size');

/* GET home page. */

var data_img;
router.get('/', function (req, res, next) {

  connection.conn.query('SELECT * FROM folders',function (err,results) {
    //
    setInterval(function () {
      connection.conn.query('SELECT 1');

    }, 5000);
    var obj1 = {
      zag: ['sdvavv',
        "Создание качественных фотографий с профессиональным прикосновением!",
        "Заказывайте фотоотчеты ващего мероприятия!",
        "Обращайтесь по следующим контактам!"
      ],
      image: ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg']
    };

var a = 0 ;

    if (results.length != 0) {
      for (var i = 0; i < 13; i++) {
        if (i == results.length) break;
        var url = path.resolve(__dirname + '/../' + results[i].folder);
        var r =  fs.readdirSync(url);
        obj1.image[a] = base64Img.base64Sync('' + url + '/' + r[0]);
        obj1.zag[i] = results[i].title;
        /*  fs.readdir(__dirname + '/../' + results[a].folder, function (err, result, next) {

             fs.readdir(url, function (err, result) {
             console.log(base64Img.base64Sync('' + url + '/' + result[a]));


            });


          });*/

        a++;
        }
      }

      var rekSlider = '/images/blog2.jpg';
      function getRandomInt(max) {
          return Math.floor(Math.random() * Math.floor(max));
      }

      let catObj1 = [
          {
              href: "https://bootstrap-4.ru/",
              rekTitle: "Свадьбы",
              rekText: "Свадьба, самое прекрасное в жизни человека",
              image: "images/svadba.jpg"
          },
          {
              href: "https://translate.google.ru/",
              rekTitle: "Кыз узатуу",
              rekText: "Самое трепетное событие для родителей девочек",
              image: "images/kyz.jpg"
          },
          {
              href: "https://support.mozilla.org/en-US/",
              rekTitle: "Бешик той",
              rekText: "Прекрасное событие для родителей",
              image: "images/beshik.jpg"
          }
      ]


    let restObj1 = {
      restTitle: ["Заведение 1", "Заведение 2", "Заведение 3", "Заведение 4", "Заведение 5", "Заведение 6"],
      facebook: ["https://facebook.com", "https://facebook.com", "https://facebook.com", "https://facebook.com", "https://facebook.com", "https://facebook.com"],
      instagram: ["https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com"],
      restHref: ["https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com"],
      image: ["/images/t1.jpg", "/images/t2.jpg", "/images/t3.jpg", "/images/t4.jpg", "/images/t5.jpg", "/images/t6.jpg"]
    }



    connection.conn.query("SELECT * FROM `restaurants`", function (err,result) {

                if(result.length > 0){
            var a =1;
              for(var i = 0 ; i < result.length;i++){
                  if(i == 6) break;
                  console.log("sdfsf");
                  restObj1.restTitle[i] = result[i].name;
                  restObj1.image[i] = result[i].logo;
                  restObj1.restHref[i] = 'Gallary/' + a;
                  a++;
              }
            }
    });

    let catObj2 = [
      {
        href: "https://bootstrap-4.ru/",
        rekTitle: "bootstrap",
        rekText: "Бешик той Болотбек уулу Амирхан в рестонаре Грант Палас в городе Бишкек",
        image: "images/blog1.jpg"
      },
      {
        href: "https://translate.google.ru/",
        rekTitle: "translate",
        rekText: "Тридцатилетний юбилей свадьбы Темир и Замиры в Бишкеке",
        image: "images/blog2.jpg"
      },
      {
        href: "https://support.mozilla.org/en-US/",
        rekTitle: "mozilla",
        rekText: "10 лет основанию компании \"Алмаз Нефтегаз\" в ресторане Алмаз Нефте Газ Палас РестоБар",
        image: "images/blog3.jpg"
      }
    ]
    let reklamaArr1 = ["images/blog2.jpg", "images/blog3.jpg"];
      function getRandomInt(max) {
          return Math.floor(Math.random() * Math.floor(max));
      }

      connection.conn.query('SELECT * FROM admin',function (err,result) {
          res.render('index', { title: 'Новый формат', sliderObj: obj1, restObj: restObj1, reklamaArr: reklamaArr1, greatObj: catObj2, rekSlider: rekSlider,catObj: catObj1  });
      });

  });
});

router.post('/', (req, res, next) => {


});

module.exports = router;
