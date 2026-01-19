import React, { useEffect, useState } from 'react';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Interests from './components/Interests';
import Navbar from './components/NavBar';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import { DATA } from './constants';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode based on the vibe of the design

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen relative selection:bg-primary selection:text-black">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      
      <main className="max-w-5xl mx-auto px-6 py-12 md:py-20 space-y-16">
        <Hero data={DATA.hero} />
        <Experience experiences={DATA.experiences} />
        <Education education={DATA.education} />
        <Skills skills={DATA.skills} />
        <Interests interests={DATA.interests} />
        <Testimonials testimonials={DATA.testimonials} />
        <Contact contact={DATA.contact} />
			</main>
			
			<Footer social={DATA.social} />
    </div>
  );
};

export default App;
