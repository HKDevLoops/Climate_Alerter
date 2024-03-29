import React from "react";
import classes from "./login.module.css";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyIcon from "@mui/icons-material/Key";

const Login = () => {
  return (
    <div className={classes.main_container}>
      <div className={classes.wrapper}>
        <div className={classes.title}>
          <h2>Login</h2>
        </div>

        <div className={classes.input_container}>
          <div className={classes.icon}>
            <PersonOutlineIcon />
          </div>
            
          <input
            className={classes.input_field}
            type="text"
            placeholder="Username"
            name="usrnm"
          />
        </div>

        <div className={classes.input_container}>
          <div className={classes.icon}>
            <KeyIcon />
          </div>
          <input
            className={classes.input_field}
            type="password"
            placeholder="Password"
            name="psw"
          />
        </div>

        {/* <div className={classes.btn}> */}
        <button type="submit" className={classes.btn}>
          Register
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Login;
