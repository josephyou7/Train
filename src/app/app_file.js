var express = require('express');
app = express();
app.locals.pretty = true;
app.set('views', './view_file');
app.set('view engine','jade');
app.get('/topic/new',function(req, res){
   
    res.render('new');

})

app.post('/topic',function(req, res){

    res.send('Hi post');
})

app.listen(3000,function(){

    console.log('connected, 3000 part!')



})
