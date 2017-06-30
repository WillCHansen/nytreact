var React = require("react");
var helpers = require("./utils/helpers");

var SearchBox = React.createClass({
	getInitialState: function(){
		return {
			topic: "",
			startYear: "",
			endYear: ""
		};
	},

	handleTopicChange: function(event){
		event.preventDefault();
		this.setState({topic: event.target.value});
	},
	handleStartYearChange: function(event){
		event.preventDefault();
		this.setState({startYear: event.target.value})
	},
	handleEndYearChange: function(event){
		event.preventDefault();
		this.setState({endYear: event.target.value})
	},


	onSubmitForm: function(event){
		event.preventDefault();
        var param = {
            topic: this.state.topic,
            startYear: this.state.startYear,
            endYear: this.state.endYear
        }
        console.log(param);
		this.props.setSearchParam(param);
		console.log("Searching for: "+this.state.topic+" start: "+this.state.startYear+" end: "+this.state.endYear);
		//helpers.nytQuery(this.state.topic,this.state.startYear,this.state.endYear);
	},
	render: function(){
		console.log("rendering...");
		return(<div className="panel panel-default">
                    <div className="panel-heading">
                        <h2 className="panel-title text-center">Search</h2>
                    </div>
                <div className = "panel-body text-center">
                <form id="searchForm" onSubmit={this.onSubmitForm}>
                    <div className="form-group">
                        <label for="formTopicSearch">Topic</label>
                        <input 
                        type="text" 
                        value={this.state.topic}
                        onChange={this.handleTopicChange} 
                        className="form-control" 
                        id="formTopicSearch" 
                        placeholder="enter your topic here"
                        required>
                        </input>
                    </div>
                    <div className="form-group">
                        <label for="formStartYearSearch">Start Year</label>
                        <input 
                        type="text" 
                        value={this.state.startYear} 
                        onChange={this.handleStartYearChange}
                        className="form-control" 
                        id="formStartYearSearch" 
                        placeholder="ex: 1999"
                        required>
                        </input>
                    </div>
                    <div className="form-group">
                        <label for="formEndYearSearch">End Year</label>
                        <input 
                        type="text" 
                        value={this.state.endYear}
                        onChange={this.handleEndYearChange} 
                        className="form-control" 
                        id="formEndYearSearch" 
                        placeholder="ex: 2004"
                        required>
                        </input>
                    </div>
                    <button type="submit" className="btn btn-primary">Search</button>
                </form>
                </div>
            </div>)
	}
});

module.exports = SearchBox;