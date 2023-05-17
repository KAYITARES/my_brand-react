import React, { useState } from "react";
import logo from "../assets/logo.png";
import Modal from "@mui/material/Modal";
import LoginContainer from "../containers/LoginContainer";
import "./navbar.css";
import Box from "@mui/material/Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 200,
  // bgcolor: "background.paper",
  // border: "2px solid #000",
  // boxShadow: 24,
  p: 4,
};

const Navbar = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <nav className="nav">
        <div className="nav-logo">
          <a href="./index.html">
            <img src={logo} className="logo" />
            <h3>KAYITARE~Cynthia</h3>
          </a>
        </div>
        <div className="hamburger-wrapper">
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link navz">
              {" "}
              <span>01. </span>
              {props.home}
            </a>
          </li>
          <li>
            <a href="/about" className="nav-link navz">
              <span>02. </span>
              {props.about}
            </a>
          </li>
          <li>
            <a href="/portfolio" className="nav-link navz">
              <span>03. </span>
              {props.portfolio}
            </a>
          </li>
          <li>
            <a href="#skills" className="nav-link navz">
              <span>04. </span>
              {props.skills}
            </a>
          </li>
          <li>
            <a href="./blogs.html" className="nav-link">
              <span>05. </span>
              {props.blogs}
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link navz">
              <span>06. </span>
              {props.contact}
            </a>
          </li>
          <a
            href="#"
            onClick={handleOpen}
            className="btn btn-login loginFunctDisplay"
          >
            {props.login}
          </a>
        </ul>
      </nav>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style }}>
          <LoginContainer />
        </Box>
      </Modal>
    </>
  );
};

export default Navbar;
