import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Tool from "../src/pages/tool"
import NoMatch from "../src/pages/NoMatch"

class App extends Component {
  render() {
    return (
      <Router>
        <div >

          <Switch>
            <Route exact path="/" component={Tool} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
