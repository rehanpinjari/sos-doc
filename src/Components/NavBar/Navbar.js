import React from "react";
import { Link } from "react-router-dom";

import LOGO from "/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Assests/LOGO.png";
import "/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Components/NavBar/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={LOGO} alt="Bootstrap" width={60} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Product
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Solution
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/resources"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Resources
              </Link>
              
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/download">
                Download
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/careers">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div className="cta-1">
          <button type="button" className="btn btn-sign-in">
            <Link
              style={{ textDecoration: "none", color: "#61CEDA" }}
              to="/registration"
            >
              Sign in
            </Link>
          </button>
          <button type="button" className="btn btn-try-1">
            <Link
              style={{ textDecoration: "none", color: "#fff" }}
              to="/comingsoon"
            >
              Try SOS For Free
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
