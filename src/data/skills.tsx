import { AiFillGithub } from "react-icons/ai";
import { BiLogoTypescript } from "react-icons/bi";
import { DiMongodb, DiMsqlServer, DiMysql } from "react-icons/di";
import {
  FaAws,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiFramer,
  SiSpring,
  SiVisualstudiocode,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: JSX.Element;
}

interface IconProps {
  size: number;
  cursor?: string;
  className?: string;
}

const size: number = 48;
const cursor: string = "default";
const className: string = " text-black dark:text-white ";

const iconProps: IconProps = { size, cursor, className };

export const skills: Skill[] = [
  {
    name: "HTML",
    icon: <FaHtml5 {...iconProps} />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt {...iconProps} />,
  },
  {
    name: "React",
    icon: <FaReact {...iconProps} />,
  },
  {
    name: "Next.js",
    icon: <RiNextjsFill {...iconProps} />,
  },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill {...iconProps} />,
  },
  {
    name: "Sass",
    icon: <FaSass {...iconProps} />,
  },
  {
    name: "JavaScript",
    icon: <FaJsSquare {...iconProps} />,
  },
  {
    name: "TypeScript",
    icon: <BiLogoTypescript {...iconProps} />,
  },
  {
    name: "Express.js",
    icon: <SiExpress {...iconProps} />,
  },
  {
    name: "Java",
    icon: <FaJava {...iconProps} />,
  },
  {
    name: "Spring Boot",
    icon: <SiSpring {...iconProps} />,
  },
  {
    name: "MySQL",
    icon: <DiMysql {...iconProps} />,
  },
  {
    name: "SQL Server",
    icon: <DiMsqlServer {...iconProps} />,
  },
  {
    name: "MongoDB",
    icon: <DiMongodb {...iconProps} />,
  },
  {
    name: "AWS",
    icon: <FaAws {...iconProps} />,
  },
  {
    name: "Docker",
    icon: <FaDocker {...iconProps} />,
  },
  {
    name: "Node.js",
    icon: <FaNodeJs {...iconProps} />,
  },
  {
    name: "VSC",
    icon: <SiVisualstudiocode {...iconProps} />,
  },
  {
    name: "Git",
    icon: <FaGitAlt {...iconProps} />,
  },
  {
    name: "GitHub",
    icon: <AiFillGithub {...iconProps} />,
  },
  {
    name: "Framer",
    icon: <SiFramer {...iconProps} />,
  },
];
