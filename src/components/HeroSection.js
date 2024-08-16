import React from 'react';
import ThemeToggle from './ThemeToggle';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 text-gray-900 dark:text-white h-screen flex items-center justify-center p-4 select-none overflow-hidden">
      <div className="absolute top-4 right-4 z-30">
        <ThemeToggle />
      </div>

      {/* Background abstract shapes */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute -top-10 -left-20 w-80 h-80 bg-gradient-to-r from-blue-500 to-purple-600 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-20 right-0 w-72 h-72 bg-gradient-to-r from-pink-500 to-yellow-500 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-600 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-4000"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-6000"></div>
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center w-full max-w-6xl mx-auto z-20">
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
              href="/resume"
              className="inline-block px-8 py-4 text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white dark:bg-gray-800 dark:text-white rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all"
            >
              Resume
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
