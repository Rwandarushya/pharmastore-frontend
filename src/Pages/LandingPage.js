import React from "react";

// Landingpage components

import NavBar from "../components/NavBar";
import MainBody from "../components/MainBody";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <body>
      <div className="site-wrap">
        <NavBar />
        <MainBody />
        <Footer />
      </div>
    </body>
  );
}

export default LandingPage;
