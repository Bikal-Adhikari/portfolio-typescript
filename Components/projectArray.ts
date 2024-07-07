interface Project {
  projectColor: string;
  projectUrl: string;
  projectImg: string;
  projectTitle: string;
  projectDescription: string;
  projectLang: string[];
}

const projectArray: Project[] = [
  {
    projectColor: "before:bg-green-800",
    projectUrl: "https://library-client-xi.vercel.app/",
    projectImg: "/images/libraryManagement.png",
    projectTitle: "Library Management",
    projectDescription:
      "Developed a comprehensive Library Management System using modern web technologies. Key features include book borrowing and returning functionalities, user authentication with JWT, and form validation using Joi. The system ensures efficient library operations, secure data handling, and an intuitive user experience.",
    projectLang: [
      "ReactJs",
      "BootStrapCSS",
      "NodeJs",
      "Express",
      "JWT",
      "Joi",
      "MongoDb",
    ],
  },
  {
    projectColor: "before:bg-blue-500",
    projectUrl: "https://game-react-tictactoe.netlify.app/",
    projectImg: "/images/Tictactoe.png",
    projectTitle: "TicTacToe App",
    projectDescription:
      "Developed a TicTacToe game using ReactJs. The game features a responsive design",
    projectLang: ["ReactJs", "CSS", "Javascript"],
  },
  {
    projectColor: "before:bg-orange-500",
    projectUrl: "https://notes-memo.netlify.app/",
    projectImg: "/images/NotesApp.png",
    projectTitle: "Notes App",
    projectDescription:
      "A simple yet intuitive note-taking application built with ReactJS and MaterialUI. This app allows users to create, edit, and manage their notes in a clean and organized manner.",
    projectLang: ["ReactJS", "MaterialUi"],
  },
  {
    projectColor: "before:bg-blue-500",
    projectUrl: "https://lovefordog.netlify.app/",
    projectImg: "/images/DogTinder.png",
    projectTitle: "Dog Tinder",
    projectDescription:
      "A fun and interactive web application inspired by the popular dating app Tinder, but for dog lovers! Dog Tinder allows users to browse through a collection of adorable dog profiles.",
    projectLang: ["HTML", "BootStrapCSS", "Javascript"],
  },
  // {
  //   projectColor: "before:bg-green-400",
  //   projectUrl: "https://github.com/DelrosarioRovic/Grocery-app/",
  //   projectImg: grocery,
  //   projectTitle: "Grocery App",
  //   projectDescription:
  //     "Discover simplicity in grocery shopping with our streamlined Grocery App. Effortlessly create lists and receive personalized recommendations. Experience convenience at your fingertips. Download now for an enhanced shopping journey.",
  //   projectLang: ["React-native", "Expo", "Node.Js"],
  // },
  // {
  //   projectColor: "before:bg-gray-200",
  //   projectUrl: "",
  //   projectImg: lawportfolio,
  //   projectTitle: "Law portfolio",
  //   projectDescription: "A simple law portfolio website",
  //   projectLang: ["React", "TailwindCSS", "NextJS"],
  // },
];

export default projectArray;
