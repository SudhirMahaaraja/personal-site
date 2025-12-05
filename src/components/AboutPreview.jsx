import React, { useEffect, useRef, useState } from 'react';
import './AboutPreview.css';

const AboutPreview = ({ onNavigate }) => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.2,
                rootMargin: '0px'
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id="about" className={`about-preview-section ${isVisible ? 'animate' : ''}`} ref={sectionRef}>
            <div className="about-preview-container">
                <div className="about-preview-left">
                    <h2 className="about-preview-heading">About Me<span className="accent-dot">.</span></h2>
                    <h3 className="about-preview-subheadline">
                        Coding intelligent systems.<br />
                        Architecting data‑driven experiences.
                    </h3>

                    <div className="about-preview-divider">
                        <span className="about-divider-line"></span>
                        <span className="about-divider-icon">✦</span>
                        <span className="about-divider-line"></span>
                    </div>

                    <div className="about-preview-body">
                        <p>
                            I’m Sudhir Mahaaraja, an AI engineer focused on shipping real-world ML and automation solutions. From computer vision to RAG tools, I build intelligent utilities that solve actual problems. I pair solid engineering with clear communication to help teams move faster.
                        </p>
                    </div>
                </div>

                <div className="about-preview-right">
                    <p className="about-preview-micro-intro">
                        Blending AI, data, and interaction to build useful tools.
                    </p>

                    <button onClick={() => onNavigate('about')} className="about-preview-btn">
                        About Me
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;
