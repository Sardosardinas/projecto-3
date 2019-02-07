const mongoose = require('mongoose')

const Schema = mongoose.Schema

var UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	age: {
		type: Number,
		required: true,
	}
})

let User = mongoose.model('User', UserSchema)

module.exports = User
