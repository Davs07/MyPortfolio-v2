import { Link } from "react-router-dom";
import { DIcon } from "../assets/DIcon";

function Footer() {
  return (
    <footer className=" w-full h-32 py-4 grid place-items-center">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 md:flex-row md:px-6">
        <Link
          className="flex items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
          to="/">
          <DIcon className="h-6 w-6" />
          <span className="sr-only">Davy</span>
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <p className="text-sm text-gray-500 dark:text-gray-400">© 2024 Davy.</p>
      </div>
    </footer>
  );
}

export default Footer;
