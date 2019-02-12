import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Tool from "../src/pages/tool"
import NoMatch from "../src/pages/NoMatch"
import Login from "../src/pages/Login"
class App extends Component {
  render() {
    return (
      <Router>
        <div >

          <Switch>
            <Route exact path="/tool" component={Tool} />
            <Route exact path="/login" component={Login} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
