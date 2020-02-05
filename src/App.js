import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Register from './register.js'
import Realtimepricetable from './Realtimepricetable'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path = "/register">
          <Register />
        </Route>
        <Route exact path = "/">
          <Realtimepricetable />
        </Route>
      </Switch>
    </Router>
      

  )}

export default App;

