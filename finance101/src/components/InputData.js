import React from "react";

import { Button, Container, Col, InputGroup, FormControl, Dropdown, DropdownButton } from "react-bootstrap";



export function InputData(props) {


    return (
        <div>
            <Container>
                <Col>
                    <InputGroup className="mb-3">
                        <DropdownButton
                            as={InputGroup.Prepend}
                            variant="outline-secondary"
                            title={props.trans}
                            id="input-group-dropdown-1"
                            onSelect={props.transType}
                        >
                            <Dropdown.Item eventKey={"income"}>Income</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item eventKey={"expense"}>Expense</Dropdown.Item>

                        </DropdownButton>
                        <FormControl onChange={props.handleChange} placeholder="Description" type="text" name="title" value={props.title} />

                        <FormControl onChange={props.handleChange} placeholder="Amount" type="number" name="amount" value={props.amount} />
                        <InputGroup.Append>
                            <Button onClick={props.handleSave} variant="outline-secondary">Save</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Container>
        </div>
    );
}
