import {SearchActions} from "./search-actions";

const defaultState = {
  queryString: "",
  results: [],
  error: false
};

export function searchReducer(state = defaultState, action) {
  switch (action.type) {
    case SearchActions.SUBMIT_SEARCH:
      return { ...state, queryString: action.payload.queryString };
    case SearchActions.POPULATE_RESULTS:
      console.log("action is: ", action);
      return { ...state, results: action.payload.response.Search };
    case SearchActions.ERROR:
      return { ...state, error: action.payload.error};
    default:
      return state;
  }
}