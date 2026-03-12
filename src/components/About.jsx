import React from 'react';
import { FaCode, FaLaptopCode, FaPalette, FaRocket } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code'
    },
    {
      icon: FaLaptopCode,
      title: 'Responsive Design',
      description: 'Creating mobile-first applications'
    },
    {
      icon: FaPalette,
      title: 'Creative Solutions',
      description: 'Innovative problem-solving approach'
    },
    {
      icon: FaRocket,
      title: 'Fast Performance',
      description: 'Optimized for speed and efficiency'
    }
  ];

  return (
    <section id="about" className="py-16 dark:bg-[#0f172a] light:bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white light:text-gray-900 mb-2">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Side - Content */}
            <div style={{
              opacity: 0,
              animation: 'fadeInLeft 1s ease-out forwards'
            }}>
              <h3 className="text-3xl font-bold dark:text-white light:text-gray-900 mb-6">
                I'm a <span className="text-cyan-400">Web Development</span>
              </h3>
              <p className="dark:text-gray-300 light:text-gray-700 mb-4 leading-relaxed">
                I'm a passionate web developer with expertise in modern web technologies. I love creating beautiful, functional, and user-friendly websites that provide excellent user experiences.
              </p>
              <p className="dark:text-gray-300 light:text-gray-700 mb-4 leading-relaxed">
                With a strong foundation in both front-end and back-end development, I bring ideas to life through code. I'm constantly learning new technologies and best practices to stay current in this ever-evolving field.
              </p>
              <p className="dark:text-gray-300 light:text-gray-700 mb-6 leading-relaxed">
                My goal is to build applications that not only look great but also perform exceptionally well and provide real value to users.
              </p>
              
              <div className="flex gap-4">
                <a 
                  href="#contact" 
                  className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
                >
                  Let's Talk
                </a>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="flex justify-center" style={{
              opacity: 0,
              animation: 'fadeInRight 1s ease-out forwards',
              animationDelay: '0.3s'
            }}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl blur-xl opacity-40"></div>
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=400&fit=crop" 
                  alt="Workspace" 
                  className="relative rounded-2xl shadow-2xl w-full"
                />
              </div>
            </div>
          </div>

          {/* Highlights Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" style={{
            opacity: 0,
            animation: 'fadeInUp 1s ease-out forwards',
            animationDelay: '0.6s'
          }}>
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index}
                  className="dark:bg-[#1e293b] light:bg-gray-50 rounded-xl p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl border dark:border-gray-700 light:border-gray-200"
                >
                  <div className="flex justify-center mb-4">
                    <IconComponent className="text-5xl text-cyan-400" />
                  </div>
                  <h4 className="text-lg font-bold dark:text-white light:text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="dark:text-gray-400 light:text-gray-600 text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
