import { connect } from "react-redux";
import Movies from "../Movies";

function mapStateToProps(state) {
  console.log(state);
  return {
    error: state.search.error,
    results: state.search.results
  };
}

export default connect(
  mapStateToProps
)(Movies)