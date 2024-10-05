import React from "react";
import hero from "../assets/img/cuate.png";
import Buttons from "./Buttons";

const Hero = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8 space-y-2 lg:flex-row lg:items-start lg:justify-between lg:px-8 lg:py-12 mt-9">
      {/* Text Section */}
      <div className="w-full text-center sm:mt-0 lg:text-left lg:w-1/2 space-y-1 animate-slide-in-left font-roboto">
        <h2 className="text-green font-bold text-4xl lg:text-6xl leading-tight">
          Your go-to platform
          <br />
          for hiring exceptional
        </h2>
        <h1 className="text-green-500 font-extrabold text-5xl lg:text-7xl">
          TALENT
        </h1>
        <div className="mt-2">
          <Buttons variant="secondary" size="large">
            Learn More
          </Buttons>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-start ">
        <img
          src={hero}
          alt="Hero"
          className="w-full max-w-[500px] lg:max-w-[700px] lg:mt-[-70px]"
        />
      </div>
    </div>
  );
};

export default Hero;
