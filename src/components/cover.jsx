import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Cover = ({ heading }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div
        className="w-full h-96 flex flex-col justify-center items-center"
        style={{
          backgroundImage: "url('cover.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          data-aos="zoom-in-right"
          className="font-black lg:text-5xl text-4xl text-white"
        >
          {heading}
        </h1>
        <p data-aos="zoom-in-right" className="text-greenColor">
          <NavLink to="/">Home </NavLink>
          <span className="text-white"> /{heading}</span>
        </p>
      </div>
    </>
  );
};
