import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { HeadingPara } from "./HeadingPara";
export const FaqSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  const [activeIndex, setActiveIndex] = useState(null);

  const faq = [
    {
      id: 1,
      question: "Who are we?",
      answer:
        "We are KM Travel, your guide to memorable adventures and experiences!",
    },
    {
      id: 2,
      question: "What services do you offer?",
      answer:
        "We offer a variety of travel packages, including adventure tours, family vacations, and luxury getaways.",
    },
    {
      id: 3,
      question: "How can I book a trip?",
      answer:
        "You can book a trip through our website or by contacting our customer support team.",
    },
    {
      id: 4,
      question: "What is your cancellation policy?",
      answer:
        "Our cancellation policy allows you to cancel or reschedule your booking up to 48 hours before departure for a full refund.",
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="mb-12 mt-14  grid md:grid-cols-2 grid-cols-1 w-11/12 mx-auto">
      <div data-aos="fade-right" className="flex items-center ">
        <img
          src="section2.png"
          alt="FAQ img"
          className="py-auto w-8/12 my-auto   mx-auto md:mx-0  h-auto"
        />
      </div>

      <div data-aos="fade-left" className="my-auto relative">
        <HeadingPara
          heading="Travel Made Easy and Enjoyable"
          para="At our travel company, we are committed to delivering unforgettable
          adventures that exceed your expectations. Discover why we are the best
          choice for your next journey!"
        />
        {faq.map((item, index) => (
          <div key={item.id} className="mb-4 rounded-sm py-2 px-2 shadow">
            <div
              onClick={() => handleToggle(index)}
              className="cursor-pointer p-2"
            >
              <div className="flex justify-between items-center">
                <p className="font-semibold">{item.question}</p>
                <RiArrowDropDownLine
                  className={`text-2xl transition-transform ${
                    activeIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-600 p-2">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
