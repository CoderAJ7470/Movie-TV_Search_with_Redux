import React, { Component } from "react";

import Form from "./Components/Search/search-processor";
import Movies from "./Components/Search/search-results-processor";
import Pagination from "./Components/Search/pagination-processor";

import "./CSS/Main.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Form />
        <Movies />
        <Pagination />
      </>
    );
  }
}

export default App;
