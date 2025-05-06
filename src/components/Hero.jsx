import React from "react";
import house from "../assets/house.png";
import bgImage from "../assets/realestate.avif"; // Replace with the downloaded image

const Hero = () => {
  return (
    <section className="relative bg-white px-6 py-16 flex flex-col md:flex-row items-center justify-between overflow-hidden">
      
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 z-0"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>
      <div className="absolute inset-0 bg-white bg-opacity-60 z-0"></div>

      {/* Text Section */}
      <div className="relative z-10 w-full md:w-1/2 text-center md:text-left space-y-6 md:pl-10">
        <h1 className="text-[2.5rem] md:text-[3.5rem] font-extrabold text-black leading-tight">
          FIND YOUR DREAM HOME TODAY
        </h1>

        <h2 className="text-[1.5rem] md:text-[2.2rem] font-semibold text-gray-800">
          Discover a World of Properties
        </h2>

        <p className="text-gray-700 text-base md:text-lg max-w-xl mx-auto md:mx-0">
          Explore a diverse range of handpicked properties that cater to all your needs. Whether you're looking for luxury, comfort, or convenience — we have something for everyone.
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition-all duration-300 shadow">
            Explore
          </button>
          <button className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-md hover:bg-orange-100 transition-all duration-300 shadow">
            Contact
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="relative z-10 w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img src={house} alt="House" className="w-[90%] max-w-[600px] rounded-xl shadow-xl" />
      </div>
    </section>
  );
};

export default Hero;