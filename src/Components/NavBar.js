import React from "react";
//import Dimg from "./Dimg.png";
import { useNavigate, Link } from "react-router-dom";
import MaterialUISwitch from "./RadioButton";

export default function Navbar(props) {
  /*const li = props.lightcolor;
  const da = props.darkcolor;*/

  const navigate = useNavigate();
  const GoToNewPage = () => {
    navigate("/contact");
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
            style={{
              paddingTop: 10,
              paddingLeft: 100,
            }}
          >
            {/*<img
              src={Dimg}
              alt="Logo"
              width={30}
              height={24}
              className="d-inline-block align-text-top"
            />*/}
            <strong>
              <h5>Divya Hemnani</h5>
            </strong>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav ms-auto mb-2 mb-lg-0 "
              style={{
                paddingRight: 50,
              }}
            >
              <li className="nav-item">
                <Link to="/about" className="nav-link" aria-current="page">
                  <strong>About</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/journey" className="nav-link">
                  <strong>My-Journey</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/resume" className="nav-link">
                  <strong>Resume</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/skills" className="nav-link">
                  <strong>Skills</strong>
                </Link>
              </li>
              <button
                onClick={GoToNewPage}
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
              {/*<label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable da Mode
              </label>*/}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
