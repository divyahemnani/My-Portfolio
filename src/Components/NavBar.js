import React, { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";
import MaterialUISwitch from "./RadioButton";
import "./NavBar.css";

export default function Navbar(props) {
  const navigate = useNavigate();
  const GoToNewPage = () => {
    navigate("/contact");
  };

  const [isOpen, setIsOpen] = useState(false);
  const navbarCollapseRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    if (isOpen) {
      setIsOpen(false);
      if (navbarCollapseRef.current) {
        navbarCollapseRef.current.classList.remove("show");
      }
    }
  };

  const handleClick = () => {
    GoToNewPage();
    closeNavbar();
  };

  // Dynamically set the margin based on the screen width
  const brandStyle = {
    paddingTop: 10,
    marginLeft: window.innerWidth < 576 ? "0.5rem" : "4rem",
    flex: 1,
    whiteSpace: "nowrap",
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg sticky-top navbar-${
          props.coll === props.lightcolor ? "dark" : "light"
        } bg-${props.coll === props.lightcolor ? "dark" : "light"}`}
      >
        <div className="container-fluid">
          <Link
            to="/"
            className="navbar-brand active"
            onClick={closeNavbar}
            style={brandStyle}
          >
            <strong>
              <h5>Divya Hemnani</h5>
            </strong>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNav"
            ref={navbarCollapseRef}
          >
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0"
              style={{
                paddingRight: 50,
              }}
            >
              <li className="nav-item">
                <Link to="/about" className="nav-link" onClick={closeNavbar}>
                  <strong>About Me</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/journey" className="nav-link" onClick={closeNavbar}>
                  <strong>My Journey</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/resume" className="nav-link" onClick={closeNavbar}>
                  <strong>Resume</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/skills" className="nav-link" onClick={closeNavbar}>
                  <strong>Skills</strong>
                </Link>
              </li>
              <button
                onClick={handleClick}
                type="button"
                className="btn mx-3"
                style={{
                  background: "#7f00fd",
                  color: "white",
                }}
              >
                Contact Me
              </button>
            </ul>
            <div
              className={`form-check form-switch mx-2`}
              style={{ paddingRight: 5 }}
              onClick={() => props.showcolor()}
            >
              <MaterialUISwitch />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
