import React from "react";
import Navbar from "../components/Navbar";
import img from "../assets/buddha.png";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="relative">
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipN-P-HzB4VZk37_kl7Qz9dY936hQ4TSevue7drU=s1360-w1360-h1020"
            alt="logo"
            className="max-h-[32rem] w-full object-cover relative"
          />
          <div
            className="absolute inset-2/4 top-52 w-full"
            style={{ transform: "translate(-10%)" }}
          >
            <p className="text-2xl text-black font-medium top-[50%]">
              Buddha Dana Udhyog Pvt. Ltd.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
