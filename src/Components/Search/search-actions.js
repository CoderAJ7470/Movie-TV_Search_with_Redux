export const SearchActions = {
  SUBMIT_SEARCH: "[user], submitted query string for search",
  POPULATE_RESULTS: "got back a response from our api fetch",
  POPULATE_RESULTS_ERROR: "sorry, something went wrong fetching from the api"
}

// payload is the data that is associated with each action
export function submitSearch(queryString) {
  return {
    type: SearchActions.SUBMIT_SEARCH,
    payload: {
      queryString
    }
  };
}

// payload is the data that is associated with each action
export function populateResults(response) {
  return {
    type: SearchActions.POPULATE_RESULTS,
    payload: {
      response
    }
  };
}