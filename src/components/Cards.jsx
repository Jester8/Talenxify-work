import React from "react";
import en from "../assets/logo/en.png";

const Cards = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-transparent">
      <p className="text-sm font-bold text-blue mb-2">Our Loyal Partners</p>
      <h1 className="text-3xl font-bold text-blue mb-6">OUR TOP PARTNERS</h1>
      <div className="flex justify-center w-full">
        <div className="flex flex-wrap justify-center gap-8 w-full md:flex-nowrap overflow-hidden custom-scrollbar">
          {[1, 2, 3, 4].map((card) => (
            <div
              key={card}
              className="w-64 h-20 rounded-none overflow-hidden shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105 lg:w-56 lg:h-20"
            >
              <img
                src={en}
                alt="Enforca"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
