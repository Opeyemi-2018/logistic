"use client";
import Image from "next/image";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="relative">
      {/* nav for desktop view */}
      <div className="fixed top-0 w-full  bg-white">
        <div className="max-w-6xl mx-auto px-3  flex items-center justify-between">
          <Image
            src="/images/delak.png"
            alt="Delak Logo"
            width={200}
            height={200}
            priority
          />

          <nav>
            <ul className="md:flex hidden items-center justify-between gap-4 text-[18px]">
              <li>service</li>
              <li>about us</li>
              <li>blog</li>
              <li>contact us</li>
            </ul>
          </nav>

          <button
            onClick={() => setShowNav(!showNav)}
            className="md:hidden inline"
          >
            {showNav ? <LiaTimesSolid size={25} /> : <FaBars size={25} />}
          </button>
        </div>
      </div>

      {/* nav for mobile view */}
      <div className="md:hidden inline">
        <div
          className={`absolute left-0  z-20 w-52 p-10 bg-white transition-all duration-500 ease-in-out ${
            showNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav>
            <ul className="flex flex-col  justify-between gap-4 text-[18px]">
              <li>service</li>
              <li>about us</li>
              <li>blog</li>
              <li>contact us</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
