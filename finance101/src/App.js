import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Link,
  Redirect, Switch
} from "react-router-dom"
import './App.css';
import Tool from "./pages/tool"

import Login from "./pages/Login/Login"
import Register from "./pages/Register/Register"





class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/register' component={Register} />
            <Route exact path='/' component={Login} />
            <Route exact path='/tool' component={Tool} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
