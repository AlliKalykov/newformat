var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db  = require('./db');
var bodyParser = require('body-parser');
const multer  = require("multer");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ClientRouter = require('./routes/Client');
var ContactRouter = require('./routes/Contact');
var GallaryRouter = require('./routes/Gallary');
var loginRouter = require('./routes/login');
var adminRouter = require('./routes/admin')
var createRouter = require('./routes/create');
var photo_downloadRouter = require('./routes/photo_download');
var restaurantRouter = require('./routes/Restaurant');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/Gallary', express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname , 'public')));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Client', ClientRouter);
app.use('/Contact', ContactRouter);
app.use('/Gallary', GallaryRouter);
app.use('/login', loginRouter);
app.use('/admin', adminRouter);
app.use('/create', createRouter);
app.use('/photo_download', photo_downloadRouter);
app.use('/restaurant', restaurantRouter);


app.use(multer({dest:"files"}).single("filedata"));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


//db.conn.query("SELECT id,folder,date FROM folders",function (err,result) {
//    console.log(result);
//});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
