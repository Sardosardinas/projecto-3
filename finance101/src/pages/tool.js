import React, { Component } from "react";
import Table from "react-bootstrap/Table"
import Navs from "../components/Navs";
import data from "../data.json";


class Tool extends Component {

    state = {
        data
    };
    // componentDidMount() {
    //     this.loadData();
    // }

    // loadBooks = () => {
    //     API.getBudget()
    //         .then(res => this.setState({ books: res.data, title: "", author: "", synopsis: "" }))
    //         .catch(err => console.log(err));
    // };

    // deleteBook = id => {
    //     API.deleteBook(id)
    //         .then(res => this.loadBooks())
    //         .catch(err => console.log(err));
    // };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     if (this.state.title && this.state.author) {
    //         API.saveBook({
    //             title: this.state.title,
    //             author: this.state.author,
    //             synopsis: this.state.synopsis
    //         })
    //             .then(res => this.loadBooks())
    //             .catch(err => console.log(err));
    //     }
    // };

    handleInputChange(el) {
        let inputName = el.target.name;
        let inputValue = el.target.value;

        let statusCopy = Object.assign({}, this.state);
        statusCopy.formInputs[inputName].value = inputValue;

        this.setState(statusCopy);
    }

    render() {

        // // CALCULOS
        // const aIncome = ((this.state.iJan + this.state.iFeb + this.state.iMar + this.state.iApr + this.state.iMay + this.state.iJun
        //     + this.state.iJul + this.state.iAgo + this.state.iSep + this.state.iOct + this.state.iNov + this.state.iDec) / 12);

        // const aExpenses = ((this.state.eJan + this.state.eFeb + this.state.eMar + this.state.eApr + this.state.eMay + this.state.eJun
        //     + this.state.eJul + this.state.eAgo + this.state.eSep + this.state.eOct + this.state.eNov + this.state.eDec) / 12);
        console.log(data);

        return (
            <div>
                <Navs />
                <br />
                <div className="container">
                    <div className="alert alert-primary">
                        <h2>PERSONAL FINANCE</h2>
                    </div>
                    <div>
                        <table className="table">
                            {this.state.data.map(Month => (
                                <React.Fragment>
                                    <thead>

                                        <th className="col-xs-12">{Month.month}</th>

                                    </thead>
                                    <tbody>

                                        <th className="col-xs-6">Income</th>
                                        <th className="col-xs-6">Amount</th>


                                        {Object.keys(Month.income).map((key, i) => (
                                            <React.Fragment>

                                                <tr>
                                                    <td className="col-xs-3" onChange={this.handleInputChange}><input className="form-control" value={key}></input></td>
                                                    <td className="col-xs-3" ><input className="form-control" onChange={this.handleInputChange} name={key} value={Month.income[key]} ></input></td>
                                                </tr>

                                            </React.Fragment>
                                        )

                                        )}
                                        <tr>
                                            <th className="col-xs-3"> Expenses</th>
                                            <th className="col-xs-3">Amount</th>
                                        </tr>
                                        {Object.keys(Month.expenses).map((key, i) => (
                                            <React.Fragment>

                                                <tr>
                                                    <td className="col-xs-3" onChange={this.handleInputChange}><input className="form-control" value={key}></input></td>
                                                    <td className="col-xs-3" onChange={this.handleInputChange}><input className="form-control" name={key} value={Month.expenses[key]} ></input></td>
                                                </tr>
                                            </React.Fragment>
                                        )

                                        )}

                                    </tbody>

                                </React.Fragment>

                            ))}
                        </table>

                    </div>

                </div >

            </div>

        );
    }
}

export default Tool;