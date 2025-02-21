"use client";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-950 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold">Delak</h2>
          <p className="mt-2 text-gray-400">
            Delivering seamless logistics solutions with efficiency and
            reliability.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-green-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400">Email: info@delak.com</p>
          <p className="text-gray-400">Phone: +123 456 7890</p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" className="hover:text-green-400">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="hover:text-green-400">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-green-400">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="hover:text-green-400">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} Delak. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
