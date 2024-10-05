import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import ImageCard from "../components/ImageCard";

const Home = () => {
  return (
    <div>
      <Hero />
      <hr />
      <Cards />
      <hr />
      <ImageCard />
    </div>
  );
};

export default Home;
