import React, { Component } from "react";
import { Jumbotron, Card, Button, Form, Container, Col, Alert } from "react-bootstrap"
import API from "../../utils/API"
import { Redirect } from "react-router-dom"
class Login extends Component {

    state = {
        email: "",
        pasword: "",
        isAuthenticated: false
    };



    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    login = event => {
        event.preventDefault();
        API.loginUser({ email: this.state.email, password: this.state.password })
            .then(res => {
                console.log(res)
                if (res.status === "200") {
                    this.setState({ isAuthenticated: true })
                }


            }).catch(err => console.log(err));
    };
    renderRedirect = () => {
        if (!this.state.isAuthenticated) {
            return <Redirect to='/tool' />
        }
    }

    render() {

        return (
            <div>
                {this.renderRedirect()}
                <Container>
                    <Card>
                        <Card.Title>User Login</Card.Title>
                        <Card.Body>
                            <Form>
                                <Form.Group controlID="UserLogin">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" name="email" onChange={this.handleInputChange} placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name="password" onChange={this.handleInputChange} placeholder="Password" />
                                </Form.Group>
                                <Button onClick={this.login} variant="primary" type="submit">
                                    Login
        </Button >
                            </Form>
                        </Card.Body>
                        <Col md={{ span: 4, offset: 4 }} >



                        </Col>
                    </Card>
                </Container>

            </div>

        )
    }

}

export default Login;