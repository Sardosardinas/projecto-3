const router = require("express").Router();
const db = require("../../models")


router.route("/user")
    .post((req, res) => {

        db.User.create(req.body)
            .then(function (dbUser) {
                console.log(dbUser);
            })
            .catch(function (err) {
                console.log(err);
            });
        res.send("User Created")
    });

module.exports = router;