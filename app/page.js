import React from "react";
import Hero from "./components/Hero";
import General from "./components/General";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";

const Home = () => {
  return (
    <div>
      <Hero />
      <General />
      <Testimonial />
      <Faq />
    </div>
  );
};

export default Home;
