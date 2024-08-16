import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-950 to-purple-950 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full shadow-md border-2 border-white" />
          <div className="text-xl font-extrabold">Shalini Singh</div>
        </div>
        <div className="block md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:w-auto`}>
          <ul className="flex flex-col md:flex-row md:space-x-2">
            <li className="relative group">
              <Link to="/" className="block px-4 py-2 hover:bg-opacity-70 hover:bg-blue-900 transition-all rounded-md font-bold">Home</Link>
            </li>
            <li className="relative group">
              <a href="#about" className="block px-4 py-2 hover:bg-opacity-70 hover:bg-blue-900 transition-all rounded-md font-bold">About</a>
            </li>
            <li><a href="#education" className="block px-4 py-2 hover:bg-opacity-70 hover:bg-blue-900 transition-all rounded-md font-bold">Education</a></li>
            <li><a href="#skills" className="block px-4 py-2 hover:bg-opacity-70 hover:bg-blue-900 transition-all rounded-md font-bold">Skills</a></li>
            <li><a href="#projects" className="block px-4 py-2 hover:bg-opacity-70 hover:bg-blue-900 transition-all rounded-md font-bold">Projects</a></li>
            <li><a href="#contact" className="block px-4 py-2 hover:bg-opacity-70 hover:bg-blue-900 transition-all rounded-md font-bold">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
