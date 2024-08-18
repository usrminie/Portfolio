import React, { useState } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import ThemeToggle from './ThemeToggle';
import logo from '../assets/logo.png';

const HeroSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white h-screen flex flex-col items-center justify-center p-4 select-none">
      {/* Logo and Name on the top left */}
      <div className="absolute top-4 left-4 flex items-center space-x-4">
        <img src={logo} alt="Logo" className="h-12 w-12 rounded-full shadow-md border-2 border-white ml-4" />
      </div>

      {/* Menu items centered at the top */}
      <div className="absolute top-4 inset-x-0 flex justify-center items-center">
        <div className="hidden md:flex md:items-center space-x-4 bg-white bg-opacity-20 dark:bg-gray-700 dark:bg-opacity-50 rounded-full px-6 py-2">
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
          <a href="/resume" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-opacity-70 hover:bg-blue-900 dark:hover:bg-blue-700 transition-all rounded-md font-bold">
            Resume
          </a>
          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Hamburger menu for mobile */}
        <div className=" absolute top-1 right-6 md:hidden ">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <GiHamburgerMenu className="w-8 h-8 text-gray-900 dark:text-white" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-lg mt-2 absolute inset-x-4 top-16 z-20">
          <ul className="flex flex-col items-center space-y-2 py-4">
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
              <a href="/resume" className="block px-4 py-2 text-gray-900 dark:text-white hover:bg-blue-900 dark:hover:bg-blue-700 transition-all rounded-md font-bold">
                Resume
              </a>
            </li>
            <li>
              {/* Theme Toggle */}
              <ThemeToggle />
            </li>
          </ul>
        </div>
      )}

      {/* Hero Content */}
      <div className="flex flex-col-reverse md:flex-row items-center w-full max-w-6xl mx-auto mt-28 mb-8">
        <div className="text-center md:text-left md:flex-1">
          <h1 className="text-5xl md:text-6xl font-bold mb-2 flex items-center justify-center md:justify-start bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            Hello,<span className="wave ml-3 animate-wave">👋</span>
          </h1>
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            I'm Shalini Singh
          </h2>
          <p className="text-xl md:text-2xl mb-6">A Passionate Developer & Designer</p>
          <div className="flex justify-center md:justify-start space-x-6 mb-6">
            <a
              href="https://www.linkedin.com/in/shalini-singh1117/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FaLinkedin className="w-10 h-10" />
            </a>
            <a
              href="https://github.com/usrminie"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-500 transition-transform transform hover:scale-110"
            >
              <FaGithub className="w-10 h-10" />
            </a>
          </div>
          <div className="flex justify-center md:justify-start">
            <a
              href="#about"
              className="inline-block px-6 py-2 text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white dark:bg-gray-800 dark:text-white rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all"
            >
              About Me
            </a>
          </div>
        </div>
        <div className="flex-shrink-0 mb-6 md:mb-0 md:ml-12 relative">
          <div className="absolute inset-0 z-10"></div>
          <div className="relative rounded-full p-2 bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700">
            <img
              src="/profile.png"
              alt="Shalini Singh"
              className="w-96 h-96 md:w-[30rem] md:h-[30rem] lg:w-[32rem] lg:h-[32rem] rounded-full border-4 border-gray-900 dark:border-black-800 shadow-lg hover:shadow-2xl transition-shadow transform hover:scale-110 pointer-events-none"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
