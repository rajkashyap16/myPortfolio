
import React from 'react';
import { FaUserGraduate, FaUniversity, FaSchool, FaCode, FaRocket } from 'react-icons/fa';

import aboutData from '../data/aboutData.json';
import ScrollReveal from '../components/ScrollReveal';

// A map to dynamically render icons based on the iconName from the data.
const iconMap = {
  FaUserGraduate: FaUserGraduate,
  FaUniversity: FaUniversity,
  FaSchool: FaSchool,
  FaCode: FaCode,
  FaRocket: FaRocket,
};

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-gray-900 py-16 pt-20 px-6 md:px-20 about-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Map over the aboutData to render each item. */}
          {aboutData.map((item, index) => {
            const IconComponent = iconMap[item.iconName];
            return (
              // Each item is wrapped in the ScrollReveal component to create a staggered animation effect.
              <ScrollReveal key={item.id} delay={index * 0.1}>
                <div className="flex items-start gap-4  ">
                 
                    <IconComponent className="text-2xl dark:text-gray-300 mt-1" />
               
                  <p className="text-gray-700 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: item.text }} />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
