import { Sun } from "lucide-react";

import { GithubIcon } from "../assets/GithubIcon";
import { LinkedinIcon } from "../assets/LinkedinIcon";

function Navbar() {
  return (
    <>
      <div className="font-work-sans font-semibold text-3xl">DAVY</div>
      <div className="flex ">
        <ul className="flex gap-5 items-center font-satoshi font-semibold">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>SKILLS</li>
          <li>PORTFOLIO</li>
          <li>BLOG</li>
          <li>CONTACT</li>
          <li>|</li>
          <li>EN</li>
          <li>
            <Sun className="size-5" />
          </li>
          <li>|</li>
          <li>
            <GithubIcon fontSize={20} />
          </li>
          <li>
            <LinkedinIcon fontSize={20} />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
