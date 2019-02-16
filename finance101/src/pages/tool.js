import React, { Component } from "react";
import { TableData } from "../components/TableData";
import { InputData } from "../components/InputData";
import Navs from "../components/Navs";
import { Dropdown, Button, Col, Container, Row, Alert } from "react-bootstrap";
import API from "../utils/API";
import Sidebar from "../components/Sidebar/Sidebar";


class Tool extends Component {

    state = {
        transType: "Transaction",
        income: [],
        expenses: [],
        title: "",
        _id: "",
        amount: null,

    };

    componentDidMount() {
        API.userData().then(res => {
            console.log(res.data)
            this.setState({ income: res.data[0].income })
        })
            .catch(err => console.log(err));
    }


    handleSave = () => {
        console.log(this.state.amount)
        if (this.state._id) {
            API.updateIncome({
                _id: this.state._id,
                title: this.state.title,
                amount: this.state.amount
            }).then(res => {
                if (res.status === 200) {
                    API.userData().then(res =>
                        this.setState({ income: res.data[0].income, title: "", amount: "" })
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
                        this.setState({ income: res.data[0].income, title: "", amount: "" })
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

    handleEdit = (title, amount, id) => {
        this.setState({
            title: title,
            amount: amount,
            _id: id
        })
    }

    handleDelete = (id) => {
        API.deleteIncome({ id }).then(res => {
            if (res.status === 200) {
                API.userData().then(res =>
                    this.setState({ income: res.data[0].income, title: "", amount: "" })
                )

            }
        })
            .catch(err => console.log(err));
    }

    transactionType = (evt, eventKey) => {
        this.setState({
            transType: evt
        })

    }

    render() {

        return (
            <div>
                <Navs />
                <br />
                <div className="row">
                    <Sidebar />
                    <div className="container" style={{ width: '65%', marginTop: '50px' }}>
                        <div className="alert alert-primary">
                            <h2>Monthly Budget</h2>
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
                                                    <Col md={6}>Income</Col>
                                                    <Col md={6}>Amount</Col>
                                                </Row>


                                                {this.state.income.map(income => (
                                                    <TableData
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
                                                    <Col md={6}>Income</Col>
                                                    <Col md={6}>Amount</Col>
                                                </Row>


                                                {this.state.income.map(income => (
                                                    <TableData
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
                            </div>








                        </div>

                    </div >

                </div >
            </div>


        );
    }
}

export default Tool;