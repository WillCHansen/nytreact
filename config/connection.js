var mongoose = require("mongoose");
var Promise = require("bluebird");

mongoose.Promise = Promise;

//var Article = require("../models/Article.js");

mongoose.connect("mongodb://localhost:8080");
var db = mongoose.connection;

db.on("error", function(error){
	console.log("Mongoose error: ",error);
});

db.once("open", function(){
	console.log("Mongoose connection successful!");
})

module.exports = db;
