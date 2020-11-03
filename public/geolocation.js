// ((exports) => {
//   const data = {};
//   navigator.geolocation.getCurrentPosition((loc) => {
//     const lat = loc.coords.latitude;
//     const lon = loc.coords.longitude;
    // const api_key = process.env.OPENWEATHERMAP_APIKEY;
    

    // const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`;

    // $.getJSON(url, (weatherdata) => {
    //   data.temp = weatherdata.main.temp;
    //   // const temp = weatherdata.main.temp;
    //   data.main_desc = weatherdata.weather[0].main;
    //   data.desc = weatherdata.weather[0].description;
    //   data.icon = weatherdata.weather[0].icon;
    //   data.pressure = weatherdata.main.pressure;
    //   data.humidity = weatherdata.main.humidity;
    //   data.wind_speed = weatherdata.wind.speed;
    //   data.wind_deg = weatherdata.wind.deg;
    //   data.city = weatherdata.name;
    //   data.country = weatherdata.sys.country;
    // });
    // console.log(data);
    // exports.weatherdata = data;
//   });

// })(typeof exports === "undefined" ? (this.geolocation = {}) : exports);

// $("#accessLocation").click(() => {
//   navigator.geolocation.getCurrentPosition((loc) => {
//     const lat = loc.coords.latitude;
//     const long = loc.coords.longitude;
//     $("#loc-latitude").val(lat);
//     console.log("lat long", lat, long);
//   });
// });
