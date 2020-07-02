var fs = require('fs');
console.log(2);
var data = fs.readFile('temp.csv',{encoding:'utf8'},function(err,data){
    if (err) throw err;

    console.log(data);
    console.log(3);
});
console.log(4);