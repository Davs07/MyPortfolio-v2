import { Sun } from "lucide-react";

import { GithubIcon } from "../assets/GithubIcon";
import { LinkedinIcon } from "../assets/LinkedinIcon";
import { DIcon } from "../assets/DIcon";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="rounded-xl border-black border-2 p-1 group hover:bg-black">
        <DIcon className="size-6 group-hover:text-white" />
      </div>
      <div className="flex ">
        <ul className="flex gap-6 items-center font-satoshi font-semibold">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SKILLS</li>
          <li>PROJECTS</li>
          <li>BLOG</li>
          <li>CONTACT</li>
          <li>|</li>
          <li>EN</li>
          <li>
            <Sun className="size-5" />
          </li>
          <li>|</li>
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
        </ul>
      </div>
    </>
  );
}

export default Navbar;
