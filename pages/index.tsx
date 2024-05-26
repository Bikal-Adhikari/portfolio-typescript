import About from "@/Components/About";
import Hero from "@/Components/Hero";
import MobileNavBar from "@/Components/MobileNavBar";
import NavBar from "@/Components/NavBar";
import Skills from "@/Components/Skills";
import React, { useState } from "react";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const navOpen = () => setNav(true);
  const navClose = () => setNav(false);
  return (
    <div className="overflow-x-hidden">
      <div>
        {/* NavBar  */}
        <MobileNavBar nav={nav} navClose={navClose} />
        <NavBar navOpen={navOpen} />

        {/* Hero Section  */}
        <Hero />
        <div className="relative z-[30]">
          {/* about me  */}
          <About />
          {/* skills  */}
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
