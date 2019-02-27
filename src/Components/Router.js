import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import App from "../App";
import Details from "./Details";
import Favorites from "./Favorites";
import { store } from "../store";

const Router = () => (
  (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/details/:id" component={Details} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
);

export default Router;
