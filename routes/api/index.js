const router = require("express").Router();
const db = require("../../models")
var passport = require("../../config/passport");

router.route("/signup")
    .post((req, res) => {

        db.User.create(req.body)
            .then(function () {
                res.json("Authenticated");
            })
            .catch(function (err) {
                console.log(err);
            });

    });

router.route("/login")

    .post(passport.authenticate("local"), (req, res) => {

        if (req.user) {

            res.sendStatus(200)
        }
        else {

            res.sendStatus(502)
        }

    });

router.route("/logout")
    .get((req, res) => {
        req.logout();
        res.sendStatus(200);

    });


module.exports = router;