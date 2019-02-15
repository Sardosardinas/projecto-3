import React from "react";

import { Button, Row, Col } from "react-bootstrap";




export function TableData({ title, amount, message, handleEdit }) {
    return (
        <Row className={"mt-4"}>
            <Col md={6}>{title}</Col>
            <Col md={4}>{amount}</Col>
            <Col md={2}> <Button onClick={() => handleEdit(title, amount)} >{message}</Button></Col>

        </Row>

    );
}