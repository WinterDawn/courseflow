var createError = require('http-errors');
var express = require('express');
var path = require('path');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var stylus = require('stylus');
var mysql=require('mysql');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var identityKey = 'skey';



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

app.use(session({
  name: identityKey,
  secret: 'chyingp', 
  store: new FileStore(),  
  saveUninitialized: false,  
  resave: false,  
  cookie: {
    maxAge: 1000 * 1000  
  }
}));

app.get('/', function(req, res, next){
  var sess = req.session;
  var loginUser = sess.loginUser;
  var isLogined = !!loginUser;

  res.render('index', {
    isLogined: isLogined,
    name: loginUser || ''
  });
});


app.get('/login',function (req,res) {
  var name=req.query.username;
  var pwd=req.query.password;
  var selectSQL = "select * from TESTUSER where USER_NAME = '"+name+"'";

  connection.query(selectSQL,function (err,rs) {
        if (err) throw err;
        console.log(rs);
        if (rs[0]) {
         console.log("user exists")
         if (rs[0].USER_PWD == pwd) {
           console.log('login successfully');
           var sess = req.session;

           req.session.regenerate(function(err) {
            if(err){
              return res.json({ret_code: 2, ret_msg: 'login successfully'});        
            }
            req.session.loginUser = user.name;
            res.json({ret_code: 0, ret_msg: 'fail to login'});             
          });
           res.sendfile(__dirname + "/" + "OK.html" );
         } else {
           console.log('password incorrect')
           res.sendfile(__dirname + "/" + "Fail.html" );
         }
        } else {
         console.log("user doesn't exist");
         res.sendfile(__dirname + "/" + "Fail.html" );
        }
    })

});

app.get('/logout', function(req, res, next){
  req.session.destroy(function(err) {
    if(err){
      res.json({ret_code: 2, ret_msg: 'fail to log out'});
      return;
    }
    
    // req.session.loginUser = null;
    res.clearCookie(identityKey);
    res.redirect('/');
  });
});


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
