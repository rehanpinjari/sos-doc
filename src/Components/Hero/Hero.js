import React from "react";
import { Link } from "react-router-dom";

import "/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Components/Hero/Hero.css";

import { FiChevronRight } from "react-icons/fi";
import HeroWeb from "/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Assests/HeroWeb.png"

export const Hero = () => {
  return (
    <div className="px-4 pt-5 my-5 text-center border-bottom">
      <h1 className="hero-headline display-4 fw-bold">
        Make An Impact By <br />
        Creating A Document
      </h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          When your work needs to ahhhh, <br /> SOS has the tools to make it so.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <Link to="/comingsoon">
          <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">
            Try SOS Free <FiChevronRight />
          </button>
          </Link>
        </div>
      </div>
      <img className="hero_img"
        src={HeroWeb}
        alt="Hero"/>
    </div>
  );
};

export default Hero;