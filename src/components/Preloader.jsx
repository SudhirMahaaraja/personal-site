import { useState, useEffect } from 'react';
import './Preloader.css';

const greetings = [
    "Hello",
    "Hola",
    "Ni hao",
    "Bonjour",
    "Konnichiwa",
    "Marhaba",
    "Hallo",
    "Ciao",
    "வணக்கம்"
];

const Preloader = ({ onComplete }) => {
    const [index, setIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(false); // Controls text opacity
    const [isExiting, setIsExiting] = useState(false); // Controls panel swipe

    useEffect(() => {
        let timeoutId;
        let fadeTimeoutId;

        const animate = () => {
            const currentWord = greetings[index];
            const isSlowWord = currentWord === "Hello" || currentWord === "வணக்கம்";

            // If it's a slow word (Hello/Vanakkam), we do the full fade in/out cycle
            if (isSlowWord) {
                // Ensure transition is enabled
                const textEl = document.querySelector('.greeting-text');
                if (textEl) textEl.classList.remove('no-transition');

                setIsVisible(true);

                // Schedule fade out
                fadeTimeoutId = setTimeout(() => {
                    // If it's the last word (Vanakkam), exit sequence
                    if (index === greetings.length - 1) {
                        timeoutId = setTimeout(() => {
                            setIsExiting(true);
                            setTimeout(() => {
                                if (onComplete) onComplete();
                            }, 800);
                        }, 1000);
                        return;
                    }

                    setIsVisible(false);

                    // Schedule next word
                    timeoutId = setTimeout(() => {
                        setIndex((prev) => prev + 1);
                    }, 500); // Fade duration

                }, 1500); // Visible duration for slow words
            } else {
                // Fast words: Instant switch, no fade
                // Ensure transition is disabled for instant appearance
                const textEl = document.querySelector('.greeting-text');
                if (textEl) textEl.classList.add('no-transition');

                setIsVisible(true); // Make sure it's visible (opacity 1)

                // Wait 300ms then switch
                timeoutId = setTimeout(() => {
                    // Check next word
                    const nextIndex = index + 1;
                    if (nextIndex < greetings.length) {
                        const nextWord = greetings[nextIndex];
                        const nextIsSlow = nextWord === "Hello" || nextWord === "வணக்கம்";

                        if (nextIsSlow) {
                            // Transitioning to slow word (Vanakkam)
                            // We need to fade out the current fast word smoothly
                            if (textEl) textEl.classList.remove('no-transition');

                            // Force a reflow or slight delay to ensure transition is re-enabled before changing opacity?
                            // Usually removing class is enough if we wait a frame, but here we want to fade OUT.
                            // So: remove class -> set visible false.

                            // Let's try just removing the class and setting visible false immediately.
                            // Browser might optimize and not transition if done in same tick.
                            // Better to use requestAnimationFrame or small timeout.
                            requestAnimationFrame(() => {
                                setIsVisible(false);
                                // Wait for fade out then switch
                                setTimeout(() => {
                                    setIndex(nextIndex);
                                }, 500);
                            });
                        } else {
                            // Next is also fast, just switch instantly
                            setIndex(nextIndex);
                        }
                    }
                }, 300); // Fast duration
            }
        };

        // Start animation loop
        if (index === 0) {
            timeoutId = setTimeout(animate, 100);
        } else {
            animate();
        }

        return () => {
            clearTimeout(timeoutId);
            clearTimeout(fadeTimeoutId);
        };
    }, [index, onComplete]);

    // Lock scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <div className={`preloader-container ${isExiting ? 'exit' : ''}`}>
            <div className={`greeting-text ${isVisible ? 'visible' : ''}`}>
                {greetings[index]}
            </div>
        </div>
    );
};

export default Preloader;
