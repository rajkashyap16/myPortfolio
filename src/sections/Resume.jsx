// src/components/Resume.jsx

import React, { useState } from 'react';
import { FaDownload } from 'react-icons/fa';
import Buttons from '../components/Buttons';
import ScrollReveal from '../components/ScrollReveal'; // Import ScrollReveal

const Resume = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    const link = document.createElement('a');
    link.href = '/myPortfolio/Resume.pdf';
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <section id="resume" className="bg-white dark:bg-gray-900 py-16 pt-20 px-6 md:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal> {/* Wrap content with ScrollReveal */}
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">Resume</h2>

          <p className="text-gray-600 dark:text-gray-300 mb-8">
            You can download my latest resume in PDF format below. It includes details about my education,
            technical skills, and projects.
          </p>
        </ScrollReveal>

        {/* Resume Preview Image */}
        <ScrollReveal delay={0.2}> {/* Add ScrollReveal to the image */}
          <div className="mb-8">
            <img
              src="https://i.postimg.cc/j207Hw3C/resume.png" // Placeholder image for resume preview
              alt="Resume Preview"
              className="mx-auto h-64 rounded-lg shadow-lg border-2 border-gray-200 dark:border-gray-700"
            />
          </div>
        </ScrollReveal>

        {/* Download Button */}
        <ScrollReveal delay={0.4}> {/* Add ScrollReveal to the button */}
          <div className="text-center flex justify-center items-center">
            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className={`group relative h-12 w-48 overflow-hidden rounded-2xl text-lg font-bold text-white flex items-center justify-center ${isDownloading ? 'bg-gray-500' : 'bg-green-500'}`}>
              {isDownloading ? (
                'Downloading...'
              ) : (
                <>
                  <FaDownload className="-ml-0.5 mr-2 h-4 w-4" />
                  Download Resume
                </>
              )}
              <div className="absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30"></div>
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Resume;
