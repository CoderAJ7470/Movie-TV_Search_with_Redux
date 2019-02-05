import {SearchActions} from "./search-actions";

const defaultState = {
  queryString: "",
  results: {},
  error: false
};

export function searchReducer(state = defaultState, action) {
  switch (action.type) {
    case SearchActions.SUBMIT_SEARCH:
      console.log("Hey, inside Search Reducer yo sup!");
      return { ...state, queryString: action.payload.queryString };
    case SearchActions.POPULATE_RESULTS:
      return { ...state, results: action.payload.response };
    default:
      return state;
  }
}