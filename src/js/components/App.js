import React from "react";
import { Switch, Route } from 'react-router-dom'

import Navbar from "./Navbar";

import HomeView from './views/Home'
import SessionsView from './views/Sessions'
import AuthenticationView from './views/Authentication'

import "bootstrap/scss/bootstrap.scss"
import "./theme.scss"

const App = () => (
  <section className="main">
    <Navbar />
    <br/>
    <div className="container">
    <Switch>
      <Route exact path='/' component={HomeView}/>
      <Route path='/sessions' component={SessionsView}/>
      <Route path='/authentication' component={AuthenticationView}/>
    </Switch>
    </div>
  </section>
);

export default App;