import React, { useEffect, useRef, useState } from 'react';
import './Publications.css';

const Publications = () => {
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
        <section id="publications" className={`publications-section ${isVisible ? 'animate' : ''}`} ref={sectionRef}>
            <div className="publications-container">
                {/* Header */}
                <div className="publications-header">
                    <h2 className="publications-heading">
                        Publications & Achievements
                    </h2>
                    <h3 className="publications-subheadline">
                        Selected research, writing, and milestones that shape my work in AI and data.
                    </h3>
                </div>

                {/* Content Columns with Vertical Divider */}
                <div className="publications-content">
                    {/* Publications Column */}
                    <div className="publications-column">
                        <h4 className="column-heading">Publications</h4>
                        <div className="publication-card" tabIndex="0">
                            <span className="pub-type-label">Book Chapter</span>
                            <h5 className="pub-title">Tourist Behaviour Analysis Using Data Analytics</h5>
                            <p className="pub-citation">
                                In J.C. Koy, B.V. Parker, & D.A. Lopez (Eds.), Data-Driven Decision Making for Long-Term Business Success (pp. 8–12).
                            </p>
                            <a
                                href="https://www.igi-global.com/gateway/chapter/335582"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pub-paper-btn"
                            >
                                Paper
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Vertical Divider in the Middle */}
                    <div className="publications-vertical-divider">
                        <span className="vertical-line top"></span>
                        <span className="divider-star">✦</span>
                        <span className="vertical-line bottom"></span>
                    </div>

                    {/* Achievements Column */}
                    <div className="publications-column">
                        <h4 className="column-heading">Achievements & Participations</h4>
                        <div className="publication-card achievement-card" tabIndex="0">
                            <div className="achievements-list">
                                <div className="achievement-item">
                                    <p className="achievement-text">
                                        Won the Cloudly ML Data Analysis Hackathon 2024
                                    </p>
                                </div>
                                <div className="achievement-item">
                                    <p className="achievement-text">
                                        Participated in the national conference on 'Recent Advancements in Artificial Intelligence and Data Science'
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Publications;
