import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiNextdotjs, SiMysql } from 'react-icons/si';
import { BsLightbulb, BsPeople, BsClock, BsGraphUp, BsCodeSlash } from 'react-icons/bs';
import { MdOutlinePsychology, MdOutlineGroups } from 'react-icons/md';

const Skills = () => {
  const techSkills = [
    {
      name: 'HTML5',
      icon: FaHtml5,
      color: 'text-orange-500',
      description: 'Semantic HTML markup with modern standards and accessibility best practices'
    },
    {
      name: 'CSS3',
      icon: FaCss3Alt,
      color: 'text-blue-500',
      description: 'Advanced CSS including Flexbox, Grid, animations, and responsive design'
    },
    {
      name: 'JavaScript',
      icon: FaJsSquare,
      color: 'text-yellow-400',
      description: 'Modern ES6+ JavaScript with async/await, promises, and functional programming'
    },
    {
      name: 'React',
      icon: FaReact,
      color: 'text-cyan-400',
      description: 'Building interactive UIs with React Hooks, Context API, and state management'
    },
    {
      name: 'Node.js',
      icon: FaNodeJs,
      color: 'text-green-500',
      description: 'Server-side JavaScript runtime for building scalable backend applications'
    },
    {
      name: 'Express.js',
      icon: SiExpress,
      color: 'text-gray-300',
      description: 'Fast, minimalist web framework for Node.js REST API development'
    },
    {
      name: 'MongoDB',
      icon: SiMongodb,
      color: 'text-green-600',
      description: 'NoSQL database for flexible, scalable data storage and management'
    },
    {
      name: 'Git',
      icon: FaGitAlt,
      color: 'text-orange-600',
      description: 'Version control system for tracking changes and collaborating on projects'
    },
    {
      name: 'Tailwind CSS',
      icon: SiTailwindcss,
      color: 'text-cyan-400',
      description: 'Utility-first CSS framework for rapid UI development'
    },
    {
      name: 'Next.js',
      icon: SiNextdotjs,
      color: 'text-white',
      description: 'React framework for production with SSR, SSG, and routing'
    },
    {
      name: 'GitHub',
      icon: FaGithub,
      color: 'text-white',
      description: 'Code hosting platform for version control and collaboration'
    },
    {
      name: 'MySQL',
      icon: SiMysql,
      color: 'text-blue-500',
      description: 'Relational database management system for structured data storage'
    },
    {
      name: 'Bootstrap',
      icon: FaBootstrap,
      color: 'text-purple-500',
      description: 'Popular CSS framework for building responsive, mobile-first websites'
    },
    {
      name: 'VS Code',
      icon: BsCodeSlash,
      color: 'text-blue-400',
      description: 'Powerful code editor with extensions for modern web development'
    }
  ];

  const softSkills = [
    {
      name: 'Problem Solving',
      icon: BsLightbulb,
      color: 'text-yellow-300',
      description: 'Analytical thinking and creative solutions'
    },
    {
      name: 'Team Work',
      icon: MdOutlineGroups,
      color: 'text-blue-400',
      description: 'Collaborative and supportive team player'
    },
    {
      name: 'Communication',
      icon: BsPeople,
      color: 'text-green-400',
      description: 'Clear and effective communication skills'
    },
    {
      name: 'Time Management',
      icon: BsClock,
      color: 'text-purple-400',
      description: 'Efficient task prioritization and deadline management'
    },
    {
      name: 'Adaptability',
      icon: BsGraphUp,
      color: 'text-pink-400',
      description: 'Quick learner and adaptable to new technologies'
    },
    {
      name: 'Critical Thinking',
      icon: MdOutlinePsychology,
      color: 'text-indigo-400',
      description: 'Logical analysis and decision-making abilities'
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        {/* Tech Skills Section */}
        <div className="mb-20">
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold dark:text-white light:text-gray-900 mb-2">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-center dark:text-white/70 light:text-gray-600 mb-12 text-lg">Hover over cards to see details</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {techSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="relative h-48 perspective-1000"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flip-card w-full h-full">
                    {/* Front */}
                    <div className="flip-card-front glass-effect rounded-2xl p-6 flex flex-col items-center justify-center">
                      <IconComponent className={`text-6xl mb-3 ${skill.color}`} />
                      <h3 className="text-white font-semibold text-center text-sm">{skill.name}</h3>
                    </div>
                    {/* Back */}
                    <div className="flip-card-back glass-effect rounded-2xl p-4 flex flex-col items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                      <IconComponent className={`text-4xl mb-2 ${skill.color}`} />
                      <h3 className="text-white font-bold text-center text-sm mb-2">{skill.name}</h3>
                      <p className="text-white/80 text-xs text-center leading-relaxed">{skill.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold dark:text-white light:text-gray-900 mb-2">
              Soft Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="group glass-effect rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="flex flex-col items-center text-center">
                    <IconComponent className={`text-5xl mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300`} />
                    <h3 className="text-white font-semibold text-sm mb-2">{skill.name}</h3>
                    <p className="text-white/70 text-xs">{skill.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
