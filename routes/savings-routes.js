var express = require("express");

var db = require("../models");
var app = require("../server");

var router = express.Router();

//Route for getting all Month Savints from the db

app.get("/monthsavings", function(req, res){
    db.MonthSavings.find({})
    .then(function(dbMonthSavings){
        res.json(dbMonthSavings);
    })
    .catch(function(err){
        res.json(err);
    });
});

//Route for the saved savings
app.get("/savedSavings", function(req,res){
    db.MonthSavings.find({ savedSavings: true })
    .populate("savings")
    .then(function(dbMonthSavings){
        res.json(dbMonthSavings);
    })
    .catch(function(err){
        res.json(err);
    });
});

//Route for grabbing a specific Month by id, populate it with it's savings
app.get("/articles/:id", function(req,res){
    //Using the id passed in the id parameter, prepare a query that finds the matching one in our db
    db.MonthSavings.findOne({ _id: req.params.id })
    //and populate all of the notes associated with it
    .populate("savings")
    .then(function(dbMonthSavings){
        res.json(dbMonthSavings);
    })
    .catch(function(err){
        res.json(err);
    });
})


//Route for saving/updating a Month's associated Savings
app.post("/articles/:id", function(req,res){
    db.MonthSavings.create(req.body)
    .then(function(dbMonthSavings){
        return dbMonthSavings.findOneAndUpdate({ _id: req.params.id }, { note: dbMonthSavings._id}, { new: true });
    })
    .then(function(dbMonthSavings){
        res.json(dbMonthSavings)
    })
    .catch(function(err){
        res.json(err);
    });
});
//Create a new income using the "submit" object built from each added information
app.get("/income", function(req, res){
    db.Income.create(result)
    .then(function (dbIncome){
        console.log(dbIncome);
    })
    .catch(function(err){
        console.log(err);
    });
})

//Create a new expense using the "submit" object built from each added information
app.get("/expenses", function(req, res){
    db.Expenses.create(result)
    .then(function (dbExpenses){
        console.log(dbExpenses);
    })
    .catch(function(err){
        console.log(err);
    });
})