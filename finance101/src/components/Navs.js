import React from 'react';
import API from "../utils/API"
import { Redirect } from "react-router-dom"
export default class Navs extends React.Component {


  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isAuthenticated: true
    };

  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logout = event => {
    event.preventDefault();
    API.logoutUser()
      .then(res => {
        console.log(res)
        if (res.status === 200) {
          this.setState({ isAuthenticated: false })
        }


      }).catch(err => console.log(err));
  };
  renderRedirect = () => {
    if (!this.state.isAuthenticated) {
      return <Redirect to='/' />
    }
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        < nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow" >
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Finances101</a>

          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap" onClick={this.logout}>Sign out</li>
          </ul>
        </nav >
      </div>
    );
  }
}

