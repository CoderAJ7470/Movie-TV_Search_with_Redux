import React, {Component} from "react";
import {Link} from "react-router-dom";

import "../CSS/Movies.css";

let cardKey = 1;

class Movies extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="moviesDiv">
        {this.props.results && this.props.results.map((movie) => {
          return (
            <div key = {cardKey++} className="movieCards">
              {movie.Poster !== "N/A" ? 
                <img src={movie.Poster} alt={movie.Title} /> :
                  <p className="imageNA">Image Not Available</p>}
              <p className="titles"><span>Title:</span> {movie.Title.length < 35 ? `${movie.Title}` : `${movie.Title.substring(0, 34)}...`}</p>
              <p className="titles"><span>Year:</span> {movie.Year}</p>
              <div className="detailsButton">
                <Link to={{
                  pathname: `/details/${movie.imdbID}`,
                  state: {
                    movieDetails: movie.Title
                  } }}>
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
        <div>
            {this.props.error && <p className="error">{this.props.error}</p>}
        </div>
      </div>
    );
  }
}

export default Movies;