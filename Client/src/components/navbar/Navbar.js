import React, { useContext } from "react";
import classes from "./navbar.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
import { store } from "../../App";
const Navbar = () => {
  const [token,setToken]=useContext(store);
  const navigate=useNavigate();
  const clickHandler=()=>{
    console.log(token);
    navigate("/login");
    setToken(null);



  }
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
            <Link to="/aqi" style={{ textDecoration: "none" }}>
              <h2>AQI Data</h2>
            </Link>
          </div>
          <div className={classes.link}>
            <Link to="/news" style={{ textDecoration: "none" }}>
              <h2>News Feed</h2>
            </Link>
          </div>
          <div className={classes.dropdown}>
          <div className={classes.user}>
            <h1>john</h1>
            <AccountCircleIcon 
              style={{ fontSize: "35px", cursor: "pointer" }}

            />
              <div className={classes.dropdown_content}>
              <button className={classes.logout} onClick={clickHandler}>Logout</button>

  </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
