import React from 'react';

// Define skills data
const skillsData = {
  programmingLanguages: [
    { src: '/logo/c.png', alt: 'C', name: 'C' },
    { src: '/logo/c++.png', alt: 'C++', name: 'C++' },
    { src: '/logo/java.png', alt: 'Java', name: 'Java' },
    { src: '/logo/python.png', alt: 'Python', name: 'Python' },
  ],
  webDevelopment: [
    { src: '/logo/html.png', alt: 'HTML', name: 'HTML' },
    { src: '/logo/css.png', alt: 'CSS', name: 'CSS' },
    { src: '/logo/Tailwind.png', alt: 'Tailwind', name: 'Tailwind' },
    { src: '/logo/JS.png', alt: 'JavaScript', name: 'JavaScript' },
    { src: '/logo/react.png', alt: 'React', name: 'React' },
    { src: '/logo/sql.png', alt: 'SQL', name: 'SQL' },
  ],
  meanStack: [
    { src: '/logo/mongodb.png', alt: 'MongoDB', name: 'MongoDB' },
    { src: '/logo/express-js.png', alt: 'Express.js', name: 'Express.js' },
    { src: '/logo/angular.png', alt: 'Angular', name: 'Angular' },
    { src: '/logo/nodejs.png', alt: 'Node.js', name: 'Node.js' },
  ],
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 relative">
      <div className="absolute inset-0 z-0 opacity-10 bg-pattern"></div>
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl font-extrabold mb-12 text-gray-900 dark:text-gray-100 text-center font-header">
          Skills & Expertise
          <span className="block w-36 h-1.5 rounded-full mt-4 mx-auto bg-gradient-to-r from-blue-800 to-purple-800 dark:bg-gradient-to-r from-blue-800 to-purple-800"></span>
        </h2>

        <div className="space-y-12">
          {/* Programming Languages */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100 text-center">
              Programming Languages
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {skillsData.programmingLanguages.map((skill, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-sm transition-transform transform hover:scale-105 hover:shadow-md p-3 group"
                >
                  <img src={skill.src} alt={skill.alt} className="w-12 h-12 mb-2 filter drop-shadow-sm" />
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Web Development */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100 text-center">
              Web Development
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {skillsData.webDevelopment.map((skill, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-sm transition-transform transform hover:scale-105 hover:shadow-md p-3 group"
                >
                  <img src={skill.src} alt={skill.alt} className="w-12 h-12 mb-2 filter drop-shadow-sm" />
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* MEAN Stack */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100 text-center">
              MEAN Stack
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {skillsData.meanStack.map((skill, index) => (
                <div
                  key={index}
                  className="relative flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-lg shadow-sm dark:shadow-sm transition-transform transform hover:scale-105 hover:shadow-md p-3 group"
                >
                  <img src={skill.src} alt={skill.alt} className="w-12 h-12 mb-2 filter drop-shadow-sm" />
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
