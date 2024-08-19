import React from 'react';

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-4xl font-extrabold mb-10 text-gray-900 dark:text-gray-100 text-center">
          Skills
          <span className="block w-14 h-1.5 rounded-full mt-2 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 dark:bg-gradient-to-r from-blue-600 to-purple-600"></span>
        </h2>
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center pt-6">Programming Languages</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-4">
            <div className="flex flex-col items-center text-center">
              <img src="/logo/c.png" alt="C" className="w-16 h-16 mb-2" />
              <p className="text-lg text-gray-900 dark:text-gray-100">C</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/logo/c++.png" alt="C++" className="w-16 h-16 mb-2" />
              <p className="text-lg text-gray-900 dark:text-gray-100">C++</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/logo/java.png" alt="Java" className="w-16 h-16 mb-2" />
              <p className="text-lg text-gray-900 dark:text-gray-100">Java</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/logo/python.png" alt="python" className="w-16 h-16 mb-2" />
              <p className="text-lg text-gray-900 dark:text-gray-100">Python</p>
            </div>
          </div>
        </div>
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center pt-6">Web Development</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-4">
            <div className="flex flex-col items-center text-center">
              <img src="/logo/html.png" alt="html" className="w-16 h-16 mb-2" />
              <p className="text-lg text-gray-900 dark:text-gray-100">HTML</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/logo/css.png" alt="css" className="w-16 h-16 mb-2" />
              <p className="text-lg text-gray-900 dark:text-gray-100">CSS</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/logo/bootstrap.png" alt="Bootstrap" className="w-16 h-16 mb-2" />
              <p className="text-lg text-gray-900 dark:text-gray-100">BootStrap</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/logo/Tailwind.png" alt="Tailwind" className="w-16 h-16 mb-2" />
              <p className="text-lg text-gray-900 dark:text-gray-100">Tailwind</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/logo/JS.png" alt="javascript" className="w-16 h-16 mb-2" />
              <p className="text-lg text-gray-900 dark:text-gray-100">JavaScript</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/logo/react.png" alt="React" className="w-16 h-16 mb-2" />
              <p className="text-lg text-gray-900 dark:text-gray-100">React</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/logo/nodejs.png" alt="nodejs" className="w-16 h-16 mb-2" />
              <p className="text-lg text-gray-900 dark:text-gray-100">NodeJs</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/logo/angular.png" alt="angular" className="w-16 h-16 mb-2" />
              <p className="text-lg text-gray-900 dark:text-gray-100">AngularJs</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/logo/express-js.png" alt="Expressjs" className="w-16 h-16 mb-2" />
              <p className="text-lg text-gray-900 dark:text-gray-100">ExpressJs</p>
            </div> 
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center pt-6">DataBases</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pt-4">
          <div className="flex flex-col items-center text-center">
              <img src="/logo/mongodb.png" alt="MongoDB" className="w-16 h-16 mb-2" />
              <p className="text-lg text-gray-900 dark:text-gray-100">MongoDB</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <img src="/logo/sql.png" alt="SQL" className="w-16 h-16 mb-2" />
              <p className="text-lg text-gray-900 dark:text-gray-100">SQL</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
