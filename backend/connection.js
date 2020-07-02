  


var mysql = require('mysql');
var express = require('express');
var app = express();

var con = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'Mysql001!',
    database:'temp'

});

/*
con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM temp_db", function (err, result, fields) {
    if (err) throw err;  
  
  var zdata=result;
//  console.log(result); 
   
 // document.write(result);

});

});
*/


app.get('/getposts',(req,res)=>{

let sql1 ="SELECT * FROM temp_db";
let query1 = con.query(sql1, (err,results)=>{
    if(err) throw err;
    res.setHeader('Access-Control-Allow-Origin', '*');

    console.log(results);
    res.send(results);
  });
});

app.get('/getcdata',(req,res)=>{

  let sql ="SELECT * FROM cdata";
  let query = con.query(sql, (err,results)=>{
      if(err) throw err;
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
     // console.log(results);
      res.send(results);
  });
  
});

//function fetchData(response){}

app.listen('3000', function(){
   console.log('Listening to Port 3000')

});


 