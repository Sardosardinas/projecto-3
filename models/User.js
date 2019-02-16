var bcrypt = require("bcrypt-nodejs");
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
	income: [{
		title: {
			type: String,
			required: true
		},
		amount: {
			type: String,
			required: true
		}

	}],
	expenses: [{
		title: [{
			type: String,
			required: true,
		}],
		amount: [{
			type: Number,
			required: true,
		}]
	}]
})

UserSchema.methods.validPassword = function (password) {
	return bcrypt.compareSync(password, this.password);
};

UserSchema.pre('save', function () {
	var user = this;
	user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
});


let User = mongoose.model('User', UserSchema)

module.exports = User
