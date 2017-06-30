var React = require("react");
var helpers = require("./utils/helpers");

var Results = React.createClass({

	handleClick: function(event){
		event.preventDefault();
		console.log("save button clicked");
		console.log(event.currentTarget.getAttribute("data-x"));
		helpers.apiPost({
			title: event.currentTarget.getAttribute("data-title"),
			date: event.currentTarget.getAttribute("data-date"),
			url: event.currentTarget.getAttribute("data-url")
		}).then(function(){
			console.log("posted to mongo");
		});
	},

	render: function(){
		const dataList = this.props.data.map((data)=>
			<li className = "list-group-item" data={data}>
				<a id="headline" href={data.web_url}>{data.headline.main}</a>
				<button onClick={this.handleClick} 
				data-title = {data.headline.main}
				data-date = {data.pub_date}
				data-url = {data.web_url} 
				className = "btn btn-danger float-right">
				Save</button>
			</li>);

		return(
			<div className="panel panel-default">
				<div className="panel-heading">
					<h2 className="panel-title text-center">Results</h2>
				</div>
				<ul className = "list-group">{dataList}</ul>
			</div>
		);
	}
});

module.exports = Results;
