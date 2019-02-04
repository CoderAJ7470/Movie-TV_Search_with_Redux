import React, {Component} from "react";

import "../CSS/Form.css";

const API_KEY = "a7d348df";

class Form extends Component {
    state = {
        keyword: ""
    }
    
    getMovies = async (e) => {    
        const api_call = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${this.state.keyword}&page=1`);
        const data = await api_call.json();
    
        this.props.populateResults(data);
    }

    onSearchChange = (e) => {
        this.setState(
            {keyword: e.target.value}
        )
    }
    
    buttonDisabled() {
        return this.state.keyword === "";
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.passSearchString(this.state.keyword);

        this.getMovies();

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