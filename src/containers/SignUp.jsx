import React, { useState } from "react";
import Navbar from "../components/Navbar";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
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

            <section className="section">
              <div className="form-box">
                <div className="form-value">
                  <div className="close-icon">
                    <ion-icon
                      name="close-circle-outline"
                      className="close-login-btn"
                    ></ion-icon>
                  </div>

                  <form action="" id="formSignUp">
                    <h2 style={{ marginBottom: "1.8rem" }}>Sign-Up</h2>

                    <div className="form__group">
                      <input
                        type="text"
                        className="form__input"
                        placeholder="Full name"
                        id="name"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                      />

                      <label for="name" className="form__label">
                        Full Name
                      </label>
                      <div className="error"></div>
                    </div>
                    <div className="form__group">
                      <input
                        type="text"
                        className="form__input"
                        placeholder="Email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <label for="email" className="form__label">
                        Email
                      </label>
                      <div className="error"></div>
                    </div>
                    <div className="form__group">
                      <input
                        type="password"
                        className="form__input"
                        placeholder="Password"
                        name="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <label for="password" className="form__label">
                        Password
                      </label>
                      <div className="error"></div>
                    </div>
                    <div className="form__group">
                      <input
                        type="password"
                        className="form__input"
                        placeholder="Password Confirmation"
                        id="passwordTwo"
                        name="repeatPassword"
                        value={formData.repeatPassword}
                        onChange={handleChange}
                      />
                      <label for="passwordTwo" className="form__label">
                        Password Confirmation
                      </label>
                      <div className="error"></div>
                    </div>
                    <p>email:{formData.repeatPassword}</p>

                    <div className="center margin-bottom">
                      <button
                        // id="signUp"
                        // type="submit"
                        className="btn btn-login btn-green lg"
                        onClick={() => console.log(formData.fullName)}
                      >
                        Sign-Up
                      </button>
                    </div>
                    {/* <div className="register">
                      <p>
                        Already have an account
                        <a href="./login.html">Sign-In</a>
                      </p>
                    </div> */}
                  </form>
                </div>
              </div>
            </section>
            <div className="email-link">
              <a href="malito:kacynthian@gmail.com" className="email">
                kacynthian@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
