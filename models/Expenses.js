const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var ExpensesSchema = new Schema({
    food: {
		type: Number,
		default: 0,
	},
	cable: {
		type: Number,
		default: 0,
	},
	gas: {
		type: Number,
		default: 0,
	},
})

let Expenses = mongoose.model('Expenses', ExpensesSchema);

module.Exports = Expenses;