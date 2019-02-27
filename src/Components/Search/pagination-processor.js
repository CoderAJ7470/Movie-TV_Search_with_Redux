import { connect } from "react-redux";
import Pagination from "../Pagination";
import { submitPageThunk } from "./search-actions";

function mapStateToProps(state) {
  // console.log("pagination state is: ", state);
  return {
    totalResults: state.search.totalResultsReturned,
    keyword: state.search.queryString,
    currentPage: state.search.pageNumber
  }
}

function mapDispatchToProps(dispatch) {
  // console.log(dispatch);
  return {
    getResultsByPage: (queryString, pageNumber) => dispatch(submitPageThunk(queryString, pageNumber))
  }
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Pagination)