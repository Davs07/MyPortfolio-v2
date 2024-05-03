import Contact from "../components/ContactHome";
import About from "../components/AboutHome";
import Blog from "../components/BlogHome";
import Hero from "../components/HeroHome";
import Hero2 from "../components/Hero2Home";
import Projects from "../components/ProjectsHome";
import { Skills } from "../components/SkillsHome";

function HomePage() {
  return (
    <div className="w-full max-w-[1112px] min-h-full  flex flex-col  ">
      <Hero />
      <Hero2 />
      <About />
      {/* SKILLS */}
      <Skills />
      <Projects />
      <Blog />
      <Contact />
    </div>
  );
}

export default HomePage;
