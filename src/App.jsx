import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FocusAreas from './components/FocusAreas';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Approach from './components/Approach';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-slate-50 dark:bg-[#0b0f19] text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors duration-200">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <About />
          <FocusAreas />
          <Experience />
          <Projects />
          <Skills />
          <Approach />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
