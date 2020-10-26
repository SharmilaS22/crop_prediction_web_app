require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
// const geolocation = require("./public/geolocation");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set("view engine", "ejs");

const port = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.render("index");
});
app.listen( port, (req, res) => {
    console.log("Server started at port " + port);
});
