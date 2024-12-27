import React from "react";
import BgPolygon from "../assets/images/polygon.png";
import Vector from "../assets/images/vector-wave.png";

const About = () => {
  const bgStyle = {
    backgroundImage: `url(${BgPolygon})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
    position: "relative",
  };

  return (
    <div style={bgStyle}>
      <div className="container mx-auto px-6 py-16">
        <h1 className="pt-20 tracking-wider text-4xl font-semibold text-white text-center">
          About Us
        </h1>
        <p className="mt-10 text-lg text-gray-300 text-center leading-relaxed">
          We know that time is the greatest value in the modern world. Our healthy meal
          plan delivery service "Good Food" in Miami is the answer for those who want to eat
          healthily, saving time for buying food and preparing delicious, healthy meals.
        </p>
        <div className="pt-10 flex justify-center">
          <button className="flex justify-center items-center gap-2 bg-primary text-xl h-[40px] text-white px-5 py-2 rounded-full hover:scale-105 duration-300">
            <span>My Account</span>
          </button>
        </div>
        {/* Wave Vector */}
        <div>
          <img
            src={Vector}
            alt="Wave Vector"
            className="absolute top-0 right-0 w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
