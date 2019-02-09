const mongoose = require('mongoose');

const IncomeSchema = newSchema ({
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

module.exports= Income;