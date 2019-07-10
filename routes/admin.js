var express = require('express');
var router = express.Router();
var session = require('express-session');
var cookieParser = require('cookie-parser');
var Cookies = require('cookies');
var fs = require("fs");
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var connection = require('../db');
const multer  = require("multer");
var path = require('path');
var mkdirp = require('mkdirp');
var base64Img = require('base64-img');
const resizeImg = require('resize-img');
var obj
var obj_1;
var obj_folder;
var obj_count = 0;
var obj_category;
router.get('/',urlencodedParser,function(req , res, next) {

    let login = req.cookies.admin.name;
    let password = req.cookies.admin.password;

    connection.conn.query("SELECT * FROM admin WHERE  login ='"+login+"' and password  = '"+password+"'",
        function (err,result) {
            setInterval(function () {
                connection.conn.query('SELECT 1');

            }, 5000);

            console.log(err);
           if (Number(result.length) <= 0)
           {
               res.redirect('/login');
           }

           else if (Number(result.length)> 0){

               connection.conn.query('SELECT id,name FROM restaurants',function (err,result) {
                  console.log(err);
                  obj  = result;

               });

               connection.conn.query('SELECT   *  FROM  folders',function (err,result) {

                   obj_folder = result;
                   result.forEach(function(element) {
                       obj_count = Number(element.photoesAmount + obj_count);

                   });


               });

               connection.conn.query("SELECT * FROM category",function (err,result) {
                  obj_category = result;
               });


               connection.conn.query('SELECT id,name FROM photographers',function (err,result) {
                   console.log(err);
                   obj_1  = result;

                   res.render('pages/index', { status: '',obj:obj,obj_1:obj_1,obj_folder:obj_folder,obj_count:obj_count,obj_category:obj_category});

                    obj_count =0;
               });




            }




        }
    );



});

router.get('/add_phote',urlencodedParser,function(req,res,next){

    let login = req.cookies.admin.name;
    let password = req.cookies.admin.password;

    connection.conn.query("SELECT * FROM admin WHERE  login ='"+login+"' and password  = '"+password+"'",
        function (err,result) {
            setInterval(function () {
                connection.conn.query('SELECT 1');

            }, 5000);

            console.log(err);
            if (Number(result.length) <= 0)
            {
                res.redirect('/login');
            }

            else if (Number(result.length)> 0){
                
                connection.conn.query("SELECT * FROM  photographers",function (err,result) {
                        console.log(result);
                    res.render('pages/index-0',{obj:result});

                })
                







            }




        }
    );




});

router.post('/add_phote',urlencodedParser,function(req,res,next){
    setInterval(function () {
        connection.conn.query('SELECT 1');

    }, 5000);
    var storage =   multer.diskStorage({
        destination: function (req, file, cb) {
            mkdirp('files/', function (err) {
                if (err) console.error(err)
                else console.log('pow!')
            });
            cb(null, 'files/');
        },
        filename: function (req, file, cb) {
            cb(null, req.body.name_photographer  + path.extname(file.originalname));
        }
    });
    var upload = multer({ storage : storage}).single('avatar');
    upload(req,res,function(err) {
          if(err) res.end('Error - ' + err);
          var name_photographer =req.body.name_photographer;
          var phone = req.body.phone;
          var about = req.body.about;
          var photo  = req.file.filename;
          connection.conn.query("INSERT INTO `photographers`( `name`, `contact`, `about`, `photo`) VALUES ('"+name_photographer+"','"+phone+"','"+about+"','"+photo+"')",function (err,resutl) {
                    if(err) res.end('error-' + err);

                    res.redirect('/admin/add_phote');
          });
    });
});




router.post('/',urlencodedParser,function(req,res,next){
    var folder_url;
    var storage =   multer.diskStorage({
        destination: function (req, file, cb) {

             folder_url = 'files/'+req.body.name_folder;
            mkdirp('files/' + req.body.name_folder, function (err) {
                if (err) console.error(err)
                else console.log('pow!')
            });
            cb(null, 'files/'+ req.body.name_folder);
        },
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
        }
    });

    var upload = multer({ storage : storage}).array('userFile',1500);
    upload(req,res,function(err) {
        console.log(err);
        if(err) {
            return res.end("Error uploading file.");
        }
        var count_img = req.files.length;
        var f_url  =folder_url;
        var restaurants = req.body.restaurants;
        var password = req.body.password;
        var name_folder = req.body.name_folder;
        var photographers = req.body.photographers;
        var title = req.body.title;
        var categoty = req.body.category;
        connection.conn.query("INSERT INTO `folders`(`name`, `folder`, `photoesAmount`,`title`, `restaurant`,`photographer`, `login`,`category_id`) VALUES ( '"+name_folder+"','"+f_url+"','"+count_img+"','"+title+"','"+restaurants+"','"+photographers+"','"+password+"','"+categoty+"')",function (err,result) {
                console.log(err);
        });


        res.redirect('/admin');


    });

});

router.get('/blank',function (req,res,next) {

    res.render('pages/blank');
} );
router.get('/restaurants',function (req,res,next){

    connection.conn.query("SELECT * FROM `restaurants`",function (err,ruselt) {

        res.render('pages/forms',{obj:ruselt});
    });


})


router.get('/add_rek',function (req,res) {

    connection.conn.query("SELECT  * FROM `rek`",function (err,result) {

        res.render('pages/rek',{obj_rek:result});
    });

})


router.post('/add_rek',function (req,res) {
    var storage =   multer.diskStorage({
        destination: function (req, file, cb) {

            mkdirp('public/rek', function (err) {
                if (err) console.error(err)
                else console.log('pow!')
                if(err){

                }
            });
            cb(null, 'public/rek/');
        },
        filename: function (req, file, cb) {
            cb(null, req.body.name  + path.extname(file.originalname));
        }
    });
    var upload = multer({ storage : storage}).single('photo');
    upload(req,res,function(err) {
           var file_name = req.file.filename;
           var name_photo  =req.body.name;
           connection.conn.query("INSERT INTO `rek`( `name`, `photo`) VALUES ('"+file_name+"', '"+name_photo+"')",function (err,result) {
               res.redirect('/admin/add_rek');
           });

    });

})
router.post('/restaurants',function (req,res,next) {

    var storage =   multer.diskStorage({
        destination: function (req, file, cb) {

            mkdirp('files/', function (err) {
                if (err) console.error(err)
                else console.log('pow!')
            });
            cb(null, 'img/');
        },
        filename: function (req, file, cb) {
            cb(null, req.body.name  + path.extname(file.originalname));
        }
    });
    var upload = multer({ storage : storage}).single('photo');

    upload(req,res,function(err) {


        if(err) res.end('Error - ' + err);

        var name_file = req.file.filename;


        resizeImg(fs.readFileSync('img/' + name_file), {width: 342, height: 250}).then(buf => {
            fs.writeFileSync('img/img_small/' + name_file, buf);
            var name  = req.body.name;
            var addres  = req.body.Adress;
            var Contact  = req.body.Contact;
            var title  = req.body.title;
            var decode  = base64Img.base64Sync('img/img_small/' + name_file);
            connection.conn.query("INSERT INTO `restaurants`(`name`,`address`, `contact`, `title`,`logo`) VALUES ('"+name+"','"+ addres+"','"+Contact+"','"+title+"','"+decode+"')" ,function (err,result) {
                if(err) res.send('не удалость  загрузить ошибка  - ' +  err);
                res.redirect('/admin/restaurants');
            });
        });





    });


});

router.post('/delete',function (req,res) {
    var id  =  req.body.id;
    connection.conn.query("SELECT * FROM rek where id = '"+id+"'",function (err,result) {
         var del_id = result[0].name;
        var filePath = 'public/rek/' + del_id;
        fs.unlinkSync(filePath);
         connection.conn.query("DELETE FROM `rek` WHERE  id = '" + id + "'",function (err,result) {
                res.redirect('/admin/add_rek');
         })
    });
})






module.exports = router;
