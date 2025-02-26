import React from "react";
import Hero from "./components/Hero";
import General from "./components/General";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import Solution from "./components/Solution";
import Count from "./components/Count";

const Home = () => {
  return (
    <div>
      <Hero />
      <Solution />
      <General />
      <Testimonial />
      <Count />
      <Faq />
    </div>
  );
};

export default Home;
