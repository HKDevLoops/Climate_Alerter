import React from "react";
import classes from "./navbar.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const Navbar = () => {
  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <img
            src="https://static.thenounproject.com/png/2083791-200.png"
            alt=""
          />
        </div>
        <div className={classes.right}>
          <div className={classes.link}>
            <h2>News Feed</h2>
          </div>
          <div className={classes.user}>
            <h1>john</h1>
            <AccountCircleIcon
              style={{ fontSize: "35px", cursor: "pointer" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
