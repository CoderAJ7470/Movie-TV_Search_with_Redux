import React, {Component} from "react";

import "../CSS/Form.css";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            keyword: "",
        }
    }

    onSearchChange = (e) => {
        this.setState(
            {keyword: e.target.value}
        )
    }
    
    buttonDisabled() {
        return this.state.keyword === "";
    }

    componentDidMount() {
        if (this.state.keyword) {
            this.props.submitSearch(this.state.keyword);
        }
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.submitSearch(this.state.keyword);

        this.setState (
            {keyword: "" }
        );
    }

    render() {
        
        return(
            <div className="formDiv">
                <h1>Movie and T.V. Series Search</h1>
                <h4>Use the search form below to search for movies or T.V. shows by keyword or title</h4>
            
                <form onSubmit={this.onSubmit}>
                    <input type="text" name="title" value={this.state.keyword} onChange={this.onSearchChange}/>
                    <button type="submit" disabled={this.buttonDisabled()}>Get Results</button>
                </form>
            </div>
        );
    }
}

export default Form;