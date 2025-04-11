// Import required icons from react-icons
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaJava,
  
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
 
  SiMongodb,
  SiFigma,
  
} from "react-icons/si";

// Array of technologies with names, icons, specific colors, and size
const technologies = [
  {
    name: "HTML",
    icon: <FaHtml5 style={{ color: "#E34F26", fontSize: "2rem" }} />,
    description: "markup language",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript style={{ color: "#F7DF1E", fontSize: "2rem" }} />,
    description: "programming language",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt style={{ color: "#1572B6", fontSize: "2rem" }} />,
    description: "styling sheets",
  },
  {
    name: "ReactJS",
    icon: <FaReact style={{ color: "#61DAFB", fontSize: "2rem" }} />,
    description: "UI library",
  },
  {
    name: "TailwindCSS",
    icon: <SiTailwindcss style={{ color: "#06B6D4", fontSize: "2rem" }} />,
    description: "utility framework",
  },
  {
    name: "NodeJS",
    icon: <FaNodeJs style={{ color: "#339933", fontSize: "2rem" }} />,
    description: "runtime environment",
  },
  
  {
    name: "MongoDB",
    icon: <SiMongodb style={{ color: "#47A248", fontSize: "2rem" }} />,
    description: "NoSQL database",
  },
  {
    name: "java",
    icon: <FaJava style={{ color: "#FF0000", fontSize: "2rem" }} />,
    description: "Object-oriented programming language",
  },
  {
    name: "Figma",
    icon: <SiFigma style={{ color: "#F24E1E", fontSize: "2rem" }} />,
    description: "design tool",
  },
  
  {
    name: "Git",
    icon: <FaGitAlt style={{ color: "#764ABC", fontSize: "2rem" }} />,
    description: " Version Control",
  },
];

export default technologies;
