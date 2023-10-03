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
import { faImage } from "@fortawesome/free-solid-svg-icons";

function Scrollanimation() {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for reduced motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center" }} className="h1-color">
        Exploring a World of Coding: My Diverse Skillset
      </h1>
      <div className="scroller" data-speed="fast">
        <ul className="tag-list scroller__inner">
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
      <div className="scroller" data-direction="right" data-speed="slow">
        <div className="scroller__inner">
          <FontAwesomeIcon icon={faReact} className="scroll-icons" />
          <FontAwesomeIcon icon={faPython} className="scroll-icons" />
          <FontAwesomeIcon icon={faGithub} className="scroll-icons" />
          <FontAwesomeIcon icon={faJs} className="scroll-icons" />
          <FontAwesomeIcon icon={faNode} className="scroll-icons" />
          <FontAwesomeIcon icon={faJava} className="scroll-icons" />
          <FontAwesomeIcon icon={faHtml5} className="scroll-icons" />
          <FontAwesomeIcon icon={faLinkedin} className="scroll-icons" />
          <FontAwesomeIcon icon={faNpm} className="scroll-icons" />
          <FontAwesomeIcon icon={faCss3Alt} className="scroll-icons" />
        </div>
      </div>
    </div>
  );
}

export default Scrollanimation;
