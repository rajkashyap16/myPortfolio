// src/components/Projects.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import ScrollReveal from '../components/ScrollReveal';
// Import the project data from the JSON file.
// The data is an array of objects, where each object represents a project.
// To add, remove, or modify projects, you can edit the `projects.json` file in the `src/data` directory.
// Each project object has the following properties:
// - title: The title of the project.
// - description: A brief description of the project.
// - tech: An array of strings representing the technologies used.
// - github: The URL to the GitHub repository.
// - demo: The URL to the live demo.
// - image: The URL of the project image.
// - colSpan: The number of columns the project card should span in the bento grid (e.g., 'md:col-span-2').
// - rowSpan: The number of rows the project card should span in the bento grid (e.g., 'md:row-span-2').
import projects from '../data/projects.json';

/**
 * A card component to display a single project.
 * @param {object} project - The project data object.
 * @param {boolean} isHovered - Whether the card is currently being hovered.
 * @param {function} onMouseEnter - Function to call when the mouse enters the card.
 * @param {function} onMouseLeave - Function to call when the mouse leaves the card.
 */
const ProjectCard = ({ project, isHovered, onMouseEnter, onMouseLeave }) => {
  // Variants for the card animation using framer-motion.
  // Defines the styles for the initial, hover, and dimmed states.
  const cardVariants = {
    initial: { scale: 1, boxShadow: 'none' },
    hover: { scale: 1.05, boxShadow: '0 0 40px rgba(155, 93, 229, 0.8)' }, // Spotlight effect on hover
    dimmed: { scale: 0.95, opacity: 0.7, boxShadow: '0 0 20px rgba(255, 255, 255, 0.2)' }, // Dimmed effect for non-hovered cards
  };

  return (
    <motion.div
      // The className is dynamically generated based on the project's colSpan and rowSpan properties.
      className={`bento-item relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden cursor-pointer border-2 border-transparent ${project.colSpan} ${project.rowSpan}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      variants={cardVariants}
      // The animation state is determined by whether the card is hovered or not.
      // If no card is hovered, all cards are in the 'initial' state.
      // If a card is hovered, it's in the 'hover' state, and the others are in the 'dimmed' state.
      animate={isHovered === null ? 'initial' : (isHovered ? 'hover' : 'dimmed')}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <img
        src={project.image}
        alt={`${project.title} screenshot`}
        className="w-full h-full object-cover"
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 p-6 text-white">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="text-sm mt-2">{project.description}</p>
        {/* Display the tech stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech, idx) => (
            <span key={idx} className="px-2 py-1 bg-white/20 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>
        {/* Links to GitHub and live demo */}
        <div className="flex gap-4 mt-6">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent-purple transition-colors">
            <FaGithub size={20} />
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="hover:text-accent-purple transition-colors">
            <FaExternalLinkAlt size={20} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

/**
 * The Projects section component.
 * Displays a bento grid of projects.
 */
const Projects = () => {
  // State to keep track of the currently hovered project index.
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="projects" className="bg-black py-16 pt-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 dark:text-white mb-16">
            Featured Projects
          </h2>
        </ScrollReveal>

        {/* 
          The bento grid container.
          - `grid-cols-1 sm:grid-cols-2 md:grid-cols-4`: A responsive grid that's 1 column on extra-small screens, 2 columns on small screens, and a 4-column bento grid on medium screens and up.
          - `gap-4`: Sets the gap between grid items (1rem).
          - `md:grid-flow-dense`: This is the magic for the bento grid. It tells the grid to try to fill in any holes to create a more compact layout.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:grid-flow-dense">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              isHovered={hoveredIndex === index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
