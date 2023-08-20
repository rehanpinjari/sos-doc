import React from "react";

import Navbar from '../../Components/NavBar/Navbar.js';
import { Hero } from '/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Components/Hero/Hero.js';
import { TrustedBy } from '/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Components/TrustedBy/TrustedBy.js';
import { Features } from '/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Components/Features/Features.js';
import { Feedback } from '/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Components/Feedback/Feedback.js';
import { Footer } from '/media/hp/107 GB Volume1/WebDev/Projects/sos-doc/src/Components/Footer/Footer.js';
  
const Home = () => {
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