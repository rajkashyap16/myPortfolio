import React, { useState } from "react";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-gray-800 text-gray-100 body-font  shadow-sm " id="Navbar">
        {/* :DESKTOP MENU */}
        <div className="container mx-auto flex justify-between items-center py-7 px-5">
          {/* Site logo and Name */}
          <a
            href="#link"
            className="flex flex-shrink-0 title-font font-medium items-center text-gray-900 md:mb-0"
          >
            <span className="ml-3 text-xl text-gray-100 font-semibold antialiased">
              Portfolio
            </span>
          </a>
          {/* Navbar */}
          <nav className="hidden md:ml-auto md:flex flex-wrap items-center justify-center text-base tracking-wide">
            <a href="/" className="mr-8 hover:text-gray-300">
              Home
            </a>
            <a href="#about" className="mr-8 hover:text-gray-300">
              About
            </a>
            <a href="#skills" className="mr-8 hover:text-gray-300">
              Skills
            </a>
            <a href="#projects" className="mr-8 hover:text-gray-300 ">
             Projects
            </a>
            <a href="#contactus" className="mr-8 hover:text-gray-300 ">
             Contact Us
            </a>
            <a href="#resume" className="mr-8 hover:text-gray-300 ">
            <button className="bg-blue-400 text-white py-2 px-6 rounded-lg hover:bg-blue-600 text-center  animate-pulse " >
           MyResume
            </button>
            </a>
          </nav>
          {/* Avatar */}
          <div className="hidden sm:inline-flex ml-auto md:ml-0 mr-4 md:mr-0 cursor-pointer "></div>
          {/* Burger icon standard */}
          <button
            className="md:hidden rounded-md active:outline-none focus:outline-none focus:ring-2 "
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 rounded-md text-gray-300 bg-gradient-to-br from-transparent to-transparent hover:text-white "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* :MOBILE MENU */}
        {isOpen && (
          <div className="w-full h-[calc(100vh-20%)] flex flex-col py-4 px-3 md:hidden bg-black/40 text-base uppercase text-center font-semibold absolute top-20 left-0 bottom-0 backdrop-blur-md z-50 ">
            <a
              href="#link"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Solutions
            </a>
            <a
              href="#link"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Prices
            </a>
            <a
              href="#link"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
            >
              About
            </a>
            <a
              href="#link"
              className="block px-3 py-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Contact
            </a>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
