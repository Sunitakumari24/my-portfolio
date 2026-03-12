import React, { useState } from 'react';

const Education = () => {
  const [showAll, setShowAll] = useState(false);

  const educationData = [
    {
      degree: 'Web Development',
      field: 'Full Stack Development',
      institution: 'NavGurukul',
      year: '2024 - Present',
      grade: 'In Progress',
      icon: '💻',
      description: 'Currently, I am learning  a Web Development at NavGurukul Kishanganj(Bihar), focusing on full-stack technologies such as HTML, CSS, JavaScript, React, Databases, and Backend, along with soft skills like teamwork, communication, and problem-solving.'
    },
    {
      degree: 'Bachelor of Arts (B.A.)',
      field: 'Arts',
      institution: 'Munger University ',
      year: '2019 - 2022',
      grade: 'CGPA: 7.5/10',
      icon: '🎓',
      description: 'Graduated with honors in Arts, developed critical thinking and communication skills'
    }
  ];

  const displayedEducation = showAll ? educationData : educationData.slice(0, 1);

  return (
    <section id="education" className="min-h-screen py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white light:text-gray-900 mb-2">
            Education
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Toggle Button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="relative inline-flex items-center gap-3 px-8 py-3 glass-effect rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
          >
            <span className="relative z-10">
              {showAll ? 'Show Less' : 'View All Education'}
            </span>
            <span className={`transform transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}>
              ▼
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {displayedEducation.map((edu, index) => (
            <div
              key={index}
              className={`glass-effect rounded-2xl p-6 md:p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl transform ${
                index === 1 && showAll ? 'animate-slideIn' : ''
              }`}
              style={{
                animationDelay: `${index * 0.2}s`,
                opacity: 0,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="text-5xl animate-bounce-slow">{edu.icon}</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-blue-300 mb-2">{edu.field}</p>
                  <p className="text-white/80 mb-1">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 mt-2 mb-3">
                    <span className="text-white/70 flex items-center gap-1">
                      <span className="text-yellow-400">📅</span> {edu.year}
                    </span>
                    <span className="text-white/70 flex items-center gap-1">
                      <span className="text-yellow-400">🏆</span> {edu.grade}
                    </span>
                  </div>
                  <p className="text-white/60 text-sm italic">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
