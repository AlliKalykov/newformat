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
  let restObj1 = {
    restTitle: ["Заведение 1", "Заведение 2", "Заведение 3", "Заведение 4", "Заведение 5", "Заведение 6"],
    facebook: ["https://facebook.com", "https://facebook.com", "https://facebook.com", "https://facebook.com", "https://facebook.com", "https://facebook.com"],
    instagram: ["https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com"],
    restHref: ["https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com", "https://instagram.com"],
    image: ["/images/t1.jpg", "/images/t2.jpg", "/images/t3.jpg", "/images/t4.jpg", "/images/t5.jpg", "/images/t6.jpg"]
  }
  
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

  let reklamaArr1 = ["images/blog2.jpg", "images/blog3.jpg"]
  res.render('index', { title: 'Новый формат', sliderObj: obj1, restObj: restObj1, reklamaArr: reklamaArr1, greatObj: catObj2 });
  
});

router.post('/', (req, res, next) => {
  res.render("slider", { sliderObj: obj1 });
  res.render("restaurantInd", {restObj: restObj1 });
  res.render("reklamaInd", {reklamaArr: reklamaArr1 });
  res.render("great", { greatObj: catObj2 })
});

module.exports = router;
