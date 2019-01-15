import React, { Component } from 'react';
import './App.css';

import Form from "./Components/Form";
import Movies from "./Components/Movies";

const API_KEY = "a7d348df";

class App extends Component {
  state = {
    movies: [],
    totalMoviesReturned: undefined,
    error: undefined
  }

  getMovies = async (e) => {
    let movieTitle = e.target.elements.title.value;

    e.preventDefault();

    const api_call = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieTitle}&page=1`);
    const data = await api_call.json();

    if(data.Error) {
      this.setState({
        movies: [],
        totalMoviesReturned: undefined,
        error: "Nothing found with given keyword. Please check your keyword and try again."
      });
    }
    else {
      this.setState({
        movies: data.Search,
        totalMoviesReturned: data.totalResults,
        error: ""
      });
    }
  }

  componentDidMount = () => {
    const json = localStorage.getItem("results");
    const movieResults = JSON.parse(json);
    this.setState({movies: movieResults});
  }

  // Sets the local storage when the user clicks the "Get Results" button;
  // Converts the data coming from the API to one long, continous string
  // which is then stored locally for quick access
  componentDidUpdate = () => {
    const movieString = JSON.stringify(this.state.movies);
    localStorage.setItem("results", movieString);
  }

  render() {
    return (
      <div>
        <Form getMovies = {this.getMovies} />
        <Movies
          movies = {this.state.movies}
          error = {this.state.error}
        />
      </div>
    );
  }
}

export default App;
