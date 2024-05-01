import { AiFillGithub } from "react-icons/ai";
import { DiMongodb, DiMsqlServer, DiMysql, DiNodejs } from "react-icons/di";
import { FaAws, FaCss3Alt, FaDocker, FaGit, FaHtml5, FaJava, FaJsSquare, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiAdobephotoshop, SiFramer, SiSpring, SiVisualstudiocode } from "react-icons/si";

interface Skill {
  id: number;
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
const cursor: string = "pointer";

const iconProps: IconProps = { fontSize, color, cursor };

const skills: Skill[] = [
    {
      id: 1,
      name: "HTML",
      icon: <FaHtml5 {...iconProps} />,
    },
    {
      id: 2,
      name: "CSS",
      icon: <FaCss3Alt {...iconProps} />,
    },
    {
      id: 3,
      name: "React",
      icon: <FaReact {...iconProps} />,
    },
    {
      id: 4,
      name: "Next.js",
      icon: <RiNextjsFill {...iconProps} />,
    },
    {
      id: 5,
      name: "Tailwind",
      icon: <RiTailwindCssFill {...iconProps} />,
    },
    {
      id: 6,
      name: "Sass",
      icon: <FaSass {...iconProps} />,
    },
    {
      id: 7,
      name: "JavaScript (para uso en backend con Node.js)",
      icon: <FaJsSquare {...iconProps} />,
    },
    {
      id: 8,
      name: "Express.js",
      icon: <DiNodejs {...iconProps} />,
    },
    {
      id: 9,
      name: "Java",
      icon: <FaJava {...iconProps} />,
    },
    {
      id: 10,
      name: "Spring Boot",
      icon: <SiSpring {...iconProps} />,
    },
    {
      id: 11,
      name: "MySQL",
      icon: <DiMysql {...iconProps} />,
    },
    {
      id: 12,
      name: "SQL Server",
      icon: <DiMsqlServer {...iconProps} />,
    },
    {
      id: 13,
      name: "MongoDB",
      icon: <DiMongodb {...iconProps} />,
    },
    {
      id: 14,
      name: "AWS (Amazon Web Services)",
      icon: <FaAws {...iconProps} />,
    },
    {
      id: 15,
      name: "Docker",
      icon: <FaDocker {...iconProps} />,
    },
    {
      id: 16,
      name: "Node.js",
      icon: <FaNodeJs {...iconProps} />,
    },
    {
      id: 17,
      name: "Visual Studio Code",
      icon: <SiVisualstudiocode {...iconProps} />,
    },
    {
      id: 18,
      name: "Git",
      icon: <FaGit {...iconProps} />,
    },
    {
      id: 19,
      name: "GitHub",
      icon: <AiFillGithub {...iconProps} />,
    },
    {
      id: 20,
      name: "Framer",
      icon: <SiFramer {...iconProps} />,
    },
    {
      id: 21,
      name: "Photoshop",
      icon: <SiAdobephotoshop {...iconProps} />,
    },
  ];
  

function FrontendIconsSection() {
  return (
    <div className="size-[400px] min-w-[500px]  rounded-3xl grid grid-cols-3">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="border-2 border-black size-16 rounded-2xl p-2 flex items-center justify-center ">
          {skill.icon}
        </div>
      ))}
    </div>
  );
}

export default FrontendIconsSection;
