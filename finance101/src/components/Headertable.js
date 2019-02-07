import React, { Component } from "react";

class Headertable extends Component {
    render() {
        return (
            <thead>
                <tr>
                    <th scope="col"><button type="button" class="btn btn-success" onClick={this.handleFormSubmit}>SUBMIT</button></th>
                    <th scope="col" class="resPath">BUDGET</th>
                    <th scope="col">JAN</th>
                    <th scope="col">FEB</th>
                    <th scope="col">MAR</th>
                    <th scope="col">APR</th>
                    <th scope="col">MAY</th>
                    <th scope="col">JUN</th>
                    <th scope="col">JUL</th>
                    <th scope="col">AGO</th>
                    <th scope="col">SEP</th>
                    <th scope="col">OCT</th>
                    <th scope="col">NOV</th>
                    <th scope="col">DEC</th>
                    <th scope="col" class="resPath" >AVERAGE</th>
                    <th scope="col" class="resPath" >TOTAL</th>
                </tr>
            </thead>
        );
    }
}

export default Headertable;