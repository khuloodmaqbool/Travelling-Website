import { NavLink } from "react-router-dom";
import { Cover } from "../components/cover";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const gradient = "cursor-pointer absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80 transition-opacity rounded-lg hover:opacity-0";
const imageCard = "group relative bg-center bg-cover bg-no-repeat rounded-lg ";

const Destination = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const destinations = [
    {
      imageUrl: "img1.jpg",
      span: "md:row-span-6 sm:row-span-3",
      subtitle: "North America",
    },
    {
      imageUrl: "img2.jpg",
      span: "md:row-span-4 sm:row-span-1",
      subtitle: "Asia",
    },
    {
      imageUrl: "img3.jpg",
      span: "md:row-span-2 sm:row-span-1",
      subtitle: "Europe",
    },
    {
      imageUrl: "img4.jpg",
      span: "md:row-span-2 sm:row-span-3",
      subtitle: "South America",
    },
    {
      imageUrl: "img5.jpg",
      span: "md:row-span-2 sm:row-span-1",
      subtitle: "Africa",
    },
    {
      imageUrl: "img6.jpg",
      span: "md:row-span-2 sm:row-span-1",
      subtitle: "Oceania",
    },
  ];

  return (
    <>
      <Cover heading="Destination" />
      <NavLink to="/tour">
        <div
          data-aos="fade-up"
          className="grid grid-rows-6 md:grid-cols-3 sm:grid-cols-2 gap-4 w-11/12 mx-auto my-16"
        >
          {destinations.map((crnt, index) => (
            <div
              key={index}
              className={`${imageCard} ${crnt.span} p-32 sm:p-16`}
              style={{ backgroundImage: `url(${crnt.imageUrl})` }}
            >
              <div className={gradient}></div>
              <h2
                className="absolute left-3 bottom-3 text-white font-bold text-lg"
                style={{ fontFamily: "Dancing Script" }}
              >
                Travel to
                <br />
                <span style={{ fontFamily: "Montserrat" }} className="text-2xl">
                  {crnt.subtitle}
                </span>
              </h2>
            </div>
          ))}
        </div>
      </NavLink>
    </>
  );
};

export default Destination;
