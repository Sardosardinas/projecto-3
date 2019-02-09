const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var SavingsSchema = new Schema({
	income: {
		type: Schema.Types.ObjectId,
		ref: "Income"
	},
	expenses: {
		type: Schema.Types.ObjectId,
		ref: "Expenses"
		}
	
})

let Savings = mongoose.model('Savings', SavingsSchema);

module.exports = Savings;