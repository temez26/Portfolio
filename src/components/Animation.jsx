import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import { useInView } from "react-intersection-observer";

// Animation component that renders a Lottie animation when it's in the view
function Animation({ animationData }) {
  const [isAnimationVisible, setIsAnimationVisible] = useState(false); // State to track if the animation is visible
  const { ref, inView } = useInView(); // Hook to determine if the component is in the view

  useEffect(() => {
    // Effect to update the visibility of the animation based on the view
    if (inView && !isAnimationVisible) {
      setIsAnimationVisible(true); // Set the animation as visible if it's in the view and not already visible
    } else if (!inView && isAnimationVisible) {
      setIsAnimationVisible(false); // Set the animation as invisible if it's not in the view and is currently visible
    }
  }, [inView, isAnimationVisible]); // Dependencies for the useEffect

  return (
    <div ref={ref} className="animation-container"> {/* Container with a ref to check if it's in the view */}
      <Lottie animationData={animationData} loop={isAnimationVisible} /> {/* Lottie animation component with the visibility based on the state */}
    </div>
  );
}

export default Animation; 