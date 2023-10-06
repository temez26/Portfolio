import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../style/scrollAnimation.css";
import Scrollanimation from "./scrollAnimation.jsx";
import React, { useState, useEffect, useRef } from "react";
import { useInView } from 'react-intersection-observer';
import Lottie from "lottie-react";
import Coding from "../assets/Coding1.json";
import Animation from "./Animation.jsx"
import CodingApe from "../assets/codingape.json";
import ImageSlider from "./imageslider.jsx";
import Wawe from "../assets/wawe5.svg"
import Wawe2 from "../assets/wawes9.svg"
import peak from "../assets/peaks1.svg"
import peak1 from "../assets/peaks3.svg"
import peak5 from "../assets/peaks5.svg"
import Wawe1 from "../assets/wawes4.svg"
import website1 from "../assets/website1.png";
import website2 from "../assets/website2.png";
import website3 from "../assets/website7.png";
import website4 from "../assets/website4.png";
import website5 from "../assets/website5.png";

gsap.registerPlugin(ScrollTrigger);

function Body() {
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);
  const { ref, inView } = useInView();

  const [codingStopped, setCodingStopped] = useState(false);
  const [codingApeStopped, setCodingApeStopped] = useState(false);
  const [computerStopped, setComputerStopped] = useState(false);

  const codingRef = useRef(null);
  const codingApeRef = useRef(null);
  const computerRef = useRef(null);

  const IMAGES = [
    { url: website1, alt: "website1" },
    { url: website2, alt: "website2" },
    { url: website3, alt: "website3" },
    { url: website4, alt: "website4" },
    { url: website5, alt: "website5" },
  ];

  const links = [
    "https://superboi.azurewebsites.net/",
    "https://triv.azurewebsites.net/",
    "https://particless.azurewebsites.net/",
    "https://slaythedragon.azurewebsites.net/",
    "https://garden-web.azurewebsites.net/",
  ];

   useEffect(() => {
    if (inView && !isAnimationVisible) {
      setIsAnimationVisible(true);
      console.log("Animation played");
    } else if (!inView && isAnimationVisible) {
      setIsAnimationVisible(false);
      console.log("Animation stopped");
    }
  }, [inView, isAnimationVisible]);

  useEffect(() => {
    const codingAnimation = gsap.from(codingRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      paused: true,
    });

    const codingApeAnimation = gsap.from(codingApeRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      paused: true,
    });

    const computerAnimation = gsap.from(computerRef.current, {
      opacity: 0,
      y: 20,
      duration: 1,
      paused: true,
    });

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

    ScrollTrigger.create({
      trigger: computerRef.current,
      start: "top 90%",
      once: true,

      onEnter: () => {
        setTimeout(() => {
          setComputerStopped(false);
          computerAnimation.play();
        });
      },
      onLeaveBack: () => {
        setComputerStopped(true);
        computerAnimation.pause();
      },
    });

    return () => {
      codingAnimation.kill();
      codingApeAnimation.kill();
      computerAnimation.kill();
    };
  }, []);

  return (
    <div className="Body">
    

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
      <div>
      
      <div className="body-block-2">
      
        
       <img src={Wawe1} className="body-block-2-background" />
       <Scrollanimation />
    
      </div>
        
      
      </div>

      <div className="body-block-3">
       <img src={peak} className="body-block-3-background" />
       
       
        <div ref={codingApeRef} className="text-animation-1-2">
        <div className="text-background">
          <h2 className="text-animation-h2">Technical Expertise</h2>
          <p className="p-text">
            Python: My code is poetry. I'm fluent in Python, leveraging its
            versatility to create powerful solutions that range from data
            analysis to web development. Web Development: I'm well-versed in the
            art of web coding, with proficiency in both frontend and backend
            technologies. I specialize in crafting seamless user interfaces with
            popular frameworks like React and Vite, ensuring that user
            experiences are not just functional but delightful. C++ & C#: My
            coding skills extend beyond web development. I'm adept in C++ and
            C#, enabling me to tackle complex software projects and build
            efficient applications.
          </p>
         </div>
        </div>
        <div className="monkey">
        <Animation animationData={CodingApe} className="icon2" />

        </div>
        
        
      </div>
      <div className="image-container">
 
     
  
      <div className="myprojects">
 
      
      
        <h1 className="text-animation-h2">My Projects</h1>
        <ImageSlider images={IMAGES} links={links}  className="images" />
        


      </div>

    
 </div>
    </div>
  );
}

export default Body;
