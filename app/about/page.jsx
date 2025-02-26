"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Count from "../components/Count";
import { FaNetworkWired } from "react-icons/fa";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen">
      <div
        className="relative  px-3 w-full md:h-[300px] h-[200px] 
                 bg-black/80 bg-blend-darken transition-all duration-1000 ease-in-out overflow-hidden"
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
          We are a comprehensive logistics and travel solutions provider,
          dedicated to facilitating seamless movement of goods and people across
          Nigeria and the globe. Our diverse range of services is built on a
          foundation of reliability, efficiency, and a commitment to exceeding
          our clients' expectations.
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
              To provide reliable, efficient, and innovative logistics and
              travel solutions that empower our clients to achieve their goals.
            </p>
          </div>

          <div className="">
            <p className="md:text-5xl text-2xl text-nowrap font-semibold mb-4">
              Our Vision
            </p>
            <p>
              To be a leading force in the logistics and travel industry,
              recognized for our commitment to excellence and customer
              satisfaction.
            </p>
          </div>
        </div>
      </div>

      <div>
        <Count />
      </div>
    </div>
  );
};

export default About;
