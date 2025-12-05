import React, { useState, useRef, useEffect } from 'react';
import './WhatIDo.css';

const cardsData = [
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3V21H21" stroke="#FFDD98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M18 17V9" stroke="#FFDD98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 17V5" stroke="#FFDD98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 17V13" stroke="#FFDD98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        heading: "Data & Analytics",
        body: "Clean data. Fast dashboards. Confident decisions."
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#FFDD98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="#FFDD98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 12L12 17L22 12" stroke="#FFDD98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        heading: "Applied Machine Learning",
        body: "From prototype models to reliable, production‑ready systems."
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 12S5 4 12 4S23 12 23 12S19 20 12 20S1 12 1 12Z" stroke="#FFDD98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="3" stroke="#FFDD98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        heading: "Computer Vision Insights",
        body: "Visitor tracking that reveals footfall, dwell time and engagement."
    },
    {
        icon: (
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="#FFDD98" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        heading: "Insightful Storytelling",
        body: "Turning complex datasets into clear, actionable narratives."
    }
];

const Card = ({ icon, heading, body }) => {
    return (
        <div className="card-wrap">
            <div className="card">
                <div className="card-content">
                    <div className="card-icon">
                        {icon}
                    </div>
                    <h3 className="card-heading">{heading}</h3>
                    <p className="card-body">{body}</p>
                </div>
            </div>
        </div>
    );
};

const WhatIDo = () => {
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
        <section className={`what-i-do-section ${isVisible ? 'animate' : ''}`} ref={sectionRef}>
            <div className="what-i-do-container">
                <div className="what-i-do-header-wrapper">
                    <h2 className="what-i-do-heading">What I Do<span className="accent-dot">.</span></h2>
                    <h3 className="what-i-do-subheadline">
                        Transforming data into <br /> clear, actionable insights.
                    </h3>

                    <div className="what-i-do-divider">
                        <span className="what-i-do-divider-line"></span>
                        <span className="what-i-do-divider-icon">✦</span>
                        <span className="what-i-do-divider-line"></span>
                    </div>

                    <div className="what-i-do-intro-body">
                        <p>
                            I help teams turn raw data into intelligent systems, clear dashboards, and actionable insights.
                        </p>
                    </div>
                </div>

                <div className="cards-grid">
                    {cardsData.map((card, index) => (
                        <Card key={index} icon={card.icon} heading={card.heading} body={card.body} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatIDo;
