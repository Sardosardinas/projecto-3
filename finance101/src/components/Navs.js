import React, { Component } from "react";

class Navs extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Finance 101</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Definitions</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Links</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Tool</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Budget</a>
                                <a className="dropdown-item" href="#">Salary Calcs</a>
                                <a className="dropdown-item" href="#">Yearly Vacations</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navs;