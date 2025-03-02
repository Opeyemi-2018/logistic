"use client";
import Count from "@/app/components/Count";
import NewsLetter from "@/app/components/NewsLetter";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "The Future of Logistics and Transportation",
    content:
      "Logistics plays a vital role in global trade, ensuring goods move efficiently. With advancements in technology, transportation has become smarter and more connected. Businesses now rely on integrated supply chains, using trucks, ships, and air transport to meet growing demands. Innovation drives the future of logistics.",
    image: "/images/blog-1.jpg",
  },
  {
    id: 2,
    title: "Expanding Logistics Beyond Borders",
    content:
      "Cross-border trade is the backbone of economic growth. Companies utilize land, air, and sea transportation to ensure seamless delivery. Efficient warehousing and distribution networks enhance global supply chains. Embracing digital solutions helps businesses track shipments and optimize logistics processes effectively.",
    image: "/images/blog-2.jpg",
  },
  {
    id: 3,
    title: "Tourism and Travel Services in Logistics",
    content:
      "Logistics extends beyond goods to people. The tourism industry relies on efficient transport systems like airlines, trains, and road networks. Smooth visa processing, travel packages, and passenger services enhance travel experiences. A well-managed transportation network ensures seamless journeys worldwide.",
    image: "/images/blog-3.jpg",
  },
  {
    id: 4,
    title: "Marketing Strategies for Logistics Businesses",
    content:
      "Marketing is essential for logistics companies to attract clients and expand services. Digital marketing, SEO, and targeted ads help reach global customers. Building strong brand awareness through social media and networking ensures business growth. Effective marketing drives demand and customer engagement in logistics.",
    image: "/images/blog-4.jpg",
  },
];

const Blog = () => {
  const [expanded, setExpanded] = useState({});

  const toggleShowMore = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };
  return (
    <div className="min-h-screen">
      <div
        className="relative  px-3 w-full md:h-[300px] h-[200px] 
                 bg-green-900 bg-blend-multiply bg-cover bg-center transition-all duration-1000 ease-in-out overflow-hidden"
        style={{
          backgroundImage: `url(/images/blog-1.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="md:text-5xl capitalize text-3xl max-w-6xl mx-auto text-white md:mt-40 mt-32 font-semibold">
          Our <span className="text-green-950 bg-white px-2">Blog</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto md:mt-20 mt-10 px-3">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">

        {blogs.map(({ id, title, content, image }) => {
          const words = content.split(" ");
          const shortContent = words.slice(0, 25).join(" ");
          const isExpanded = expanded[id];

          return (
            <div key={id} className=" ">
              <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover rounded-md mb-3"
              />
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="mt-2 text-gray-700">
                {isExpanded ? content : `${shortContent}...`}
              </p>
              <button
                onClick={() => toggleShowMore(id)}
                className="text-blue-500 mt-2 underline"
              >
                {isExpanded ? "Show Less" : "Show More"}
              </button>
            </div>
          );
        })}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-3 mt-7">
        <Count/>
      </div>
      <div className=" my-7">
        <NewsLetter/>
      </div>
    </div>
  );
};

export default Blog;
