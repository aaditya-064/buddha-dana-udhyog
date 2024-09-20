import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from "axios";

const ContactPage = () => {
  const [info, setInfo] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios({
      url: "http://127.0.0.1:8080/post/user/contact",
      method: "post",
      data: info,
    });

    setInfo({
      fullName: "",
      email: "",
      mobileNumber: "",
      subject: "",
      message: "",
    });
  };
  return (
    <div>
      <Navbar />
      <div className="p-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3232.1650079403025!2d83.3653306750763!3d27.59216937624881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39968f9055d2e243%3A0x1b2e7995c93e4451!2sBuddha%20Dana%20Udhyog%20Pvt.%20Ltd.!5e1!3m2!1sen!2snp!4v1725605793104!5m2!1sen!2snp"
          width="600"
          className="mx-auto w-4/5 rounded"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="text-center mx-auto bg-white mt-5">
          <p className="font-bold text-[40px] text-sky-700">Contact Us</p>
          <p className="font-bold text-2xl mt-14 touch_contact tracking-wide mr-64">
            Enter your Details to get in touch with us
          </p>
          <form
            className="mt-10"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <div className="flex justify-center max-w-3xl mx-auto gap-32">
              <div className="flex flex-col w-full">
                <label className="text-left font-bold text-xs ml-2">
                  Full Name
                </label>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="text"
                  value={info.fullName}
                  name="fullName"
                  placeholder="Enter your full name"
                  className="outline-none bg-[#eeeeee] text-sm mt-2 p-3 placeholder:text-gray-500 placeholder_input w-80"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-left font-bold text-xs ml-2">
                  Email Address
                </label>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="text"
                  value={info.email}
                  name="email"
                  placeholder="Enter your email address"
                  className="outline-none bg-[#eeeeee] text-sm mt-2 p-3 placeholder:text-gray-500 placeholder_input w-80"
                />
              </div>
            </div>
            <div className="flex justify-center max-w-3xl mx-auto mt-6 gap-32">
              <div className="flex flex-col w-full">
                <label className="text-left font-bold text-xs ml-2">
                  Mobile Number
                </label>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="number"
                  name="mobileNumber"
                  value={info.mobileNumber}
                  placeholder="Enter your mobile number"
                  className="outline-none bg-[#eeeeee] text-sm mt-2 p-3 placeholder:text-gray-500 placeholder_input w-80"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-left font-bold text-xs ml-2">
                  Subject
                </label>
                <input
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  type="text"
                  name="subject"
                  value={info.subject}
                  placeholder="Enter the subject"
                  className="outline-none bg-[#eeeeee] text-sm mt-2 p-3 placeholder:text-gray-500 placeholder_input w-80"
                />
              </div>
            </div>
            <div className="flex justify-center max-w-3xl mx-auto mt-6">
              <div className="flex flex-col w-full">
                <label className="text-left font-bold text-xs ml-2">
                  Message
                </label>
                <textarea
                  onChange={(e) => handleChange(e)}
                  name="message"
                  value={info.message}
                  className="outline-none bg-[#eeeeee] text-sm mt-2 p-3 placeholder_input "
                  id=""
                >
                  Enter the message
                </textarea>
              </div>
            </div>
            <button className="mt-5 bg-red-800 text-white py-2 px-5 rounded transition-all hover:border-b-4 hover:border-sky-500">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
