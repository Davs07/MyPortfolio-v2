import FrontendIconsSection from "./FrontendIconsSection";

export const Skills = () => {
  return (
    <div className="w-full min-h-screen p-2 flex gap-12 items-center justify-center flex-col">
      <h2 className="text-7xl font-bold text-center">SKILLS</h2>
      <div className="flex flex-row  gap-8 items-center ">
        <FrontendIconsSection />
      </div>
    </div>
  );
};
