"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const General = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div ref={ref} className="px-3 max-w-6xl mx-auto pt-5 pb-10 overflow-hidden">
      <div className="flex justify-between md:flex-row flex-col md:gap-6 gap-0 items-center mt-10">
        {/* Image sliding in from the right */}
        <motion.div
  initial={{ x: "-50%", opacity: 0 }} // Reduced from -100%
  animate={inView ? { x: 0, opacity: 1 } : {}}
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
          animate={inView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="md:text-2xl text-[19px] text-gray-700"
        >
          We offer a full range of logistics solutions, including freight
          forwarding, material handling, and supply chain management. Whether
          it's bulk cargo or specialized equipment, we ensure smooth movement
          and storage.
        </motion.p>
      </div>

      <div className="p-6">
        <div className="p-6">
          {/* Timeline Container */}
          <div className="border-l-4 border-green-500 pl-4">
            {/* Importation and Exportation Section */}
            <div className="relative">
              <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-6 top-0"></div>
              <motion.p
                initial={{ x: "100%", opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-2xl font-bold mb-2"
              >
                Importation and Exportation of Goods and Machinery
              </motion.p>
              <p className="text-gray-700">
                Global trade relies on seamless import and export operations.
                Businesses must navigate customs, logistics, and international
                regulations while ensuring efficient supply chain management.
                Whether dealing with heavy machinery or consumer goods, a robust
                trade strategy leads to economic growth and global market
                expansion.
              </p>
            </div>

            {/* Marketing, Distribution, and Sales Section */}
            <div className="relative mt-6">
              <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-6 top-0"></div>
              <motion.p
                initial={{ x: "100%", opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-2xl font-bold mb-2"
              >
                Marketing, Distribution, and Sales
              </motion.p>
              <p className="text-gray-700">
                A strong marketing and distribution strategy is the backbone of
                successful sales. Businesses utilize digital marketing, targeted
                advertising, and efficient sales channels to connect with
                consumers. Expanding both locally and internationally requires
                data-driven decision-making and innovative customer engagement
                techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
