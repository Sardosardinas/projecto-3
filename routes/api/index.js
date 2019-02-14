const router = require("express").Router();
const db = require("../../models")
var passport = require("../../config/passport");

router.route("/signup")
    .post((req, res) => {
        
        db.User.create(req.body)
            .then(function () {
                res.redirect(307, "/api/login");
            })
            .catch(function (err) {
                console.log(err);
            });

    });

router.route("/login")
    .post(passport.authenticate("local"), (req, res) => {
        res.json("/tool")
    });
router.route("/logout")
    .get((req, res) => {
        req.logout();
        res.redirect("/");

    });

router.route("/Month")
    .post((req, res) => {

        db.Month.create(req.body)
            .then(function (dbUser) {
                console.log(dbUser);
            })
            .catch(function (err) {
                console.log(err);
            });
        res.send("Month added")
    });

module.exports = router;