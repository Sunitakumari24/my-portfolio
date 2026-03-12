import React, { useState } from 'react';

const Experience = () => {
  const [showAll, setShowAll] = useState(false);

  const experiences = [
    {
      role: 'Student',
      company: 'NavGurukul Foundation Social Welfare',
      period: '2024 - Present',
      location: 'Remote',
      description: 'Gained proficiency in HTML, CSS, JavaScript, Git/GitHub, and built soft skills in teamwork, leadership, and problem-solving.',
      icon: '💼'
    },
    {
      role: 'Internship',
      company: 'Educate Girls NGO',
      period: '2023 - 2024',
      location: 'On-site',
      description: 'Improved girls\' enrollment and retention (ages 7–14) through door-to-door surveys and community awareness programs in rural schools.',
      icon: '🎓'
    },
    {
      role: 'Fellowship',
      company: 'i-Saksham Learning Foundation',
      period: '2020 - 2022',
      location: 'On-site',
      description: 'Taught 120 students (Grades 1–5), engaged 100 parents, and gained skills in teaching, leadership, and teamwork.',
      icon: '🌟'
    }
  ];

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 1);

  return (
    <section id="experience" className="min-h-screen py-20 dark:bg-[#0f172a] light:bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white light:text-gray-900 mb-2">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Toggle Button */}
        <div className="flex justify-center mb-16">
          <button
            onClick={() => setShowAll(!showAll)}
            className="relative inline-flex items-center gap-3 px-8 py-3 bg-gray-700/50 backdrop-blur-md border border-gray-600/50 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-600/50 group"
          >
            <span className="relative z-10">
              {showAll ? 'Show Less' : 'View All Experience'}
            </span>
            <span className={`transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-500 hidden md:block"></div>
            
            {displayedExperiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-16 md:mb-20 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex flex-col md:flex md:items-center`}
                style={{
                  opacity: 0,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${index * 0.2}s`
                }}
              >
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 dark:border-[#0f172a] light:border-white z-10 shadow-lg shadow-blue-500/50"></div>
                
                {/* Experience Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className="dark:bg-[#1e293b] light:bg-gray-50 rounded-xl p-6 md:p-8 shadow-xl dark:shadow-blue-900/20 light:shadow-gray-300/50 hover:shadow-2xl transition-all duration-300 border dark:border-gray-700/50 light:border-gray-200">
                    <h3 className="text-2xl md:text-3xl font-bold dark:text-white light:text-gray-900 mb-3">
                      {exp.role}
                    </h3>
                    <p className="dark:text-gray-300 light:text-gray-700 font-medium mb-2 text-lg">
                      {exp.company}
                    </p>
                    <p className="dark:text-gray-400 light:text-gray-600 text-sm mb-4">
                      {exp.period}
                    </p>
                    <p className="dark:text-gray-300 light:text-gray-700 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
