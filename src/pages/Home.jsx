import React from "react";
import Hero from "../components/Hero";
import Cards from "../components/Cards";
import ImageCard from "../components/ImageCard";
import React, { useState } from "react";
import hero from "../assets/img/cuate.png";
import HomeLayout from "../components/layout/HomeLayout";
import Button from "../components/Button";
import Partners from "../components/Partners";
import Work from "../components/Work";
import WorkCard from "../components/WorkCard";
import RecruiterCard from "../components/RecruiterCard";

const Home = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = () => {};
  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const recruiter = [
    "When you hire exceptional talent, it elevates the overall performance of your team, leading to better results and collaboration.",
    "Talented employees are often more adaptable, allowing your organization to navigate changes and grow in a dynamic environment.",
    "Having top talent gives your organization a competitive edge in the market, setting you apart from competitors.",
    "Skilled professionals contribute to higher efficiency and productivity, helping your team achieve its goals faster.",
    "Talented individuals bring fresh ideas and perspectives, driving innovation and enhancing problem-solving.",
  ];
  const talent = [
    "Recruiters have networks that give you access to the best candidates, including passive job seekers.",
    "Recruiters handle the screening, interviews, and initial vetting, allowing you to focus on your core tasks.",
    "They understand industry-specific needs and can match the right talent with the right opportunities.",
    "Recruiters ensure you hire someone with not just the right skills but also the right cultural fit for your team.",
    "With recruitment experts managing the process, you’ll experience fewer delays and faster hiring decisions.",
  ];
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
