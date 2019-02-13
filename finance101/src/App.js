import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import Tool from "../src/pages/tool"
import NoMatch from "../src/pages/NoMatch"
<<<<<<< HEAD
import Login from "../src/pages/Login"
import Register from "../src/pages/Register/Register"
=======
import SignIn from './pages/SignIn/SignIn';

>>>>>>> FE_Updated
class App extends Component {
  render() {
    return (
      <Router>
        <div >

          <Switch>
<<<<<<< HEAD
            <Route exact path="/tool" component={Tool} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
=======
            <Route exact path="/" component={Tool} />
            <Route exact path="/SignIn" component={SignIn} /> 
>>>>>>> FE_Updated
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
