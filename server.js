const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
var passport = require("./config/passport");
var session = require("express-session");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Passport
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("finance101/build"));
}
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/finance101");

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});