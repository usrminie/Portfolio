import React from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      imgSrc: '/logo/project-1.png',
      title: 'Plant Leaf Disease Prediction',
      description: 'The Plant Leaf Disease Prediction project uses AI and machine learning to detect plant diseases from leaf images. It provides fast, accurate diagnosis of multiple diseases, offers treatment recommendations, and features a user-friendly interface.',
      link: 'https://github.com/usrminie/Plant-Leaf-Disease-Dedication',
      technologies: ['Python', 'Flask', 'PyTorch','Machine Learning','Deep Learning'],
    },
    {
      imgSrc: '/logo/porject-2.png',
      title: 'Tomato Leaf Disease Prediction',
      description: 'The Tomato Leaf Disease Prediction project uses machine learning to identify and classify various diseases in tomato leaves. It features a user-friendly interface where users can upload images of tomato leaves, and the system predicts the disease type, enabling early detection and effective crop management.',
      link: 'https://github.com/usrminie/Tomato-Leaf-Prediction',
      technologies: ['React', 'FastApi', 'Tensorflow', 'Machine Learning', 'Deep Learning'],
    },
  ];

  return (
    <section id="projects" className="relative py-16 bg-gradient-to-r from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-900">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-400 to-transparent dark:via-blue-800 opacity-50"></div>
      <div className="container mx-auto px-4 mt-6">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-900 dark:text-gray-100 text-center relative z-10">
          Projects
          <span className="block w-20 h-1.5 rounded-full mt-2 mx-auto bg-gradient-to-r from-blue-800 to-purple-800 dark:bg-gradient-to-r from-blue-800 to-purple-800"></span>
        </h2>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1 p-5 relative z-10 ">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row pt-4 pb-4 ">
              <img src={project.imgSrc} alt={project.title} className="w-full md:w-1/3 h-full object-cover px-4 py-4  " />
              <div className="p-4 flex-col">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-start pt-8">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mt-4 text-left text-justify mb-4  text-slate-950 pl-2 pr-2 ">{project.description}</p>
                  
                  {/* Technologies used */}
                  <div className="flex flex-wrap mt-4 mb-8 pl-2 pr-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-600 text-white text-sm font-semibold mr-2 mb-2 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-4 text-lg font-medium text-white bg-gradient-to-r from-blue-800 to-purple-800 rounded-full hover:from-blue-700 hover:to-purple-700 transition duration-300 ease-in-out "
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
