import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-red-900 p-3 flex justify-between md:justify-evenly items-center text-white fixed w-full top-0 z-10">
      <img src="/buddha.png" className="w-[40px]" alt="Logo" />

      {/* Hamburger Menu (shown on smaller screens) */}
      <div className="md:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-white w-6 h-6" />
          ) : (
            <FaBars className="text-white w-6 h-6" />
          )}
        </button>
      </div>

      {/* Links - hidden on small screens, visible on medium+ */}
      <div
        className={`flex flex-col md:flex-row gap-6 fixed md:static top-14 right-0 bg-red-900 h-full md:h-auto p-6 md:p-0 transition-transform duration-500 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:translate-x-0`}
      >
        <Link
          className="hover:text-[#825B32] hover:font-medium transition-all"
          to={"/"}
          onClick={toggleMenu}
        >
          Home
        </Link>
        <Link
          className="hover:text-[#825B32] hover:font-medium transition-all"
          to={"/about"}
          onClick={toggleMenu}
        >
          About
        </Link>
        <Link
          className="hover:text-[#825B32] hover:font-medium transition-all"
          to={"/services"}
          onClick={toggleMenu}
        >
          Services
        </Link>
        <Link
          className="hover:text-[#825B32] hover:font-medium transition-all"
          to={"/blog"}
          onClick={toggleMenu}
        >
          Blog
        </Link>
        <Link
          className="hover:text-[#825B32] hover:font-medium transition-all"
          to={"/contact"}
          onClick={toggleMenu}
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
