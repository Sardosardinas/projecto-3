const mongoose = require('mongoose')

const Schema = mongoose.Schema

var SavingsSchema = new Schema({
	income: {
		type: Number,
		required: true,
	},
	expense: {
		type: Number,
		required: true,
	},
	savings: {
		type: Number,
		required: true,
	}
})

let Savings = mongoose.model('Savings', SavingsSchema)

module.exports = Savings