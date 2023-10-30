
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../style/scrollAnimation.css";
import Scrollanimation from "./scrollAnimation.jsx";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import Coding from "../assets/Coding1.json";
import ContactForm from "./contactForm.jsx";
import Animation from "./Animation.jsx";
import CodingApe from "../assets/codingape.json";
import ImageSlider from "./imageslider.jsx";
import blob from "../assets/blob8.svg";
import Wawe5 from "../assets/wawes12.svg";
import peak from "../assets/peaks1.svg";
import blob1 from "../assets/blob12.svg";
import peak5 from "../assets/peaks5.svg";
import Wawe1 from "../assets/wawes4.svg";
import website1 from "../assets/website1.png";
import website2 from "../assets/website2.png";
import website3 from "../assets/website7.png";
import website4 from "../assets/website4.png";
import website5 from "../assets/website5.png";

// Registering ScrollTrigger with gsap
gsap.registerPlugin(ScrollTrigger);

// Body component rendering various sections of the webpage
function Body() {
  const [isAnimationVisible, setIsAnimationVisible] = useState(false); // State to manage animation visibility
  const { ref, inView } = useInView(); // Hook to determine if the component is in view

  // States and refs for managing animations
  const [codingStopped, setCodingStopped] = useState(false);
  const [codingApeStopped, setCodingApeStopped] = useState(false);
  const [computerStopped, setComputerStopped] = useState(false);
  const codingRef = useRef(null);
  const codingApeRef = useRef(null);
  const computerRef = useRef(null);

  // Array of images and their associated links
  const IMAGES = [
    { url: website1, alt: "website1" },
    { url: website2, alt: "website2" },
    { url: website3, alt: "website3" },
    { url: website4, alt: "website4" },
    { url: website5, alt: "website5" },
  ];

  // Array of links
  const links = [
    "https://superboi.azurewebsites.net/",
    "https://triv.azurewebsites.net/",
    "https://particless.azurewebsites.net/",
    "https://slaythedragon.azurewebsites.net/",
    "https://garden-web.azurewebsites.net/",
  ];

  // Effect for managing visibility of the animation
  useEffect(() => {
    if (inView && !isAnimationVisible) {
      setIsAnimationVisible(true);
    } else if (!inView && isAnimationVisible) {
      setIsAnimationVisible(false);
    }
  }, [inView, isAnimationVisible]);

  // Effect for managing GSAP animations
  useEffect(() => {
    // GSAP animation for the coding section
    const codingAnimation = gsap.from(codingRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      paused: true,
    });

    // GSAP animation for the coding ape section
    const codingApeAnimation = gsap.from(codingApeRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      paused: true,
    });

    // ScrollTrigger setup for the coding section
    ScrollTrigger.create({
      trigger: codingRef.current,
      start: "top 90%",
      end: "bottom 50%",
      once: true,
      onEnter: () => {
        setTimeout(() => {
          setCodingStopped(false);
          codingAnimation.play();
        }, 300);
      },
      onLeaveBack: () => {
        setCodingStopped(true);
        codingAnimation.pause();
      },
    });

    // ScrollTrigger setup for the coding ape section
    ScrollTrigger.create({
      trigger: codingApeRef.current,
      start: "top 80%",
      end: "bottom 50%",
      once: true,
      onEnter: () => {
        setTimeout(() => {
          setCodingApeStopped(false);
          codingApeAnimation.play();
        }, 100);
      },
      onLeaveBack: () => {
        setCodingApeStopped(true);
        codingApeAnimation.pause();
      },
    });

    // Clean up the animations on unmount
    return () => {
      codingAnimation.kill();
      codingApeAnimation.kill();
    };
  }, []);

  
  return (
    <div className="Body">
      {/* Section 1: Introduction */}
      <div className="body-block-1">
        <div ref={ref} className="animation-container">
          <Animation animationData={Coding} className="icon1" />
        </div>
        <div ref={codingRef} className="text-animation1">
          <h2 className="text-animation-h2">My portfolio</h2>
          <p className="p-text">
            Hello, I'm Teemu Kalmari, a dedicated Software Engineer student with
            a passion for crafting digital experiences. My journey in the world
            of technology has been shaped by a profound love for coding and a
            relentless curiosity for innovation.
          </p>
        </div>
      </div>
      {/* Section 2: Scroll Animation */}
      <div>
        <div className="body-block-2">
          <img src={Wawe1} className="body-block-2-background" />
          <Scrollanimation />
        </div>
      </div>
      {/* Section 3: Technical Expertise */}
      <div className="body-block-3">
        <img src={Wawe5} className="body-block-3-background-top" />
        <img src={peak} className="body-block-3-background" />
        <div ref={codingApeRef} className="text-animation-1-2">
          <div className="text-background">
            <h2 className="text-animation-h2">Technical Expertise</h2>
            <p className="p-text">
              Python: My code is poetry. I'm fluent in Python, leveraging its
              versatility to create powerful solutions that range from data
              analysis to web development. Web Development: I'm well-versed in
              the art of web coding, with proficiency in both frontend and
              backend technologies. I specialize in crafting seamless user
              interfaces with popular frameworks like React and Vite, ensuring
              that user experiences are not just functional but delightful. C++
              & C#: My coding skills extend beyond web development. I'm adept in
              C++ and C#, enabling me to tackle complex software projects and
              build efficient applications.
            </p>
          </div>
        </div>
        <div className="monkey">
          <Animation animationData={CodingApe} className="icon2" />
        </div>
      </div>
      {/* Section 4: Projects */}
      <div className="image-container">
        <img src={blob} className="body-block-4-background" />
        <div className="body-block-4">
          <h1 className="text-animation-h1">My Projects</h1>
          <ImageSlider images={IMAGES} links={links} className="images" />
        </div>
      </div>
      {/* Section 5: Contact Form */}
      <div className="body-block-5">
        <div className="body-block-5-layer">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}


export default Body;
