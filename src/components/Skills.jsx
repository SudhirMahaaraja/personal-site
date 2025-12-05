import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

// Import SVGs
import pythonIcon from '../assets/Skills_svg/python-language-logotype-svgrepo-com.svg';
import sqlIcon from '../assets/Skills_svg/SQL.svg';
import pytorchIcon from '../assets/Skills_svg/pytorch-svgrepo-com.svg';
import tensorflowIcon from '../assets/Skills_svg/tensorflow-svgrepo-com.svg';
import pandasIcon from '../assets/Skills_svg/pandas-svgrepo-com.svg';
import numpyIcon from '../assets/Skills_svg/numpy.svg';
import flaskIcon from '../assets/Skills_svg/flask-svgrepo-com.svg';
import kerasIcon from '../assets/Skills_svg/keras-svgrepo-com.svg';
import powerBiIcon from '../assets/Skills_svg/power-bi-logo.svg';
import opencvIcon from '../assets/Skills_svg/opencv_logo_icon_248307.svg';
import awsIcon from '../assets/Skills_svg/AWS.svg';
import seleniumIcon from '../assets/Skills_svg/selenium-svgrepo-com.svg';
import mongoDbIcon from '../assets/Skills_svg/MongoDB.svg';
import n8nIcon from '../assets/Skills_svg/n8n_full_black_logo.svg';

const skillsData = [
    { name: "Python", icon: pythonIcon },
    { name: "SQL", icon: sqlIcon },
    { name: "PyTorch", icon: pytorchIcon },
    { name: "TensorFlow", icon: tensorflowIcon },
    { name: "Pandas", icon: pandasIcon },
    { name: "NumPy", icon: numpyIcon },
    { name: "Flask", icon: flaskIcon },
    { name: "Keras", icon: kerasIcon },
    { name: "Power BI", icon: powerBiIcon },
    { name: "OpenCV", icon: opencvIcon },
    { name: "AWS", icon: awsIcon },
    { name: "Selenium", icon: seleniumIcon },
    { name: "MongoDB", icon: mongoDbIcon },
    { name: "N8N", icon: n8nIcon }
];

const Skills = () => {
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
                threshold: 0.1,
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
        <section id="skills" className={`skills-section ${isVisible ? 'animate' : ''}`} ref={sectionRef}>
            <div className="skills-container">
                {/* Left Column: Header & Description */}
                <div className="skills-left">
                    <div className="skills-header">
                        <h2 className="skills-heading">SKILLS<span className="accent-dot">.</span></h2>
                        <h3 className="skills-subheadline">
                            Tools and technologies used to build data products, ML systems, and analytics dashboards.
                        </h3>

                        <div className="skills-divider">
                            <span className="skills-divider-line"></span>
                            <span className="skills-divider-icon">✦</span>
                            <span className="skills-divider-line"></span>
                        </div>
                    </div>

                    <p className="skills-description">
                        These tools power the analytics pipelines, ML systems, and dashboards showcased in my projects.
                    </p>
                </div>

                {/* Right Column: Skills Grid */}
                <div className="skills-right">
                    <div className="skills-grid">
                        {skillsData.map((skill, index) => (
                            <div
                                key={index}
                                className="skill-card"
                                tabIndex="0"
                                aria-label={skill.name}
                            >
                                <div className="skill-icon-wrapper">
                                    <img src={skill.icon} alt={skill.name} className="skill-icon-img" />
                                </div>
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
