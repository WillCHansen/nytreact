var db = require("../config/connection.js");
var Article = require("../models/Article.js");

module.exports = function(app){
	app.get("/api/saved", function(req,res){
		/* FIND ALL QUERY find all 'saved articles' */
	});

	app.post("/api/saved", function(req,res){
		/* ADD an article to the database */
	});

	app.delete("/api/saved", function(req,res){
		/* REMOVE an article from the database */
	})

	app.get("/", function(req,res){
		/*Servers home page*/
		res.send(/*index.html*/);
	})
}