import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import App from "../App";
import Details from "./Details";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/details/:id" component={Details} />
        </Switch>
    </BrowserRouter>
);

export default Router;