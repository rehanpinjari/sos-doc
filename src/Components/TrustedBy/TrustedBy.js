import React from "react";
import "../TrustedBy/TrustedBy.css";
import { Link } from "react-router-dom";

import Amazon from "/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Assests/Amazon.webp";
import Meta from "/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Assests/Meta.png";
import Shaper3d from "/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Assests/Shaper3d.png";
import SkyScanner from "/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Assests/SkyScanner.png";
import Uber from "/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Assests/Uber.png";

export const TrustedBy = () => {
  return (
    <div className="trusted_by">
      <div className="trusted_title">
        <p> Trusted by millions of people, notably teams at </p>
      </div>
      <div className="trusted_teams">
        <div className="row">
          <div className="col">
            <img src={Amazon} alt="" width={100} />
          </div>
          <div className="col">
            <img src={Meta} alt="" width={110} />
          </div>
          <div className="col">
            <img src={Shaper3d} alt="" width={130} />
          </div>
          <div className="col">
            <img src={SkyScanner} alt="" width={160} />
          </div>
          <div className="col">
            <img src={Uber} alt="" width={70} />
          </div>
        </div>
      </div>
      <div className="trusted_btn">
      <Link to="/comingsoon">
      <button type="button" className="btn btn-try">
        Try SOS Free
      </button>
      </Link>
      <Link to="/comingsoon">
      <button type="button" className="btn btn-download">
        Download Now
      </button>
      </Link>
      </div>
    </div>
  );
};

export default TrustedBy;