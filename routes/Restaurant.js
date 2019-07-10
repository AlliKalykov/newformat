var express = require('express');
var router = express.Router();
var connection = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {

  let subT = 'Заведения, с которыми мы сотрудничаем являются профессионалами своего дела! ' +
      'Здесь представлены заведения с которыми мы сотрудничаем';

  connection.conn.query("SELECT * FROM `restaurants`", function (err,result) {
    let restObj1 = [

    ];
    if(result.length > 0){
      var a =1;
      for(var i = 0 ; i < result.length;i++){
      var obj  = {
        restTitle: "Заведение 1",
        facebook: "https://facebook.com",
        restHref: "https://instagram.com",
        instagram: "https://instagram.com",
        image: "/images/t1.jpg",
      }
        obj.restTitle = result[i].name;
        obj.image = result[i].logo;
        obj.restHref = 'Gallary/' + a;
        a++;
        restObj1.push(obj);
      }
    }
    res.render('restaurant', { title: 'Новый формат',restObj: restObj1,subText:subT});
  });









});

router.post('/', (req, res, next) => {
  res.render('restaurant', { restObj: catObj2 });
});


module.exports = router;
