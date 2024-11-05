import { useState } from "react";
import { GiCampingTent, GiMountainClimbing } from "react-icons/gi";
import { MdCabin, MdHiking, MdTour } from "react-icons/md";
import { FaTree, FaWater } from "react-icons/fa";
import LottieAnimation from "./LottieFliesAnimation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export const Activities = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activities = [
    {
      image: "img1.jpg",
      icon: <GiCampingTent className="w-12 h-12" />,
      name: "Couple Camping and Cabin",
      heading: "Luxury Getaway in Nature",
      type: [
        { icon: <GiCampingTent className="w-12 h-12" />, text: "Camping" },
        { icon: <MdCabin className="w-12 h-12" />, text: "Cabin Stay" },
      ],
    },
    {
      image: "img2.jpg",
      icon: <GiMountainClimbing className="w-12 h-12" />,
      name: "Family Camping Adventure",
      heading: "Fun-Filled Family Experience",
      type: [
        { icon: <GiCampingTent className="w-12 h-12" />, text: "Camping" },
        { icon: <FaTree className="w-12 h-12" />, text: "Outdoor Activities" },
      ],
    },
    {
      image: "img3.jpg",
      icon: <MdCabin className="w-12 h-12" />,
      name: "Luxury Cabin Retreat",
      heading: "Luxury in the Wilderness",
      type: [
        { icon: <MdCabin className="w-12 h-12" />, text: "Cabin Stay" },
        { icon: <FaWater className="w-12 h-12" />, text: "Luxury" },
      ],
    },
    {
      image: "img4.jpg",
      icon: <MdHiking className="w-12 h-12" />,
      name: "Adventure Hiking and Trekking",
      heading: "Thrill-Seeking in the Wild",
      type: [
        { icon: <MdHiking className="w-12 h-12" />, text: "Hiking" },
        {
          icon: <GiMountainClimbing className="w-12 h-12" />,
          text: "Trekking",
        },
      ],
    },
    {
      image: "img5.jpg",
      icon: <MdTour className="w-12 h-12" />,
      name: "Cultural Heritage Tour",
      heading: "Explore Local Culture and Traditions",
      type: [
        { icon: <MdTour className="w-12 h-12" />, text: "Cultural Tour" },
        { icon: <FaTree className="w-12 h-12" />, text: "Sightseeing" },
      ],
    },
  ];

  return (
    <>
      <div className="relative w-fit mx-auto">
        <div className="flex justify-center w-44 absolute top-[-120px] left-[-20px] ">
          <LottieAnimation></LottieAnimation>
        </div>
        <h5
          data-aos="zoom-out-down"
          className="text-center text-greenColor"
          style={{ fontFamily: "Dancing Script" }}
        >
          Explore the World
        </h5>
        <h1
          data-aos="zoom-out-down"
          className="lg:text-6xl md:text-5xl sm:text-5xl text-4xl px-3 font-black text-center mb-5"
        >
          ACTIVITIES
        </h1>
      </div>

      <ul className="flex justify-center flex-wrap w-11/12 mx-auto">
        {activities.map((activity, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)}
            className={`cursor-pointer shadow lg:w-44 md:w-44 sm:w-32 w-32 flex flex-col items-center justify-center p-3 rounded-lg m-3 h-40 ${
              selectedIndex === index ? "bg-greenColor text-white" : "bg-white"
            }`}
          >
            {activity.icon}
            <p className="text-center">{activity.name}</p>
          </div>
        ))}
      </ul>

      <div
        data-aos="zoom-in-up"
        className="mb-12 grid grid-cols-1 sm:grid-cols-3  w-11/12 mx-auto rounded-lg mt-8"
      >
        <div
          style={{
            backgroundImage: `url('/${activities[selectedIndex].image}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="bg-black h-360 rounded-t-lg sm:rounded-l-lg"
        ></div>
        <div className="flex flex-col justify-center sm:col-span-2 col-span-1 bg-greenColor h-360 rounded-r-lg rounded-b-lg p-6">
          <h3
            style={{ fontFamily: "Dancing Script" }}
            className="text-white font-semibold"
          >
            Explore the World
          </h3>
          <h2 className="text-white text-3xl font-bold mb-8 mt-2">
            {activities[selectedIndex].heading}
          </h2>
          <div className="text-md text-white flex flex-wrap mt-2">
            {activities[selectedIndex].type.map((type, ind) => (
              <div key={ind} className="flex items-center mr-4 mb-2">
                <span className="mr-2 text-white">{type.icon}</span>
                <h5 className="font-semibold">{type.text}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
