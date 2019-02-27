import {SearchActions} from "./search-actions";

const defaultState = {
  queryString: "",
  results: [],
  totalResultsReturned: "",
  pageNumber: 1,
  error: ""
};

export function searchReducer(state = defaultState, action) {
  switch (action.type) {
    case SearchActions.SUBMIT_SEARCH:
      return { ...state,
        queryString: action.payload.queryString,
        pageNumber: action.payload.pageNumber ? action.payload.pageNumber : 1 };
    case SearchActions.POPULATE_RESULTS:
      return { ...state,
        results: action.payload.response.Search,
        totalResultsReturned: action.payload.response.totalResults,
        error: action.payload.response.Error ? `Your search did not return any results,
          please ensure your input is correct.` : null };
    case SearchActions.ERROR:
      return { ...state, error: action.payload.error };
    default:
      return state;
  }
}