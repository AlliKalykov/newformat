var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  let catObj2 = [
    {
      href: "http://htmlbook.ru/",
      rekTitle: "Кайнар",
      rekText: "Свадьбы, карпаративы и многие другие мероприятия в нашем ресторане",
      image: "images/blog2.jpg",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com"
    },
    {
      href: "https://www.championat.com/",
      rekTitle: "Самбука",
      rekText: "Принимаем заказы на банкеты от 20 до 1000-1350 человек",
      image: "images/g2.jpg",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com"
    },
    {
      href: "https://bootstrap-4.ru/",
      rekTitle: "Center Bar",
      rekText: "День рождения, романтические вечера на двоих, отдельные кабинки для праздников",
      image: "images/t1.jpg",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com"
    },
    {
      href: "https://translate.google.ru/",
      rekTitle: "Ала-Тоо",
      rekText: "Свадьбы, карпаративы и многие другие мероприятия в нашем ресторане",
      image: "images/4.jpg",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com"
    },
    {
      href: "https://support.mozilla.org/en-US/",
      rekTitle: "Сон Кол",
      rekText: "Принимаем заказы на банкеты от 20 до 1000-1350 человек",
      image: "images/bg2.jpg",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com"
    },
    {
      href: "https://bootstrap-4.ru/",
      rekTitle: "Байтик",
      rekText: "Свадьбы, карпаративы и многие другие мероприятия в нашем ресторане",
      image: "images/blog1.jpg",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com"
    },
    {
      href: "https://translate.google.ru/",
      rekTitle: "Тюбитейка",
      rekText: "День рождения, романтические вечера на двоих, отдельные кабинки для праздников",
      image: "images/blog2.jpg",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com"
    },
    {
      href: "https://support.mozilla.org/en-US/",
      rekTitle: "Фаиза",
      rekText: "Свадьбы, карпаративы и многие другие мероприятия в нашем ресторане",
      image: "images/blog3.jpg",
      facebook: "https://facebook.com",
      instagram: "https://instagram.com"
    }
  ]

let subT = 'Заведения, с которыми мы сотрудничаем являются профессионалами своего дела! ' +
  'Здесь представлены заведения с которыми мы сотрудничаем'
  
  res.render('restaurant', {title: "Заведения", subText: subT, restObj: catObj2});
});

router.post('/', (req, res, next) => {
  res.render('restaurant', { restObj: catObj2 });
});


module.exports = router;
