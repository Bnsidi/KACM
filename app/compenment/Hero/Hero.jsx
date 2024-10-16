"use client"
import React, { useState, useEffect } from 'react';
import Navbaar from "@/app/compenment/Navbaar/Navbaar";

function Hero() {
    const team = "./team.png";
    const ka = "./ka.jpg";

    const [currentImage, setCurrentImage] = useState(ka);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage(prevImage => (prevImage === ka ? team : ka));
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[700px]">

            <img src={currentImage} alt="hero" className="w-full h-full object-cover transition-all duration-500" />


            <div className="absolute inset-0 bg-black/60"></div>


            <div className="absolute inset-0 flex">
                <Navbaar />
            </div>
        </div>
    );
}

export default Hero;
