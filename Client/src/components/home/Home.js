import React, { useState } from "react";
import classes from "./home.module.css";
import { useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [lat, setLat] = useState("");
  const [log, setLog] = useState("");
  const [address, setAddress] = useState("");
  const [curr, setCurr] = useState("");
  const [weatherData,setWeatherData]=useState({});

  navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude);

    setLat(12.9716);
    setLog(77.5946);
  });




  useEffect(() => {
    const getData = async () => {
      try {
        // console.log(lat);
        // console.log(log);

        // const lo = await axios.get(
        //   "https://api.opencagedata.com/geocode/v1/json?q=" +
        //     12.9716 +
        //     " " +
        //     77.5946 +
        //     "&key=3b5752d4c64544bdbb8f86b3179082ee"
        // );

        // setAddress(lo.data.results[0].formatted);
        let present = address.split(",")[3];
        setCurr(present.split("-")[0]);
        console.log(curr);

        const city = curr;

        const query = city;
        const apiKey = "ac31d3536effca6fc8a3e073c24776f8";
        const unit = "metric";
        const url =
          "https://api.openweathermap.org/data/2.5/weather?lat=" +
          lat +
          "&lon=" +
          log +
          "&appid=" +
          apiKey;

        const res = await axios.get(url);
        console.log(res.data);
        setWeatherData(res.data);
      } catch (err) {}
    };
    getData();
  }, [address,curr,lat,log,weatherData]);
console.log(weatherData);
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.icon}>
          <img src="https://cdn-icons-png.flaticon.com/512/2932/2932445.png" />
        </div>
        <div className={classes.data}>
          <div className={classes.left}>
            <div className={classes.temp}>
              <h1
                style={{
                  color: "#c5cdcf",
                  // fontSize: "2.9375em",
                }}
              >
                {/* {weatherData.main.temp} */}
              </h1>
            </div>
            <div className={classes.text}>
              <h2 style={{ color: "#8f9b9d", fontSize: "1.1875em" }}>
                Partly cloudy
              </h2>
              <h3 style={{ color: "#c5cdcf" }}>{weatherData.name}</h3>
            </div>
          </div>
          <div className={classes.right}>
            <div>JUL</div>
            <div>3</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// "https://api.openweathermap.org/data/2.5/weather?
// lat="{lat}&lon={log} +
// "&units=" +
// unit +
// "&appid=" +
// apiKey;
