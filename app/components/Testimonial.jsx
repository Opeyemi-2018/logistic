"use client";
import Image from "next/image";

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
    text: " Their marketing expertise helped us expand our brand.",
    image: "/images/log-man.jpg",
  },
  {
    name: "Michael Johnson",
    text: "Excellent customer service and professional handling of shipments.",
    image: "/images/log-man.jpg",
  },
  {
    name: "Emily Davis",
    text:
      "Their strategic approach, professionalism, and innovative solutions set them apart from others in the industry",
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
  return (
    <div
      className="bg-green-900 bg-blend-multiply bg-cover bg-center md:py-8 py-3 overflow-hidden"
      style={{ backgroundImage: "url('/images/log-2.jpg')" }}
    >
      {" "}
      <div className="max-w-6xl mx-auto px-3">
        <h2 className="text-center text-white text-3xl font-bold mb-6">
          What Our Clients Say
        </h2>
        <div className="w-full overflow-hidden">
          <div className="flex w-max gap-6  animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="w-96 max-w-xs text-gray-800 bg-white p-4 border border-gray-300 rounded-md shadow-md text-center whitespace-normal"
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
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          white-space: nowrap;
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Testimonial;
