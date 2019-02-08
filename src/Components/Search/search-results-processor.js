import {connect} from "react-redux";
import Movies from "../Movies";
import {withRouter} from "react-router-dom";

function mapStateToProps(state) {
  return {
    error: state.search.error,
    results: state.search.results
  }
}

export default withRouter(
  connect(
    mapStateToProps
  )
  (Movies)
)