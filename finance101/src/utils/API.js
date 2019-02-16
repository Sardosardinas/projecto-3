import axios from "axios";

export default {
    newUser: function (userData) {
        return axios.post("api/signup", userData)
    },
    loginUser: function (userData) {
        return axios.post("api/login", userData)
    },
    userData: function () {
        return axios.get("api/userdata")
    },
    logoutUser: function () {
        return axios.get("api/logout")
    },
    newIncome: function (incomeData) {
        return axios.put("api/userIncome", incomeData)
    },
    updateIncome: function (incomeData) {
        return axios.put("api/updateIncome", incomeData)
    },
    deleteIncome: function (incomeData) {
        return axios.put("api/deleteIncome", incomeData)
    },
    newExpense: function (expenseData) {
        return axios.put("api/userExpense", expenseData)
    },
    updateExpense: function (expenseData) {
        return axios.put("api/updateExpense", expenseData)
    },
    deleteExpense: function (expenseData) {
        return axios.put("api/deleteExpense", expenseData)
    },

};
