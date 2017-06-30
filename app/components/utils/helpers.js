// var $ = require('jquery');
var axios = require("axios");


var helpers = {
	nytQuery: function(param){
	        //build query url
	        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	        url += "?" +$.param({
	            'q': param.topic,
	            'begin_date': param.startYear,
	            'end_date' : param.endYear,
	            'api-key' : "c9015b8e38994975bee754573c5ebc2b"
	        })
	        console.log(url);

	        //query API

	        return axios.get(url).then(function(response){
	        	console.log(response);
	        	return response.data.response.docs;
	        })

	    },

	apiPost: function(data){
		console.log(data);
		return axios.post("/api/saved", data);
	},

	apiGet: function(){
		return axios.get("api/saved");
	},

	apiDelete: function(data){
		console.log(data);
		return axios.post("api/saved/delete", data);
	}

};

module.exports = helpers;
