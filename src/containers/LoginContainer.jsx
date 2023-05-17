import React, { useState } from "react";

const LoginContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <section>
        <div className="form-box">
          <div className="form-value">
            <div className="close-icon">
              <ion-icon
                name="close-circle-outline"
                className="close-login-btn"
              ></ion-icon>
            </div>

            <form action="" id="formLogin">
              <h2 style={{ marginBottom: "1.8rem" }}>Login</h2>

              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  id="emailLogin"
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
                  id="passwordLogin"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label for="password" className="form__label">
                  Password
                </label>
                <div className="error"></div>
              </div>

              <div className="center margin-bottom">
                <button
                  // type="submit"
                  className="btn btn-login btn-green lg"
                  id="loginButton"
                  onClick={() => console.log({ email, password })}
                >
                  Login
                </button>
              </div>
              <div className="register">
                <p>
                  Don't have an account
                  <a href="/signup">Register</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginContainer;
