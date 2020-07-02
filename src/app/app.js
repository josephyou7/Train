var express = require('express');
var app = express();
app.use(express.static('public'));
//  '/' = Home
app.get('/',function(req,res){
    res.send('Welcome');
});

app.get('/route',function(req,res){
  res.send('Hello Router, <img src="inkbird.png">')
});

app.listen(3000,function(){
    console.log('Connected 3000 part!');
});
