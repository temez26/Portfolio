import React, { useState, useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Coding from '../assets/coding.json';
import CodingApe from '../assets/codingape.json';
import Computer from '../assets/computer.json';

gsap.registerPlugin(ScrollTrigger);

function Body() {
    const [codingStopped, setCodingStopped] = useState(false);
    const [codingApeStopped, setCodingApeStopped] = useState(false);
    const [computerStopped, setComputerStopped] = useState(false);

    const codingRef = useRef(null);
    const codingApeRef = useRef(null);
    const computerRef = useRef(null);

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
            start: 'top 80%',
            onEnter: () => {
                setCodingStopped(false);
                codingAnimation.play();
            },
            onLeaveBack: () => {
                setCodingStopped(false);
                codingAnimation.reverse();
            },
        });

        ScrollTrigger.create({
            trigger: codingApeRef.current,
            start: 'top 80%',
            onEnter: () => {
                setCodingApeStopped(true);
                codingApeAnimation.play();
            },
            onLeaveBack: () => {
                setCodingApeStopped(false);
                codingApeAnimation.reverse();
            },
        });

        ScrollTrigger.create({
            trigger: computerRef.current,
            start: 'top 80%',
            onEnter: () => {
                setComputerStopped(true);
                computerAnimation.play();
            },
            onLeaveBack: () => {
                setComputerStopped(false);
                computerAnimation.reverse();
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
            <div className="icon-body1">
                <Lottie
                    animationData={Coding}
                    loop={codingStopped}
                    className="icon1"
                />
                <p ref={codingRef} className="text-animation1">
                <h2 className="text-animation-h2">My portfolio</h2>   
                Hello, I'm Teemu Kalmari, a dedicated Software Engineer student with a passion for crafting digital experiences. My journey in the world of technology has been shaped by a profound love for coding and a relentless curiosity for innovation.
                

                </p>
        
            </div>
           
      
          
            <div className="icon-body2">
            <p ref={codingApeRef}className="text-animation1-2">
             <h2 className="text-animation-h2">Technical Expertise</h2>   

Python: My code is poetry. I'm fluent in Python, leveraging its versatility to create powerful solutions that range from data analysis to web development.

Web Development: I'm well-versed in the art of web coding, with proficiency in both frontend and backend technologies. I specialize in crafting seamless user interfaces with popular frameworks like React and Vite, ensuring that user experiences are not just functional but delightful.

C++ & C#: My coding skills extend beyond web development. I'm adept in C++ and C#, enabling me to tackle complex software projects and build efficient applications.
                </p>
                <Lottie
                    animationData={CodingApe}
                    loop={codingApeStopped}
                    className="icon2"
                />
              
            </div>
            <div className="icon-body3">
                <Lottie
                    animationData={Computer}
                    loop={computerStopped}
                    className="icon3"
                />
                <p ref={computerRef} className="text-animation3">
                    Text for Animation 3
                </p>
            </div>
           
        </div>
    );
}

export default Body;
