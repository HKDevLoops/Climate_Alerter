import React from "react";
import { useState } from "react";
import classes from "./calculator.module.css";
const CarbonCalculator = () => {
  const [carbonData, setCarbonData] = useState({});
  const [result, setResult] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const setData = (event) => {
    setCarbonData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });

    // console.log(event.target.value);
  };

  const Calculate = (data) => {
    setShowResult(true);
    console.log(carbonData);
    let weight;
    let fuel = parseInt(carbonData.fuel);
    let distance = parseInt(carbonData.distance);

    switch (carbonData.fueltype) {
      case "petrol":
        weight = 2392;
        setResult((weight * fuel) / distance);

        break;
      case "diesel":
        weight = 2640;
        setResult((weight * fuel) / distance);
        break;
      case "lpg":
        weight = 1655;
        setResult((weight * fuel) / distance);
        break;
      default:
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.data}>
          <select name="fueltype" onChange={setData}>
            <option value="petrol">Petrol</option>
            <option value="diesel">Diesel</option>
            <option value="lpg">LPG</option>
          </select>
          <div className={classes.input}>
            <label>Fuel Consumed</label>
            <br />

            <input
              type="number"
              name="fuel"
              onChange={setData}
              placeholder="Liters"
            ></input>
          </div>
          <div className={classes.input}>
            <label>Distance Travelled</label>
            <br />
            <input
              type="number"
              name="distance"
              placeholder=" KM"
              onChange={setData}
            ></input>
          </div>
          <div className={classes.btn}>
            <button onClick={Calculate}>submit</button>
          </div>
        </div>
        {showResult && (
          <div className={classes.result}>
            <h2 className={classes.title}>Total Emission</h2>
            <p>
              <span>{result / 1000}</span>Kg
            </p>
          </div>
        )}
      </div>
      <div className={classes.suggestions}>
        <div className={classes.heading}>
          <h1>suggestion to reduce Carbon Emission</h1>
        </div>
      </div>
    </div>
  );
};

export default CarbonCalculator;
