import React from "react";
import {Link} from "react-router-dom";

import "../CSS/Movies.css";

const Movies = (props) => (
    <div className="moviesDiv">
        {props.movies && props.movies.map((movie) => {
            return(
                <div key={movie.imdbID} className="movieCards">
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
            {props.error && <p className="error">{props.error}</p>}
        </div>
    </div>
)

export default Movies;