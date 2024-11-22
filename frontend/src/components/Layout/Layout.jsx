import React, { Children } from "react";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header className="flex-none" />
      <main className="flex-grow">
        <Toaster />
        {children}
      </main>
      <Footer className="flex-none" />
    </div>
  );
};

export default Layout;
