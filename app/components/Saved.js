var React = require("react");
var helpers = require("./utils/helpers");

var Saved = React.createClass({	
	getInitialState: function(){
		return{
			savedArticles:[]
		}
	},

	componentDidMount: function(){
		console.log("ARTICLES MOUNTED");

		helpers.apiGet().then(function(response){
			console.log(response);
			this.setState({
				savedArticles: response.data
			});
		}.bind(this))
	},

	handleDeleteClick: function(event){
		event.preventDefault();
		console.log(event.currentTarget.getAttribute("data-id"));
		helpers.apiDelete({
			id: event.currentTarget.getAttribute("data-id")
		}).then(function(){
			console.log("removed document from mongo");
		});
	},

	render: function(){

		var savedArray = this.state.savedArticles;
		console.log(savedArray);
		const savedList = savedArray.map((data)=>
			<li className = "list-group-item" data={data}>
				<a id="headline" href={data.url}>{data.title}</a>
				<button onClick={this.handleDeleteClick} 
				data-id={data._id}
				className = "btn btn-danger float-right">
				Delete</button>
			</li>);
		return(
			<div className="panel panel-default">
				<div className="panel-heading">
					<h2 className="panel-title text-center">Results</h2>
				</div>
				<ul className = "list-group">{savedList}</ul>
			</div>
			);
	}
})

module.exports = Saved;
