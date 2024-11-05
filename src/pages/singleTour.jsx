import { useContext } from "react";
import { TiTick } from "react-icons/ti";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/main-context";

const SingleTour = () => {
  const { id } = useParams();
  const { cardsData } = useContext(AppContext);
  const singleTour = cardsData.find((crnt) => crnt.id.toString() === id);

  const tourAmenities = [
    "Air Conditioning",
    "Microwave",
    "Swimming Pool",
    "Wifi",
    "AC",
    "Central Heating",
    "Laundry",
    "Refrigerator",
    "Window Covering",
  ];

  const tourInclude = [
    "Pick and Drop Services",
    "1 Meal Per Day",
    "Cruise Dinner & Music Event",
    "Sightseeing Tour",
    "Free Wi-Fi",
    "Travel Insurance",
    "Guided City Tour",
  ];

  const Tickets = [
    "Children (0-12 years)$129.00",
    "Youth (13-17 years)$169.00",
    "Adult (18+ years)$189.00",
  ];

  if (!singleTour) {
    return (
      <div className="loader mx-auto my-44 md:w-20 md:h-20 w-16 h-16"></div>
    );
  }
  console.log(singleTour.imageUrl);
  return (
    <>
      <div
        className="w-full h-96 flex flex-col justify-center items-center"
        style={{
          backgroundImage: `url('/${singleTour.imageUrl}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      <div className="mx-auto w-11/12 my-4">
        <h1 className="md:text-5xl text-4xl font-black mt-4">
          Explore {singleTour.location} for More Fun
        </h1>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 w-11/12 mx-auto gap-3">
        <div className="md:col-span-2">
          <h2 className="text-2xl font-bold mt-4 mb-2">Description</h2>
          <p>{singleTour.longDescription}</p>

          <h2 className="text-2xl font-bold mt-4 mb-2">Advance Facilities</h2>
          <p>{singleTour.facilitiesDescription}</p>

          <h2 className="text-2xl font-bold mt-4 mb-2">What to Expect</h2>
          <p className="mb-3">
            Each trip is carefully crafted to connect you with our exclusive
            experiences and let you enjoy your vacation.
          </p>
          <ul>
            {singleTour.activities.map((activity, index) => (
              <li key={index} className="list-disc ms-4 my-3">
                {activity}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h5 className="text-lg font-bold">Book this Tour</h5>
          <input type="date" className="px-3 py-2 w-full rounded-lg my-6" />
          <h5 className="text-lg font-bold">Tickets</h5>
          {Tickets.map((ticket, index) => (
            <div
              key={index}
              className="flex justify-between items-center w-full my-3"
            >
              <p className="text-gray-500">{ticket}</p>
              <select className="lg:w-32 md:w-full sm:w-32 w-full rounded-lg px-3 py-3">
                {[1, 2, 3].map((num) => (
                  <option key={num}>{num}</option>
                ))}
              </select>
            </div>
          ))}

          <p className="text-gray-500 mb-4 mt-2 text-sm">
            <input type="checkbox" className="me-2" />
            By proceeding, you agree to our Terms and Conditions and Privacy
            Policy.
          </p>
          <button className="w-full bg-greenColor rounded-lg px-2 py-3 text-white">
            Proceed to Booking
          </button>
        </div>
      </div>

      <div className="mx-auto w-11/12">
        <h2 className="text-2xl font-bold my-4">Included</h2>
        <div className="grid grid-cols-2">
          {tourInclude.map((item, index) => (
            <div className="flex my-3" key={index}>
              <div className="bg-greenColor flex items-center justify-center w-6 h-6 p-1 me-2 rounded-full">
                <TiTick style={{ color: "white" }} className="w-6 h-6" />
              </div>
              <p>{item}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold my-4">Tour Amenities</h2>
        <div className="grid grid-cols-3">
          {tourAmenities.map((amenity, index) => (
            <div className="flex my-3" key={index}>
              <TiTick style={{ color: "#b5d407" }} className="w-6 h-6" />
              <p>{amenity}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SingleTour;
