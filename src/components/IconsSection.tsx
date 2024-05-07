import { skills } from "../data/skills";

function IconsSection() {
  return (
    <div className=" max-w-[900px] rounded-3xl flex flex-wrap justify-center items-center gap-6 font-satoshi ">
      {skills.map((skill, id) => (
        <div className="w-24 h-20 flex items-center justify-center">
          <div
            key={id}
            className="group border-2 relative max-size-24 border-black dark:border-white transition-all duration-100 size-16 hover:size-24 rounded-xl p-2 flex flex-col items-center justify-center ">
            <div>{skill.icon}</div>
            <span className=" group-hover:flex text-xs  text-center hidden font-semibold cursor-default">
              {skill.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default IconsSection;
