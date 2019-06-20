var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  let arr1 = [
    "images/g1.jpg", "images/news1.jpg", "images/g4.jpg", "images/t6.jpg", "images/g5.jpg", "images/g6.jpg", "images/g7.jpg", "images/g8.jpg" 
  ]

  let catObj2 = [
    {
      href: "http://htmlbook.ru/",
      rekTitle: "htmlbook",
      rekText: "Свадьба Бакыта и Бегимжан, которая проходила в рестаране Салкын Тор в городе Бишкек",
      image: "images/blog2.jpg"
    },
    {
      href: "https://www.championat.com/",
      rekTitle: "championat",
      rekText: "Юбилей прекрасной Жумагуль эже в городе Ош в ресторане Аш-Гош",
      image: "images/g2.jpg"
    },
    {
      href: "https://bootstrap-4.ru/",
      rekTitle: "bootstrap",
      rekText: "Бешик той Болотбек уулу Амирхан в рестонаре Грант Палас в городе Бишкек",
      image: "images/t1.jpg"
    },
    {
      href: "https://translate.google.ru/",
      rekTitle: "translate",
      rekText: "Тридцатилетний юбилей свадьбы Темир и Замиры в Бишкеке",
      image: "images/4.jpg"
    },
    {
      href: "https://support.mozilla.org/en-US/",
      rekTitle: "mozilla",
      rekText: "10 лет основанию компании \"Алмаз Нефтегаз\" в ресторане Алмаз Нефте Газ Палас РестоБар",
      image: "images/bg2.jpg"
    }
  ]

  let subT = 'Здесь вы можете найти интересующие вас фотографии.' +
  'Для просмотра и загрузки вы должны иметь пароль! Так же со дня ' +
  'мероприятие не должно пройти больше <br><b style="font-style: italic;color: red;">10 дней</b>'
  
  res.render('gallaryCat', {title: "Фотоотчеты", subText: subT, catObj: catObj2, gallArr: arr1 });

});

router.post('/', (req, res, next) => {
    res.render('gallaryCat', { gallArr: arr1, catObj: catObj2 });
});
  
  module.exports = router;
  
