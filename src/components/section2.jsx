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
    title: "Excellent Support",
    description:
      "Our dedicated support team is here to assist you 24/7, ensuring a smooth experience from booking to travel.",
  },
  {
    icon: <GiCampingTent style={{ color: "#b5d407" }} className="w-12 h-12" />,
    title: "Family Camping",
    description:
      "Experience the joy of family camping with our carefully curated outdoor packages designed for all ages.",
  },
  {
    icon: <MdOutlineCabin style={{ color: "#b5d407" }} className="w-12 h-12" />,
    title: "Luxury Cabin",
    description:
      "Relax in style with our luxury cabin rentals, offering the perfect blend of comfort and nature.",
  },
  {
    icon: <ImPriceTags style={{ color: "#b5d407" }} className="w-12 h-12" />,
    title: "Affordable Pricing",
    description:
      "We offer competitive prices without compromising on quality, making your adventure budget-friendly.",
  },
];

export const Section2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2  w-11/12 mx-auto my-12">
      <div data-aos="fade-right" className="flex items-center">
        <img
          src="section3.png"
          alt="Travel Adventure"
          className="lg:w-4/6 w-4/5 md:11/12  my-auto mx-auto md:mx-0 h-auto"
        />
      </div>

      <div data-aos="fade-left" className="my-2 relative">
        <HeadingPara
          heading="  GREAT OPPORTUNITY FOR ADVENTURE AND TRAVELS"
          para="Welcome to our travel website! We provide unforgettable adventures and
          experiences tailored to your desires."
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
