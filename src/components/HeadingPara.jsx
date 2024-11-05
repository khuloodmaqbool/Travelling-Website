import LottieAnimation from "./LottieFliesAnimation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const HeadingPara = ({ heading, para }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <>
      <div className="w-44 absolute top-[-120px] left-[-30px]">
        <LottieAnimation />
      </div>
      <h5 style={{ fontFamily: "Dancing Script" }} className="text-greenColor">
        Explore the World
      </h5>
      <h2 className="text-5xl font-black">{heading}</h2>
      <p className="text-gray-400 my-4">{para}</p>
    </>
  );
};
