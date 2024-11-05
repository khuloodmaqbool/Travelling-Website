import { MdHiking } from "react-icons/md";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FooterHeader = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  
  return (
    <div
      data-aos="zoom-in-up"
      className="flex justify-center lg:justify-between items-center flex-wrap bg-greenColor w-11/12 mx-auto rounded-lg p-4 text-white my-8"
    >
      <div className="flex items-start mb-3">
        <MdHiking className="w-16 h-16 mr-4" />
        <div>
          <h2 className="sm:text-4xl text-3xl font-bold">
            Unleash Your Adventurous Spirit!
          </h2>
          <p>
            Embark on a journey that takes you deep into the heart of nature.
          </p>
        </div>
      </div>
      <NavLink to="/tour">
        <button className="border border-white px-3 py-2 rounded-lg bg-greenColor h-fit  text-white mx-8 ">
          Let's Get Started
        </button>
      </NavLink>
    </div>
  );
};

export default FooterHeader;
