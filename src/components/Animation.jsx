import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { useInView } from "react-intersection-observer";

function Animation({ animationData }) {
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && !isAnimationVisible) {
      setIsAnimationVisible(true);
      console.log("Animation played");
    } else if (!inView && isAnimationVisible) {
      setIsAnimationVisible(false);
      console.log("Animation stopped");
    }
  }, [inView, isAnimationVisible]);

  return (
    <div ref={ref} className="animation-container">
      <Lottie animationData={animationData} loop={isAnimationVisible} />
    </div>
  );
}

export default Animation;
