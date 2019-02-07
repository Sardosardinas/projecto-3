import React, { Component } from "react";

import Headertable from "../components/Headertable";
import Navs from "../components/Navs";

import data from "../data.json";
// 1. CREAR UN TABLA DE PRESUPUESTO ANUAL (BUDGET + 12 MESES CON INCOME, EXPENSES, RESULT)
// 2. CAMPOS MODIFICABLES
// 3. CAMPOS CALCULADOS AUTOMATICAMENTE
// 4. SE GUARDE EN UNA BASE DE DATOS LOS CAMBIOS MONGODB
// 5. SE MUESTRE EL ARRAY GRABADO DE LA BASE DE DATOS
// DESEABLES
// PLATILLA POR USUARIO
// PLANTILLA POR AÑO
// PLANTILLA EN LA QUE SE PUEDAN AGREGAR MAS FILAS PARA CALCULOS DETALLADO
// const arrayBudget = {
//     budget: [1100, 800],
//     jan: [1000, 800],
//     feb: [900, 800],
//     mar: [1000, 800],
//     apr: [850, 800],
//     may: [1000, 800],
//     jun: [1000, 1000],
//     jul: [1000, 890],
//     ago: [600, 800],
//     sep: [1000, 950],
//     oct: [1200, 800],
//     nov: [1000, 750],
//     dec: [2000, 800]
// };


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

    // handleInputChange = event => {
    //     const { name, value } = event.target;
    //     this.setState({
    //         [name]: value
    //     });
    // };

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

    // handleInputChange(event) {
    //     const target = event.target;
    //     const value = target.value;
    //     const name = target.name;


    //     this.setState({
    //         [name]: value
    //     });
    // }

    render() {

        // CALCULOS
        const aIncome = ((this.state.iJan + this.state.iFeb + this.state.iMar + this.state.iApr + this.state.iMay + this.state.iJun
            + this.state.iJul + this.state.iAgo + this.state.iSep + this.state.iOct + this.state.iNov + this.state.iDec) / 12);

        const aExpenses = ((this.state.eJan + this.state.eFeb + this.state.eMar + this.state.eApr + this.state.eMay + this.state.eJun
            + this.state.eJul + this.state.eAgo + this.state.eSep + this.state.eOct + this.state.eNov + this.state.eDec) / 12);


        return (
            <div>
                <Navs />
                <br />
                <div className="container">
                    <div className="alert alert-primary">
                        <h2>PERSONAL FINANCE</h2>
                    </div>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <table className="table table-sm">
                                <Headertable />
                                <tbody>
                                    <tr>
                                        <th scope="row" class="resPath" >INCOME</th>
                                        <td class="resPath"><input name="iBudget" type="number" className="inputSquare" value={this.state.iBudget} onChange={this.handleInputChange} /></td>
                                        <td><input name="iJan" type="number" className="inputSquare" value={this.state.iJan} onChange={this.handleInputChange} /></td>
                                        <td><input name="iFeb" type="number" className="inputSquare" value={this.state.iFeb} onChange={this.handleInputChange} /></td>
                                        <td><input name="iMar" type="number" className="inputSquare" value={this.state.iMar} onChange={this.handleInputChange} /></td>
                                        <td><input name="iApr" type="number" className="inputSquare" value={this.state.iApr} onChange={this.handleInputChange} /></td>
                                        <td><input name="iMay" type="number" className="inputSquare" value={this.state.iMay} onChange={this.handleInputChange} /></td>
                                        <td><input name="iJun" type="number" className="inputSquare" value={this.state.iJun} onChange={this.handleInputChange} /></td>
                                        <td><input name="iJul" type="number" className="inputSquare" value={this.state.iJul} onChange={this.handleInputChange} /></td>
                                        <td><input name="iAgo" type="number" className="inputSquare" value={this.state.iAgo} onChange={this.handleInputChange} /></td>
                                        <td><input name="iSep" type="number" className="inputSquare" value={this.state.iSep} onChange={this.handleInputChange} /></td>
                                        <td><input name="iOct" type="number" className="inputSquare" value={this.state.iOct} onChange={this.handleInputChange} /></td>
                                        <td><input name="iNov" type="number" className="inputSquare" value={this.state.iNov} onChange={this.handleInputChange} /></td>
                                        <td><input name="iDec" type="number" className="inputSquare" value={this.state.iDec} onChange={this.handleInputChange} /></td>
                                        <td class="resPath"><td class="resPath">{aIncome.toFixed(2)} </td></td>
                                        <td class="resPath"></td>
                                    </tr>

                                    <tr>
                                        <th scope="row" class="resPath">EXPENSES</th>
                                        <td class="resPath"><input name="iBudget" type="number" className="inputSquare" value={this.state.eBudget} onChange={this.handleInputChange} /></td>
                                        <td><input name="eJan" type="number" className="inputSquare" value={this.state.eJan} onChange={this.handleInputChange} /></td>
                                        <td><input name="eFeb" type="number" className="inputSquare" value={this.state.eFeb} onChange={this.handleInputChange} /></td>
                                        <td><input name="eMar" type="number" className="inputSquare" value={this.state.eMar} onChange={this.handleInputChange} /></td>
                                        <td><input name="eApr" type="number" className="inputSquare" value={this.state.eApr} onChange={this.handleInputChange} /></td>
                                        <td><input name="eMay" type="number" className="inputSquare" value={this.state.eMay} onChange={this.handleInputChange} /></td>
                                        <td><input name="eJun" type="number" className="inputSquare" value={this.state.eJun} onChange={this.handleInputChange} /></td>
                                        <td><input name="eJul" type="number" className="inputSquare" value={this.state.eJul} onChange={this.handleInputChange} /></td>
                                        <td><input name="eAgo" type="number" className="inputSquare" value={this.state.eAgo} onChange={this.handleInputChange} /></td>
                                        <td><input name="eSep" type="number" className="inputSquare" value={this.state.eSep} onChange={this.handleInputChange} /></td>
                                        <td><input name="eOct" type="number" className="inputSquare" value={this.state.eOct} onChange={this.handleInputChange} /></td>
                                        <td><input name="eNov" type="number" className="inputSquare" value={this.state.eNov} onChange={this.handleInputChange} /></td>
                                        <td><input name="eDec" type="number" className="inputSquare" value={this.state.eDec} onChange={this.handleInputChange} /></td>
                                        <td class="resPath">{aExpenses.toFixed(2)} </td>
                                        <td class="resPath"></td>
                                    </tr>

                                    <tr>
                                        <th scope="row" class="resPath" >SAVINGS</th>
                                        <td className="resPath">{this.state.iBudget - this.state.eBudget}</td>
                                        <td className="resSaving">{this.state.iJan - this.state.eJan}</td>
                                        <td className="resSaving">{this.state.iFeb - this.state.eFeb}</td>
                                        <td className="resSaving">{this.state.iMar - this.state.eMar}</td>
                                        <td className="resSaving">{this.state.iApr - this.state.eApr}</td>
                                        <td className="resSaving">{this.state.iMay - this.state.eMay}</td>
                                        <td className="resSaving">{this.state.iJun - this.state.eJun}</td>
                                        <td className="resSaving">{this.state.iJul - this.state.eJul}</td>
                                        <td className="resSaving">{this.state.iAgo - this.state.eAgo}</td>
                                        <td className="resSaving">{this.state.iSep - this.state.eSep}</td>
                                        <td className="resSaving">{this.state.iOct - this.state.eOct}</td>
                                        <td className="resSaving">{this.state.iNov - this.state.eNov}</td>
                                        <td className="resSaving">{this.state.iDec - this.state.eDec}</td>
                                        <td class="resPath"></td>
                                        <td class="resPath"></td>
                                    </tr>

                                </tbody>
                            </table>
                        </form>

                    </div>
                    <div className="alert alert-primary">
                        <p class="footer"><h3>2018</h3></p>
                    </div>
                </div >
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark"></nav>
            </div>

        );
    }
}

export default Tool;