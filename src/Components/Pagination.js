import React, {Component} from "react";

import "../CSS/Pagination.css";

const RESULTS_PER_PAGE = 10;
const API_KEY = "a7d348df";

export default class Pagination extends Component {
  constructor(props) {
    super(props);

      this.state = {
        totalPages: "",
        currentPage: 1
      }
  }

  getMovies = async () => {    
    const api_call = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${this.props.searchString}&page=${this.state.currentPage}`);
    const data = await api_call.json();

    this.props.populateResults(data);
  }

  incrementPage = () => {
    this.setState({
      currentPage: this.state.currentPage + 1
    }, this.getMovies)
  }

  decrementPage = () => {
    this.setState({
      currentPage: this.state.currentPage - 1
    }, this.getMovies)
  }

  incrementButtonDisabled() {
    return this.state.currentPage === this.getTotalPages();
  }

  decrementButtonDisabled() {
    return this.state.currentPage === 1;
  }

  getTotalPages() {
    return Math.ceil(this.props.totalResults/RESULTS_PER_PAGE);
  }

  componentDidMount = () => {
    console.log("I got called");
    this.setState({
      // totalPages: this.getTotalPages(),
      // currentPage: 1
    })
  }

  render() {
    return(
      <div className="pagination">
        {this.props.totalResults > 0 ? <p>Viewing page {this.state.currentPage} of {this.getTotalPages()};
          Total Results: {this.props.totalResults}</p> : null }
        {this.props.totalResults > 10 ?
        <><button disabled={this.decrementButtonDisabled()} onClick={this.decrementPage}>Previous Page</button>
          <button disabled={this.incrementButtonDisabled()} onClick={this.incrementPage}>Next Page</button></> :
        null}
      </div>
    );
  }
}