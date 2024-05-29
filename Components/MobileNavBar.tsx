import { XMarkIcon } from "@heroicons/react/16/solid/index.js";
import Link from "next/link";
import React from "react";

interface Props {
  nav: boolean;
  navClose: () => void;
}

const MobileNavBar = ({ nav, navClose }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "-translate-x-[-100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
        <div className="nav-link-mobile">
          <Link href="/">Home</Link>
        </div>
        <div className="nav-link-mobile">
          <Link href="/skills">SKILLS</Link>
        </div>
        <div className="nav-link-mobile">ABOUT</div>
        <div className="nav-link-mobile">PROJECTS</div>
        <div className="nav-link-mobile">CONTACT</div>
      </div>
      <div
        onClick={navClose}
        className="absolute z-[100000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-300"
      >
        <XMarkIcon />
      </div>
    </div>
  );
};

export default MobileNavBar;
