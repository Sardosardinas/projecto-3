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

<<<<<<< HEAD
=======
/*router.route("/Month")
    .post((req, res) => {

        db.Month.create(req.body)
            .then(function (dbUser) {
                console.log(dbUser);
            })
            .catch(function (err) {
                console.log(err);
            });
        res.send("Month added")
    });*/
>>>>>>> 271e31328e4c88794e71bf73f7834884c0cf8d2a

module.exports = router;