import React from "react";

import { Button, Row, Col } from "react-bootstrap";




export function TableData({ title, amount, message, handleEdit, id, handleDelete, type, handleTotal }) {
    return (
        <div>
            <Row className={"mt-4"}>
                <Col md={4}>{title}</Col>
                <Col md={4}>{amount}</Col>
                <Col md={2}> <Button onClick={() => handleEdit(title, amount, id, type)} >{message}</Button></Col>
                <Col md={2}> <Button variant="danger" onClick={() => handleDelete(id, type)} >Delete</Button></Col>
            </Row>
        </div>
    );
}