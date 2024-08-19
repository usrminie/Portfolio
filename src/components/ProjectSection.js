import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      imgSrc: '/logo/laptop.png',
      title: 'Plant Leaf Disease Prediction',
      description: 'Brief description of the project.',
      link: 'https://example.com',
    },
    {
      imgSrc: '/logo/laptop.png',
      title: 'Tomato Leaf Disease Prediction',
      description: 'Brief description of the project.',
      link: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 mt-12">
        <h2 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100 text-center">
          Projects
          <span className="block w-20 h-1.5 rounded-full mt-2 mx-auto bg-gradient-to-r from-blue-800 to-purple-800 dark:bg-gradient-to-r from-blue-800 to-purple-800"></span>
        </h2>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 pt-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row">
              <img src={project.imgSrc} alt={project.title} className="w-full md:w-1/2 h-full object-cover px-8 py-8" />
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center py-4">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-2 text-center">{project.description}</p>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 py-2 px-4 text-lg font-medium text-white bg-gradient-to-r from-blue-800 to-purple-800 rounded-full hover:from-blue-700 hover:to-purple-700 transition duration-300 ease-in-out text-center"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
