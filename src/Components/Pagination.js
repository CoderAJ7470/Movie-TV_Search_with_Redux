import React, {Component} from "react";

import "../CSS/Pagination.css";

const RESULTS_PER_PAGE = 10;

class Pagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalPages: ""
    }
  }

  incrementPage = () => {
    this.props.getResultsByPage(this.props.keyword, this.props.currentPage + 1);
  }

  decrementPage = () => {
    this.props.getResultsByPage(this.props.keyword, this.props.currentPage - 1);
  }

  // This is called after the "Next" or "Prev" buttons are clicked. Clicking either button
  // calls the incrementPage() or decrementPage() functions, the state updates then
  // componentDidUpdate() is called by React to update the component, which in turn calls
  // the window scrollTo(...) function
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }

  incrementButtonDisabled() {
    return this.props.currentPage === this.getTotalPages();
  }

  decrementButtonDisabled() {
    return this.props.currentPage === 1;
}

  getTotalPages() {
    return Math.ceil(this.props.totalResults/RESULTS_PER_PAGE);
  }

  render() {
    const totalResults = this.props.totalResults;
    return (
      <>
        {totalResults > 0 ?
          totalResults < 10 ?
          <div className="pagination">
          <p>Your search returned {totalResults} results | Showing page {this.props.currentPage} of {this.getTotalPages()}</p></div> :
          <div className="pagination">
            <p>
            Your search returned {totalResults} results | Showing page {this.props.currentPage} of {this.getTotalPages()} | 
            You can browse all results by using the "Prev" and "Next" buttons below.</p>
            <div>
              <button disabled={this.decrementButtonDisabled()} onClick={this.decrementPage}>Prev</button>
              <button disabled={this.incrementButtonDisabled()} onClick={this.incrementPage}>Next</button>
            </div>
          </div> :
          null
        }
      </>
    );
  }
}

export default Pagination;