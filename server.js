var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var PORT = (process.env.PORT || 3000);
// var db = require("./config/connection.js");

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(express.static('public'));

//controllers
require("./controllers/API_controller.js")(app);

app.get("/", function(req,res){
	res.sendFile(__dirname + "/public/index.html");
});


app.listen(PORT, function(){
	console.log("We're running on port 3000 mang");
});
