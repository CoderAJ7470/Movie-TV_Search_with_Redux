import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../CSS/Details.css";
import "../Images/NotAvailable.png";

const notAvailableImage = require("../Images/NotAvailable.png");

const API_KEY = "a7d348df";

class Details extends Component {
  state = {
    poster: undefined,
    title: undefined,
    releaseYear: undefined,
    actors: undefined,
    plot: undefined,
    directedBy: undefined,
    writtenBy: undefined,
    genre: undefined,
    dvdRelease: undefined,
    productionHouse: undefined,
    rating: undefined,
    error: undefined
  };

  componentDidMount = () => {};

  remapMovieKeys = details => ({
    poster: details.Poster,
    title: details.Title,
    releaseYear: details.Year,
    actors: details.Actors,
    plot: details.Plot,
    directedBy: details.Director,
    writtenBy: details.Writer,
    genre: details.Genre,
    dvdRelease: details.DVD,
    productionHouse: details.Production,
    rating: details.Rated,
    error: ""
  });

  getCurrentMovie = () => {
    const currentImdbId = this.props.match.params.id;
    console.log(this.props);
    const currentMovie =
      this.props.results.find(result => result.imdbID === currentImdbId) || {};
    console.log(currentMovie);
    const remappedMovie = this.remapMovieKeys(currentMovie);
    return remappedMovie;
  };

  render() {
    console.log("inside render function, props are: ", this.props);
    console.log("current movie is: ", this.getCurrentMovie());
    const movieSpecifics = this.getCurrentMovie();

    if (movieSpecifics.error) {
      return (
        <div>
          <p className="detailsError">{movieSpecifics.error}</p>
          <div className="backToSearchButton">
            <Link to={{ pathname: "/" }}>Back to Search</Link>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h2 className="detailsHeader">
            Details for{" "}
            <span className="detailsTitle">
              {movieSpecifics.title} ({movieSpecifics.releaseYear})
            </span>
          </h2>
          <div className="movieDetails">
            <div>
              {movieSpecifics.poster !== "N/A" ? (
                <img src={movieSpecifics.poster} alt={movieSpecifics.title} />
              ) : (
                <img src={notAvailableImage} alt={movieSpecifics.title} />
              )}
            </div>
            <div className="movieSpecs">
              <p>
                <strong>Title:</strong> {movieSpecifics.title}
              </p>
              <p>
                <strong>Released:</strong> {movieSpecifics.releaseYear}
              </p>
              <p>
                <strong>Actors:</strong> {movieSpecifics.actors}
              </p>
              <p>
                <strong>Plot:</strong> {movieSpecifics.plot}
              </p>
              <p>
                <strong>Directed By:</strong> {movieSpecifics.directedBy}
              </p>
              <p>
                <strong>Written By:</strong> {movieSpecifics.writtenBy}
              </p>
              <p>
                <strong>Genre:</strong> {movieSpecifics.genre}
              </p>
              <p>
                <strong>DVD Release:</strong> {movieSpecifics.dvdRelease}
              </p>
              <p>
                <strong>Production:</strong> {movieSpecifics.productionHouse}
              </p>
              <p>
                <strong>Rating:</strong> {movieSpecifics.rating}
              </p>
            </div>
          </div>
          <div className="backToSearchButton">
            <Link to={{ pathname: "/" }}>Back to Search</Link>
          </div>
        </div>
      );
    }
  }
}

export default connect(
  state => (
    console.log(state.search.results, " are results "),
    { results: state.search.results }
  )
)(Details);
