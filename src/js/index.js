import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "../js/store/index";
import App from "../js/components/App";
import { HashRouter as Router } from 'react-router-dom'

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("app")
);