require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const https = require("https");
// const geolocation = require("./public/geolocation");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set("view engine", "ejs");

const port = process.env.PORT || 4000;

const location = {};

app.get("/", (req, res) => {
    res.render("index");
});
app.post("/", (req, res) => {
  location.latitude = req.body.locLatitude;
  location.longitude = req.body.locLongitude;
    
  const api_key = process.env.OPENWEATHERMAP_APIKEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${req.body.locLatitude}&lon=${req.body.locLongitude}&units=metric&appid=${api_key}`;
    
    const data = {};

    const request = https.request(url, {method: "GET"}, (response) => {
        if (response.statusCode === 200) {
            console.log(response);
             response.on("data", function (weatherdata) {
               weatherdata = JSON.parse(weatherdata);

               data.temp = weatherdata.main.temp;
               data.main_desc = weatherdata.weather[0].main;
               data.desc = weatherdata.weather[0].description;
               data.icon = weatherdata.weather[0].icon;
               data.pressure = weatherdata.main.pressure;
               data.humidity = weatherdata.main.humidity;
               data.wind_speed = weatherdata.wind.speed;
               data.wind_deg = weatherdata.wind.deg;
               data.city = weatherdata.name;
               data.country = weatherdata.sys.country;
             });
        } 
     
    });
    // request.write(jsdata);
    request.end();


  res.redirect("/");
});
app.listen( port, (req, res) => {
    console.log("Server started at port " + port);
});
