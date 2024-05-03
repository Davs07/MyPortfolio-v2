import { GithubIcon } from "../assets/GithubIcon";
import { LinkedinIcon } from "../assets/LinkedinIcon";
import { InstagramIcon } from "../assets/InstagramIcon";
import { DIcon } from "../assets/DIcon";
import { PiCircleHalfFill } from "react-icons/pi";
import { useEffect, useState } from "react";

function Navbar() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = "light";
    if (savedTheme) {
      return savedTheme;
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    } else {
      return "light";
    }
  });

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    // localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleDarkMode = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="rounded-xl border-black border-2 p-1 group hover:bg-black ">
        <DIcon className="size-6 group-hover:text-white dark:text-white" />
      </div>
      <div className="flex ">
        <ul className="flex gap-6 items-center font-satoshi font-semibold ul-pointer  ">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SKILLS</li>
          <li>PROJECTS</li>
          <li>BLOG</li>
          <li>CONTACT</li>|<li>EN</li>
          <li>
            <PiCircleHalfFill
              fontSize={20}
              className="cursor-pointer"
              onClick={toggleDarkMode}
            />
          </li>
          |
          <li>
            <a href="https://github.com/Davs07" target="_blank">
              <GithubIcon fontSize={20} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/davy-rodr%C3%ADguez-b80608268/"
              target="_blank">
              <LinkedinIcon fontSize={20} />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/davs_cs_/" target="_blank">
              <InstagramIcon fontSize={20} />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
