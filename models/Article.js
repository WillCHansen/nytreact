var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var article = new Schema({
	title: {
		type: String
	},
	date: {
		type: Date
	},
	url: {
		type: String
	}
});

var Article = mongoose.model("Article", article);

module.exports = Article;