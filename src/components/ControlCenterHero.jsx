import { useEffect, useRef, useState } from 'react';
import './ControlCenterHero.css';
import { smoothScrollTo } from '../utils/smoothScroll';
import AuraBackground from './AuraBackground';

const ControlCenterHero = ({ onNavigate }) => {
    const heroRef = useRef(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Trigger entrance animations immediately
        setMounted(true);

        // Parallax effect from Old Hero
        const handleScroll = () => {
            if (heroRef.current) {
                const scrolled = window.scrollY;
                heroRef.current.style.transform = `translateY(${scrolled * 0.2}px)`;
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
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
        <section className={`hero-section ${mounted ? 'mounted' : ''}`}>
            <div className="hero-bg" ref={heroRef}></div>

            {/* --- Reusable Aura Background --- */}
            <AuraBackground opacity={1} />

            {/* --- Floating Pills (Diversified) --- */}
            <div className="hero-pill pill-1">PyTorch / TensorFlow</div>
            <div className="hero-pill pill-2">Pandas / Scikit-Learn</div>
            <div className="hero-pill pill-3">Generative AI</div>

            {/* --- Floating Cards (Interactive & Diversified) --- */}

            {/* Card 1: Machine Learning (Random Forest / Training) */}
            <div className="hero-card card-top-left glass-card aura-float-1" aria-hidden="true">
                <div className="card-header-row">
                    <span className="card-label">Model Training</span>
                    <div className="status-dot green"></div>
                </div>
                <div className="card-inner-box">
                    <div className="flex-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="icon-accent">
                            <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                            <path fill="currentColor" d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                        </svg>
                        <span className="text-white font-medium">Random Forest</span>
                    </div>
                </div>
                <div className="card-list">
                    <div className="list-item">
                        <span className="text-gray text-xs">Accuracy: 98.2%</span>
                        <span className="text-accent text-xs">Optimized</span>
                    </div>
                </div>
            </div>

            {/* Card 2: AI (Transformers / LLM) */}
            <div className="hero-card card-top-right glass-card aura-float-2" aria-hidden="true">
                <div className="ai-model-item group">
                    <div className="model-icon group-hover-accent">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M21 16.5c0-1.25-.67-2.32-1.66-2.9a3.49 3.49 0 0 0 .16-.9c0-.42-.09-.81-.23-1.18a3.5 3.5 0 0 0-4.77-4.77A3.45 3.45 0 0 0 13.32 6.5a3.49 3.49 0 0 0-1.18-.23c-1.93 0-3.5 1.57-3.5 3.5c0 .32.06.62.16.9a3.5 3.5 0 0 0-1.66 2.9a3.5 3.5 0 0 0 1.66 2.92a3.5 3.5 0 0 0-.16.9a3.5 3.5 0 0 0 3.5 3.5c.31 0 .61-.06.89-.16a3.5 3.5 0 0 0 2.92 1.66c1.93 0 3.5-1.57 3.5-3.5c0-.31-.05-.61-.15-.89a3.5 3.5 0 0 0 2.92-1.66A3.49 3.49 0 0 0 21 16.5m-6.5-6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5m-3.5 1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5m0 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5m5-1.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5m1.5-3.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5z" /></svg>
                    </div>
                    <div className="model-info">
                        <span className="model-name">Transformer</span>
                        <span className="model-ver">NLP / Vision</span>
                    </div>
                </div>
            </div>

            {/* Card 3: Data Science (Pipeline) */}
            <div className="hero-card card-bottom-left glass-card aura-float-3" aria-hidden="true">
                <div className="logic-root">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="icon-gray"><path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z" /></svg>
                    <span>Data Pipeline</span>
                </div>
                <div className="logic-branches">
                    <div className="logic-line"></div>
                    <div className="logic-branch">
                        <div className="branch-curve"></div>
                        <div className="branch-content">
                            <div className="branch-label">ETL → Clean</div>
                            <div className="branch-box active">
                                <span className="text-white text-xs">Processed 1.2M rows</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Card 4: Computer Vision (Live Detection) */}
            <div className="hero-card card-bottom-right glass-card aura-float-4" aria-hidden="true">
                <div className="card-header-row">
                    <div className="flex-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="icon-gray"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19h8M4 17l6-6l-6-6"></path></svg>
                        <span className="text-gray text-xs">CV System</span>
                    </div>
                    <div className="flex-center gap-1">
                        <span className="dot-pulse emerald"></span>
                        <span className="text-emerald text-xs font-mono">ACTIVE</span>
                    </div>
                </div>
                <div className="log-console">
                    <div className="log-fade-overlay"></div>
                    <div className="log-line">
                        <span className="log-time">10:42:01</span>
                        <span className="log-type success">detect</span>
                        <span className="log-msg">Object (0.99)</span>
                    </div>
                    <div className="log-line">
                        <span className="log-time">10:42:01</span>
                        <span className="log-type processing">seg</span>
                        <span className="log-msg">Mask Generated</span>
                    </div>
                </div>
            </div>

            {/* --- Original Hero Content --- */}
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

export default ControlCenterHero;
