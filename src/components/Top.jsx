import { useState, useEffect } from "react";
// icons
import { BsFillArrowDownCircleFill } from "react-icons/bs";
// images
import img1 from "../assets/images/food1.png";
import img2 from "../assets/images/food2.png";
import img3 from "../assets/images/food3.png";
import img4 from "../assets/images/food4.png";

const CircularSlider = () => {
  const images = [img1, img2, img3, img4];
  const centerImage = img1;

  const [themeColors, setThemeColors] = useState([
    { light: "#FFF7E3", dark: "#FFB84D" },
    { light: "#FFF0F0", dark: "#FF6B6B" },
    { light: "#E3F8FF", dark: "#4DB8FF" },
  ]);
  const [themeIndex, setThemeIndex] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
      setThemeIndex((prev) => (prev + 1) % themeColors.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="flex w-full h-screen">
      {/* Left Content */}
      <div className="w-1/2 flex flex-col justify-center items-start px-16" style={{ backgroundColor: themeColors[themeIndex].light }}>
        <h1 className="text-5xl font-bold mb-4" style={{ color: themeColors[themeIndex].dark }}>
          Delicious
        </h1>
        <h2 className="text-3xl text-gray-700 mb-4">Quench the Hunger</h2>
        <p className="text-lg text-gray-500 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae phasellus dolor, euismod sed suscipit.
        </p>
        <button
          className="px-8 py-3 text-lg font-medium text-white rounded-full shadow-md"
          style={{ backgroundColor: themeColors[themeIndex].dark }}
        >
          Quench Now
        </button>
      </div>

      {/* Right Content */}
      <div className="w-1/2 flex items-center justify-center  bg-yellow-300">
        <div className="w-[500px] h-[500px] flex items-center justify-center">
          <img
            src={centerImage}
            alt="Center Dish"
            className="absolute w-[250px] h-[250px] rounded-full border-4 border-white shadow-lg"
          />
          {images.map((img, index) => {
            const angle = (360 / images.length) * index;
            const isActive = index === activeIndex;
            return (
              <img
                key={index}
                src={img}
                alt={`Dish ${index}`}
                className={`absolute w-[100px] h-[100px] rounded-full border-4 border-white shadow-md transition-transform duration-500 ${
                  isActive ? "scale-110 z-10" : "scale-100"
                }`}
                style={{
                  transform: `rotate(${angle}deg) translate(200px) rotate(-${angle}deg)`
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CircularSlider;
