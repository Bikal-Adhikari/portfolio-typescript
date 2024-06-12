import { XMarkIcon } from "@heroicons/react/16/solid/index.js";
import React from "react";

interface Props {
  nav: boolean;
  navClose: () => void;
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const MobileNavBar = ({
  nav,
  navClose,
  scrollToSection,
  homeRef,
  aboutRef,
  skillsRef,
  projectsRef,
  contactRef,
}: Props) => {
  const navAnimation = nav ? "translate-x-0" : "-translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-full h-full flex flex-col items-center justify-center space-y-8">
        <a
          className="nav-link-mobile"
          onClick={() => {
            scrollToSection(homeRef);
            navClose();
          }}
        >
          Home
        </a>
        <a
          className="nav-link-mobile"
          onClick={() => {
            scrollToSection(skillsRef);
            navClose();
          }}
        >
          Skills
        </a>
        <a
          className="nav-link-mobile"
          onClick={() => {
            scrollToSection(aboutRef);
            navClose();
          }}
        >
          About
        </a>
        <a
          className="nav-link-mobile"
          onClick={() => {
            scrollToSection(projectsRef);
            navClose();
          }}
        >
          Projects
        </a>
        <a
          className="nav-link-mobile"
          onClick={() => {
            scrollToSection(contactRef);
            navClose();
          }}
        >
          Contact
        </a>
      </div>
      <div
        onClick={navClose}
        className="absolute z-[100000000] cursor-pointer top-8 right-8 w-8 h-8 text-yellow-300"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNavBar;
