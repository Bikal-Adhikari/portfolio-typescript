import React from "react";
import SkillsIcons from "./SkillsIcons";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem] skill">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-yellow-400 text-3xl md:text-5xl">My Skills</h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Using the latest tech this world has to offer
          </p>
        </div>
        {/* <Carousel
          responsive={responsive}
          autoPlay={true} // Enable auto-play
          autoPlaySpeed={9000} // Set the speed of auto-play
          infinite={true} // Allow infinite looping
          removeArrowOnDeviceType={["tablet", "mobile"]} // Remove arrows on smaller devices
        > */}
        <SkillsIcons />
        {/* </Carousel> */}
      </div>
    </section>
  );
};

export default Skills;
