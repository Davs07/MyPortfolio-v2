import About from "./components/About";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Navbar from "./components/Navbar";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div className="max-w-screen w-full min-w-80 min-h-screen flex justify-center bg-white  ">
      {/* NAVBAR */}
      <div className="h-14 fixed z-10 bg-white w-full justify-center flex  ">
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
      </div>
    </div>
  );
}

export default App;