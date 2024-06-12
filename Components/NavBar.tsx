import { Bars3Icon } from "@heroicons/react/16/solid";
import React from "react";
import Link from "next/link";

interface Props {
  navOpen: () => void;
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  skillsRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const NavBar = ({
  navOpen,
  scrollToSection,
  homeRef,
  aboutRef,
  skillsRef,
  projectsRef,
  contactRef,
}: Props) => {
  return (
    <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          <Link href="/">
            Bikal<span className="text-yellow-300">Dev</span>
          </Link>
        </h1>
        <div className="nav-link" onClick={() => scrollToSection(homeRef)}>
          <a>HOME</a>
        </div>
        <div className="nav-link" onClick={() => scrollToSection(skillsRef)}>
          <a>SKILLS</a>
        </div>
        <div className="nav-link" onClick={() => scrollToSection(aboutRef)}>
          <a>ABOUT</a>
        </div>
        <div className="nav-link" onClick={() => scrollToSection(projectsRef)}>
          <a>PROJECTS</a>
        </div>
        <div className="nav-link" onClick={() => scrollToSection(contactRef)}>
          <a>CONTACT</a>
        </div>
        <div onClick={navOpen}>
          <Bars3Icon className="w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300 " />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
