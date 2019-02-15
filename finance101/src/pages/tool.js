import React, { Component } from "react";
import { TableData } from "../components/TableData";
import { InputData } from "../components/InputData";
import Navs from "../components/Navs";

import { Dropdown, Button } from "react-bootstrap";
import API from "../utils/API";





import Sidebar from "../components/Sidebar/Sidebar";


class Tool extends Component {


    state = {
        Months: ["January", "February", "March"],
        income: [{
            title: "Work",
            amount: "200"
        }, {
            title: "Side-Job",
            amount: "50"
        }
        ],
        expenses: [],
        title: "",
        amount: "",
        new: true
    };

    componentDidMount() {
        API.userData()
    }


    handleSave = (status, title, amount) => {
        if (status) {
            API.newIncome({
                title: title,
                amount: amount
            })
        }
        else {
            API.updateIncome({
                title: title,
                amount: amount
            })
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleEdit = (title, amount) => {
        this.setState({
            title: title,
            amount: amount
        })
    }



    render() {

        return (
            <div>
                <Navs />
                <br />
                <div className="row">
                    <Sidebar />
                    <div className="container" style={{width: '65%', marginTop: '50px'}}>
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
                                <tr>
                                    <th>Description</th>
                                    <th>Amount</th>
                                </tr>
                                <InputData
                                    status={this.state.new}
                                    title={this.state.title}
                                    amount={this.state.amount}
                                    message={"Save"}
                                    handleChange={this.handleInputChange}
                                />

                                {!this.state.income.length ? (
                                    <React.Fragment>
                                        <tr>
                                            <th >Income</th>
                                            <th >Amount</th>
                                        </tr>
                                        <TableData />
                                    </React.Fragment>
                                ) : (
                                        <React.Fragment>
                                            <tr>
                                                <th >Income</th>
                                                <th >Amount</th>
                                            </tr>
                                            {this.state.income.map(income => (
                                                <TableData
                                                    title={income.title}
                                                    amount={income.amount}
                                                    message={"Edit"}
                                                    handleEdit={this.handleEdit}
                                                />

                                            ))}



                                        </React.Fragment>
                                    )}
                                {!this.state.expenses.length ? (
                                    <tbody>
                                        <tr>
                                            <th >Expenses</th>
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
                                        <tbody>
                                            <tr>
                                                <th >Expenses</th>
                                                <th >Amount</th>
                                            </tr>
                                            {this.state.expenses.map(expenses => (
                                                <React.Fragment>
                                                    <td><input className="form-control" name={expenses.title} value={expenses.title}></input></td>
                                                    <td><input className="form-control" name={expenses.amount} value={expenses.amount}></input></td>
                                                    {/* Felix  Aqui has el boton a la derecha porfa!! */}
                                                    <tr colspan="2">
                                                        <Button className="">Add</Button>
                                                    </tr>
                                                </React.Fragment>

                                            ))}
                                        </tbody>

                                    )}



                            </table>

                        </div>

                    </div >

                </div >
            </div>


        );
    }
}

export default Tool;