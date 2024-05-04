import { Route, Routes } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import SkillsPage from "./pages/SkillsPage";
import Footer from "./components/Footer";

interface routes {
  path: string;
  element: JSX.Element;
  name?: string;
  children?: routes[];
}

function App() {
  const routes: routes[] = [
    {
      path: "/",
      element: <HomePage />,
      name: "Home",
    },
    {
      path: "/about",
      element: <AboutPage />,
      name: "About",
    },
    {
      path: "/skills",
      element: <SkillsPage />,
      name: "Skills",
    },
    {
      path: "/projects",
      element: <ProjectsPage />,
      name: "Projects",
    },
    {
      path: "/blog",
      element: <BlogPage />,
      name: "Blog",
    },
    {
      path: "/contact",
      element: <ContactPage />,
      name: "Contact",
    },
  ];
  return (
    <div className="max-w-screen w-full min-w-80 min-h-screen flex flex-col bg-m-superlight  items-center bg-white dark:bg-black text-black dark:text-white  ">
      {/* NAVBAR */}
      <div className="h-14 fixed z-10 bg-white dark:bg-black text-black dark:text-white w-full justify-center flex  ">
        <div className="h-full max-w-[1112px] p-2 w-full  flex  items-center font-satoshi  justify-between ">
          <Navbar />
        </div>
      </div>
      {/* CONTENT */}
      <Routes>
        {routes.map((route) => (
          <Route key={route.name} path={route.path} element={route.element} />
        ))}
      </Routes>
      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
