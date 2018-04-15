// import config file

var config = require('./config.json');
var createError = require('http-errors');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


// Declaire routes

//var usersRouter = require('./routes/users');
var index = require('./routes/index');
var music = require('./routes/music');//每次添加新表都要加
var singer = require('./routes/singer');
var app = express();
app.enable('strict routing');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/music', music);//每次添加新表都要加
app.use('/singer', singer);
//app.use('/users', usersRouter);


//connection to db

mongoose.connect(config.mongodb.uri, config.mongodb.options);
var db = mongoose.connection;
db.on('error', function onDBConnectionError() {
    console.error('Connection Err Exit...');
});
db.once('open', function onDBOpen() {
    console.log('Successfully connected.');
});


//Redirect / to public folder
app.get('/', function redirectToAdmin(req, res, next) {
    res.redirect('public/');
});

app.use('/', router);

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
