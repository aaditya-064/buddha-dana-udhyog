import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";

const HomePage = () => {
  const [info, setInfo] = useState({ email: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
      url: "http://127.0.0.1:8080/user/email",
      method: "post",
      data: info,
    });
    // console.log(data);
    alert(`we'll reach you soon`);
    setInfo({ ...info, email: "" });
    // console.log(info);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  return (
    <div className="flex-1">
      <Navbar />

      {/* image portion */}
      <div className="relative h-[36rem] md:h-[40rem] overflow-hidden">
        <img
          src="/factory.jpg"
          alt="logo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          <p className="text-2xl md:text-4xl text-white font-bold text-center mb-2">
            Buddha Dana Udhyog Pvt. Ltd.
          </p>
          <p className="text-xs md:text-[16px] py-2 text-white font-medium text-center">
            Innovative feed solutions for sustainable agriculture in Nepal
          </p>
          <div className="relative top-36 md:top-56 sm:top-44">
            <p className="text-white text-sm font-medium mr-26">
              Get Connected With Us !
            </p>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row justify-center items-center"
            >
              <input
                className="mt-3 placeholder:text-black block bg-white w-36 md:w-60 border border-slate-300 rounded-md py-2 pl-4 pr-3 shadow-sm focus:outline-none focus:border-gray-500 focus:ring-gray-500 focus:ring-1 text-sm transition-all"
                placeholder="Enter your Email Address..."
                type="email"
                name="email"
                value={info.email}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <button
                type="submit"
                className="bg-red-900 md:ml-5 px-12 md:px-4 py-3 text-white text-sm mt-3 rounded transition-all outline-none"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-screen flex justify-center mt-5 pb-8">
        <div className="max-w-7xl">
          {/* commitment portion */}
          <div>
            <p className="text-black font-medium text-center text-xl">
              Our Commitment
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-24 mt-8">
              {/* Fast Delivery */}
              <div className="flex flex-col justify-center items-center">
                <img src="/delivery.png" className="w-[90px]" />
                <p className="text-sm font-medium text-center text-sky-600 mt-4">
                  FAST DELIVERY
                </p>
              </div>

              {/* Sustainable Price */}
              <div className="flex flex-col justify-center items-center">
                <img
                  src="https://www.fedex.com/content/dam/fedex/us-united-states/Testing/images/20201/Q3/icon_currency_usd_purple_lg.svg/_jcr_content/renditions/cq5dam.thumbnail.727.463.png"
                  className="w-[90px]"
                />
                <p className="text-sm font-medium text-center text-sky-600 mt-4">
                  SUSTAINABLE PRICE
                </p>
              </div>

              {/* Nutrient Rich Feed */}
              <div className="flex flex-col justify-center items-center">
                <img src="/chicken.png" className="w-[90px]" />
                <p className="text-sm font-medium text-center text-sky-600 mt-4">
                  NUTRIENT RICH FEED
                </p>
              </div>

              {/* Optimistic Product */}
              <div className="flex flex-col justify-center items-center">
                <img src="/positive.png" className="w-[90px]" />
                <p className="text-sm font-medium text-center text-sky-600 mt-4">
                  OPTIMISTIC PRODUCT
                </p>
              </div>
            </div>
          </div>

          {/* products portion */}

          <div className="mt-14 flex flex-col items-center">
            <p className="text-center text-xl font-medium text-black">
              Our Produtcs
            </p>
            <p className="text-red-800 text-3xl font-medium text-center mt-3 product_headline">
              Purely Sourced,
              <span className="text-sky-600"> Perfectly Made.</span>
            </p>
            <hr className="bg-slate-800 h-[2px] w-1/5 mt-3 mr-36"></hr>

            {/* Products list */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-20">
              {/* Broiler */}
              <Link to={"/products"}>
                <div className="flex flex-col justify-center items-center bg-gray-200 rounded p-8 hover:border-b-4 hover:border-red-500 transition-all">
                  <img src="/broiler.png" className="w-[100px]" />
                  <p className="mt-3 text-lg types_products">Broiler</p>
                </div>
              </Link>
              {/* Layers */}
              <Link to={"/products"}>
                <div className="flex flex-col justify-center items-center bg-gray-200 rounded p-8 hover:border-b-4 hover:border-red-500 transition-all">
                  <img src="/layers.png" className="w-[100px]" />
                  <p className="mt-3 text-lg types_products">Layers</p>
                </div>
              </Link>
              {/* Giriraj */}
              <Link to={"/products"}>
                <div className="flex flex-col justify-center items-center bg-gray-200 rounded p-8 hover:border-b-4 hover:border-red-500 transition-all">
                  <img src="/giriraj.png" className="w-[100px]" />
                  <p className="mt-3 text-lg types_products">Giriraj</p>
                </div>
              </Link>
              {/* Pig */}
              <Link to={"/products"}>
                <div className="flex flex-col justify-center items-center bg-gray-200 rounded p-8 hover:border-b-4 hover:border-red-500 transition-all">
                  <img src="/pig.png" className="w-[100px] " />
                  <p className="mt-3 text-lg types_products">Pig</p>
                </div>
              </Link>
              {/* Cattle */}
              <Link to={"/products"}>
                <div className="flex flex-col justify-center items-center bg-gray-200 rounded p-8 hover:border-b-4 hover:border-red-500 transition-all">
                  <img src="/cow.png" className="w-[100px]" />
                  <p className="mt-3 text-lg types_products">Cattle</p>
                </div>
              </Link>
              {/* Fish */}
              <Link to={"/products"}>
                <div className="flex flex-col justify-center items-center bg-gray-200 rounded p-8 hover:border-b-4 hover:border-red-500 transition-all">
                  <img src="/fish.png" className="w-[100px]" />
                  <p className="mt-3 text-lg types_products">Fish</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
