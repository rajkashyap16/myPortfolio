// src/components/Resume.jsx

import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Buttons from '../components/Buttons';

const Resume = () => {
  return (
    <section id="resume" className="bg-white dark:bg-gray-900 py-16 px-6 md:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Resume</h2>

        <p className="text-gray-600 dark:text-gray-300 mb-8">
          You can download my latest resume in PDF format below. It includes details about my education,
          technical skills, and projects.
        </p>

        <a
          href="/resume.pdf" // Replace this with your actual resume file path
          download>
              <Buttons name="Download Resume"/>
     
        </a>
      </div>
    </section>
  );
};

export default Resume;
