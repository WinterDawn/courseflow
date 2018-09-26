var express=require('express');
var app=express();
var mysql=require('mysql');
 

var connection = mysql.createConnection({
    host     : '127.0.0.1',
    user     : 'root',
    password : '',
    database : 'courseflow',
    port:'3306'
});
connection.connect();
app.get('/',function (req,res) {
    res.sendfile(__dirname + "/" + "index.html" );
})
 

app.get('/login',function (req,res) {
    var  name=req.query.name;
    var pwd=req.query.pwd;
 
    var selectSQL = "select * from TESTUSER where USER_NAME = '"+name+"' and USER_PWD = '"+pwd+"'";
    connection.query(selectSQL,function (err,rs) {
        if (err) throw  err;
        console.log(rs);
        console.log('OK');
        res.sendfile(__dirname + "/" + "OK.html" );
    })
})
 
// app.get('/register.html',function (req,res) {
//     res.sendfile(__dirname+"/"+"register.html");
// })
 

// app.get('/register',function (req,res) {
//     var  name=req.query.name;
//     var  pwd=req.query.pwd;
//     var  user={uname:name,pwd:pwd};
//     connection.query('insert into user set ?',user,function (err,rs) {
//         if (err) throw  err;
//         console.log('ok');
//         res.sendfile(__dirname + "/" + "index.html" );
//     })
// })
 

var  server=app.listen(7744,function () {
    console.log("start");
})

