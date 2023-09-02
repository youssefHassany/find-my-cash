import React, { useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="sticky top-0 shadow border-r w-screen py-2 px-12 bg-white flex justify-between items-center z-40">
      <Link to="/" className="font-bold text-2xl">
        FindMy<span className="text-green-600">Cash</span>
        <span className="text-sm text-gray-400">2.0</span>
      </Link>

      <button
        onClick={() => {
          setShowNav(!showNav);
          // console.log(showNav);
        }}
        className="lg:hidden text-4xl"
      >
        <BiMenuAltRight />{" "}
      </button>

      <Nav showNav={showNav} setShowNav={setShowNav} />
    </header>
  );
};

export default Header;
