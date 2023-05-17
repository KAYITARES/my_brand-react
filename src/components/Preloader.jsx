import React from "react";

import logo from "../assets/logo.png";
import "./preloader.css";
const Preloader = () => {
  return (
    <div className="preloader">
      <div className="preloader_logo">
        <img src={logo} alt="logo-image" className="preloader_logo-logo" />
      </div>
    </div>
  );
};

export default Preloader;
