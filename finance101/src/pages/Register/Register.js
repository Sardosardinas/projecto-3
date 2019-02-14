import React, { Component } from "react";
import { Jumbotron, Card, Button, Form, Container, Col } from "react-bootstrap"
import API from "../../utils/API"

class Register extends Component {

    state = {
        username: "",
        email: "",
        password: ""
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.email && this.state.password) {
            API.newUser({
                name: this.state.username,
                email: this.state.email,
                password: this.state.password
            })
                .then(res => console.log(res))
                .catch(err => console.log(err));
        }
    };

    render() {

        return (
            <div>
                <Container>
                    <Card>
                        <Card.Title>Register new User</Card.Title>
                        <Card.Body>
                            <Form>
                                <Form.Group controlID="RegisterName">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} type="text" name={"username"} value={this.state.username} placeholder="Enter username" />
                                </Form.Group>
                                <Form.Group controlID="RegisterUser">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} name={"email"} value={this.state.email} type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onChange={this.handleInputChange} name={"password"} value={this.state.password} type="password" placeholder="Password" />
                                </Form.Group>
                                <Button onClick={this.handleFormSubmit} variant="primary" type="submit">
                                    Register
                        </Button>
                            </Form>
                        </Card.Body>

                    </Card>
                </Container>
            </div>

        )
    }

}

export default Register;