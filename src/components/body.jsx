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
            <div className="icon-body1" >
                <Lottie animationData={Coding} loop={codingStopped} onMouseEnter={onMouseEnterCoding} onMouseLeave={onMouseLeaveCoding} className="icon1" />
            </div>
            <div className="icon-body2" >
                <Lottie animationData={CodingApe} loop={codingApeStopped} onMouseEnter={onMouseEnterCodingApe} onMouseLeave={onMouseLeaveCodingApe} className="icon2" />
            </div>
            <div className="icon-body3" >
                <Lottie animationData={Computer} loop={computerStopped} onMouseEnter={onMouseEnterComputer} onMouseLeave={onMouseLeaveComputer} className="icon3" />
            </div>
        </div>
    );
}

export default Body;
