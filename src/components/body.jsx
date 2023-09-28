import React, { useState } from 'react';
import Lottie from 'lottie-react';
import Coding from '../assets/coding.json';
import CodingApe from '../assets/codingape.json'; // Import the CodingApe animation
import Computer from '../assets/computer.json'; // Import the Computer animation

function Body() {
    const [codingStopped, setCodingStopped] = useState(false);
    const [codingApeStopped, setCodingApeStopped] = useState(false);
    const [computerStopped, setComputerStopped] = useState(false);

    const onMouseEnterCoding = () => {
        setCodingStopped(true);
        console.log("Coding animate");
    };

    const onMouseLeaveCoding = () => {
        setCodingStopped(false);
        console.log("Coding stop");
    };

    const onMouseEnterCodingApe = () => {
        setCodingApeStopped(true);
        console.log("CodingApe animate");
    };

    const onMouseLeaveCodingApe = () => {
        setCodingApeStopped(false);
        console.log("CodingApe stop");
    };

    const onMouseEnterComputer = () => {
        setComputerStopped(true);
        console.log("Computer animate");
    };

    const onMouseLeaveComputer = () => {
        setComputerStopped(false);
        console.log("Computer stop");
    };

    return (
        <div className="Body">
            <div className="icon-body1" onMouseEnter={onMouseEnterCoding} onMouseLeave={onMouseLeaveCoding}>
                <Lottie animationData={Coding} loop={codingStopped} />
            </div>
            <div className="icon-body2" onMouseEnter={onMouseEnterCodingApe} onMouseLeave={onMouseLeaveCodingApe}>
                <Lottie animationData={CodingApe} loop={codingApeStopped} />
            </div>
            <div className="icon-body3" onMouseEnter={onMouseEnterComputer} onMouseLeave={onMouseLeaveComputer}>
                <Lottie animationData={Computer} loop={computerStopped} />
            </div>
        </div>
    );
}

export default Body;
