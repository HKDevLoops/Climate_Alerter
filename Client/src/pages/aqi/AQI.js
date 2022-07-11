import React, { useEffect, useState } from "react";

import axios from "axios";

import classes from "./aqi.module.css";
import Chart from "../../components/chart/Chart";
const AQI = () => {
  let color="";
  const [data, setData] = useState({});
  const [aqi,setAqi]=useState();
  let num=5;
  switch(num){
    case 1:
      color="rgb(19,201,28)";
      break;
    case 2:
      color="rgb(15,134,25)";
      break;

    case 3:
      color="rgb(201,204,13";
      break;

    case 4:
      color="rgb(204,83,13)";
      break;
    case 5:
      color="rgb(204,13,13)";
      break;
    default:

  }
  // useEffect(() => {
  //   const getData = async () => {
  //     const ApiKey = "bc4c6858e71aee709408133ada4ae4f7";

  //     try {
  //       const res = await axios.get(
  //         "http://api.openweathermap.org/data/2.5/air_pollution/history?lat=12.9716&lon=77.5946&start=1657151826&end=1657497426&appid=" + ApiKey
  //       );
  //       setData(res.data.list[0]);
  //       console.log(res.data.list[0]);
  //         setAqi(res.data.list[0].main.aqi);
          
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getData();
  // }, []);
  console.log(`"${color}"`);

  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.top}>
          <Chart />
        </div>
        <div className={classes.bottom}>
          <div className={classes.left}>
          <div>
            <h1>AQI</h1>
          </div>
          <div className={classes.index}>
            <h1>{num}</h1>
           
          </div>
          <div className={classes.result}>
             <h2 style={{color:`"${color}"`}}>MODERATE</h2>
          </div>
          </div>
          <div className={classes.right}>
          <div className={classes.title}>
            <h1>Concentrations</h1>
          </div>
            <ul className={classes.concentrations}>
              <li><span>co</span>:247</li>
              <li><span>co</span>:247</li>
              <li><span>co</span>:247</li>
              <li><span>co</span>:247</li>

            </ul>
          </div>
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




