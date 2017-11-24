var express = require('express');
var path = require('path');
var app = express();

app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, ()=>{
  console.log('Miracle happens on port =] ');
});

