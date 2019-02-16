import React, { Component } from "react";
import { TableData } from "../components/TableData";
import { InputData } from "../components/InputData";
import Navs from "../components/Navs";
import { Dropdown, Button, Col, Container, Row, Alert } from "react-bootstrap";
import API from "../utils/API";
import Sidebar from "../components/Sidebar/Sidebar";
let itotal = 0
let etotal = 0
let btotal = 1
class Tool extends Component {

    state = {
        transType: "Transaction",
        income: [],
        expenses: [],
        title: "",
        _id: "",
        amount: null,
        type: "",


    };

    componentDidMount() {
        API.userData().then(res => {

            console.log(res)
            this.setState({
                income: res.data[0].income,
                expenses: res.data[0].expenses
            })
        })
            .catch(err => console.log(err));
    }


    handleSave = () => {
        if (this.state._id && this.state.type === "income") {
            console.log("hi")
            API.updateIncome({
                _id: this.state._id,
                title: this.state.title,
                amount: this.state.amount
            }).then(res => {
                if (res.status === 200) {
                    API.userData().then(res =>
                        this.setState({ income: res.data[0].income, title: "", amount: "", type: "" })
                    )

                }
            })
                .catch(err => console.log(err));
        }
        else if (this.state._id && this.state.type === "expense") {
            API.updateExpense({
                _id: this.state._id,
                title: this.state.title,
                amount: this.state.amount
            }).then(res => {
                if (res.status === 200) {
                    API.userData().then(res =>
                        this.setState({ expenses: res.data[0].expenses, title: "", amount: "", type: "" })
                    )

                }
            })
                .catch(err => console.log(err));
        }
        else if (this.state.transType === "income") {
            API.newIncome({
                title: this.state.title,
                amount: this.state.amount
            }).then(res => {
                if (res.status === 200) {
                    API.userData().then(res =>
                        this.setState({ income: res.data[0].income, title: "", amount: "", transType: "Transaction" })
                    )

                }
            })

                .catch(err => console.log(err));
        }
        else if (this.state.transType === "expense") {
            console.log("hi")
            API.newExpense({
                title: this.state.title,
                amount: this.state.amount
            }).then(res => {
                if (res.status === 200) {
                    API.userData().then(res =>
                        this.setState({ expenses: res.data[0].expenses, title: "", amount: "", transType: "Transaction" })
                    )

                }
            })

                .catch(err => console.log(err));
        }
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleEdit = (title, amount, id, type) => {
        this.setState({
            title: title,
            amount: amount,
            _id: id,
            type: type
        })
    }

    handleDelete = (id, type) => {
        if (type === "income") {
            API.deleteIncome({ id }).then(res => {
                if (res.status === 200) {
                    API.userData().then(res =>
                        this.setState({ income: res.data[0].income, title: "", amount: "" })
                    )

                }
            })
                .catch(err => console.log(err));
        }
        else if (type === "expense") {
            API.deleteExpense({ id }).then(res => {
                if (res.status === 200) {
                    API.userData().then(res =>
                        this.setState({ expenses: res.data[0].expenses, title: "", amount: "" })
                    )

                }
            })
                .catch(err => console.log(err));
        }
    }

    transactionType = (evt, eventKey) => {
        this.setState({
            transType: evt
        })

    }
    iTotal = () => {

    }
    render() {

        return (

            <div>
                {itotal = 0}
                {etotal = 0}
                {this.state.income.map(income => {
                    itotal = itotal + parseInt(income.amount)
                })}
                {this.state.expenses.map(expense => {
                    etotal = etotal + parseInt(expense.amount)
                })}
                {btotal = itotal - etotal}
                <Navs />
                <br />
                <div className="row">
                    <Sidebar />
                    <div className="container" style={{ width: '65%', marginTop: '50px' }}>
                        <div className="alert alert-primary">
                            <h2>Monthly Budget</h2>
                            <h4>Balance:{btotal}</h4>
                        </div>
                        <div>
                            <InputData
                                status={this.state.new}
                                title={this.state.title}
                                amount={this.state.amount}
                                message={"Save"}
                                handleChange={this.handleInputChange}
                                transType={this.transactionType}
                                trans={this.state.transType}
                                handleSave={this.handleSave}

                            />
                            <div className="row">
                                <div className="col-md-6">
                                    {!this.state.income.length ? (
                                        <React.Fragment>
                                            <Container>
                                                <Col md={6} >
                                                    <Col className="text-center" >No income to show</Col>
                                                </Col>
                                            </Container>
                                        </React.Fragment>
                                    ) : (
                                            <React.Fragment>
                                                <Container>
                                                    <Col>
                                                        <Row>
                                                            <Col md={4}>Income</Col>
                                                            <Col md={4}>Amount</Col>
                                                            <Col md={4}>TOTAL: <b>{itotal}</b></Col>
                                                        </Row>


                                                        {this.state.income.map(income => (
                                                            <TableData
                                                                handleTotal={this.handleIncomeIncrement}
                                                                type={"income"}
                                                                id={income._id}
                                                                title={income.title}
                                                                amount={income.amount}
                                                                message={"Edit"}
                                                                handleEdit={this.handleEdit}
                                                                handleDelete={this.handleDelete}

                                                            />

                                                        ))}


                                                    </Col>
                                                </Container>
                                            </React.Fragment>
                                        )}
                                </div>
                                <div className="col-md-6">
                                    {!this.state.expenses.length ? (
                                        <React.Fragment>
                                            <Container>
                                                <Col md={6} >
                                                    <Col className="text-center" >No Expenses to show</Col>
                                                </Col>

                                            </Container>

                                        </React.Fragment>
                                    ) : (
                                            <React.Fragment>
                                                <Container>
                                                    <Col>
                                                        <Row>
                                                            <Col md={4}>Expense</Col>
                                                            <Col md={4}>Amount</Col>
                                                            <Col md={4}>TOTAL: <b>{etotal}</b></Col>
                                                        </Row>


                                                        {this.state.expenses.map(expense => (
                                                            <TableData
                                                                type={"expense"}
                                                                id={expense._id}
                                                                title={expense.title}
                                                                amount={expense.amount}
                                                                message={"Edit"}
                                                                handleEdit={this.handleEdit}
                                                                handleDelete={this.handleDelete}

                                                            />

                                                        ))}


                                                    </Col>
                                                </Container>
                                            </React.Fragment>
                                        )}
                                </div>
                            </div>








                        </div>

                    </div >

                </div >
            </div>


        );
    }
}

export default Tool;