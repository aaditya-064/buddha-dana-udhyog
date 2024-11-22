import React from "react";
import Navbar from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import Layout from "../components/Layout/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <div className="relative h-[600px] w-full">
        <img
          src="/factory.jpg"
          className="h-full relative w-full object-cover"
        />
        <div className="absolute top-44 left-[50%] translate-x-[-50%]">
          <p className="mt-14  text-5xl text-[#FFFDD0] main_topic uppercase font-bold tracking-wide text-center">
            About Buddha Dana Udhyog
          </p>
          <p className="main_topic mt-5 text-md uppercase text-[#FFFDD0] text-center tracking-wide font-light">
            Nourishing Lives, Sustainable Future
          </p>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center p-8">
        <div className="max-w-2xl mt-14 text-center">
          <p className="desc_about text-gray-500 text-[15px]">
            Buddha Dana Udhyog has been a cornerstone of quality and innovation
            since its founding in 2058 BS by Mr. Bindulal Shrestha. What began
            as a vision to provide high-quality animal feed has grown into a
            respected name in the industry, known for its dedication to
            sustainability, craftsmanship, and excellence. Over the years, the
            business has flourished with the joining of Mr. Subash Shrestha and
            Mr. Bal Bahadur Shrestha, who brought with them a shared passion for
            advancing modern farming practices and supporting the agriculture
            community. <br /> <br />
            Under the leadership of our Chairman, Mr. Bal Bahadur Shrestha, and
            the guidance of our Managing Directors, Mr. Bindulal Shrestha and
            Mr. Subash Shrestha, Buddha Dana Udhyog continues to serve as a
            trusted provider of sustainable feed for livestock such as chickens,
            pigs, cattle, and fish. Our commitment to excellence is evident in
            every product we create, ensuring that each feed formulation
            contributes to the health and productivity of animals, fostering
            success for farmers in the agriculture industry. Our Vision To
            revolutionize poultry farming by providing sustainable, high-quality
            feeds that foster healthy livestock and drive success in modern
            agriculture. Our Mission To meet every farmer's need by delivering
            innovative, nutrient-rich feeds that help them meet market demand
            and succeed in the business of raising healthier, more productive
            livestock. Why Choose Us? Quality Assurance: We use only the finest
            ingredients and materials in our feeds. Innovation: Our feed
            solutions are designed to promote sustainable and productive
            farming. Leadership: Guided by experienced leaders committed to
            driving change in agriculture.
          </p>
          <div className="mt-10">
            <p className="about_topic text-black text-xl">Our Vision</p>
            <p className="desc_about text-gray-500 text-[15px] mt-5">
              To revolutionize poultry farming by providing sustainable,
              high-quality feeds that foster healthy livestock and drive success
              in modern agriculture.
            </p>
          </div>
          <div className="mt-10">
            <p className="about_topic text-black text-xl">Our Mission</p>
            <p className="desc_about text-gray-500 text-[15px] mt-5">
              To meet every farmer's need by delivering innovative,
              nutrient-rich feeds that help them meet market demand and succeed
              in the business of raising healthier, more productive livestock.
            </p>
          </div>
        </div>
        <div className="py-14">
          <p className="about_topic text-3xl text-sky-700 drop-shadow-xl text-center">
            Words From Our Founders
          </p>
          <div className="flex mt-14"></div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
