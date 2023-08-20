import React from 'react';
import ReactDOM from 'react-dom';
import '/media/hp/107 GB Volume1/Web Development/Projects/sos-doc/src/index.css';
import { Navbar } from '/media/hp/107 GB Volume1/Web Development/Projects/sos-doc/src/Components/NavBar/Navbar.js';
import { Hero } from '/media/hp/107 GB Volume1/Web Development/Projects/sos-doc/src/Components/Hero/Hero.js';
import { TrustedBy } from '/media/hp/107 GB Volume1/Web Development/Projects/sos-doc/src/Components/TrustedBy/TrustedBy.js';
import { Features } from '/media/hp/107 GB Volume1/Web Development/Projects/sos-doc/src/Components/Features/Features.js';
import { Feedback } from '/media/hp/107 GB Volume1/Web Development/Projects/sos-doc/src/Components/Feedback/Feedback.js';
import { Footer } from '/media/hp/107 GB Volume1/Web Development/Projects/sos-doc/src/Components/Footer/Footer.js';

export const Home = () => {
  return (
  <>
  <Navbar />
  <Hero />
  <TrustedBy />
  <Features/>
  <Feedback/>
  <Footer />
  </>
);
  };

export default Home;


{/* <NavLink style={{ textDecoration: 'none', color:"#3b3b3b"}} to='/registration'>
          Sign in
                    </NavLink>
          </button>
          <button type="button" className="btn btn-try-1">
          <NavLink style={{ textDecoration: 'none', color:"#3b3b3b"}} to='/try-sos'>
          Try SOS For Free
                    </NavLink> */}