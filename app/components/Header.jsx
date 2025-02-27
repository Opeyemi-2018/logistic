"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="relative">
      {/* nav for desktop view */}
      <div className="fixed top-0 w-full z-20 bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-3  flex items-center justify-between">
          <Link href={"/"}>
            <Image
              src="/images/delak-logo.jpeg"
              alt="Delak Logo"
              width={65}
              height={65}
              priority
            />
          </Link>

          <nav>
            <ul className="md:flex hidden items-center cursor-pointer justify-between gap-4 text-[18px]">
              <Link href={"/service"}>service</Link>
              <Link href={"/about"}>about us</Link>
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
          className={`fixed left-0 top-16 z-20 w-52 p-10 bg-white transition-all duration-500 ease-in-out ${
            showNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav>
            <ul className="flex flex-col  justify-between gap-4 text-[18px]">
              <Link href={"/"}>service</Link>
              <Link href={"/about"}>about us</Link>
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
