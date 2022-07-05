import React from "react";
import classes from "./footer.module.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <InstagramIcon
          style={{ fontSize: "40px", margin: 10, color: "#e95950" }}
        />
        <GitHubIcon
          style={{ fontSize: "40px", margin: 10, color: "#171515 " }}
        />
        <FacebookIcon
          style={{ fontSize: "40px", margin: 10, color: "#4267B2" }}
        />
        <TwitterIcon
          style={{ fontSize: "40px", margin: 10, color: "#1DA1F2" }}
        />
      </div>
    </div>
  );
};

export default Footer;
