import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaJava,
  FaPython,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiExpress,
  SiRedux,
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiStripe,
  SiTypescript,
} from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

import { DiMsqlServer } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import { VscDebugAlt } from "react-icons/vsc";

const SkillsIcons = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-8 space-y-8 text-white">
      <div className="flex flex-col items-center">
        <FaHtml5 className="text-4xl" />
        <h5 className="text-lg mt-2">HTML 5</h5>
      </div>
      <div className="flex flex-col items-center">
        <FaCss3 className="text-4xl" />
        <h5 className="text-lg mt-2">CSS 3</h5>
      </div>
      <div className="flex flex-col items-center">
        <FaJs className="text-4xl" />
        <h5 className="text-lg mt-2">JavaScript</h5>
      </div>
      <div className="flex flex-col items-center">
        <RiTailwindCssFill className="text-4xl" />
        <h5 className="text-lg mt-2">Tailwind CSS</h5>
      </div>
      <div className="flex flex-col items-center">
        <FaJava className="text-4xl" />
        <h5 className="text-lg mt-2">Java</h5>
      </div>
      <div className="flex flex-col items-center">
        <FaBootstrap className="text-4xl" />
        <h5 className="text-lg mt-2">Bootstrap</h5>
      </div>
      <div className="flex flex-col items-center">
        <FaPython className="text-4xl" />
        <h5 className="text-lg mt-2">Python</h5>
      </div>
      <div className="flex flex-col items-center">
        <FaReact className="text-4xl" />
        <h5 className="text-lg mt-2">React</h5>
      </div>
      <div className="flex flex-col items-center">
        <SiRedux className="text-4xl" />
        <h5 className="text-lg mt-2">Redux</h5>
      </div>
      <div className="flex flex-col items-center">
        <SiTypescript className="text-4xl" />
        <h5 className="text-lg mt-2">TypeScript</h5>
      </div>
      <div className="flex flex-col items-center">
        <FaGitAlt className="text-4xl" />
        <h5 className="text-lg mt-2">Git</h5>
      </div>
      <div className="flex flex-col items-center">
        <SiNextdotjs className="text-4xl" />
        <h5 className="text-lg mt-2">Next.js</h5>
      </div>
      <div className="flex flex-col items-center">
        <VscDebugAlt className="text-4xl" />
        <h5 className="text-lg mt-2">Debugging</h5>
      </div>
      <div className="flex flex-col items-center">
        <SiFramer className="text-4xl" />
        <h5 className="text-lg mt-2">Framer Motion</h5>
      </div>
      <div className="flex flex-col items-center">
        <SiStripe className="text-4xl" />
        <h5 className="text-lg mt-2">Stripe Payment</h5>
      </div>
      <div className="flex flex-col items-center">
        <DiMsqlServer className="text-4xl" />
        <h5 className="text-lg mt-2">MS SQL Server</h5>
      </div>
      <div className="flex flex-col items-center">
        <BiLogoPostgresql className="text-4xl" />
        <h5 className="text-lg mt-2">PostgreSQL</h5>
      </div>
      <div className="flex flex-col items-center">
        <SiMongodb className="text-4xl" />
        <h5 className="text-lg mt-2">MongoDB</h5>
      </div>
      <div className="flex flex-col items-center">
        <SiExpress className="text-4xl" />
        <h5 className="text-lg mt-2">Express</h5>
      </div>
      <div className="flex flex-col items-center">
        <FaNode className="text-4xl" />
        <h5 className="text-lg mt-2">Node</h5>
      </div>
      {/* Add more icons as needed */}
    </div>
  );
};

export default SkillsIcons;
