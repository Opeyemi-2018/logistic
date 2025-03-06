"use client"
import { useState } from "react";
import { BsFillSendFill } from "react-icons/bs";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaRegEnvelope } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // For success/error message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://formspree.io/f/mgvawavr", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", contact: "", message: "" }); // Clear form
      } else {
        setStatus("Error sending message. Try again later.");
      }
    } catch (error) {
      setStatus("Something went wrong.");
    }
  };

  return (
    <div className="max-w-6xl mx-auto flex md:flex-row flex-col gap-4 my-8">
      <div className="md:px-0 px-3">
        <h1 className="sm:text-2xl text-1xl font-bold underline text-green-800 capitalize">
          get in touch with us
        </h1>
        <p className="text-gray-600 mb-2">
          Contact us with your house details if you have a house to sell for us.
        </p>

        <div className="flex items-center gap-3 mb-2">
          <HiOutlineLocationMarker size={30} className="text-green-800 bg-gray-100 p-2 rounded-full" />
          <div>
            <h1 className="font-semibold ">Our office address</h1>
            <p className="text-gray-600">1234 Business St, City, Country</p>
          </div>
        </div>
        <div className="flex items-center gap-3 my-4">
          <FaRegEnvelope size={30} className="text-green-800 bg-gray-100 p-2 rounded-full" />
          <div>
            <h1 className="font-semibold ">Email</h1>
            <p className="text-gray-950">delakglobalsynergy@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <MdOutlineLocalPhone size={30} className="text-green-800 bg-gray-100 p-2 rounded-full" />
          <div>
            <h1 className="font-semibold ">Phone</h1>
            <p className="text-gray-600">+33758332017</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-5 md:px-5 px-3 sm:rounded-sm rounded-sm flex-1">
        <h1 className="my-2 font-semibold">Looking to make an enquiry</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="p-2 bg-white rounded-sm outline-none"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="p-2 bg-white rounded-sm outline-none"
            required
          />
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Contact"
            className="p-2 bg-white rounded-sm outline-none"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="Your message"
            className="outline-none p-2 bg-white rounded-sm"
            required
          ></textarea>
          <button
            type="submit"
            className="p-3 text-white flex items-center font-semibold justify-center capitalize gap-4 rounded-md bg-green-800 hover:bg-green-950"
          >
            Send Message <BsFillSendFill size={20} />
          </button>
        </form>
        {status && <p className="mt-20 text-green-700 bg-white rounded-md p-2 inline font-bold">{status}</p>}
      </div>
    </div>
  );
};

export default Contact;
