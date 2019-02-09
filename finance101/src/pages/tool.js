import React, { Component } from "react";

import Navs from "../components/Navs";
import data from "../data.json";
import { Dropdown, Button } from "react-bootstrap"
import API from "../utils/API"
class Tool extends Component {

    state = {
        Months: ["January", "February", "March"],
        data
    };
    // componentDidMount() {
    //     this.loadData();
    // }

    // loadBooks = () => {
    //     API.getBudget()
    //         .then(res => this.setState({ books: res.data, title: "", author: "", synopsis: "" }))
    //         .catch(err => console.log(err));
    // };

    // deleteBook = id => {
    //     API.deleteBook(id)
    //         .then(res => this.loadBooks())
    //         .catch(err => console.log(err));
    // };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    createMonthData = monthData => {

        API.createMonth(monthData)
    }



    render() {



        return (
            <div>
                <Navs />
                <br />
                <div className="container">
                    <div className="alert alert-primary">
                        <h2>PERSONAL FINANCE</h2>
                    </div>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th colspan="2" >
                                        <Dropdown>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                Dropdown Button
                                         </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                {this.state.Months.map(month => (
                                                    <Dropdown.Item /*onClick={this.getData(month)} */>{month}</Dropdown.Item>
                                                ))}
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </th>
                                </tr>
                            </thead>
                            {!this.state.data.month ? (
                                <tbody>
                                    <tr>
                                        <th >Income</th>
                                        <th >Amount</th>
                                    </tr>

                                    <tr>
                                        <td><input className="form-control"></input></td>
                                        <td><input className="form-control"></input></td>

                                    </tr>
                                    {/* Felix  Aqui has el boton a la derecha porfa!! */}
                                    <tr colspan="2">
                                        <Button className="">Add</Button>
                                    </tr>

                                </tbody>

                            ) : (
                                    "Hello"
                                )}



                        </table>

                    </div>

                </div >

            </div>

        );
    }
}

export default Tool;