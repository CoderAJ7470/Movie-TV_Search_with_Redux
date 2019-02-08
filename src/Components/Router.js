import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../App";
import Details from "./Details";
import Results from "./Search/search-results-processor";
import { store } from "../store";
const Router = () => (
  console.log("inside router"),
  (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/details/:id" component={Details} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
);

export default Router;
