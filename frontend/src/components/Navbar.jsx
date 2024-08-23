import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-white">
      <div className="bg-red-800 p-5 flex justify-center gap-6 text-white">
        <Link className="hover:text-slate-800 transition-all" to={"/"}>
          Home
        </Link>
        <Link className="hover:text-slate-800 transition-all" to={"/about"}>
          About
        </Link>
        <Link
          className="hover:text-slate-800 transition-all"
          to={"/contact-us"}
        >
          Contact Us
        </Link>
        <Link className="hover:text-slate-800 transition-all" to={"/gallery"}>
          Gallery
        </Link>
        <Link className="hover:text-slate-800 transition-all" to={"/services"}>
          Services
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
