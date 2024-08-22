import React from 'react';

const EducationSection = () => {
  return (
    <section id="education" className="relative py-16 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent dark:via-blue-800 opacity-50 "></div>
      <div className="container mx-auto px-4 mt-12 relative z-10">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100 text-center">
          Education
          <span className="block w-24 h-1.5 rounded-full mt-2 mx-auto bg-gradient-to-r from-blue-800 to-purple-800 dark:bg-gradient-to-r from-blue-800 to-purple-800"></span>
        </h2>
        <div className="flex flex-col space-y-8 p-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Master's Degree in Computer Applications (M.C.A)</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-bold">Kamla Nehru Institute of Technology, Sultanpur</p>
            <p className="text-md text-gray-600 dark:text-gray-400">CGPA: <b>8.98</b></p>
            <p className="text-md text-gray-600 dark:text-gray-400">Year of Graduation: 2024</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100">Bachelor's Degree in Computer Applications (B.C.A)</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 font-bold">Babu Banarasi Das University, Lucknow</p>
            <p className="text-md text-gray-600 dark:text-gray-400">CGPA: <b>9.16</b></p>
            <p className="text-md text-gray-600 dark:text-gray-400">Year of Graduation: 2019</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
