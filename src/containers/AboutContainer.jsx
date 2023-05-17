import React, { useEffect, useState } from "react";
import cynthia from "../assets/cy-removebg.png";
import "./about.css";
import Navbar from "../components/Navbar";
import Preloader from "../components/Preloader";
const AboutContainer = () => {
  return (
    <div>
      <Navbar
        home="Home"
        portfolio="Portfolio"
        skills="Skills"
        blogs="Blogs"
        contact="Contact"
        login="Login"
      />
      <div className="about-container" id="about">
        <div className="row">
          <div className="title-container">
            <h2 className="title">
              <span className="number">02. </span>ABOUT-ME
            </h2>
          </div>
          <div className="about-content">
            <div className="paragraph-text">
              <p>
                Hello! My name is Cynthia Kayitare, and I like making things for
                the internet. My interest in web development began when I
                enrolled in college in 2014, and from there I began my journey
                to improve my coding abilities.
              </p>
              <p>Here are some current technologies I've worked with:</p>
              <div className="marginTop-sm down-cent">
                <a
                  href="./images/cynthia-Kayitare cv.pdf"
                  className="btn btn-login"
                  download=""
                >
                  Download my CV
                </a>
              </div>
            </div>
            <div className="about-image">
              <img src={cynthia} alt="image" className="img-about" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContainer;
