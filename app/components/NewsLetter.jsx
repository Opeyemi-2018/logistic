"use client";
import { useState } from "react";

const NewsLetter = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }
    setMessage("Thank you for subscribing!");
    setEmail(""); // Clear input after submission
  };

  return (
    <div
      className="relative px-3 w-full md:py-16 py-10 flex items-center justify-center
                 bg-black/70 bg-blend-darken bg-cover bg-center transition-all duration-1000 ease-in-out overflow-hidden"
      style={{
        backgroundImage: `url(/images/log-11.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-center w-full max-w-lg">
        <h2 className="md:text-3xl text-2xl font-bold text-white">
          Subscribe to Our Newsletter
        </h2>
        <p className="mt-2 text-gray-300">
          Stay updated with the latest news and special offers.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-6 flex flex-col sm:flex-row md:items-center items-start gap-3 w-full"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 text-black rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-black text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 hover:text-white transition-all duration-300 md:w-full w-32 sm:w-auto"
          >
            Subscribe
          </button>
        </form>

        {message && <p className="mt-4 text-sm text-white">{message}</p>}
      </div>
    </div>
  );
};

export default NewsLetter;
