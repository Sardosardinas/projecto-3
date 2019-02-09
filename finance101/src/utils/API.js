import axios from "axios";

export default {
    createMonth: function (MonthData) {
        return axios.post("api/Month", MonthData);
    }
    // saveBook: function (bookData) {
    //     console.log(bookData);
    //     return axios.post("/api/books", bookData);
    // },
    // savedBooks: function () {
    //     return axios.get("/api/books");
    // },
    // deleteBook: function (id) {
    //     return axios.delete("api/books/" + id)
    // }

};