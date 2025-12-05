import { useState, useEffect } from 'react';
import './Navbar.css';

import AudioPlayer from './AudioPlayer';
import ResumeModal from './ResumeModal';
import { smoothScrollTo } from '../utils/smoothScroll';

const Navbar = ({ theme, toggleTheme, onNavigate, currentView }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [isResumeOpen, setIsResumeOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

    const handleHomeClick = (e) => {
        e.preventDefault();
        if (onNavigate) onNavigate('home');
        window.scrollTo(0, 0);
        if (isMobileOpen) setIsMobileOpen(false);
    };

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
                {/* Brand */}
                <a href="/" className="nav-brand" onClick={handleHomeClick}>SM.dev</a>

                {/* Desktop Nav */}
                <div className="nav-center">
                    <a href="#" className="nav-link active" onClick={handleHomeClick}>
                        <span>🏠</span> Home
                    </a>
                    <a href="#projects" className="nav-link" onClick={(e) => {
                        e.preventDefault();
                        if (currentView !== 'home') {
                            if (onNavigate) onNavigate('home');
                            setTimeout(() => {
                                smoothScrollTo('projects', 2000);
                            }, 100);
                        } else {
                            smoothScrollTo('projects', 2000);
                        }
                    }}>
                        <span>📂</span> My Projects
                    </a>


                    <a href="#about" className="nav-link" onClick={(e) => {
                        e.preventDefault();
                        if (currentView !== 'home') {
                            if (onNavigate) onNavigate('home');
                            setTimeout(() => {
                                smoothScrollTo('about', 2000);
                            }, 100);
                        } else {
                            smoothScrollTo('about', 2000);
                        }
                    }}>
                        <span>👤</span> About Me
                    </a>
                    <button className="nav-link resume-btn" onClick={() => setIsResumeOpen(true)}>
                        <span>📄</span> Resume
                    </button>
                </div>

                {/* Actions Group */}
                <div className="nav-actions">
                    <AudioPlayer />

                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
                        {theme === 'dark' ? '☀️' : '🌙'}
                    </button>

                    <button
                        className="nav-contact"
                        onClick={() => {
                            if (onNavigate) onNavigate('contact');
                            window.scrollTo(0, 0);
                        }}
                    >
                        <span>✉️</span> Contact Me
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-toggle" onClick={toggleMobile} aria-label="Toggle menu">
                    {isMobileOpen ? '✕' : '☰'}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`}>
                <a href="#" className="nav-link" onClick={handleHomeClick}>Home</a>
                <a href="#projects" className="nav-link" onClick={(e) => {
                    e.preventDefault();
                    if (currentView !== 'home') {
                        if (onNavigate) onNavigate('home');
                        setTimeout(() => {
                            smoothScrollTo('projects', 2000);
                        }, 100);
                    } else {
                        smoothScrollTo('projects', 2000);
                    }
                    toggleMobile();
                }}>My Projects</a>
                <a href="#about" className="nav-link" onClick={(e) => {
                    e.preventDefault();
                    if (currentView !== 'home') {
                        if (onNavigate) onNavigate('home');
                        setTimeout(() => {
                            smoothScrollTo('about', 2000);
                        }, 100);
                    } else {
                        smoothScrollTo('about', 2000);
                    }
                    toggleMobile();
                }}>About Me</a>
                <button className="nav-link resume-btn" onClick={() => { setIsResumeOpen(true); toggleMobile(); }}>
                    Resume
                </button>
                <div className="mobile-actions">
                    <AudioPlayer mobile />
                    <button className="theme-toggle mobile" onClick={toggleTheme}>
                        {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
                    </button>
                </div>
                <button
                    className="nav-contact"
                    onClick={() => {
                        if (onNavigate) onNavigate('contact');
                        window.scrollTo(0, 0);
                        toggleMobile();
                    }}
                >
                    Contact Me
                </button>
            </div>

            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
        </>
    );
};

export default Navbar;
