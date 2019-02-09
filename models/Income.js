const mongoose = require('mongoose');

var Schema = mongoose.Schema;

const IncomeSchema = new Schema ({
    title: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    }
})

let Income = mongoose.model('Income', IncomeSchema);

module.exports= Income