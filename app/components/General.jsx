"use client";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const General = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="px-3 max-w-6xl mx-auto pt-5 pb-10">
      <div className="flex justify-between md:flex-row flex-col md:gap-6 gap-0 items-center mt-10">
        {/* Image sliding in from the right */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Image
            src="/images/log-2.jpg"
            width={800}
            height={800}
            alt="Logistics Image"
          />
        </motion.div>

        {/* Text sliding in from the left */}
        <motion.p
          initial={{ x: "100%", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="md:text-2xl text-[19px] text-gray-700"
        >
          We offer a full range of logistics solutions, including freight
          forwarding, material handling, and supply chain management. Whether
          it's bulk cargo or specialized equipment, we ensure smooth movement
          and storage.
        </motion.p>
      </div>
    </div>
  );
};

export default General;
