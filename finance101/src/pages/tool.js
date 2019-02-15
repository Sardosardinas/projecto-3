import React, { Component } from "react";
import { TableData } from "../components/TableData";
import { InputData } from "../components/InputData";
import Navs from "../components/Navs";
import { Dropdown, Button, Col, Container, Row } from "react-bootstrap";
import API from "../utils/API";
import Sidebar from "../components/Sidebar/Sidebar";


class Tool extends Component {


    state = {
        transType: "Transaction",
        income: [{
            title: "day-job",
            amount: 150
        },
        {
            title: "side-job",
            amount: 50
        }],
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
                            />

                            {!this.state.income.length ? (
                                <React.Fragment>
                                    <Container>
                                        <Col>
                                            <Col className="text-center" >No income to show</Col>
                                        </Col>

                                    </Container>

                                </React.Fragment>
                            ) : (
                                    <React.Fragment>
                                        <Container>
                                            <Col md={6}>
                                                <Row>
                                                    <Col md={6}>Income</Col>
                                                    <Col md={6}>Amount</Col>
                                                </Row>


                                                {this.state.income.map(income => (
                                                    <TableData
                                                        title={income.title}
                                                        amount={income.amount}
                                                        message={"Edit"}
                                                        handleEdit={this.handleEdit}
                                                    />

                                                ))}


                                            </Col>
                                        </Container>
                                    </React.Fragment>
                                )}








                        </div>

                    </div >

                </div >
            </div>


        );
    }
}

export default Tool;