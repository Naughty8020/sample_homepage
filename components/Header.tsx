"use client";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type HeaderProps = {
  bgClass?: string;
  title: string;
};

export default function Header({
  bgClass = "bg-transparent",
  title = "",
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`w-full h-[150px] md:h-[400px] ${bgClass} absolute top-0 left-0 z-0`}
      >
        <h1 className="font-shippori text-black text-4xl md:text-6xl lg:text-8xl text-left mt-32 md:mt-60 px-5">
          {title}
        </h1>
      </div>

      <header className="fixed top-0 left-0 w-full flex items-center pe-2 md:pe-6 z-[600]">
        <div className="w-full h-4 lg:h-7 bg-white absolute top-0 left-0 z-10"></div>

        <div className="flex items-center bg-white ps-2 pe-7 pt-4 pb-2 lg:px-6 lg:py-7 rounded-br-4xl gap-2 md:gap-3 lg:gap-4 z-20 relative">
          <Image
            src="/earth.png"
            alt="Logo"
            width={70}
            height={70}
            className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"
          />
          <div className="font-shippori text-3xl md:text-4xl lg:text-5xl font-bold text-black">
            <Image
              src="/icon2.png"
              alt="Sample Company"
              width={200}
              height={50}
              className="w-24 h-10 lg:w-48 lg:h-12 inline-block"
            />
          </div>
        </div>

        <nav className="hidden md:flex ml-auto space-x-6 lg:space-x-9 bg-white px-12 lg:px-20 py-4 rounded-bl-xl shadow-md z-20 relative">
          <Link
            href="/"
            className="text-black font-bold text-2xl lg:text-3xl hover:text-gray-600 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-black font-bold text-2xl lg:text-3xl hover:text-gray-600 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-black font-bold text-2xl lg:text-3xl hover:text-gray-600 transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-black font-bold text-2xl lg:text-3xl hover:text-gray-600 transition-colors duration-200"
          >
            お問合わせ
          </Link>
        </nav>

        <button
          className="md:hidden ml-auto mt-6 p-2 rounded-lg bg-black hover:bg-gray-800 transition-colors duration-200 z-[1000] relative"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <CloseIcon className="w-8 h-8 text-white" />
          ) : (
            <MenuIcon className="w-8 h-8 text-white" />
          )}
        </button>

        <nav
          className={`
            md:hidden
            flex flex-col 
            fixed top-0 right-0 
            bg-black text-white 
            w-full h-screen 
            justify-center items-center 
            space-y-8
            transition-all duration-300 ease-in-out
            ${
              isOpen
                ? "opacity-100 visible translate-x-0"
                : "opacity-0 invisible translate-x-full"
            }
          `}
          style={{ zIndex: isOpen ? 500 : -1 }}
        >
          <Link
            href="/"
            className="text-3xl hover:text-gray-400 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-3xl hover:text-gray-400 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-3xl hover:text-gray-400 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-3xl hover:text-gray-400 transition-colors duration-200"
            onClick={() => setIsOpen(false)}
          >
            お問合わせ
          </Link>
        </nav>
      </header>
    </>
  );
}
