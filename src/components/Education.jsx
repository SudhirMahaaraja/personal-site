import React, { useRef, useEffect, useState } from 'react';
import './Education.css';

const Education = () => {
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
        <section className={`education-section ${isVisible ? 'animate' : ''}`} ref={sectionRef}>
            <div className="education-container">
                <div className="education-header">
                    <h2 className="education-title">Education<span className="accent-dot">.</span></h2>
                    <div className="education-divider">
                        <span className="education-divider-line"></span>
                        <span className="education-divider-icon">✦</span>
                        <span className="education-divider-line"></span>
                    </div>
                </div>

                <div className="education-content">
                    {/* Left Column - Tabs */}
                    <div className="education-tabs">
                        <div className="education-tab active">
                            RMK College of Engineering & Technology
                        </div>
                    </div>

                    {/* Right Column - Details */}
                    <div className="education-details">
                        <div className="education-detail-content fade-in">
                            <div className="detail-header">
                                <h3 className="detail-subheading">Educational Background</h3>
                                <span className="detail-date">2020 – 2024</span>
                            </div>
                            <h4 className="detail-institution">RMK College of Engineering & Technology</h4>
                            <p className="detail-description">
                                B.Tech in Artificial Intelligence & Data Science, building strong foundations in ML, analytics, and real-world problem solving.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
