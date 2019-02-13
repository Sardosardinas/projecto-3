import React from "react";

import { Button } from "react-bootstrap";




export function InputData(props) {
    return (
        <tbody>

            <tr>
                <td><input onChange={props.handleChange} name={"title"} value={props.title} className="form-control"></input></td>
                <td><input onChange={props.handleChange} name={"amount"} value={props.amount} className="form-control"></input></td>

            </tr>
            {/* Felix  Aqui has el boton a la derecha porfa!! */}
            <tr colspan="2">
                <Button className="" >{props.message}</Button>
            </tr>
        </tbody>
    );
}
