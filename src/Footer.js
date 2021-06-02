import React from "react";
import logo from "./Assets/toroto_logo.png";
import facebook from "./Assets/FACEBOOK.png";
import linkedin from "./Assets/LINKEDIN.png";
import instagram from "./Assets/INSTAGRAM.png";
import twitter from "./Assets/Twitter.png";

import "./Footer.css";


export default function Footer() {
  return (
    <div className="Footer">
      <div className="Container_icons">
        <a href="https://web.facebook.com/holatoroto?_rdc=1&_rdr" target="_blank"><img src={facebook} alt="facebook"  /></a>

        <a   href="https://www.linkedin.com/company/toroto/about/" target="_blank" ><img src={linkedin} alt="linkedin" /></a>

        <a href="https://www.instagram.com/holatoroto/" target="_blank"><img src={instagram} alt="instagram"/></a>

        <a href="https://twitter.com/holatoroto" target="_blank" ><img src={twitter} alt="twitter" /></a>
      </div>
      <img className="Logo_Footer" src={logo} alt="logo" />
      
    </div>
  );
}
