var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    let arr1 = [
        "images/g1.jpg", "images/news1.jpg", "images/g4.jpg", "images/t6.jpg", "images/g5.jpg", "images/g6.jpg", "images/g7.jpg", "images/g8.jpg" 
      ]
    let subT = 'Фотоотчет с тоя Калыбек и Анджелины Джоли'
      
    res.render('gallary', { title: 'Фотоотчет', subText: subT, gallArr: arr1 });
});

router.post('/', (req, res, next) => {
    res.render('gallary', { gallArr: arr1});
});

module.exports = router;
