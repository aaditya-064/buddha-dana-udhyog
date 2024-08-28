import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-red-950 text-white p-10">
      <div className="flex flex-col gap-5 xl:flex-row justify-center xl:justify-between container mx-auto">
        {/* Company Logo and Address */}
        <div className="flex flex-col text-center xl:text-left">
          <p className="text-xl text-white font-bold">
            Buddha Dana Udhyog Pvt. Ltd.
          </p>
          <div className="flex flex-col gap-1 mt-3">
            <p className="text-white text-sm font-normal">
              Siyari-05, Rupandehi
            </p>
            <p className="text-white text-sm font-normal">
              buddha.feeds@gmail.com
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-white text-[15px] font-medium text-center">
            +977-9847045028, +977-9857023005, <br />
            071-413121, +977-9802666376, +977-9802666374
          </p>
          <a
            href="mailto:buddha.feeds@gmail.com"
            className="font-medium text-center"
          >
            buddha.feeds@gmail.com
          </a>
        </div>

        {/* links */}
        <div className="flex flex-col">
          <ul className="flex justify-end underline underline-offset-4 gap-3 mt-3">
            <Link to={"/about"}>
              <li className="text-center text-lg text-white font-bold hover:underline underline-offset-4 decoration-blue-500 hover:text-blue-500 transition-all">
                About
              </li>
            </Link>

            <Link to={"/blog"}>
              <li className="text-center text-lg text-white font-bold hover:underline underline-offset-4 decoration-blue-500 hover:text-blue-500 transition-all">
                Blog
              </li>
            </Link>
            <Link to={"/contact"}>
              <li className="text-center text-lg text-white font-bold hover:underline underline-offset-4 decoration-blue-500 hover:text-blue-500 transition-all">
                Contact Us
              </li>
            </Link>
          </ul>
          <div className="text-right mt-4 text-xs">
            © {new Date().getFullYear()} Buddha Dana Udhyog Pvt. Ltd.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
