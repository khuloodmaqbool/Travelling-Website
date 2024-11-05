import { MdReviews } from "react-icons/md";
import { MdOutlineTravelExplore } from "react-icons/md";
import { FaAward } from "react-icons/fa6";
import { MdIncompleteCircle } from "react-icons/md";
import { Section3 } from "../components/section3";
import { Cover } from "../components/cover";
import { FaqSection } from "../components/faqSection";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const about = [
    {
      icon: (
        <MdOutlineTravelExplore
          style={{ color: "#b5d407" }}
          className="w-10 h-10"
        />
      ),
      title: "1278",
      para: "Happy Traveller",
    },
    {
      icon: <MdReviews style={{ color: "#b5d407" }} className="w-10 h-10" />,
      title: "99%",
      para: "Positive Review",
    },
    {
      icon: (
        <MdIncompleteCircle
          style={{ color: "#b5d407" }}
          className="w-10 h-10"
        />
      ),
      title: "300+",
      para: "Tour Completed",
    },
    {
      icon: <FaAward style={{ color: "#b5d407" }} className="w-10 h-10" />,
      title: "8648",
      para: "Award Winning",
    },
  ];

  return (
    <>
      <Cover heading="About Us" />
      <Section3 />

      <div
        className="py-12"
        style={{
          backgroundImage: "url('cover.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-white mx-auto grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 w-11/12 gap-6 ">
          {about.map((crnt) => {
            return (
              <div
                data-aos="zoom-in-down"
                className="border rounded-lg h-360 p-4 flex flex-col items-center justify-center mx-4"
              >
                <div className="mx-auto mb-3">{crnt.icon}</div>
                <h5 className="text-center text-5xl font-bold text-greenColor">
                  {crnt.title}
                </h5>
                <h4 className="text-center text-2xl mt-3 font-semibold">
                  {crnt.para}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
      <FaqSection />
    </>
  );
};

export default About;
