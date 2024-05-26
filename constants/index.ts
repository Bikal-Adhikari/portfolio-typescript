import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaTerminal,
  FaJava,
  FaPython,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";
import { IconType } from "react-icons";
import {
  SiFramer,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiStripe,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

interface Skill {
  name: string;
  Image: IconType; // Typing for React icons
  width: number;
  height: number;
}

export const SkillData: Skill[] = [
  {
    name: "Html 5",
    Image: FaHtml5,
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: FaCss3,
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: FaJs,
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: SiTailwindcss,
    width: 80,
    height: 80,
  },
  {
    name: "Bootstrap Css",
    Image: FaBootstrap,
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: FaReact,
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: SiRedux,
    width: 80,
    height: 80,
  },

  {
    name: "TypeScript",
    Image: SiTypescript,
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: SiNextdotjs,
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: SiFramer,
    width: 80,
    height: 80,
  },
  {
    name: "Stripe Payment",
    Image: SiStripe,
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: FaNode,
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: SiMongodb,
    width: 40,
    height: 40,
  },
];

export const Socials = [
  {
    name: "Discord",
    src: "/instagram.svg",
  },
  {
    name: "Facebook",
    src: "/facebook.svg",
  },
  {
    name: "Instagram",
    src: "/discord.svg",
  },
];
export const Projects = [
  {
    title: "Modern Nextjs Website",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/NextWebsite.png",
  },
  {
    title: "Space Themed Website",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/SpaceWebsite.png",
  },
  {
    title: "Modern Nextjs Portfolio",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/WebPortfolio.png",
  },
  {
    title: "Matrix themed Website",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/Matrix.png",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];
