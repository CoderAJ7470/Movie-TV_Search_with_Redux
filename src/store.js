import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import {searchReducer} from "../src/Components/Search/search-reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  search: searchReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);