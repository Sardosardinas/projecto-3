var express = require("express");
var passport = require("../../config/passport");
var db = require("../models");
var app = require("../server");

var router = express.Router();

//Route for getting all Month Savints from the db

app.get("/user-savings", (req, res) => {
    db.User.find({})
        .then(function (dbUserSavings) {
            res.json(dbUserSavings);
        })
        .catch(function (err) {
            res.json(err);
        });
});

app.get('/getUserById/:id', (req, res) => {
    let id = req.params.id
    db.User.find({ _id: id })
        .then(user => {
            if (user) {
                res.json(user)
            } else if (!user)
                console.log("ERROR: cannot get from db")
        })
})

app.post('/userIncome', passport.authenticate("local"), (req, res) => {
    console.log("hi back end")
    if (req.user) {
        console.log(req.body)
        var income = {
            "title": req.body.title,
            "amount": req.body.amount
        }
        db.User.findOneAndUpdate({ email: req.user.email }, { $push: { income: } })
            .then(savedUser => {
                if (savedUser) {
                    console.log(savedUser)
                    res.sendStatus(200)
                    console.log("Created new income");
                } else if (!savedUser) {
                    console.log('ERROR: Could not post to db');
                }
            })

    }
    else {

        res.sendStatus(502)
    }

});


app.post('/UserExpense', (req, res) => {
    console.log(req.body)



    db.User.create(req.body)
        .then(savedUser => {
            if (savedUser) {
                res.send(savedUser)
                console.log("SavedUser is working!");
            } else if (!savedUser) {
                console.log('ERROR: Could not post to db');
            }
        })
})

app.delete('/deleteAllUsers', (req, res) => {
    db.User.remove({})
        .then(deleted => {
            if (deleted) {
                res.send(deleted)
            } else if (!deleted) {
                console.log('ERROR: Could not delete from db');
            }
        })
})

app.delete('/deleteUser/:id', (req, res) => {
    let id = req.params.id
    db.User.remove({ _id: id })
        .then(deleted => {
            if (deleted) {
                res.send(deleted)
            } else if (!deleted) {
                console.log('ERROR: Could not delete from db');
            }
        })
})

app.put('/updateIncomes/:id', (req, res) => {
    let id = req.params.id
    console.log(req.body, id)
    id.User.updateOne(
        { _id: id },
        req.body
    ).then(update => {
        if (update) {
            res.send(update)
        } else if (!update) {
            console.log("Could not update user income in db")
        }
    })
})

app.put('/updateExpenses/:id', (req, res) => {
    let id = req.params.id
    console.log(req.body, id)
    id.User.updateOne(
        { _id: id },
        req.body
    ).then(update => {
        if (update) {
            res.send(update)
        } else if (!update) {
            console.log("Could not update user expenses in db")
        }
    })
})

module.exports = app