import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-red-950 p-5 flex justify-evenly items-center text-white">
      <img src="/buddha.png" className="w-[40px]" />
      <div className="flex gap-6">
        <Link className="hover:text-slate-800 transition-all" to={"/"}>
          Home
        </Link>
        <Link className="hover:text-slate-800 transition-all" to={"/about"}>
          About
        </Link>
        <Link className="hover:text-slate-800 transition-all" to={"/services"}>
          Services
        </Link>
        <Link className="hover:text-slate-800 transition-all" to={"/blog"}>
          Blog
        </Link>
        <Link className="hover:text-slate-800 transition-all" to={"/contact"}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
