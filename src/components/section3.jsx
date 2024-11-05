import { GiCampingTent } from "react-icons/gi";
import { MdOutlineSupportAgent, MdOutlineCabin } from "react-icons/md";
import { ImPriceTags } from "react-icons/im";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HeadingPara } from "./HeadingPara";
const features = [
  {
    icon: (
      <MdOutlineSupportAgent
        style={{ color: "#b5d407" }}
        className="w-12 h-12"
      />
    ),
    title: "Dedicated Support",
    description:
      "Our knowledgeable team is available around the clock to help you plan your perfect getaway, ensuring peace of mind every step of the way.",
  },
  {
    icon: <GiCampingTent style={{ color: "#b5d407" }} className="w-12 h-12" />,
    title: "Unforgettable Experiences",
    description:
      "We specialize in creating memorable outdoor adventures, from family camping trips to thrilling hikes, tailored to your needs.",
  },
  {
    icon: <MdOutlineCabin style={{ color: "#b5d407" }} className="w-12 h-12" />,
    title: "Comfortable Accommodations",
    description:
      "Stay in our luxurious cabins, where comfort meets nature, ensuring a cozy retreat after a day of exploration.",
  },
  {
    icon: <ImPriceTags style={{ color: "#b5d407" }} className="w-12 h-12" />,
    title: "Competitive Pricing",
    description:
      "Enjoy top-notch services and unforgettable experiences without breaking the bank. We offer value for your adventure.",
  },
];

export const Section3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="my-16 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 w-11/12 mx-auto">
      <div data-aos="fade-right" className="flex items-center">
        <img
          src="section4.png"
          alt="Travel Adventure"
          className="w-8/12   mx-auto md:mx-0 "
        />
      </div>

      <div data-aos="fade-left" className="my-auto relative">
        <HeadingPara
          heading=" WHY YOU CHOOSE US FOR ADVENTURE & TRAVELLING"
          para="At our travel company, we are committed to delivering unforgettable
          adventures that exceed your expectations. Discover why we are the best
          choice for your next journey!"
        />

        <div className="grid grid-cols-2 gap-2">
          {features.map((feature, index) => (
            <div key={index}>
              {feature.icon}
              <h5 className="font-semibold text-lg my-2">{feature.title}</h5>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
