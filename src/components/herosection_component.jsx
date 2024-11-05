import Lottie from "lottie-react";
import animationData from "../animation/circle-plane.json";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="relative w-11/12 mx-auto">
        <div className="w-40 absolute right-4 top-6 hidden lg:block">
          <Lottie animationData={animationData} loop={true} autoplay={true} />
        </div>
        <div className="absolute right-4 blur-circle bg-greenColor w-32 h-32 "></div>
        <h5
          data-aos="fade-right"
          style={{ fontFamily: "Dancing Script" }}
          className="text-greenColor mt-6"
        >
          Explore the World
        </h5>
        <h1
          data-aos="fade-right"
          className="lg:text-7xl md:text-6xl text-4xl font-black sm:mb-3 tracking-wide"
        >
          Discover Your Next <br className="sm:block hidden" />
          Great <span> Adventure!</span>
        </h1>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 ">
        <div data-aos="fade-up">
          <img src="herosection.png" alt="herosectionimg" />
        </div>

        <div data-aos="fade-up" className=" my-auto md:w-full w-full px-6">
          <span className="text-gray-500  ">
            Discover your dream destinations with seamless planning and a
            passion for exploration. From breathtaking landscapes to vibrant
            cultures, let us craft an unforgettable journey let us craft an Let
            us take you beyond the ordinary, exploring lands of wonder and
          </span>

          <div className="flex items-center flex-wrap mt-8 gap-6">
            <img className="w-44 h-full" src="visitors.png" alt="" />
            <NavLink to="/tour">
              <button className=" px-3 py-2 bg-greenColor text-white rounded-lg">
                Explore Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
