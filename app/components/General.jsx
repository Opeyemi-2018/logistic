import Image from "next/image";
const General = () => {
  return (
    <div className="px-3 max-w-6xl mx-auto py-10">
      <div className="flex flex-col gap-3 ">
        <h1 className="text-2xl text-green-950 underline animate-bounce">
          OUR SOLUTION
        </h1>
        <p className="text-[19px]">
          Delak Global Synergy provides fast, reliable, and secure logistics
          solutions, including freight and cargo transportation by land, sea, or
          air, secure warehousing with real-time inventory tracking, express
          delivery services with same-day and next-day shipping, seamless global
          logistics with customs clearance, real-time tracking for shipments,
          and scalable e-commerce and corporate logistics solutions, ensuring
          excellence in every step of the supply chain.
        </p>
      </div>
      <div className="flex justify-between md:flex-row flex-col md:gap-6 gap-0 items-center mt-10">
        <Image src="/images/log-2.jpg" width={400} height={400} />
        <p className="md:text-2xl text-[19px] text-gray-700">
          We offer a full range of logistics solutions, including freight
          forwarding, material handling, and supply chain management. Whether
          it's bulk cargo or specialized equipment, we ensure smooth movement
          and storage.
        </p>
      </div>
    </div>
  );
};

export default General;
