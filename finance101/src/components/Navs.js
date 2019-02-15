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
        < nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow" >
          <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Finances101</a>

          <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
              <li onClick={this.logout}>Sign out</li>
            </li>
          </ul>
        </nav >
      </div>
    );
  }
}

