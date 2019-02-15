const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/finance101"
);

const userSeed =[   
{
    name: "areyna", 
    email: "ejemplo@gmail.com", 
    password: "1234",
    income: [
        {
            title: "freelance", 
            amount: 3000
        },
        {
            title: "freelance", 
            amount: 3000
        }
    ],
    expenses:[
        {
            title: "food", 
            amount: 3000
        },
        {
            title: "food", 
            amount: 3000
        }
    ]
},
{
    name: "weekend", 
    email: "ejempl@gmail.com", 
    password: "12345"
},
{
    name: "victoria", 
    email: "ejemp@gmail.com", 
    password: "123456"
}
];



const incomeSeed=[
{
    title: "work", 
    amount: 11000
},
{
    title: "freelance", 
    amount: 3000
},
{
    title: "rap competition", 
    amount: 20000
}
];

const expensesSeed= [
{
    title: "food", 
    amount: 3000
},
{
    title: "internet", 
    amount: 2000
},
{
    title: "laundry", 
    amount: 124
}
];


db.User
.remove({})
.then(() => db.User.collection.insertMany(userSeed))
.then(data => {
    console.log(data.result + "users inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});


db.Income
.remove({})
.then(() => db.Income.insertMany(incomeSeed))
.then(data => {
    console.log(data.result + "income seeds inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1);
});

db.Expenses
.remove({})
.then(() => db.Expenses.insertMany(expensesSeed))
.then(data => {
    console.log(data.result + "expenses seeds inserted!");
    process.exit(0);
})
.catch(err => {
    console.error(err);
    process.exit(1)
});