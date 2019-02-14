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
	monthSavings: {
		type: Schema.Types.ObjectId,
		ref: "MonthSavings",
	}
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
