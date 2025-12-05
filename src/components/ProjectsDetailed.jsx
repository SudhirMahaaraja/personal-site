import React, { useEffect } from 'react';
import './ProjectsDetailed.css';

const projectsData = [
    {
        id: 1,
        title: 'PDF Chat App',
        year: '2024',
        url: 'https://github.com/SudhirMahaaraja/PDF-Chat-App-with-RAG-FAISS-and-Groq-LLM',
        description: 'PDF Chat App — a privacy-first RAG system to query PDFs instantly. Uses local sentence-transformers for embeddings, FAISS for semantic retrieval, and Groq LLM to generate answers with page-level citations. Streamlit UI provides interactive chat, upload/history management, and source tracking.'
    },
    {
        id: 2,
        title: 'CareSupportAI',
        year: '2024',
        url: 'https://github.com/srinath0307/CareSupportAI',
        description: 'CareSupportAI — a virtual healthcare assistant that takes user symptoms, asks follow-ups, predicts likely diseases using a Decision Tree model, and suggests precautions. It includes a Django website with hospital lookup, appointment booking, health-insurance options and multi-language support (Google Maps & Translate). Built with Python/Postgres and deployed on Azure.'
    },
    {
        id: 4,
        title: 'Multi-label BERT classifier',
        year: '2024',
        url: 'https://github.com/SudhirMahaaraja/BERT-based-Multi-Label-Text-Classifier-with-Active-Learning-Continuous-Learning-and-Custom-AutoML',
        description: 'Multi-label BERT classifier for large-scale review classification (Amazon dataset). Fine-tunes BERT/DistilBERT/RoBERTa, uses Optuna as a custom AutoML for hyperparameter tuning, implements active learning to select uncertain samples, and supports continuous learning by automatically fine-tuning on incoming feedback — an end-to-end Python/PyTorch pipeline.'
    },
    {
        id: 5,
        title: 'Audio-to-Text-LLM',
        year: '2024',
        url: 'https://github.com/SudhirMahaaraja/Audio-to-Text-LLM',
        description: 'Audio-to-Text-LLM — an end-to-end pipeline that converts speech into searchable transcripts and connects them to large language models for summarization, Q&A, and retrieval-augmented tasks. Includes audio preprocessing, transcription, chunking/embeddings, and a demo app for interactive querying.'
    },
    {
        id: 3,
        title: 'Tourist Behavior Analysis',
        year: '2023',
        url: 'https://github.com/SudhirMahaaraja/tourist-behavior-analysis',
        description: 'Tourist Behavior Analysis — Jupyter notebooks performing EDA on India and Turkey tourism datasets to reveal trends, seasonal patterns, and correlations. Features correlation matrices, scatter plots and time-series visualizations using pandas, NumPy and Matplotlib. Data-driven insights to inform tourism planning.'
    },
    {
        id: 6,
        title: 'DeepFace Recognition & Clustering',
        year: '2023',
        url: 'https://github.com/SudhirMahaaraja/DeepFace-Recognition-Clustering',
        description: 'DeepFace Recognition & Clustering — an end-to-end Python pipeline that detects faces, extracts deep embeddings (pretrained models), and groups similar faces using clustering (eg. DBSCAN/KMeans). Includes preprocessing, face alignment, duplicate removal, and visualizations/gallery outputs for scalable identity grouping and analysis.'
    },
    {
        id: 7,
        title: 'Bank Statement Data Extractor',
        year: '2023',
        url: 'https://github.com/SudhirMahaaraja/Data-Extraction-from-Scanned-Bank-Statements',
        description: 'Bank Statement Data Extractor — a Python pipeline that converts scanned bank statements (images & PDFs) into structured transaction data. Uses image preprocessing, EasyOCR/Tesseract OCR, Camelot table parsing, SpaCy NER and regex heuristics to extract dates, descriptions, amounts, compute running balances, and export cleaned CSV/JSON for analysis.'
    },
    {
        id: 8,
        title: 'Text Analysis Toolkit',
        year: '2023',
        url: 'https://github.com/SudhirMahaaraja/Text-Analysis-Toolkit-Extracting-Insights-from-Web-Articles',
        description: 'Text Analysis Toolkit — a Python tool that scrapes article URLs, extracts text, computes sentiment (positive/negative counts, polarity), readability metrics (Fog index, avg sentence length, complex words), and linguistic features (pronouns, syllables, word lengths). Outputs results to Excel and uses customizable dictionaries/stopword files for scalable content analysis and sentiment monitoring.'
    }
];

const ProjectsDetailed = ({ onNavigate }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section className="projects-detailed-section">
            <div className="projects-detailed-container">
                {/* Header Section */}
                <div className="projects-header">
                    <h1 className="projects-title">
                        Selected Projects
                    </h1>
                    <p className="projects-subtitle">
                        A collection of AI, data, and automation work shipped as real, end‑to‑end systems.
                    </p>
                    <div className="projects-divider">
                        <span className="divider-line"></span>
                        <span className="divider-icon">✦</span>
                        <span className="divider-line"></span>
                    </div>
                </div>

                {/* Vertical List */}
                <div className="projects-list">
                    {projectsData.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-card-header">
                                <h3 className="project-card-title">{project.title}</h3>
                                <span className="project-year">{project.year}</span>
                            </div>

                            <div className="project-card-body">
                                <p className="project-card-description">{project.description}</p>
                            </div>

                            <div className="project-card-footer">
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-visit-btn"
                                >
                                    View on GitHub
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Back Button */}
                <div className="projects-footer">
                    <button onClick={() => onNavigate('home')} className="back-home-btn">
                        Back to Home
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProjectsDetailed;
