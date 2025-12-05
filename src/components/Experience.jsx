import React, { useState, useRef, useEffect } from 'react';
import './Experience.css';

const experienceData = [
    {
        id: 'codsoft',
        tabLabel: 'Machine Learning Intern – CodSoft',
        subheading: 'Machine Learning Intern',
        organization: 'CodSoft — Remote',
        date: 'Feb 2024 – Mar 2024',
        description: 'Built text classifiers, fraud detection models, and an SMS spam pipeline with real-time monitoring.'
    },
    {
        id: 'mercuryminds',
        tabLabel: 'Machine Learning Trainee – MercuryMinds',
        subheading: 'Machine Learning Trainee',
        organization: 'MercuryMinds — On-site',
        date: 'Dec 2024 – Jun 2025',
        description: 'Delivered visitor-analytics vision systems and dashboards that revealed footfall, dwell time, and engagement patterns.'
    }
];

const Experience = () => {
    const [activeTab, setActiveTab] = useState(experienceData[0].id);
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

    const activeData = experienceData.find(item => item.id === activeTab);

    return (
        <section className={`experience-section ${isVisible ? 'animate' : ''}`} ref={sectionRef}>
            <div className="experience-container">
                <div className="experience-header">
                    <h2 className="experience-title">Experience<span className="accent-dot">.</span></h2>
                    <div className="experience-divider">
                        <span className="experience-divider-line"></span>
                        <span className="experience-divider-icon">✦</span>
                        <span className="experience-divider-line"></span>
                    </div>
                </div>

                <div className="experience-content">
                    {/* Left Column - Tabs */}
                    <div className="experience-tabs">
                        {experienceData.map((item) => (
                            <button
                                key={item.id}
                                className={`experience-tab ${activeTab === item.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(item.id)}
                            >
                                {item.tabLabel}
                            </button>
                        ))}
                    </div>

                    {/* Right Column - Details */}
                    <div className="experience-details">
                        <div key={activeTab} className="experience-detail-content fade-in-slide">
                            <div className="detail-header">
                                <h3 className="detail-subheading">{activeData.subheading}</h3>
                                <span className="detail-date">{activeData.date}</span>
                            </div>
                            <h4 className="detail-organization">{activeData.organization}</h4>
                            <p className="detail-description">
                                {activeData.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
