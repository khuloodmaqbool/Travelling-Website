import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { CgMail } from "react-icons/cg";
import { MdOutlineLocalPhone } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { NavLink } from "react-router-dom";

const socialLinks = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaTwitter />, href: "#" },
  { icon: <PiInstagramLogoFill />, href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
];

const footerLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Tour", path: "/tour" },
  { name: "Destination", path: "/destination" },
  { name: "Contact", path: "/contact" },
];

const galleryImages = [
  "/img7.jpg",
  "/img8.jpg",
  "/img9.jpg",
  "/img10.jpg",
  "/img11.jpg",
  "/img12.jpg",
];

const contactInfo = [
  { icon: <CgMail />, text: "terratrips@gmail.com" },
  { icon: <MdOutlineLocalPhone />, text: "+123 456 789" },
  { icon: <SlLocationPin />, text: "Pakistan" },
];

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-[#1d231f]">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-bold text-white text-xl mb-3">TerraTrips</h2>
            <p className="mb-3 text-white">
              The world's first and largest digital market for crypto
              collectibles and non-fungible tokens.
            </p>
            <nav className="list-none mb-10 space-y-2">
              {contactInfo.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 justify-center md:justify-start"
                >
                  <div className="text-greenColor w-6 h-6">{item.icon}</div>
                  <span className="text-white font-semibold hover:text-gray-800">
                    {item.text}
                  </span>
                </li>
              ))}
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4 text-gray-400">
            <h2 className="font-medium text-white text-sm mb-3">PAGES</h2>
            <nav className="list-none mb-10 space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <NavLink className="hover:text-white" to={link.path}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </nav>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="font-medium text-white text-sm mb-3">GALLERY</h2>
            <div className="grid grid-cols-3 gap-3 w-4/5 mx-auto md:mx-0">
              {galleryImages.map((src, index) => (
                <img
                  key={index}
                  className="h-20 object-cover rounded-sm"
                  src={src}
                  alt={`Gallery ${index}`}
                />
              ))}
            </div>
          </div>

          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
              NEWSLETTER
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-gray-400"
                >
                  Placeholder
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500  outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-greenColor border-0 py-2 px-6 focus:outline-none hover:bg-greenColor rounded">
                Subscribe
              </button>
            </div>
            <p className="text-gray-400 text-sm mt-2 md:text-left text-center">
              Join our newsletter! Enter your
              <br className="lg:block hidden" /> email to subscribe.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex items-center flex-col sm:flex-row">
          <NavLink
            to="/"
            className="flex items-center text-gray-900 mb-4 sm:mb-0"
          >
            <span className="ml-3 text-xl">TerraTrips</span>
          </NavLink>
          <p className="text-sm text-gray-500 sm:ml-6">
            © 2024 TerraTrips —
            <NavLink
              to="https://www.linkedin.com/in/khulood-maqbool-b45aa3255/"
              className="text-gray-600 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              @khuloodmaqbool
            </NavLink>
          </p>
          <div className="inline-flex mt-4 sm:mt-0 sm:ml-auto">
            {socialLinks.map((link, index) => (
              <span key={index} href={link.href} className="text-gray-500 ml-3">
                {link.icon}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
