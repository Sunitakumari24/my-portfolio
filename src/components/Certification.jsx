import React from 'react';
import { FaCertificate, FaAward, FaMedal, FaStar } from 'react-icons/fa';

const Certification = () => {
  const certifications = [
    {
      title: 'Coursera Certificate',
      description: 'Successfully completed coursework and earned certificate from Coursera. Demonstrated expertise in the subject matter through comprehensive learning and assessments.',
      icon: FaCertificate,
      highlight: false,
      certificateLink: 'https://www.coursera.org/account/accomplishments/certificate/FQQHI13MFUAU'
    },
    {
      title: 'Introducing Generative AI with AWS',
      description: 'Completed Udacity certification in Generative AI with AWS. Gained hands-on experience with AWS services and generative AI technologies.',
      icon: FaAward,
      highlight: false,
      certificateLink: 'https://www.udacity.com/certificate/e/ab7ced08-5950-11f0-b57c-5b0a43b32c2a'
    },
    {
      title: 'Prompt Engineering for ChatGPT',
      description: 'Earned Coursera certification in Prompt Engineering for ChatGPT. Skilled in crafting effective prompts to generate accurate and useful AI responses for various applications.',
      icon: FaMedal,
      highlight: true,
      certificateLink: 'https://www.coursera.org/account/accomplishments/certificate/1X7PYO76WUOE'
    },
    {
      title: 'Academic Performance Certificate',
      description: 'Awarded for outstanding academic performance and excellence. Recognized for dedication, hard work, and achieving high standards in academics.',
      icon: FaStar,
      highlight: false,
      certificateLink: 'https://drive.google.com/file/d/1nfn46Ehj4Hb-m6ZHZX0OZcubq8t_viEy/view?usp=sharing'
    }
  ];

  return (
    <section id="certification" className="py-16 dark:bg-[#0f172a] light:bg-white">
      <div className="container mx-auto px-6">
        {/* Title with underline */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold dark:text-white light:text-gray-900 mb-2">
            CERTIFICATES
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <a
                href={cert.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="dark:bg-[#1a1a1a] light:bg-gray-50 rounded-xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl border dark:border-gray-800 light:border-gray-200 cursor-pointer block"
                style={{
                  opacity: 0,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <IconComponent className="text-6xl text-cyan-400" />
                </div>

                {/* Title */}
                <h3 className={`text-xl md:text-2xl font-bold text-center mb-4 ${
                  cert.highlight 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent' 
                    : 'dark:text-white light:text-gray-900'
                }`}>
                  {cert.title}
                </h3>

                {/* Description */}
                <p className="dark:text-gray-300 light:text-gray-700 text-sm text-center leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* View Certificate Badge */}
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-semibold rounded-full hover:from-cyan-500 hover:to-blue-600 transition-all duration-300">
                    View Certificate →
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certification;
