import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ServicePage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <p className="text-center font-bold text-3xl p-24">Our Services</p>

        <Footer />
      </div>
    </div>
  );
};

export default ServicePage;
