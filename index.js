var express = require("express");
var path    = require("path");
var app     = express();

//"public" 폴더를 최초폴더로 사용하겠다는 의미같음
//app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function(){
    console.log("Server On!!!!!!");
  }
);
