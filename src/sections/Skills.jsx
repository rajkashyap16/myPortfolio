// src/components/Skills.jsx

import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from 'react-icons/fa';

const skills = [
  { name: 'HTML5', level: '90%', icon: <FaHtml5 className="text-orange-600 text-4xl" /> },
  { name: 'CSS3', level: '85%', icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
  { name: 'JavaScript', level: '80%', icon: <FaJsSquare className="text-yellow-400 text-4xl" /> },
  { name: 'React', level: '75%', icon: <FaReact className="text-cyan-400 text-4xl" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 dark:bg-gray-900 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12">Skills</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              {skill.icon}
              <p className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-200">{skill.name}</p>

              <div className="w-full mt-3">
                <div className="bg-gray-300 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full"
                    style={{ width: skill.level }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{skill.level}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;