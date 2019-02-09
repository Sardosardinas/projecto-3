import React from "react";

import { Button } from "react-bootstrap";




export function TableData({ title, amount, month, updateIncome }) {
    return (
        <tbody>
            <tr>
                <th >Income</th>
                <th >Amount</th>
            </tr>

            <tr>
                <td><input value={title} className="form-control"></input></td>
                <td><input value={amount} className="form-control"></input></td>

            </tr>
            {/* Felix  Aqui has el boton a la derecha porfa!! */}
            <tr colspan="2">
                <Button className="" onClick={updateIncome(title, amount, month)}>Add</Button>
            </tr>
        </tbody>
    );
}