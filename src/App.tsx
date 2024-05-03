import Contact from "./components/ContactHome";
import About from "./components/AboutHome";
import Blog from "./components/BlogHome";
import Hero from "./components/HeroHome";
import Hero2 from "./components/Hero2Home";
import Navbar from "./components/Navbar";
import Projects from "./components/ProjectsHome";
import { Skills } from "./components/SkillsHome";

function App() {
  return (
    <div className="max-w-screen w-full min-w-80 min-h-screen flex bg-m-superlight  justify-center bg-white dark:bg-black text-black dark:text-white  ">
      {/* NAVBAR */}
      <div className="h-14 fixed z-10 bg-white dark:bg-black text-black dark:text-white w-full justify-center flex  ">
        <div className="h-full max-w-[1112px] p-2 w-full  flex  items-center font-satoshi  justify-between ">
          <Navbar />
        </div>
      </div>

      {/* CONTENT */}
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
    </div>
  );
}

export default App;
