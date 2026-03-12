import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: 'Interactive Web Project',
      description: 'A creative and interactive web application featuring modern design patterns, smooth animations, and responsive layout.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      liveLink: 'https://mellifluous-tulumba-3f7b77.netlify.app/',
      githubLink: '#'
    },
    {
      title: 'Digital Clock & Alarm',
      description: 'A modern digital clock and alarm application with real-time display, custom alarm setting functionality, and sleek gradient design.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=500&h=300&fit=crop',
      liveLink: 'https://digitll.netlify.app/',
      githubLink: '#'
    },
    {
      title: 'iPhone 15 Pro Showcase',
      description: 'An interactive showcase website for iPhone 15 Pro featuring stunning visuals, smooth animations, and modern design with Titanium build highlights.',
      tech: ['React', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1678652197831-2d180705cd2c?w=500&h=300&fit=crop',
      liveLink: 'https://serene-raindrop-21b51f.netlify.app/',
      githubLink: '#'
    },
    {
      title: 'Quiz App',
      description: 'Built a dynamic Quiz web application using HTML, CSS, and JavaScript with multiple choice questions, score tracking, and instant feedback.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=500&h=300&fit=crop',
      liveLink: 'https://incandescent-faloodeh-cc1ae7.netlify.app/',
      githubLink: '#'
    },
    {
      title: 'Our Campus',
      description: 'Built an interactive and responsive campus website using HTML, CSS, and JavaScript that showcases college facilities, departments, events, and announcements. Features a clean UI with smooth navigation, image gallery, and a dynamic layout designed to give students and visitors a complete overview of campus life.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=300&fit=crop',
      liveLink: 'https://kaleidoscopic-smakager-4a9960.netlify.app/house',
      githubLink: '#'
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="min-h-screen py-20 dark:bg-[#0f172a] light:bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white light:text-gray-900 mb-2">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedProjects.map((project, index) => (
            <div
              key={project.title}
              className="group dark:bg-[#1e293b] light:bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border dark:border-gray-700/50 light:border-gray-200"
              style={{
                opacity: 0,
                animation: 'fadeInUp 0.6s ease-out forwards',
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10 flex items-center justify-center"
                >
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    {project.image.startsWith('http') ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <span>{project.image}</span>
                    )}
                  </div>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <FaExternalLinkAlt className="text-white text-3xl" />
                  </div>
                </a>
                {/* GitHub Icon */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 z-20 w-10 h-10 bg-gray-800/80 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300"
                >
                  <FaGithub className="text-white text-xl" />
                </a>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold dark:text-white light:text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="dark:text-gray-300 light:text-gray-700 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-semibold rounded"
                      style={{
                        backgroundColor: tech === 'HTML' ? '#e34c26' : 
                                       tech === 'CSS' ? '#264de4' : 
                                       tech === 'JavaScript' ? '#f0db4f' : '#3b82f6',
                        color: tech === 'JavaScript' ? '#000' : '#fff'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Live Link */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 font-semibold transition-colors duration-300"
                >
                  Live <FaExternalLinkAlt className="text-sm" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {showAll ? 'Show Less' : 'View All Projects'}
            <span className={`transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}>
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
