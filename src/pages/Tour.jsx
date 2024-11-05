import { IoLocationSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/main-context";
import { FilterContext } from "../context/filter-context";
import { Cover } from "../components/cover";
import { NavLink } from "react-router-dom";
import { Section2 } from "../components/section2";
import AOS from "aos";
import "aos/dist/aos.css";

const Tour = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const { cardsData } = useContext(AppContext);
  const {
    filterCards,
    handleFilterChange,
    sorting,
    filter: { duration, location, people, continent },
  } = useContext(FilterContext);

  useEffect(() => {
    console.log("cardsData:", cardsData);
    console.log("filterCards:", filterCards);
  }, [cardsData, filterCards]);

  const getValues = (data, val) => {
    let values = [];
    if (val) {
      values = data.map((crnt) => crnt[val]);
    }
    return ["All", ...new Set(values)];
  };

  const durationVal = getValues(cardsData, "duration");
  const locationVal = getValues(cardsData, "location");
  const peopleVal = getValues(cardsData, "people");
  const continentVal = getValues(cardsData, "continent");

  return (
    <>
      <Cover heading="Tour" />

      {/* Filter  */}
      <div className="rounded-xl shadow py-5 w-11/12 mx-auto my-6 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2">
        <div className="sm:border-r-2 border-gray-200 bg-white flex mx-auto  py-2 pe-6  m-2 ">
          <FaRegUser
            style={{ color: "#b5d407" }}
            className="w-6 h-6 mt-1 me-2"
          />
          <div>
            <h5 className="font-bold">Continents</h5>
            <select
              className="bg-white  w-28"
              value={continent}
              name="continent"
              onChange={handleFilterChange}
            >
              {continentVal.map((crnt, index) => (
                <option
                  className=" hover:bg-gray-200 focus:text-greenColor  "
                  key={index}
                  value={crnt}
                >
                  {crnt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="sm:border-r-2 border-gray-200 bg-white flex mx-auto py-2 pe-6 m-2 ">
          <IoLocationSharp
            style={{ color: "#b5d407" }}
            className="w-6 h-6 mt-1 me-2"
          />
          <div>
            <h5 className="font-bold">Destination</h5>
            <select
              className="bg-white w-28"
              value={location}
              name="location"
              onChange={handleFilterChange}
            >
              {locationVal.map((crnt, index) => (
                <option key={index} value={crnt}>
                  {crnt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="sm:border-r-2 border-gray-200 bg-white flex mx-auto  py-2 pe-6  m-2 ">
          <IoMdTime
            style={{ color: "#b5d407" }}
            className="w-6 h-6 mt-1 me-2"
          />
          <div>
            <h5 className="font-bold">Duration</h5>
            <select
              className="bg-white  w-28"
              value={duration}
              name="duration"
              onChange={handleFilterChange}
            >
              {durationVal.map((crnt, index) => (
                <option key={index} value={crnt}>
                  {crnt}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="sm:border-r-2 border-gray-200 bg-white flex mx-auto  py-2 pe-6  m-2 ">
          <FaRegUser
            style={{ color: "#b5d407" }}
            className="w-6 h-6 mt-1 me-2"
          />
          <div>
            <h5 className="font-bold">Person</h5>
            <select
              className="bg-white  w-28"
              value={people}
              name="people"
              onChange={handleFilterChange}
            >
              {peopleVal.map((crnt, index) => (
                <option key={index} value={crnt}>
                  {crnt}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-between px-3 py-2 border w-11/12 rounded-lg mx-auto my-6">
        <h5 className="text-bold">
          Showing
          <span className="text-greenColor">
            {filterCards && filterCards.length}
          </span>
          of {cardsData.length} Results
        </h5>
        <div>
          <select onClick={sorting}>
            <option value="default">default</option>
            <option value="lowest">lowest</option>
            <option value="highest">highest</option>
          </select>
        </div>
      </div>

      {/* Cards  */}

      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filterCards.map((crnt) => {
          return (
            <NavLink to={`/singleTour/${crnt.id}`}>
              <div
                data-aos="zoom-in-up"
                className="bg-white rounded-lg shadow-md overflow-hidden w-full"
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
                  <div className="absolute top-2 right-2 flex space-x-2"></div>
                </div>

                <div className="p-4">
                  <p className="text-gray-500 text-xs mb-1">{crnt.location}</p>
                  <h3 className="font-semibold text-lg">{crnt.title}</h3>
                  <div className="flex items-center mb-2">
                    <span className="text-yellow-400 text-xs">★★★★★</span>
                    <p className="text-xs ml-1 text-gray-600">(1 Review)</p>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <IoMdTime
                      style={{ color: "#b5d407" }}
                      className="w-6 h-6 mt-1 me-2"
                    />
                    {crnt.duration}
                    <FaRegUser
                      style={{ color: "#b5d407" }}
                      className="w-5 h-5 mt-1 mx-2"
                    />
                    {crnt.people} persons
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
      <Section2 />
    </>
  );
};
export default Tour;
