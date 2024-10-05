import React from "react";
import { Link } from "react-router-dom";

const Buttons = () => {
  return (
    <div className="flex items-center space-x-3 hidden md:flex">
      <Link
        to="/signup"
        className="bg-green text-white px-6 md:px-4 lg:px-[50px] lg:py-2 py-2 md:py-2 lg:py-3 text-sm md:text-md lg:text-lg font-semibold  rounded-full  transition duration-300"
      >
        SIGN UP
      </Link>
      <Link
        to="/login"
        className="bg-white text-green px-6 md:px-8 lg:px-[50px] lg:py-2 py-2 md:py-2  text-sm md:text-md lg:text-lg font-semibold rounded-full border border-green hover:bg-green transition duration-300"
      >
        LOGIN
      </Link>
    </div>
  );
};

export default Buttons;
