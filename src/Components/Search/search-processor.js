import { connect } from "react-redux";
import Form from "../Form";
import { submitSearchThunk } from "./search-actions";

function mapStateToProps(state) {
  console.log(state);
  return {
    queryString: state.search.queryString
  };
}

// Making a function prop (in this case, submitSearch), and dispatch a "box" to the reducer
// Value returned by submitSearchThunk(queryString) is "dispatched" to the reducer
function mapDispatchToProps(dispatch) {
  console.log(dispatch);
  return {
    // submitSearchThunk(...) returns an empty "dispatcher" seat plus a bumch of instructions; the empty seat - refer to search.actions.js line 38. That's where it lies
    submitSearch: queryString => dispatch(submitSearchThunk(queryString))
  };
}

export default connect (
  mapStateToProps,
  mapDispatchToProps
)
(Form);