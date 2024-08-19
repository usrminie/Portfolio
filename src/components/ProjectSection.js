import React from 'react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100 text-center">
          Projects
          <span className="block w-20 h-1.5 rounded-full mt-2 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 dark:bg-gradient-to-r from-blue-600 to-purple-600"></span>
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pt-6">
          <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden">
            <img src="/path-to-project-image.jpg" alt="Project" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Project Title</h3>
              <p className="text-gray-600 dark:text-gray-300">Brief description of the project.</p>
            </div>
          </div><div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden">
            <img src="/path-to-project-image.jpg" alt="Project" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Project Title</h3>
              <p className="text-gray-600 dark:text-gray-300">Brief description of the project.</p>
            </div>
          </div>
          <div className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden">
            <img src="/path-to-project-image.jpg" alt="Project" className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Project Title</h3>
              <p className="text-gray-600 dark:text-gray-300">Brief description of the project.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
