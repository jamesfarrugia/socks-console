import React from "react";
import List from "./List";
import Form from "./Form";
import Navbar from "./Navbar";
import "bootstrap/scss/bootstrap.scss"
import "./theme.scss"

const App = () => (
  <section className="main">
    <Navbar />
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
          <h2>Articles</h2>
          <List />
        </div>
        <div className="col-md-4 offset-md-1">
          <h2>Add a new article</h2>
          <Form />
        </div>
      </div>
    </div>
  </section>
);

export default App;