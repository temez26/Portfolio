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
                setCodingStopped(true);
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
                    Text for Animation 1
                </p>
            </div>
          
            <div className="icon-body2">
                <p ref={codingApeRef} className="text-animation2">
                    Text for Animation 2
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
