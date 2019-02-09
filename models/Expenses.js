const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var ExpensesSchema = new Schema({
    month: {
        type: Schema.Types.ObjectId,
        ref: "MonthSavings"
    },
    title: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
});

let Expenses = mongoose.model('Expenses', ExpensesSchema);

module.exports = Expenses