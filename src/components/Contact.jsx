import { useState, useEffect, useRef } from 'react';
import './Contact.css';
import avatar from '../assets/my-avatar.png';

const Contact = ({ onNavigate }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        organization: '',
        area: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState(''); // 'success' | 'error' | ''
    const [isSubmitting, setIsSubmitting] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setStatus('');

        try {
            // Formspree endpoint
            const response = await fetch('https://formspree.io/f/mrbvakeq', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    organization: '',
                    area: '',
                    message: ''
                });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className={`contact-section ${isVisible ? 'animate' : ''}`}
            ref={sectionRef}
        >
            <div className="contact-container">
                {/* Header */}
                <div className="contact-header">
                    <h1 className="contact-title">Let's Connect<span className="accent-dot">.</span></h1>
                    <div className="contact-divider">
                        <span className="contact-divider-line"></span>
                        <span className="contact-divider-icon">✦</span>
                        <span className="contact-divider-line"></span>
                    </div>
                    <p className="contact-intro">
                        Whether you're exploring a data project, need help with ML systems, or just want to talk AI, feel free to reach out. Together, we can turn ideas into working prototypes.
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="contact-content">
                    {/* Left: Form */}
                    <form className="contact-form" onSubmit={handleSubmit}>
                        {/* Question 01 */}
                        <div className="form-question">
                            <label htmlFor="name" className="question-label">
                                <span className="question-number">01</span>
                                <span className="question-text">What's your name?</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Sudhir Mahaaraja"
                                className={errors.name ? 'error' : ''}
                            />
                            {errors.name && <span className="error-message">{errors.name}</span>}
                        </div>

                        {/* Question 02 */}
                        <div className="form-question">
                            <label htmlFor="email" className="question-label">
                                <span className="question-number">02</span>
                                <span className="question-text">What's your email?</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className={errors.email ? 'error' : ''}
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>

                        {/* Question 03 */}
                        <div className="form-question">
                            <label htmlFor="organization" className="question-label">
                                <span className="question-number">03</span>
                                <span className="question-text">What's the name of your organization?</span>
                                <span className="optional-badge">(optional)</span>
                            </label>
                            <input
                                type="text"
                                id="organization"
                                name="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                placeholder="AI team at ..."
                            />
                        </div>

                        {/* Question 04 */}
                        <div className="form-question">
                            <label htmlFor="area" className="question-label">
                                <span className="question-number">04</span>
                                <span className="question-text">What specific area or task do you need help with?</span>
                            </label>
                            <input
                                type="text"
                                id="area"
                                name="area"
                                value={formData.area}
                                onChange={handleChange}
                                placeholder="RAG pipeline for PDFs or dashboard for lifecycle analytics"
                            />
                        </div>

                        {/* Question 05 */}
                        <div className="form-question">
                            <label htmlFor="message" className="question-label">
                                <span className="question-number">05</span>
                                <span className="question-text">Your message</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Hello Rini, can you help me with ..."
                                rows="6"
                                className={errors.message ? 'error' : ''}
                            />
                            {errors.message && <span className="error-message">{errors.message}</span>}
                        </div>

                        {/* Submit Button */}
                        <div className="form-submit">
                            {status === 'success' && (
                                <p className="success-message">
                                    ✓ Thanks for reaching out — you'll hear back soon!
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="error-message-general">
                                    Something went wrong. Please try again or email directly at sudhirmahaaraja@gmail.com
                                </p>
                            )}
                            <button
                                type="submit"
                                className="submit-btn"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Sending...' : 'Send it'}
                                {!isSubmitting && (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Right: Contact Info */}
                    <div className="contact-info">
                        <div className="info-logo">
                            <div className="logo-circle">
                                <img src={avatar} alt="Sudhir Mahaaraja" className="logo-img" />
                            </div>
                        </div>

                        <div className="info-section">
                            <h3 className="info-label">Contact Details</h3>
                            <a href="mailto:sudhirmahaaraja@gmail.com" className="info-email">
                                sudhirmahaaraja@gmail.com
                            </a>
                        </div>

                        <div className="info-section">
                            <h3 className="info-label">Socials</h3>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/sudhirmahaaraja" target="_blank" rel="noopener noreferrer" className="social-link">
                                    LinkedIn
                                </a>
                                <a href="https://github.com/sudhirMahaaraja/" target="_blank" rel="noopener noreferrer" className="social-link">
                                    GitHub
                                </a>
                            </div>
                        </div>

                        {/* Back Button */}
                        <button
                            className="back-home-btn"
                            onClick={() => onNavigate && onNavigate('home')}
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            Back to Home
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
