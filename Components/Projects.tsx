import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]">
      <h1 className="heading">
        My <span className="text-yellow-400">Projects</span>
      </h1>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]">
        <div data-aos="fade-up">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] group">
            <Image
              src="/images/libraryManagement.png"
              alt="projects"
              layout="fill"
              className="object-contain"
            />
            <a
              href="https://library-client-xi.vercel.app/"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              target="_blank"
            >
              Library Management App
            </a>
          </div>
        </div>
        {/* <div data-aos="fade-up" data-aos-delay="300">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] group">
            <Image
              src="/images/p2.jpg"
              alt="projects"
              layout="fill"
              className="object-contain"
            />
            <a
              href="https://game-react-tictactoe.netlify.app/"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              target="_blank"
            >
              TicTacToe App
            </a>
          </div>
        </div> */}
        <div data-aos="fade-up" data-aos-delay="600">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] group">
            <Image
              src="/images/Tictactoe.png"
              alt="projects"
              layout="fill"
              className="object-contain"
            />
            <a
              href="https://game-react-tictactoe.netlify.app/"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              target="_blank"
            >
              TicTacToe App
            </a>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="900">
          <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px] group">
            <Image
              src="/images/NotesApp.png"
              alt="projects"
              layout="fill"
              className="object-contain"
            />
            <a
              href="https://notes-memo.netlify.app/"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              target="_blank"
            >
              Notes App
            </a>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="1200">
          <div className="relative w-[100%] h-[200px] md:h-[300px] transform cursor-pointer hover:-translate-y-6 transition-all duration-200 group">
            <Image
              src="/images/DogTinder.png"
              alt="projects"
              layout="fill"
              className="object-contain"
            />
            <a
              href="https://lovefordog.netlify.app/"
              className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              target="_blank"
            >
              Dog Tinder
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
