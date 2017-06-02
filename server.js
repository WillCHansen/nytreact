var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose'); // do we need this here either?
//var PORT = process.env.PORT || 5000;
var PORT = 3000;

var db = require("./config/connection.js"); //honestly not sure if this is required here

var app = express();

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(express.static('public'));

//controllers
require("./controllers/scraper.js")(app);
require("./controllers/postHandler.js")(app);

app.listen(PORT, function(){
	console.log("We're running on port "+PORT+" mang");
});