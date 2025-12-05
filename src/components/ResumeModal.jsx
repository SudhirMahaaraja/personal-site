import { useState } from 'react';
import './ResumeModal.css';
import resumePDF from '../assets/Sudhir_CV.pdf';

const ResumeModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'Sudhir_CV.pdf';
        link.click();
    };

    return (
        <div className="resume-modal-overlay" onClick={onClose}>
            <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="resume-modal-header">
                    <h2>Resume - Sudhir Mahaaraja</h2>
                    <div className="resume-actions">
                        <button className="download-btn" onClick={handleDownload}>
                            <span>📥</span> Download
                        </button>
                        <button className="close-btn" onClick={onClose}>
                            ✕
                        </button>
                    </div>
                </div>
                <div className="resume-pdf-viewer">
                    <iframe
                        src={resumePDF}
                        title="Resume"
                        width="100%"
                        height="100%"
                    />
                </div>
            </div>
        </div>
    );
};

export default ResumeModal;
