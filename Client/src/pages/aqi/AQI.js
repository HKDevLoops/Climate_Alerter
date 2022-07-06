import React, { useEffect, useState } from "react";

import axios from "axios";

import classes from "./aqi.module.css";
const AQI = () => {
  const [data, setData] = useState({});
  useEffect(() => {
    const getData = async () => {
      const ApiKey = "bc4c6858e71aee709408133ada4ae4f7";

      try {
        const res = await axios.get(
          "http://api.openweathermap.org/data/2.5/air_pollution?lat=12.9716&lon=77.5946&appid=" +
            ApiKey
        );
        setData(res.data.list[0]);
        // console.log(res.data.list[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.top}>top</div>
        <div className={classes.bottom}>
          <div className={classes.left}>left</div>
          <div className={classes.right}>right;</div>
        </div>
      </div>
    </div>
  );
};

export default AQI;

// Good
// rgb(19,201,28)

// Fair
// 15,134,25

// Moderate
// 201,204,13

// poor
// 204,83,13
// very poor
// 204,13,13
