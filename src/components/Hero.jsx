import { useEffect, useRef } from 'react';
import './Hero.css';
import { smoothScrollTo } from '../utils/smoothScroll';

const Hero = ({ onNavigate }) => {
    const heroRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const scrolled = window.scrollY;
                heroRef.current.style.transform = `translateY(${scrolled * 0.2}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleViewWork = (e) => {
        e.preventDefault();
        smoothScrollTo('projects', 2000);
    };

    const handleConnect = (e) => {
        e.preventDefault();
        if (onNavigate) onNavigate('contact');
        window.scrollTo(0, 0);
    };

    return (
        <section className="hero-section">
            <div className="hero-bg" ref={heroRef}></div>

            <div className="hero-container creative-mode">
                <div className="hero-content centered">
                    <div className="headline-wrapper">
                        <h1 className="hero-title">
                            <span className="title-line line-1">AI / ML / DS</span>
                            <span className="title-line line-2">COMPUTER VISION</span>
                            <span className="title-line line-3">DEVELOPER</span>
                        </h1>

                        <div className="title-divider">
                            <span className="divider-line"></span>
                            <span className="divider-icon">✦</span>
                            <span className="divider-line"></span>
                        </div>
                    </div>

                    <p className="hero-subtitle">
                        I build scalable ML systems, production-ready models, and CV pipelines that prioritize <strong>accuracy, efficiency and explainability</strong>.
                    </p>

                    <div className="cta-group centered">
                        <button onClick={handleViewWork} className="btn-primary">View Work</button>
                        <button onClick={handleConnect} className="btn-secondary">Let's Connect</button>
                    </div>

                    <div className="skill-chips centered">
                        <div className="chip">
                            <div className="chip-dot"></div>
                            <span>AI / ML</span>
                        </div>
                        <div className="chip">
                            <div className="chip-dot"></div>
                            <span>Data Science</span>
                        </div>
                        <div className="chip">
                            <div className="chip-dot"></div>
                            <span>Computer Vision</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
