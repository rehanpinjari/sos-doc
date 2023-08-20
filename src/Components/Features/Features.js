import React from "react";
import "/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Components/Features/Features.css";
import { Link } from "react-router-dom";

import Assistant from "/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Assests/Assistant.webp";
import HomeDocuments from "/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Assests/HomeDocuments.webp";
import HomeEditor from "/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Assests/HomeEditor.webp";
import Devices from "/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Assests/Devices.webp";
import HomeShare from "/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Assests/HomeShare.webp";

export const Features = () => {
  return (
    <div className="feature">
      <h1 className="title-1">Smartly Shiny. Every Time.</h1>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="ss-1 col-10 col-sm-8 col-lg-6">
          <img
            src={Assistant}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h3 className="subheading-1 display-5 fw-bold lh-1 mb-3">
            Work Smarter Instead Of Harder.
          </h3>
          <p className="lead">
            Don't be worried with writing the perfect essay or report. Get the
            assistance you needs from SOS AI Assistant, the smartest assistant
            at your fingertips.
            <br />
            Improve your writing rapidly with powerful AI technology and take
            your documents to the next level. Say goodbye to time-consuming
            editing and get the assistance you seek when you need it!
            <br />
            Enter your text and enjoy as it is transformed into something
            outstanding.
          </p>
        </div>
      </div>
      <div className="row flex-lg-row align-items-center g-5 py-5">
        <div className="ss-2 col-10 col-sm-8 col-lg-6">
          <img
            src={HomeDocuments}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h3 className="subheading-2 display-5 fw-bold lh-1 mb-3">
            Don't Just Process Phrases - Create Docs
          </h3>
          <p className="lead">
            SOS adds structure to your documents while also offering you with
            the tools and freedom to do it your way. Combine images, text,
            media, or tables to make the wonderful experience
            <br />
            Force widely important and interaction by allowing the reader to
            consume your document in the same way that they would a website.
            <br />
            For the superb document, add your brand as well as small details on
            top.
          </p>
        </div>
      </div>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="ss-3 col-10 col-sm-8 col-lg-6">
          <img
            src={HomeEditor}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h3 className="subheading-3 display-5 fw-bold lh-1 mb-3">
            Big On Potential, Itsy <br />
            Bitsy Weensy
          </h3>
          <p className="lead">
            Whether you're organising your workflow, writing a report, writing
            code, or mapping out your master plan, needing the freedom to do it
            your way is important.
            <br />
            Tables, toggles, markdown and blocks, back-linking,
            forward-thinking, in, out, and shake it all about - SOS's artfully
            rich set of features gives you infinite opportunities to love how
            you work.
            <br />
            Click and start creating for incredibly gorgeous docs in minutes,
            then bring it all together in your own unique way.
          </p>
        </div>
      </div>
      <div className="row flex-lg-row align-items-center g-5 py-5">
        <div className="ss-4 col-10 col-sm-8 col-lg-6">
          <img
            src={Devices}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h3 className="subheading-4 display-5 fw-bold lh-1 mb-3">
            One Unforgettable Experience.
            <br />
            All Of Your Devices.
          </h3>
          <p className="lead">
            Enjoy SOS's powerful performance and legendary UI across your entire
            toolkit, whether you're at your desk, on the go, online, or offline,
            thanks to the native app experience.
            <br />
            Lose the lag and fall in love with instant sync; quickly jump into
            any document on any device; and unlock new your creativity with the
            same beautiful experience regardless of device.
            <br />
            We even have a web-based app so you never drop the ball again.
          </p>
        </div>
      </div>
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="ss-5 col-10 col-sm-8 col-lg-6">
          <img
            src={HomeShare}
            className="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width={700}
            height={500}
            loading="lazy"
          />
        </div>
        <div className="col-lg-6">
          <h3 className="subheading-5 display-5 fw-bold lh-1 mb-3">
            And There's Multiple Ways To <br />
            Spread The Love
          </h3>
          <p className="lead">
            Why keep your outstanding work to yourself when we've made it so
            simple to share?
            <br />
            Secret linking, shared spaces, external guests, and snappy, easy
            export; inspire action across teams, clients, and everyone who's
            anyone with content that'll make you look far better than yet
            another Google Doc. Or a Word doc. Or add app here.
          </p>
        </div>
      </div>
      <div className="feature_btn">
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

export default Features;