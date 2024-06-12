import About from "@/Components/About";
import ContactMe from "@/Components/ContactMe";
import Footer from "@/Components/Footer";
import Hero from "@/Components/Hero";
import MobileNavBar from "@/Components/MobileNavBar";
import NavBar from "@/Components/NavBar";
import Projects from "@/Components/Projects";
import Skills from "@/Components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect, useRef, useState } from "react";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const navOpen = () => setNav(true);
  const navClose = () => setNav(false);

  useEffect(() => {
    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <div className="overflow-x-hidden">
      <div>
        {/* NavBar  */}
        <MobileNavBar
          nav={nav}
          navClose={navClose}
          scrollToSection={(ref) =>
            ref.current?.scrollIntoView({ behavior: "smooth" })
          }
          homeRef={homeRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <NavBar
          navOpen={navOpen}
          scrollToSection={(ref) =>
            ref.current?.scrollIntoView({ behavior: "smooth" })
          }
          homeRef={homeRef}
          aboutRef={aboutRef}
          skillsRef={skillsRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />

        <div ref={homeRef}>
          <Hero />
        </div>
        <div className="relative z-[30]">
          <div ref={aboutRef}>
            <About />
          </div>
          <div ref={skillsRef}>
            <Skills />
          </div>
          <div ref={projectsRef}>
            <Projects />
          </div>
          <div ref={contactRef}>
            <ContactMe />
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
