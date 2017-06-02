var React = require("react");

var SearchBox = React.createClass({
	getInitialState: function(){
	return {/*some object*/};
	},

	render: function(){
		return(
			<div className="container">
				<div className="row">
					<div className="titleBar">
						<h2 className="text-center">Search</h2>
					</div>
				</div>
				<form>
					<div className="form-group">
						<label for="formTopicSearch">Topic</label>
						<input type="text" className="form-control" id="formTopicSearch" placeholder="enter your topic here"></input>
					</div>
					<div className="form-group">
						<label for="formStartYearSearch">Topic</label>
						<input type="text" className="form-control" id="formStartYearSearch" placeholder="enter your topic here"></input>
					</div>
					<div className="form-group">
						<label for="formEndYearSearch">Topic</label>
						<input type="text" className="form-control" id="formEndYearSearch" placeholder="enter your topic here"></input>
					</div>
					<button type="submit" className="btn btn-primary">Search</button>
				</form>
			</div>
		)
	}
})

module.exports = SearchBox;