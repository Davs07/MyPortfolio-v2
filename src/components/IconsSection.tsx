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
  fontSize: number;
  color: string;
  cursor?: string;
}

const fontSize: number = 50;
const color: string = "black";
const cursor: string = "default";

const iconProps: IconProps = { fontSize, color, cursor };

const skills: Skill[] = [
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

function IconsSection() {
  return (
    <div className=" max-w-[900px] rounded-3xl flex flex-wrap justify-center items-center gap-6 font-satoshi ">
      {skills.map((skill, id) => (
        <div className="w-24 h-20 flex items-center justify-center">
          <div
            key={id}
            className="group border-2 relative max-size-24 border-black transition-all duration-100 size-16 hover:size-24 rounded-xl p-2 flex flex-col items-center justify-center ">
            {skill.icon}
            <span className=" group-hover:flex text-xs  text-center hidden font-semibold">
              {skill.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IconsSection;
