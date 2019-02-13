import React, { Component } from "react";

import { Jumbotron, Card, Button, Form, Container, Col } from "react-bootstrap"


class Login extends Component {
    render() {

        return (
            <div>

                <Container>
                    <Card>
                        <Card.Title>User Login</Card.Title>
                        <Card.Body>
                            <Form>
                                <Form.Group controlID="UserLogin">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                            </Form>
                        </Card.Body>
                        <Col md={{ span: 4, offset: 4 }} >

                            <Button variant="primary" type="submit">
                                Login
                        </Button>

                        </Col>
                    </Card>
                </Container>
            </div>

        )
    }

}

export default Login;