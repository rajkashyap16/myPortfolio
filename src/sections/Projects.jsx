// src/components/Projects.jsx

import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase my skills and projects, built using React and Tailwind CSS.',
    tech: ['React', 'Tailwind CSS'],
    github: 'https://github.com/your-username/portfolio',
    demo: 'https://your-portfolio-site.netlify.app',
    image: 'https://via.placeholder.com/400x200',
  },
  {
    title: 'Todo App',
    description: 'A simple yet powerful todo app with CRUD operations and local storage.',
    tech: ['React', 'JavaScript'],
    github: 'https://github.com/your-username/todo-app',
    demo: 'https://your-todo-app.netlify.app',
    image: 'https://via.placeholder.com/400x200',
  },
  {
    title: 'Weather App',
    description: 'A weather forecast app using OpenWeatherMap API with live search functionality.',
    tech: ['React', 'API'],
    github: 'https://github.com/your-username/weather-app',
    demo: 'https://your-weather-app.netlify.app',
    image: 'https://via.placeholder.com/400x200',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white dark:bg-gray-900 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">Projects</h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-white px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-lg flex items-center gap-2"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline text-lg flex items-center gap-2">
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
