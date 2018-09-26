var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var stylus = require('stylus');
var mysql=require('mysql');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'courseflow',
    // port:'3306'
});
connection.connect();

// app.get('/',function (req,res) {
//     res.sendfile(__dirname + "/" + "index.html" );
// })

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(stylus.middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/login',function (req,res) {
    var name=req.query.username;
    var pwd=req.query.password;
    console.log(name)
    console.log('get name') 
    var selectSQL = "select * from TESTUSER where USER_NAME = '"+name+"'";
    //and USER_PWD = '"+pwd+"'";
    connection.query(selectSQL,function (err,rs) {
        if (err) throw err;
        console.log(rs);
        if (rs[0].USER_PWD == pwd) {
        	console.log('OK');
        	res.sendfile(__dirname + "/" + "OK.html" );
        } else {
        	res.sendfile(__dirname + "/" + "Fail.html" );
        }
    })
})

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
