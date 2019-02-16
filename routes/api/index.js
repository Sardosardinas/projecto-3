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
            console.log("hi")
            //res.redirect("google.com")
            res.send(200)
        }
        else {
            console.log("hi23")
            res.send(502)
        }

    });
router.route("/login")

    .get((req, res) => {
        if (req.user) {

        }
    });

router.route("/logout")
    .get((req, res) => {
        req.logout();
        res.redirect("/");

    });


module.exports = router;