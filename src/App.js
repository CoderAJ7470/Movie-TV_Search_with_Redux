import React, {Component} from 'react';

import Form from "./Components/Search/search-processor";
import Movies from "./Components/Search/search-results-processor";
import Pagination from './Components/Pagination';

import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store";

import "./CSS/Main.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
        <>
          <Form />
          <Movies />
        </>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;