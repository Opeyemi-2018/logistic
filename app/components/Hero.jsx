"use client";
import { motion } from "framer-motion";
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
      image: "/images/log-3.jpg",
      title: "Multi-Mode Transportation Services",
      description:
        "From road to air, sea, and rail – we ensure your goods reach their destination safely and on time.",
    },
    {
      image: "/images/log-5.jpg",
      title: "Secure Warehousing & Distribution",
      description:
        "State-of-the-art storage facilities with real-time tracking and inventory management.",
    },
    {
      image: "/images/log-6.jpg",
      title: "Global Import & Export Services",
      description:
        "Connecting businesses worldwide with seamless import and export solutions.",
    },
    {
      image: "/images/log-8.jpg",
      title: "Express Courier & Last-Mile Delivery",
      description:
        "Fast, reliable, and secure parcel delivery services for businesses and individuals.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % heroContent.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`relative mt-16 px-3 w-full h-[460px] flex items-center flex-col gap-10 justify-center 
              bg-black/70 bg-blend-darken transition-all duration-1000 ease-in-out`}
      style={{
        backgroundImage: `url(${heroContent[index].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 1 }}
        className="text-center text-white "
      >
        <div>
          <h1 className="text-3xl lg:text-6xl font-bold px-2">
            {heroContent[index].title}
          </h1>
          <p className="text-lg mt-4">{heroContent[index].description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
