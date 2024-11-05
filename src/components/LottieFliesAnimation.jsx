import React from "react";
import Lottie from "lottie-react";
import animationData from "../animation/plane.json";

const LottieAnimation = () => {
  return (
    <div>
      <Lottie animationData={animationData} loop={true} autoplay={true} />
    </div>
  );
};

export default LottieAnimation;
