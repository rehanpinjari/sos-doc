import React from "react";
import LOGO from "/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Assests/LOGO.png";
import "/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Components/Footer/Footer.css";

export const Footer = () => {
  return (
    <footer className="footerwithlinks d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <p className="col-md-4 mb-0 text-muted">© 2023 Company, Inc</p>
      <a
        href="/"
        className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
      >
        <img src={LOGO} alt="" width={50} />
      </a>
      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-muted">
            Product
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-muted">
            SOS for
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-muted">
            Support
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-muted">
            Company
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-muted">
            Legal
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-muted">
            Download
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;