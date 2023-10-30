
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faPython,
  faGithub,
  faJs,
  faNode,
  faJava,
  faLinkedin,
  faNpm,
  faCss3Alt,
  faHtml5,
} from "@fortawesome/free-brands-svg-icons";
import Wawe1 from "../assets/wawes3.svg";

// Component for scroll animation with coding skillset
function Scrollanimation() {
  // useEffect hook for initializing the scroll animation
  useEffect(() => {
    // Selecting all elements with the 'scroller' class
    const scrollers = document.querySelectorAll(".scroller");

    // Checking if the user prefers reduced motion
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    // Function for adding the scroll animation
    function addAnimation() {
      // Adding necessary attributes and duplicating elements for animation effect
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);

        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  
  return (
    <div className="scrollanimation">
      {/* Heading for the scroll animation */}
      <h1 style={{ textAlign: "center" }} className="text-animation-h2">
        Exploring a World of Coding: My Diverse Skillset
      </h1>
      {/* First scroller section for text animation */}
      <div className="scroller" data-speed="fast">
        <ul className="tag-list scroller__inner">
          {/* List of coding skills */}
          <li>HTML</li>
          <li>CSS</li>
          <li>JS</li>
          <li>SSG</li>
          <li>webdev</li>
          <li>animation</li>
          <li>UI/UX</li>
          <li>Node</li>
          <li>C#</li>
          <li>C++</li>
          <li>Python</li>
          <li>Java</li>
          <li>React</li>
          <li>Vite</li>
          <li>Npm</li>
        </ul>
      </div>
      {/* Second scroller section for icon animation */}
      <div className="scroller" data-direction="right" data-speed="slow">
        <div className="scroller__inner">
          {/* Icons for various coding languages and platforms */}
          <FontAwesomeIcon icon={faReact} className="scroll-icons" />
          <FontAwesomeIcon icon={faPython} className="scroll-icons" />
          <FontAwesomeIcon icon={faGithub} className="scroll-icons" />
          <FontAwesomeIcon icon={faJs} className="scroll-icons" />
          <FontAwesomeIcon icon={faNode} className="scroll-icons" />
          <FontAwesomeIcon icon={faJava} className="scroll-icons" />
          <FontAwesomeIcon icon={faHtml5} className="scroll-icons" />

          <FontAwesomeIcon icon={faNpm} className="scroll-icons" />
          <FontAwesomeIcon icon={faCss3Alt} className="scroll-icons" />
        </div>
      </div>
    </div>
  );
}


export default Scrollanimation;
