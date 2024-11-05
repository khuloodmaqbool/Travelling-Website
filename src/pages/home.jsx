import { FilterContext } from "../context/filter-context";
import { useContext } from "react";
import { AppContext } from "../context/main-context";
import { FaRegUser } from "react-icons/fa";
import { Section } from "../components/section";
import { FaqSection } from "../components/faqSection";
import { NavLink } from "react-router-dom";
import { Activities } from "../components/Activities";
import HeroSection from "../components/herosection";
import LottieAnimation from "../components/LottieFliesAnimation";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const { cardsData } = useContext(AppContext);

  const {
    filterCards,
    handleFilterChange,
    filter: { continent },
  } = useContext(FilterContext);

  let filteredItem = filterCards.slice(0, 4);

  const getValues = (data, val) => {
    let values = [];
    if (val) {
      values = data.map((crnt) => crnt[val]);
    }
    return ["All", ...new Set(values)];
  };
  const continentVal = getValues(cardsData, "continent");

  return (
    <>
      <HeroSection />
      <Section />
      <div className="relative w-11/12 mx-auto">
        <div className="flex justify-center w-44 absolute top-[-120px] left-[-20px] ">
          <LottieAnimation></LottieAnimation>
        </div>
        <h5
          data-aos="fade-right"
          style={{ fontFamily: "Dancing Script" }}
          className=" text-greenColor"
        >
          Explore the World
        </h5>
        <h2
          data-aos="fade-right"
          className="lg:text-6xl md:text-5xl sm:text-5xl text-4xl font-black mb-8"
        >
          Explore Our Exclusive <br /> Tour Packages!
        </h2>
      </div>
      <div data-aos="fade-up" className="flex w-11/12 mx-auto flex-wrap my-12">
        {continentVal.map((crnt, index) => (
          <button
            key={index}
            name="continent"
            value={crnt}
            onClick={handleFilterChange}
            className={`px-3 py-2 ${
              crnt == continent
                ? "bg-greenColor text-white"
                : "bg-white text-black"
            } shadow rounded-lg m-2 px-2 py-1 rounded mx-1`}
          >
            {crnt}
          </button>
        ))}
      </div>

      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredItem.map((crnt) => {
          return (
            <NavLink to={`/singleTour/${crnt.id}`}>
              <div
                data-aos="fade-up"
                className="bg-white rounded-lg shadow-md overflow-hidden w-full"
                key={crnt.id}
              >
                <div className="relative">
                  <img
                    className="w-full h-48 object-cover"
                    src={crnt.imageUrl}
                    alt={crnt.location}
                  />
                  <span className="absolute top-2 left-2 bg-greenColor text-white text-xs px-2 py-1 rounded-full">
                    Featured
                  </span>
                </div>

                <div className="p-4">
                  <p className="text-gray-500 text-xs mb-1">{crnt.location}</p>
                  <h3 className="font-semibold text-lg">{crnt.title}</h3>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400 text-xs">★★★★★</span>
                    <p className="text-xs ml-1 text-gray-600">(1 Review)</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    {/* Icons */}
                    <span className="flex items-center">
                      <FaRegUser
                        style={{ color: "#b5d407" }}
                        className="w-5 h-5 mt-1 mx-2"
                      />
                      {crnt.people} persons
                    </span>
                    <p className="flex items-center">
                      {/* Time duration would go here */}
                      {crnt.duration}
                    </p>
                  </div>
                  <div className="flex justify-between items-center border-t pt-2">
                    <p className="text-greenColor font-semibold text-lg">
                      From ${crnt.price}
                    </p>
                    <p className="text-gray-400 line-through">$199.00</p>
                    <button className="text-gray-400"></button>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>

      <div className="flex justify-center my-8">
        <NavLink to="/tour">
          <button
            className="bg-greenColor text-white px-3 py-2 rounded-lg mb-16
           mt-6"
          >
            View All
          </button>
        </NavLink>
      </div>

      <Activities />

      <FaqSection />
    </>
  );
};

export default Home;
