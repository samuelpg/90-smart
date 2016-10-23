console.log("90'smart server!");

var express = require("express");
var app = express();
var path = require("path");

app.get("/",function(req, res){
    res.sendFile(path.join("C:\Users\Samuel Parra\Documents\90-smart" + "index.html"));
});

app.listen(1337);
