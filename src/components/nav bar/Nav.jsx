import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ showNav, setShowNav }) => {
  return (
    // mobile view styling starts from the second  line
    <nav
      className={`flex lg:justify-between items-center lg:w-fit lg:relative lg:z-0 lg:flex-row lg:h-fit lg:translate-x-0
                  fixed w-screen h-screen bg-white top-0 right-0 z-50 flex-col duration-300 justify-evenly ${
                    showNav ? "" : "translate-x-full"
                  }`}
      onClick={() => setShowNav(false)}
    >
      <button
        onClick={() => setShowNav(!showNav)}
        className="lg:hidden absolute top-7 right-8 text-3xl"
      >
        x
      </button>
      <ul className="w-full h-full lg:w-fit lg:h-fit flex flex-col items-center justify-evenly lg:block">
        <li className="lg:inline-block lg:mx-2 block">
          <Link
            to="/"
            className="p-2 font-medium relative
                      before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-emerald-600 before:duration-200
                      before:hover:w-full"
          >
            History
          </Link>
        </li>
        <li className="lg:inline-block lg:mx-2 block">
          <Link
            to="/statistics"
            className="p-2 font-medium relative
                      before:absolute before:bottom-0 before:left-0 before:h-1 before:w-0 before:bg-emerald-600 before:duration-200
                      before:hover:w-full"
          >
            Statistics
          </Link>
        </li>

        <li className="lg:inline-block lg:mx-2 block">
          <Link
            to={"/download"}
            className="py-2 px-4 rounded bg-emerald-600 font-bold text-white hover:opacity-80"
          >
            Download
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
