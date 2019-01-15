import React from "react";

const Form = (props) => (
    <div className="formDiv">
        <h1>Movie and T.V. Series Lookup</h1>
        <h4>Use the search form below to search for movies or T.V. shows by keyword or title</h4>
    
        <form onSubmit={props.getMovies}>
            <input type="text" name="title"/>
            <button type="submit">Get Results</button>
        </form>
    </div>
)

export default Form;