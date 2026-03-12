import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { BsSun, BsMoon } from 'react-icons/bs';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white dark:text-white light:text-gray-900">
            My Portfolio
          </div>
          <ul className="hidden md:flex space-x-8 items-center">
            <li>
              <a href="#home" className="text-white dark:text-white light:text-gray-900 hover:text-blue-300 transition-colors duration-300">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white dark:text-white light:text-gray-900 hover:text-blue-300 transition-colors duration-300">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="text-white dark:text-white light:text-gray-900 hover:text-blue-300 transition-colors duration-300">
                Skills
              </a>
            </li>
            <li>
              <a href="#education" className="text-white dark:text-white light:text-gray-900 hover:text-blue-300 transition-colors duration-300">
                Education
              </a>
            </li>
            <li>
              <a href="#experience" className="text-white dark:text-white light:text-gray-900 hover:text-blue-300 transition-colors duration-300">
                Experience
              </a>
            </li>
            <li>
              <a href="#projects" className="text-white dark:text-white light:text-gray-900 hover:text-blue-300 transition-colors duration-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#certification" className="text-white dark:text-white light:text-gray-900 hover:text-blue-300 transition-colors duration-300">
                Certifications
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white dark:text-white light:text-gray-900 hover:text-blue-300 transition-colors duration-300">
                Contact
              </a>
            </li>
            <li>
              <button
                onClick={toggleTheme}
                className="ml-4 p-2 rounded-full glass-effect hover:scale-110 transition-all duration-300"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <BsSun className="text-yellow-400 text-xl" />
                ) : (
                  <BsMoon className="text-blue-600 text-xl" />
                )}
              </button>
            </li>
          </ul>
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full glass-effect hover:scale-110 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <BsSun className="text-yellow-400 text-lg" />
              ) : (
                <BsMoon className="text-blue-600 text-lg" />
              )}
            </button>
            <button className="text-white dark:text-white light:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
