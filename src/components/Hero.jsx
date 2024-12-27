import React from "react";
import mainDish from "../assets/images/hero.png";

const Hero = () => {
  return (
    <div className="relative z-[-1]">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 place-items-center min-h-[600px]">
          {/* Text Content Section */}
          <div className="space-y-7 text-dark order-2 sm:order-1">
            <h1 className="text-5xl font-bold">
              Fresh & Healthy Meal Plan
              <span className="block text-secondary font-cursive text-7xl text-pink-500">
                Delivery
              </span>
              in Miami
            </h1>
            <p className="lg:pr-64">
              Delicious Meals Delivered to Your Door From <span className="font-bold">$132.95</span> per week
            </p>
            {/* Button Section */}
            <div>
              <button className="px-6 py-3 text-white bg-pink-500 rounded-full shadow-lg hover:bg-pink-600 transition">
                Order Now
              </button>
            </div>
          </div>

          {/* Image Section */}
          <div className="order-1 sm:order-2">
            <img
              src={mainDish}
              alt="Hero Dish"
              className="rounded-full w-[400px] h-[400px] md:w-[500px] md:h-[500px] object-cover border-4 border-white shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
