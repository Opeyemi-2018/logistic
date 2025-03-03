import Contact from "@/app/components/Contact";
import Count from "@/app/components/Count";
import NewsLetter from "@/app/components/NewsLetter";
import Image from "next/image";

const services = [
  {
    icon: "/images/general-logistic.jpg",
    title: "General Logistics Services",
    description:
      "We provide top-tier logistics solutions, ensuring seamless movement of goods across local and international routes. Our services include freight forwarding, cargo handling, and end-to-end supply chain management. Whether you need transportation for bulk goods or specialized logistics solutions, we guarantee timely and secure delivery with real-time tracking.",
  },
  {
    icon: "/images/transport.jpg",
    title: "Comprehensive Transportation",
    description:
      "With a vast network of transportation solutions, we manage the movement of goods using various carriers, including trucks, lorries, ships, and railways. Our fleet is equipped to handle containerized cargo, perishable items, and heavy machinery, ensuring smooth and efficient delivery to any destination.",
  },
  {
    icon: "/images/warehouse.jpg",
    title: "Warehousing & Material Management",
    description:
      "Our warehousing services provide secure and climate-controlled storage solutions. We offer inventory management, packaging, and distribution services, protecting goods against environmental and accidental damage. Our strategically located warehouses ensure quick access to markets, minimizing delays and maximizing efficiency.",
  },
  {
    icon: "/images/visas.jpg",
    title: "Visa & Travel Services",
    description:
      "We simplify the visa application process by offering professional assistance for travel documents, work permits, and immigration services. Whether for business, tourism, or study purposes, we guide you through every step, ensuring hassle-free approval. Additionally, we provide airline ticket bookings, hotel reservations, and travel insurance services.",
  },
  {
    icon: "/images/tour.jpg",
    title: "Tour & Sightseeing Packages",
    description:
      "Experience the best of local and international tourism with our well-curated tour packages. From adventure tours to cultural excursions, we handle all logistics, including transportation, accommodation, and guided tours. Our services cater to individuals, groups, and corporate travelers seeking unforgettable experiences.",
  },
  {
    icon: "/images/log-5.jpg",
    title: "Import & Export Solutions",
    description:
      "We specialize in facilitating international trade by handling the import and export of goods, machinery, and essential materials. Our services cover customs clearance, documentation, and compliance with international trade regulations. We ensure safe and cost-effective shipping to and from global markets.",
  },
  {
    icon: "/images/log-11.jpg",
    title: "Marketing & Distribution",
    description:
      "Our expertise in advertising, marketing, and distribution helps businesses reach local and international markets effectively. We provide tailored marketing strategies, product placement, and supply chain solutions to ensure brand visibility and sales growth. Whether launching a new product or expanding into new territories, we offer comprehensive market solutions.",
  },
];

const OurService = () => {
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
        <div className="md:text-5xl capitalize text-3xl max-w-6xl mx-auto text-white md:mt-40 mt-32 font-semibold">
          Our <span className="text-green-950 bg-white px-2">Service</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10">We Offers</h2>
        <div className="relative border-l-4 border-green-800">
          {services.map((service, index) => (
            <div key={index} className="ml-6 mb-10">
              <div className="absolute -left-3 w-6 h-6 bg-green-800 rounded-full"></div>
              <div className="flex md:flex-row items-center flex-col md:gap-8 gap-2">
                <div>
                  <Image
                    src={service.icon}
                    alt={service.title}
                    priority
                    width={600}
                    height={600}
                    className=" object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                  <p className="text-gray-700">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div>
        <Count />
      </div>

      <div className="md:mt-10 mt-5">
        <Contact />
      </div>

      <NewsLetter />
    </div>
  );
};

export default OurService;
