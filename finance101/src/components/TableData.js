import React from "react";

import { Button } from "react-bootstrap";




export function TableData({ title, amount, month, updateIncome, handleChange, message }) {
    return (
        <tbody>

            <tr>
                <td >{title}</td>
                <td >{amount}</td>

            </tr>
            {/* Felix  Aqui has el boton a la derecha porfa!! */}
            <tr colspan="2">
                <Button className="" >{message}</Button>
            </tr>
        </tbody>
    );
}