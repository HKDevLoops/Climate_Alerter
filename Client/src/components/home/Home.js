import React from "react";
import classes from "./home.module.css";
const Home = () => {
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
                25C
              </h1>
            </div>
            <div className={classes.text}>
              <h2 style={{ color: "#8f9b9d", fontSize: "1.1875em" }}>
                Partly cloudy
              </h2>
              <h3 style={{ color: "#c5cdcf" }}>London</h3>
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
