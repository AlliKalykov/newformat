var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db  = require('./db');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var AboutRouter = require('./routes/About');
var ContactRouter = require('./routes/Contact');
var GaleriiRouter = require('./routes/Galerii');
var loginRouter = require('./routes/login');
var RestourRouter = require('./routes/Restour');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/About', AboutRouter);
app.use('/Contact', ContactRouter);
app.use('/Galerii', GaleriiRouter);
app.use('/login', loginRouter);
app.use('/Restour', RestourRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

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