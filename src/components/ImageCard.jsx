import React from "react";
import img1 from "../assets/img/1.png";
import img2 from "../assets/img/2.png";
import img3 from "../assets/img/3.png";
import img4 from "../assets/img/4.png";
import img5 from "../assets/img/5.png";
import img6 from "../assets/img/6.png";

const ImageCard = () => {
  const images = [
    { src: img1, hideOnMobile: false },
    { src: img2, hideOnMobile: true },
    { src: img3, hideOnMobile: true },
    { src: img4, hideOnMobile: false },
    { src: img5, hideOnMobile: true },
    { src: img6, hideOnMobile: false },
  ];

  return (
    <div className="flex flex-col items-center p-2 bg-transparent mt-3">
      <p className="text-sm font-bold text-blue mb-1">Features</p>
      <h1 className="text-3xl font-bold text-blue mb-4">HOW IT WORKS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-4xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex justify-center ${
              image.hideOnMobile ? "hidden sm:flex" : ""
            }`}
          >
            <img
              src={image.src}
              alt={`Partner ${index + 1}`}
              className="w-[600px] h-auto transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
