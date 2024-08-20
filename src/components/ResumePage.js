import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/logo.png';

const ResumePage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white flex flex-col justify-between">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent dark:via-blue-800 opacity-50"></div>
      <div className="absolute top-4 left-4 flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-12 w-12 rounded-full shadow-md border-2 border-white ml-4" />
      </div>
      {/* Menu items centered at the top */}
      <div className="absolute top-4 inset-x-0 flex justify-center items-center">
        <div className="hidden md:flex md:items-center space-x-4 bg-white bg-opacity-60 dark:bg-gray-700 dark:bg-opacity-50 rounded-full px-6 py-2">
          <a href="/" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-opacity-70 hover:bg-blue-900 dark:hover:bg-blue-700 transition-all rounded-md font-bold">
            Home
          </a>
          <a href="#education" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-opacity-70 hover:bg-blue-900 dark:hover:bg-blue-700 transition-all rounded-md font-bold">
            Education
          </a>
          <a href="#skills" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-opacity-70 hover:bg-blue-900 dark:hover:bg-blue-700 transition-all rounded-md font-bold">
            Skills
          </a>
          <a href="#projects" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-opacity-70 hover:bg-blue-900 dark:hover:bg-blue-700 transition-all rounded-md font-bold">
            Projects
          </a>
          <a href="#contact" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-opacity-70 hover:bg-blue-900 dark:hover:bg-blue-700 transition-all rounded-md font-bold">
            Contact
          </a>
          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Hamburger menu for mobile */}
        <div className="absolute top-1 right-6 md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <GiHamburgerMenu className="w-8 h-8 text-gray-900 dark:text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-animation rounded-lg shadow-lg mt-2 absolute inset-x-4 top-16 z-20">
          <ul className="flex flex-col items-center space-y-2 py-4">
            <li>
              <a href="/" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-blue-900 dark:hover:bg-blue-700 transition-all rounded-md font-bold">
                Home
              </a>
            </li>
            <li>
              <a href="#education" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-blue-900 dark:hover:bg-blue-700 transition-all rounded-md font-bold">
                Education
              </a>
            </li>
            <li>
              <a href="#skills" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-blue-900 dark:hover:bg-blue-700 transition-all rounded-md font-bold">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-blue-900 dark:hover:bg-blue-700 transition-all rounded-md font-bold">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-blue-900 dark:hover:bg-blue-700 transition-all rounded-md font-bold">
                Contact
              </a>
            </li>
            <li>
              {/* Theme Toggle */}
              <ThemeToggle />
            </li>
          </ul>
        </div>
      )}
      <div className="relative flex-grow container mx-auto px-4 py-8 flex flex-col items-center mt-20">
        <div className="w-full h-full flex justify-center items-center overflow-hidden">
          <iframe
            src="/Shalini_Singh_Resume.pdf"
            title="Resume"
            className="w-full h-full max-w-screen-md max-h-[80vh] aspect-ratio"
            style={{ aspectRatio: '8.5/11' }}
          />
        </div>
        <div className="mt-4 flex justify-center">
          <a
            href="/Shalini_Singh_Resume.pdf"
            download
            className="inline-block px-6 py-2 text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="bg-gradient-animation text-gray-900 dark:text-white p-2 md:flex md:items-center space-x-4 mt-6 relative">
        <div className="container mx-auto text-center rounded-full bg-white bg-opacity-60 dark:bg-gray-700 dark:bg-opacity-50 py-4 ">
          <p>&copy; 2024 Shalini Singh. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
