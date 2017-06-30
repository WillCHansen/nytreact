var db = require("../config/connection.js");
var Article = require("../models/Article.js");

module.exports = function(app){
	app.get("/api/saved", function(req,res){
		console.log("routing to api/saved")
		/* FIND ALL QUERY find all 'saved articles' */
		Article.find({}).exec(function(err,doc){
			if(err){
				console.log(err)
			} else {
				console.log(doc);
				res.send(doc)
			}
		})
	});

	app.post("/api/saved", function(req,res){
		console.log(" /api/saved post route called");
		/* ADD an article to the database */
		var article = new Article (req.body);
		article.save(function(err,results){
			if(err){
				throw err;
			} else {
				console.log("article added");
				console.log(results);
				res.send("article added");
			}
		})

	});

	app.post("/api/saved/delete", function(req,res){
		/* REMOVE an article from the database */
		Article.findById(req.body.id)
		.remove().exec(res.send("article removed"));

		console.log("the "+req.body.id+" document has been DELETED");
	});
}