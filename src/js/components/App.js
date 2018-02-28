import React from "react";
import { Switch, Route } from 'react-router-dom'

import Navbar from "./Navbar";

import HomeView from './views/Home'
import SessionsView from './views/Sessions'

import "bootstrap/scss/bootstrap.scss"
import "./theme.scss"

const App = () => (
  <section className="main">
    <Navbar />
    <div className="container">
    <Switch>
      <Route exact path='/' component={HomeView}/>
      <Route path='/sessions' component={SessionsView}/>
    </Switch>
    </div>
  </section>
);

export default App;