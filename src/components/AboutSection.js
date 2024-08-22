import React from 'react';
import aboutImage from '../assets/edit.png'; 

const AboutSection = () => {
  return (
    <section id="about" className="relative py-16 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent dark:via-blue-800 opacity-50"></div>
      <div className="flex flex-col items-center justify-center p-5 select-none">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-gray-100 text-center relative z-10">
          About Me
          <span className="block w-20 h-1.5 rounded-full mt-2 mx-auto bg-gradient-to-r from-blue-800 to-purple-800 dark:bg-gradient-to-r from-blue-800 to-purple-800"></span>
        </h2>
        <div className="flex flex-col md:flex-row md:items-start max-w-5xl mx-auto relative z-10 p-4">
          <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/2 md:pr-8">
            <img
              src={aboutImage}
              alt="About Me"
              className="w-full h-auto mt-12"/>
          </div>
          <div className="md:w-1/2 text-lg md:text-lg text-gray-9500 dark:text-gray-300 leading-relaxed text-center mt-12 font-medium">
            <p className="space-y-4">
              I am Shalini Singh, an aspiring software engineer with an MCA from Kamla Nehru Institute of Technology (CGPA 8.98) and a BCA from Babu Banarasi Das University (CGPA 9.16). Skilled in C, C++, Java, Python, and MEAN stack, I excel in data structures, algorithms, AI, and software engineering.
              <br />
              <br />
              My hands-on  developing machine learning projects like Plant Leaf Disease Prediction and Tomato Leaf Prediction with high accuracy.
              <br />
              <br />
              I hold certifications in Java OOPs, Google Ads, and Google Cloud Cybersecurity. My accomplishments include participating in workshops on ethical hacking and big data, and competing in Tech Quiz.
              <br />
              <br />
              I aim to leverage my technical skills to solve real-world problems and drive advancements in the tech industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
