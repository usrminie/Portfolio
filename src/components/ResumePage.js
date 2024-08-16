import React from 'react';
import ThemeToggle from './ThemeToggle';
import Navbar from './Navbar';
import Footer from './Footer';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-90 text-gray-900 dark:text-white flex flex-col justify-between">
      <Navbar />
      <div className="relative flex-grow container mx-auto px-4 py-8 flex flex-col items-center">
        <div className="absolute top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <div className="w-full h-full flex justify-center items-center overflow-hidden">
          <iframe
            src="/resume.pdf"
            title="Resume"
            className="w-full h-full max-w-screen-md max-h-[80vh] aspect-ratio"
            style={{ aspectRatio: '8.5/11' }}
          />
        </div>
        <div className="mt-4 flex justify-center">
          <a
            href="/resume.pdf"
            download
            className="inline-block px-8 py-4 text-lg font-medium bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all"
          >
            Download Resume
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResumePage;
