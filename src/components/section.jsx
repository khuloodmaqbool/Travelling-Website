import { VscWorkspaceTrusted } from "react-icons/vsc";
import { MdOutlinePersonalInjury } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HeadingPara } from "./HeadingPara";

export const Section = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="my-16 grid md:grid-cols-2 grid-cols-1 w-11/12 mx-auto">
        <div data-aos="fade-right" className="flex items-center mb-4">
          <img
            className="w-3/5  my-auto mx-auto md:mx-0 "
            src="section.png"
            alt="adventure img"
          />
        </div>
        <div data-aos="fade-left" className="my-auto relative ">
          <HeadingPara
            heading="Your Next Great Adventure Starts Here"
            para="  Welcome to our Print 128 website! We are a professional and reliable
            printing company that offers a wide range of printing services"
          />
          <div className="flex gap-2">
            <div>
              <VscWorkspaceTrusted
                className="w-10 h-10"
                style={{ color: "#b5d407" }}
              />

              <h5 className="font-semibold text-lg">Trusred Travel Guide</h5>
              <p className="text-gray-400">
                Welcome to our Print 128 wesit! company that offers a wide
              </p>
            </div>
            <div>
              <MdOutlinePersonalInjury
                className="w-10 h-10"
                style={{ color: "#b5d407" }}
              />
              <h5 className="font-semibold text-lg">Personalized Trips</h5>
              <p className="text-gray-400">
                Welcome to our Print 128 wesit! company that offers a wide
              </p>
            </div>
          </div>

          <NavLink to="/about">
            <button className="mt-6 bg-greenColor text-white rounded-lg px-3 py-2">
              More About Us
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
};
