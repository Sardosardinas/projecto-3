var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MonthSavings = new Schema({
	user: { 
		type: Schema.Types.ObjectId,
		ref: "User"
	},
    month: { 
      type: String,
      required: true,
  },
    savedSavings: {
		type: Boolean,
		default: false
	},
    income: {
		type: Schema.Types.ObjectId,
		ref: "Income"
	},
	expenses: {
		type: Schema.Types.ObjectId,
		ref: "Expenses"
	}
});

var MonthSavings= mongoose.model("MonthSavings", MonthSavings);

module.exports = MonthSavings