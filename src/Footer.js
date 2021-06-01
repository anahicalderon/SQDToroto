import React from "react";
import logo from "./Assets/toroto_logo.png";
import facebook from "./Assets/FACEBOOK.png";
import linkedin from "./Assets/LINKEDIN.png";
import instagram from "./Assets/INSTAGRAM.png";
import twitter from "./Assets/Twitter.png";

import "./Footer.css";
import CustomizedButtons from "./Button";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Container_icons">
        <img src={facebook} alt="logo" />
        <img src={linkedin} alt="logo" />
        <img src={instagram} alt="logo" />
        <img src={twitter} alt="logo" />
      </div>
      <img className="Logo_Footer" src={logo} alt="logo" />
      
    </div>
  );
}
