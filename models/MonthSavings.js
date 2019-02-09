var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MonthSavings = new Schema({

    month: { 
        type: String,
        required: true,
    },
    savedSavings: {
		type: Boolean,
		default: false
	},
    savings: {
    type: Schema.Types.ObjectId,
    ref: "Savings"
    }
});

var MonthSavings= mongoose.model("MonthSavings", MonthSavings);

module.exports = MonthSavings;