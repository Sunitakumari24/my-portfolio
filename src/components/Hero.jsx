import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Hero = () => {
  const stats = [
    { number: '00+', label: 'Years of experience' },
    { number: '20+', label: 'Projects completed' },
    { number: '5+', label: 'Technologies mastered' },
    { number: '5+', label: 'Satisfied Client' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 dark:bg-[#0f172a] light:bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center md:justify-start" style={{
            opacity: 0,
            animation: 'fadeInLeft 1s ease-out forwards'
          }}>
            <div className="relative">
              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 blur-2xl opacity-60 animate-pulse"></div>
              
              {/* Image container */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-cyan-400 shadow-2xl shadow-cyan-500/50">
                <img 
                  src="/image.png" 
                  alt="Sunita Kumari" 
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div style={{
            opacity: 0,
            animation: 'fadeInRight 1s ease-out forwards',
            animationDelay: '0.3s'
          }}>
            <p className="text-lg dark:text-gray-400 light:text-gray-600 mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl font-bold dark:text-white light:text-gray-900 mb-4">
              Sunita Kumari
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              And I'm a <span className="text-cyan-400 font-semibold">Web Development</span>
            </p>
            <p className="dark:text-gray-400 light:text-gray-600 mb-8 leading-relaxed">
             I am a passionate web developer currently learning full-stack development at NavGurukul Kishanganj, Bihar!
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mb-8">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-500 text-white hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-600 text-white hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaInstagram />
              </a>
              <a href="https://linkedin.comhttps://www.linkedin.com/in/sunita-kumari-b958a633a/" target="_blank" rel="noopener noreferrer" 
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:scale-110 transition-transform duration-300 shadow-lg">
                <FaLinkedinIn />
              </a>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap">
              <a 
                href="/resume.pdf" 
                download
                className="px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-8 py-3 dark:bg-gray-700 light:bg-gray-200 dark:text-white light:text-gray-900 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 border dark:border-gray-600 light:border-gray-300 inline-block"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20" style={{
          opacity: 0,
          animation: 'fadeInUp 1s ease-out forwards',
          animationDelay: '0.6s'
        }}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 dark:bg-[#1e293b]/50 light:bg-gray-100 rounded-xl border dark:border-gray-700 light:border-gray-200 hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl md:text-4xl font-bold dark:text-white light:text-gray-900 mb-2">
                {stat.number}
              </h3>
              <p className="dark:text-gray-400 light:text-gray-600 text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
