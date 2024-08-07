import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid/index.js";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[10vh] bg-cover bg-center">
      <Particle />
      <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[35px] md:text-[50px] text-white font-bold">
            Hi, I'm <span className="text-yellow-400">Bikal!</span>
          </h1>
          <TextEffect />
          <p className="mt-[1.5rem] text-[20px] text-[#ffffff92]">
            FullStack Software Engineer with high level of experience in both
            frontend and backend development, producing Quality work.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
            <a href="/Bikal-Adhikari-CV-Resume.pdf" download>
              <button className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2">
                <p>Download CV</p>
                <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/bikal-adhikari/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center rounded-full bg-[#55e6a5]"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={32} className="text-[#02050a]" />
            </a>
            <a
              href="https://github.com/Bikal-Adhikari"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center rounded-full bg-[#55e6a5]"
              aria-label="GitHub"
            >
              <FaGithub size={32} className="text-[#02050a]" />
            </a>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]"
        >
          <Image
            src="/images/profile2.jpg"
            alt="myProfile"
            fill
            className="object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
