import React, { Component } from "react";

import { Jumbotron, Card, Button, Form, Container, Col } from "react-bootstrap"

class Register extends Component {

    state = {

    }

    render() {

        return (
            <div>
                <Container>
                    <Card>
                        <Card.Title>Register new User</Card.Title>
                        <Card.Body>
                            <Form>
                                <Form.Group controlID="RegisterUser">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                </Form.Group>
                            </Form>
                        </Card.Body>
                        <Col md={{ span: 4, offset: 4 }} >

                            <Button variant="primary" type="submit">
                                Register
                        </Button>

                        </Col>
                    </Card>
                </Container>
            </div>

        )
    }

}

export default Register;