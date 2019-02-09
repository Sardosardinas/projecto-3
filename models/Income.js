const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const IncomeSchema = new Schema ({
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

let Income = mongoose.model('Income', IncomeSchema);

module.exports= Income