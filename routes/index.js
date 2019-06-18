var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let obj1 = {
    zag: ["Новый формат в предоставлении услуг фотографа!",
    "Создание качественных фотографий с профессиональным прикосновением!",
    "Заказывайте фотоотчеты ващего мероприятия!",
    "Обращайтесь по следующим контактам!"
    ], 
    image: ["1.jpg", "2.jpg", "3.jpg", "4.jpg"]
  }
  let arr1 = [
    "images/g1.jpg", "images/news1.jpg", "images/g4.jpg", "images/t6.jpg", "images/g5.jpg", "images/g6.jpg", "images/g7.jpg", "images/g8.jpg" 
  ]

  let restObj1 = {
    restTitle: ["Заведение 1", "Заведение 2", "Заведение 3", "Заведение 4", "Заведение 5", "Заведение 6"],
    facebook: ["https://facebook.com", "https://facebook.com", "https://facebook.com", "https://facebook.com", "https://facebook.com", "https://facebook.com"],
    instagram: ["https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com"],
    restHref: ["https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com"],
    image: ["/images/t1.jpg", "/images/t2.jpg", "/images/t3.jpg", "/images/t4.jpg", "/images/t5.jpg", "/images/t6.jpg"]
  }
  res.render('index', { title: 'Express', sliderObj: obj1, gallArr: arr1, restObj: restObj1 });
});

router.post('/', (req, res, next) => {
  res.render("slider", { sliderObj: obj1 });
  res.render("gallaryIndex", { gallArr: arr1})
  res.render("restaurantInd.ejs", {restObj: restObj1})
})

module.exports = router;
