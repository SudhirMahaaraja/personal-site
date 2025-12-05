import { useState, useEffect } from 'react'
import './App.css'
import Cursor from './components/Cursor'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutPreview from './components/AboutPreview';
import WhatIDo from './components/WhatIDo';
import IdleScreensaver from './components/IdleScreensaver';
import AboutDetailed from './components/AboutDetailed';
import ScrollProgress from './components/ScrollProgress';
import Education from './components/Education';
import Experience from './components/Experience';
import ProjectsPreview from './components/ProjectsPreview';
import ProjectsDetailed from './components/ProjectsDetailed';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('dark');
  const [currentView, setCurrentView] = useState('home'); // 'home' | 'about' | 'projects' | 'contact'

  // Disable right-click
  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextMenu);
    return () => document.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  // Theme Effect
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const handleNavigate = (view) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <ScrollProgress />
      <Cursor />
      <IdleScreensaver loading={loading} />
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {!loading && (
        <div className="main-content">
          <Navbar theme={theme} toggleTheme={toggleTheme} onNavigate={handleNavigate} currentView={currentView} />

          {currentView === 'home' && (
            <>
              <Hero onNavigate={handleNavigate} />
              <AboutPreview onNavigate={handleNavigate} />
              <WhatIDo />
              <Education />
              <Experience />
              <ProjectsPreview onNavigate={handleNavigate} />
              <Skills />
              <Publications />
            </>
          )}

          {currentView === 'about' && (
            <AboutDetailed onNavigate={handleNavigate} />
          )}

          {currentView === 'projects' && (
            <ProjectsDetailed onNavigate={handleNavigate} />
          )}

          {currentView === 'contact' && (
            <Contact onNavigate={handleNavigate} />
          )}

          <Footer onNavigate={handleNavigate} currentView={currentView} />
        </div>
      )}
    </>
  )
}

export default App
