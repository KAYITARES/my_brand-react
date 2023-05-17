import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import "./HomeContainer.css";

import cycy from "../assets/cy-removebg.png";
import Preloader from "../components/Preloader";

const HomeContainer = () => {
  return (
    <div className="home-page">
      <div className="header">
        <div className="sub-header">
          <Navbar
            home="Home"
            about="About"
            portfolio="Portfolio"
            skills="Skills"
            blogs="Blogs"
            contact="Contact"
            login="Login"
          />
          <div className="icons-links">
            <ul className="ul-links">
              <li>
                <a
                  href="https://github.com/KAYITARES"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-github"
                  >
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/KAYITARES_C"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-instagram"
                  >
                    <title>Instagram</title>
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/KAYITARE_C"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-twitter"
                  >
                    <title>Twitter</title>
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/KAYITARES"
                  aria-label="Linkedin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-linkedin"
                  >
                    <title>LinkedIn</title>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="content-container" id="home">
            <div className="content">
              <div className="content-text">
                <h3>
                  <span className="salutation">Hi my name is</span>
                  <span className="names">Kayitare Cynthia</span>
                </h3>
                <p className="whoIam">
                  I'm a Full-Stack Software Developer. I can make a UI/UX
                  Design, Front-End and Backend
                </p>
                <div className="center marginTop-sm">
                  <a href="#" className="btn btn-login">
                    Let's work together
                  </a>
                </div>
              </div>
            </div>
            <div className="image-container">
              <div className="image-position">
                <img src={cycy} className="image" />
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill="#ff006639"
                    d="M47,-75.1C59.3,-65.2,66.8,-49.5,70.2,-34.3C73.6,-19.1,73,-4.4,68.2,7.8C63.3,20,54.2,29.5,46.6,42.9C39,56.3,32.8,73.5,22.9,75.3C12.9,77,-0.8,63.3,-11.9,53.9C-22.9,44.5,-31.3,39.4,-44.3,33.4C-57.3,27.3,-74.9,20.3,-83.3,7.7C-91.7,-4.8,-90.9,-23,-80.7,-33.4C-70.5,-43.7,-51,-46.3,-36,-55.1C-21,-63.8,-10.5,-78.6,3.4,-83.9C17.3,-89.2,34.6,-85,47,-75.1Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="email-link">
            <a href="malito:kacynthian@gmail.com" className="email">
              kacynthian@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContainer;
