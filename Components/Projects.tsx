import Image from "next/image";
import React from "react";
import projectArray from "./projectArray";

const Projects: React.FC = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        My <span className="text-yellow-400">Projects</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        {projectArray.map((project, index) => (
          <div
            key={index}
            className="bg-[#121212] p-4 rounded-lg shadow-lg transform cursor-pointer hover:-translate-y-6 transition-all duration-200"
            data-aos="fade-up"
            data-aos-delay={`${index * 300}`}
          >
            <div className="relative w-full h-[200px] md:h-[300px]">
              <Image
                src={project.projectImg}
                alt={project.projectTitle}
                layout="fill"
                className="object-contain rounded-t-lg"
              />
              <a
                href={project.projectUrl}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl opacity-0 hover:opacity-100 transition-opacity duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.projectTitle}
              </a>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-white">
                {project.projectTitle}
              </h2>
              <p className="text-sm text-gray-400 mt-2">
                {project.projectDescription.substring(0, 100)}
                {project.projectDescription.length > 100 ? "..." : ""}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.projectLang.map((lang, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gray-700 text-white py-1 px-2 rounded shadow"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
