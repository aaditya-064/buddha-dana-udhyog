import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogPage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-20">
        <p className="text-center font-bold text-8xl p-24">ONGOING BLOG</p>
        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
