import React, { useEffect, useRef, useState } from 'react';
import './ProjectsPreview.css';

const projectsData = [
    {
        heading: "RAG‑Based PDF Q&A",
        description: "Built a PDF question‑answering assistant that extracts, chunks, and indexes documents for semantic search. Integrated Groq LLM with Streamlit to return grounded answers with page references, robust OCR fallback, and overlap‑aware chunking."
    },
    {
        heading: "Virtual Health Assistant",
        description: "Developed a disease‑prediction assistant with an 85% accurate ML model and a simple web interface. Designed the UI, wired the backend, and validated performance so non‑technical users can input symptoms, get predictions, and understand key risk factors."
    },
    {
        heading: "Tourist Behaviour Analysis",
        description: "Analyzed tourism datasets to uncover trends in visits, seasonality, and engagement. Cleaned and joined data with Python and SQL, then built interactive Power BI dashboards that helped stakeholders spot high‑value segments and plan data‑driven campaigns."
    }
];

const ProjectsPreview = ({ onNavigate }) => {
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
        <section id="projects" className={`projects-preview-section ${isVisible ? 'animate' : ''}`} ref={sectionRef}>
            <div className="projects-preview-container">
                <div className="projects-preview-left">
                    <h2 className="projects-preview-heading">Projects<span className="accent-dot">.</span></h2>
                    <h3 className="projects-preview-subheadline">
                        Building intelligent systems.<br />
                        Solving real‑world problems.
                    </h3>

                    <div className="projects-preview-divider">
                        <span className="projects-divider-line"></span>
                        <span className="projects-divider-icon">✦</span>
                        <span className="projects-divider-line"></span>
                    </div>

                    <div className="projects-preview-body">
                        <p>
                            Selected end‑to‑end AI and analytics work that blends data, models, and clear storytelling.
                        </p>
                    </div>
                </div>

                <div className="projects-preview-right">
                    <p className="projects-preview-micro-intro">
                        Real AI solutions with measurable impact.
                    </p>
                </div>
            </div>

            {/* Project Cards Grid */}
            <div className="projects-cards-wrapper">
                <div className="projects-grid">
                    {projectsData.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3 className="project-card-heading">{project.heading}</h3>
                            <p className="project-card-description">{project.description}</p>
                        </div>
                    ))}
                </div>

                {/* Projects Button Below Cards */}
                <div className="projects-button-wrapper">
                    <button onClick={() => onNavigate('projects')} className="projects-preview-btn">
                        Projects
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsPreview;
