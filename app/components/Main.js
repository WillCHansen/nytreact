var React = require("react");

var Search = require("./Search");
var Results = require("./Results");
var Saved = require("./Saved");

var helpers = require("./utils/helpers");

var Main = React.createClass({
	getInitialState:function(){
		return {
			searchParam: {},
			results: []
		};
	},

	componentDidUpdate: function(prevProps,prevState){
		console.log("checking if updated");
		if (prevState.searchParam !== this.state.searchParam) {
	      console.log("UPDATED");

	      helpers.nytQuery(this.state.searchParam).then(function(data) {
	        if (data !== this.state.results) {
	          console.log("HERE");
	          console.log(data);

	          this.setState({ results: data });
	        }

	      }.bind(this));
	    }
	},

	setSearchParam: function(param){
		this.setState({searchParam: param});
	},

	render: function() {
	    return (
	      <div className="container">

	        <div className="row">

	          <div className="jumbotron">
	            <h2 className="text-center">Article Finder!</h2>
	            <p className="text-center">
	              <em>Search Something</em>
	            </p>
	          </div>

	          <div className="col-md-6">

	            <Search setSearchParam ={this.setSearchParam} />

	          </div>

	          <div className="col-md-6">

	            	<Results data={this.state.results} />

	          </div>

	        </div>
	        <div className="row">

	        	<Saved />

	        </div>

	      </div>
	    );
  }
});

module.exports = Main;
