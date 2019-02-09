const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var ExpensesSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	amount: {
		type: Number,
		required: true,
	}
})

let Expenses = mongoose.model('Expenses', ExpensesSchema);

module.Exports = Expenses;