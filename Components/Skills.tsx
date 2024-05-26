import React from "react";

const Skills = () => {
  return (
    <div className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]">
      <p className="heading">
        My <span className="text-yellow-400">Skills</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white"></div>
    </div>
  );
};

export default Skills;
