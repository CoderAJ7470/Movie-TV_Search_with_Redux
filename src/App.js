import React, { Component } from 'react';

import Form from "./Components/Form";
import Movies from "./Components/Movies";
import Pagination from './Components/Pagination';

import "./CSS/Main.css";


class App extends Component {
  state = {
    movies: [],
    totalResults: undefined,
    searchString: undefined,
    error: undefined
  }

  componentDidMount = () => {
    const json = sessionStorage.getItem("results");
    const movieResults = JSON.parse(json);
    this.setState({movies: movieResults});
  }

  // Sets the session storage when the user clicks the "Get Results" button;
  // Converts the data coming from the API to one long, continous string
  // which is then stored locally for quick access
  componentDidUpdate = () => {
    const movieString = JSON.stringify(this.state.movies);
    sessionStorage.setItem("results", movieString);
  }

  populateResults = (results) => {
    if(results.Error) {
      this.setState({
          movies: [],
          totalResults: undefined,
          error: "No results were returned with the given keyword. Please ensure you have entered valid input."
        });
    }
    else {
      this.setState(
        {
          movies: results.Search,
          totalResults: results.totalResults,
          error: ""
        }
      );
    }
  }

  passSearchString = (searchString) => {
    this.setState({
      searchString: searchString
    })
  }

  render() {
    return (
      <div>
        <Form
          populateResults = {this.populateResults}
          passSearchString = {this.passSearchString}/>
        <Movies
          movies = {this.state.movies}
          error = {this.state.error}
        />
        <Pagination 
          totalResults = {this.state.totalResults}
          populateResults = {this.populateResults}
          searchString = {this.state.searchString}
        />
      </div>
    );
  }
}

export default App;
