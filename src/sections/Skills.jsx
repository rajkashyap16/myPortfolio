import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import '../cssFiles/Skills.css'

// Skills data
const skills = [
  { name: "HTML5", level: "90%", icon: <FaHtml5 className="text-orange-600 text-5xl" /> },
  { name: "CSS3", level: "85%", icon: <FaCss3Alt className="text-blue-600 text-5xl" /> },
  { name: "JavaScript", level: "80%", icon: <FaJsSquare className="text-yellow-400 text-5xl" /> },
  { name: "React", level: "75%", icon: <FaReact className="text-cyan-400 text-5xl" /> },
];



// Skill icon component with tooltip at TOP + progress bar
const SkillIcon = ({ skill }) => {
  return (
    <div className="tooltip relative flex flex-col items-center">
      {/* Tooltip (now above the icon) */}
      <div className="tooltiptext absolute bottom-full mb-3 w-48 px-4 py-3 bg-white dark:bg-gray-800 text-gray-800 dark:text-white text-sm rounded-lg opacity-0 transition-opacity duration-200 shadow-lg">
        {/* Skill name */}
        <p className="text-center font-bold">{skill.name}</p>

        {/* Progress bar */}
        <div className="w-full mt-2">
          <div className="bg-gray-300 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full"
              style={{ width: skill.level }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">
            {skill.level}
          </p>
        </div>
      </div>

      {/* Skill Icon */}
      <div className="p-4 bg-white dark:bg-gray-800 rounded-full shadow-md cursor-pointer transition-transform duration-300 hover:scale-110">
        {skill.icon}
      </div>
    </div>
  );
};


const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100 dark:bg-gray-900 py-20 pt-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-16">My Skills</h2>
        <div className="flex justify-center items-center gap-12 flex-wrap">
          {skills.map((skill, index) => (
            <SkillIcon key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
