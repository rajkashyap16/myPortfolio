// src/components/About.jsx

import React from 'react';
import { FaUserGraduate, FaUniversity, FaSchool, FaCode, FaRocket } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaUserGraduate className="text-2xl text-blue-600 mt-1" />
              <p className="text-gray-700 dark:text-gray-300">
                <strong className="text-blue-600">Raj Kashyap</strong>, aspiring <strong>frontend developer</strong> passionate about building <strong>clean, responsive UIs</strong>.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaUniversity className="text-2xl text-green-500 mt-1" />
              <p className="text-gray-700 dark:text-gray-300">
                Pursuing <strong className="text-green-600">MBA (2nd year)</strong> with a specialization in <strong>Marketing</strong>.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaUniversity className="text-2xl text-yellow-500 mt-1" />
              <p className="text-gray-700 dark:text-gray-300">
                Completed <strong className="text-yellow-600">BCA</strong> from <strong>BIMT College</strong> with <strong>72%</strong>.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaSchool className="text-2xl text-pink-500 mt-1" />
              <p className="text-gray-700 dark:text-gray-300">
                Passed <strong className="text-pink-600">12th</strong> from <strong>KV Public School</strong>.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <FaCode className="text-2xl text-purple-600 mt-1" />
              <p className="text-gray-700 dark:text-gray-300">
                Completed a <strong className="text-purple-600">6-month Web Development course</strong> from <strong>Ducat</strong>.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaCode className="text-2xl text-indigo-500 mt-1" />
              <p className="text-gray-700 dark:text-gray-300">
                Skilled in <strong className="text-indigo-500">React, JavaScript, HTML, CSS</strong> and <strong>frontend development</strong>.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaCode className="text-2xl text-teal-500 mt-1" />
              <p className="text-gray-700 dark:text-gray-300">
                Built multiple <strong>personal projects</strong> focused on <strong>UI/UX</strong> and <strong>responsiveness</strong>.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <FaRocket className="text-2xl text-red-500 mt-1" />
              <p className="text-gray-700 dark:text-gray-300">
                Looking for <strong className="text-red-500">opportunities</strong> as a <strong>Frontend Developer</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
