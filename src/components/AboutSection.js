import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl md:text-4xl font-extrabold mb-8 text-gray-900 dark:text-gray-100 text-center relative">
          About Me
          <span className="block w-20 h-1.5 rounded-full mt-2 mx-auto bg-gradient-to-r from-blue-800 to-purple-800 dark:bg-gradient-to-r from-blue-800 to-purple-800"></span>
        </h2>
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-lg md:text-1xl text-gray-700 dark:text-gray-300 leading-relaxed text-center space-y-4">
            I am Shalini Singh, an aspiring software engineer with an MCA from Kamla Nehru Institute of Technology (CGPA 8.98) and a BCA from Babu Banarasi Das University (CGPA 9.16). Skilled in C, C++, Java, Python, and MEAN stack, I excel in data structures, algorithms, AI, and software engineering.
            <br />
            <br />
            My hands-on training includes a MEAN stack project at Digipodium, enhancing application performance by 20%. I have developed machine learning projects like Plant Leaf Disease Prediction and Tomato Leaf Prediction with high accuracy.
            <br />
            <br />
            I hold certifications in Java OOPs, Google Ads, and Google Cloud Cybersecurity. My accomplishments include participating in workshops on ethical hacking and big data, and competing in Tech Quiz.
            <br />
            <br />
            I aim to leverage my technical skills to solve real-world problems and drive advancements in the tech industry.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
