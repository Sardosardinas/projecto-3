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
        console.log("hi")
        return axios.put("api/deleteIncome", incomeData)
    }

};
