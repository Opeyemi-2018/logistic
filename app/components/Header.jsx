"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { LiaTimesSolid } from "react-icons/lia";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const pathName = usePathname();

  return (
    <div className="relative">
      {/* Desktop Navigation */}
      <div className="fixed top-0 w-full z-40 bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-3 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/images/del-logo.png"
              alt="Delak Logo"
              width={80}
              height={80}
              priority
            />
          </Link>

          <nav>
            <ul className="md:flex hidden items-center cursor-pointer justify-between md:gap-6 gap-5 text-[18px]">
              <Link
                href="/"
                className={`font-semibold text-[17px] text-gray-600`}
              >
                Home
              </Link>
              <Link
                href="/page/ourservice"
                className={`font-semibold text-[17px] text-gray-600 ${
                  pathName === "/page/ourservice"
                    ? "text-green-800 font-bold underline"
                    : ""
                }`}
              >
                Service
              </Link>
              <Link
                href="/page/about"
                className={`font-semibold text-[17px] text-gray-600 ${
                  pathName === "/page/about"
                    ? "text-green-800 font-bold underline"
                    : ""
                }`}
              >
                About us
              </Link>
              <Link
                href="/page/blog"
                className={` font-semibold text-[17px] text-gray-600 ${
                  pathName === "/page/blog"
                    ? "text-green-800 font-bold underline"
                    : ""
                }`}
              >
                Blog
              </Link>
            </ul>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setShowNav(!showNav)}
            className="md:hidden inline cursor-pointer"
          >
            {showNav ? <LiaTimesSolid size={25} /> : <FaBars size={25} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <div
          className={`fixed left-0 top-[9%] z-20 w-full p-10 bg-white transition-transform duration-500 ease-in-out ${
            showNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-4 text-[18px]">
              <Link
                href="/"
                onClick={() => setShowNav(false)}
                className="text-2xl"
              >
                Home
              </Link>
              <Link
                href="/page/ourservice"
                onClick={() => setShowNav(false)}
                className="text-2xl"
              >
                Service
              </Link>
              <Link
                href="/page/about"
                onClick={() => setShowNav(false)}
                className="text-2xl"
              >
                About us
              </Link>
              <Link
                href="/page/blog"
                onClick={() => setShowNav(false)}
                className="text-2xl"
              >
                Blog
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
