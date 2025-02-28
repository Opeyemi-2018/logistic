"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Count from "../../components/Count";
import { FaNetworkWired } from "react-icons/fa";
import Contact from "../../components/Contact";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      <div
        className="relative  px-3 w-full md:h-[300px] h-[200px] 
                 bg-green-900 bg-blend-multiply bg-cover bg-center transition-all duration-1000 ease-in-out overflow-hidden"
        style={{
          backgroundImage: `url(/images/log-11.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="md:text-5xl  capitalize text-3xl max-w-6xl mx-auto text-white md:mt-40 mt-32 font-semibold">
          about <span className="text-green-950 bg-white px-2">us</span>
        </div>
      </div>

      <div
        ref={ref}
        className="flex md:flex-row flex-col max-w-6xl mx-auto p-3 gap-6 items-center"
      >
        <motion.p
          initial={{ x: "-100%", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="md:w-1/2 text-[20px]"
        >
          <span className="font-bold"> Delak Global Synergy</span> is a dynamic
          company dedicated to providing top-tier logistics, visa processing,
          and marketing solutions. With a strong commitment to efficiency,
          reliability, and customer satisfaction, we bridge global connections,
          helping individuals and businesses thrive. Our logistics division
          ensures seamless transportation of goods, offering secure, timely, and
          cost-effective solutions across various industries.
        </motion.p>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="md:w-1/2 w-full"
        >
          <Image
            src="/images/log-6.jpg"
            width={600}
            height={400}
            className="w-[500px] h-auto object-cover "
            alt="Logistics and Travel"
          />
        </motion.div>
      </div>

      <div
        className="bg-green-900 bg-blend-multiply bg-cover bg-center md:py-8 py-3"
        style={{ backgroundImage: "url('/images/log-2.jpg')" }}
      >
        <div className="max-w-6xl mx-auto md:my-8 my-4 p-6 rounded-lg flex md:flex-row flex-col md:gap-6 gap-4 items-center justify-between text-white ">
          <div className="">
            <p className="md:text-5xl text-2xl font-semibold mb-4">
              Our Mission
            </p>
            <p>
              At Delak Global Synergy, our mission is to provide innovative,
              reliable, and seamless solutions in logistics, visa processing,
              and marketing. We are committed to delivering efficient
              transportation, hassle-free travel documentation, and
              result-driven marketing strategies that empower businesses and
              individuals to achieve their goals effortlessly. Through
              excellence, and professionalism.
            </p>
          </div>

          <div className="">
            <p className="md:text-5xl text-2xl text-nowrap font-semibold mb-4">
              Our Vision
            </p>
            <p>
              Our vision is to be a leading force in logistics, travel
              solutions, and marketing services, recognized for our dedication
              to efficiency, integrity, and customer satisfaction. We strive to
              set new standards in global trade, seamless travel facilitation,
              and impactful brand growth, ensuring that businesses and
              individuals can navigate the world with confidence and ease.
            </p>
          </div>
        </div>
      </div>

      <div className="md:my-20 my-5">
        <Count />
      </div>
      <div className="md:mt-10 mt-5">
        <Contact />
      </div>
    </div>
  );
};

export default About;
