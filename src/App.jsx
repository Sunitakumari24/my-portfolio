import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certification from './components/Certification';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen transition-colors duration-500">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Certification />
        <Contact />
      </main>
      <footer className="py-6 text-center dark:text-white/70 light:text-gray-700">
        <p>&copy; 2026 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
