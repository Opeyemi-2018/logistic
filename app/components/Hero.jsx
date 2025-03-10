"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
  const heroContent = [
    {
      image: "/images/log-1.jpg",
      title: "Reliable & Efficient Logistics Solutions",
      description:
        "Seamless transportation, warehousing, and distribution services tailored to meet your business needs.",
    },
    {
      image: "/images/marketing.jpg",
      title: "Marketing and Advertising",
      description:
        "Providing advertising, marketing, distribution, and sales of goods and machinery, both locally and globally, to expand market reach and business growth.",
    },
    {
      image: "/images/warehouse.jpg",
      title: "Secure Warehousing & Distribution",
      description:
        "State-of-the-art storage facilities with real-time tracking and inventory management.",
    },
    {
      image: "/images/visa.jpg",
      title: "Travel and Tour Operations",
      description:
        "Offering tour packages, visa services, ticket booking for airlines, ships, and railways, along with sightseeing and travel assistance for both local and international clients.",
    },
    {
      image: "/images/log-6.jpg",
      title: "Global Import & Export Services",
      description:
        "Connecting businesses worldwide with seamless import and export solutions.",
    },
    {
      image: "/images/log-7.jpg",
      title: "Express Courier & Last-Mile Delivery",
      description:
        "Fast, reliable, and secure parcel delivery services for businesses and individuals.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative mt-16 px-3 w-full h-[400px] flex items-center flex-col gap-10 justify-center
                 bg-black/70 bg-blend-darken transition-all duration-1000 ease-in-out overflow-hidden"
      style={{
        backgroundImage: `url(${heroContent[index].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="text-center text-white absolute w-full px-4"
        >
          <h1 className="text-3xl lg:text-6xl font-bold px-2">
            {heroContent[index].title}
          </h1>
          <p className="text-lg mt-4">{heroContent[index].description}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Hero;
