"use client";
import { useRef, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Testimonial data
const testimonials = [
  {
    name: "John Doe",
    text:
      "Delak Global Synergy provided outstanding logistics services. Highly recommended!",
    image: "/images/log-man.jpg",
  },
  {
    name: "Sarah Smith",
    text: "Fast and reliable delivery. My goods arrived safely and on time.",
    image: "/images/log-man.jpg",
  },
  {
    name: "Michael Johnson",
    text: "Excellent customer service and professional handling of shipments.",
    image: "/images/log-man.jpg",
  },
  {
    name: "Emily Davis",
    text: "A trustworthy logistics partner for my business. Great experience!",
    image: "/images/log-man.jpg",
  },
  {
    name: "David Wilson",
    text:
      "Efficient and cost-effective shipping solutions. I’ll use them again!",
    image: "/images/log-man.jpg",
  },
];

const Testimonial = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    let scrollAmount = 0;
    const speed = 1;

    const scroll = () => {
      if (slider) {
        scrollAmount += speed;
        if (scrollAmount >= slider.scrollWidth / 2) {
          scrollAmount = 0; // Reset scroll to loop
        }
        slider.style.transform = `translateX(-${scrollAmount}px)`;
      }
      requestAnimationFrame(scroll);
    };

    scroll();
  }, []);

  return (
    <div className="relative overflow-hidden bg-green-950 py-10">
      <div className="max-w-6xl mx-auto px-3">
        <h2 className="text-center text-white text-3xl font-bold mb-6">
          What Our Clients Say
        </h2>
        <div className="w-full overflow-hidden">
          <div
            ref={sliderRef}
            className="flex w-max gap-6 transition-transform duration-300 ease-linear"
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="w-80 max-w-xs text-gray-800 bg-white p-4 border border-gray-300 rounded-md shadow-md text-center overflow-hidden"
              >
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="mx-auto rounded-full"
                />
                <p className="italic mt-4 break-words">"{testimonial.text}"</p>
                <h3 className="font-semibold mt-2">{testimonial.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
