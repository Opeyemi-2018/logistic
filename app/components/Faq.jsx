"use client";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How can I track my shipment?",
    answer:
      "You can track your shipment in real-time through our website using the tracking number provided upon dispatch.",
  },
  {
    question: "Does Delak offer international shipping?",
    answer:
      "Yes, we provide international shipping services with customs clearance support to ensure smooth deliveries across borders.",
  },
  {
    question: "What are the delivery timeframes?",
    answer:
      "Delivery times vary based on destination and shipping method, with options for same-day, next-day, and standard delivery.",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can reach our support team via phone, email, or live chat on our website for assistance with your shipments.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto py-6 px-3">
      <h2 className="text-2xl font-semibold text-center mb-6 text-green-800 underline">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border p-4 rounded-md bg-white shadow-md">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left  font-medium"
            >
              {faq.question}
              {openIndex === index ? (
                <FaMinus size={18} className="text-green-600" />
              ) : (
                <FaPlus size={18} className="text-green-600" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
