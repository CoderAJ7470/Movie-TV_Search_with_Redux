import {API} from "../../API/api-resource";

export const SearchActions = {
  SUBMIT_SEARCH: "[user], submitted query string for search",
  POPULATE_RESULTS: "got back a response from our api fetch",
  ERROR: "sorry, something went wrong fetching from the api"
}

// payload is the data that is associated with each action in this action creator
export function submitSearch(queryString) {
  return {
    type: SearchActions.SUBMIT_SEARCH,
    payload: {
      queryString
    }
  };
}

// payload is the data that is associated with each action in this action creator
export function populateResults(response) {
  return {
    type: SearchActions.POPULATE_RESULTS,
    payload: {
      response
    }
  };
}

export function throwError() {
  return {
    type: SearchActions.ERROR,
    payload: {
      error: "No results were returned with the given keyword. Please ensure you have entered valid input."
    }
  }
}

export const submitSearchThunk = queryString => dispatch => {
  dispatch(submitSearch(queryString));

  API.getMovies(queryString)
  .then(results =>
    dispatch(populateResults(results)))
  .catch(() =>
    dispatch(throwError()));
}