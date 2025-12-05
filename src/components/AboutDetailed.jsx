import React, { useEffect } from 'react';
import './AboutDetailed.css';

const AboutDetailed = ({ onNavigate }) => {
    // Scroll to top when component mounts
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="about-detailed-section">
            <div className="about-detailed-container">
                {/* Hero Section */}
                <div className="about-detailed-hero">
                    <h1 className="about-detailed-title">
                        Hello! I'm Sudhir Mahaaraja <span className="wave">👋</span>
                        <span className="highlight">Crafting Intelligent, Data‑Driven Experiences.</span>
                    </h1>

                    <p className="about-detailed-intro">
                        As an AI & data engineer, I turn messy data into reliable analytics, ML systems, and intelligent tools. With a BTech in AI & Data Science and experience in CV, NLP, data products and dashboards, I deliver insights that drive decisions.
                    </p>
                </div>

                <div className="about-detailed-divider">
                    <span className="detailed-divider-line"></span>
                    <span className="detailed-divider-icon">✦</span>
                    <span className="detailed-divider-line"></span>
                </div>

                {/* Three Column Grid */}
                <div className="about-detailed-grid">
                    {/* Column 1 */}
                    <div className="about-grid-item">
                        <span className="grid-number">01</span>
                        <h3 className="grid-title">Data & Analytics Foundations</h3>
                        <p className="grid-text">
                            Built analytics pipelines to collect, clean, and structure web, visitor-behavior, and operational data. Skilled in Python, SQL and BI tools to validate data, engineer features, and produce stakeholder-ready dashboards and metrics.                        </p>
                    </div>

                    {/* Column 2 */}
                    <div className="about-grid-item">
                        <span className="grid-number">02</span>
                        <h3 className="grid-title">Applied Machine Learning Systems</h3>
                        <p className="grid-text">
                            I design end-to-end ML solutions into production tools: text classifiers (spam, genres), fraud and disease prediction pipelines, and RAG PDF Q&A. I use PyTorch, TensorFlow, transformers, handle imbalance, realtime flows, and cloud APIs.                        </p>
                    </div>

                    {/* Column 3 */}
                    <div className="about-grid-item">
                        <span className="grid-number">03</span>
                        <h3 className="grid-title">From Insights to Outcomes</h3>
                        <p className="grid-text">
                            I connect technical work to business results: built visitor-behaviour dashboards (staffing, merchandising), analytics highlighting tourism trends, and SPIR-style summaries. I prioritize data integrity, docs, and clear communication.                        </p>
                    </div>
                </div>

                {/* Contact Button */}
                <div className="about-detailed-footer">
                    <button onClick={() => onNavigate('contact')} className="contact-pill-btn">
                        Contact Me
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AboutDetailed;
