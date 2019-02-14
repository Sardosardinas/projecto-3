import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Link,
  Redirect
} from "react-router-dom"
import './App.css';
import Tool from "../src/pages/tool"
import NoMatch from "../src/pages/NoMatch"
import Login from "../src/pages/Login"
import Register from "../src/pages/Register/Register"


const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}
const Public = () => <h3>Public</h3>
const Protected = () => <h3>Protected</h3>

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/Login' />
  )} />
)







class App extends Component {

  state = {
    username: "sardoSardinas",
    password: "1234",
  };

  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to='/public'>Public Page</Link></li>
            <li><Link to='/Protected'>Protected Page</Link></li>
          </ul>

          <Route path='/public' component={Public} />
          <Route path='/' component={Login} />
          <PrivateRoute path='/protected' component={Protected} />
        </div>
      </Router>
    );
  }
}

export default App;
