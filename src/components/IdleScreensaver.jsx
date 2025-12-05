import { useState, useEffect } from 'react';
import './IdleScreensaver.css';

const IdleScreensaver = ({ loading }) => {
    const [isIdle, setIsIdle] = useState(false);
    const [isReady, setIsReady] = useState(false); // Track if initial delay is done

    // Wait 10 seconds after preloader finishes before enabling idle detection
    useEffect(() => {
        if (!loading && !isReady) {
            const initialDelay = setTimeout(() => {
                setIsReady(true);
            }, 10000); // 10 seconds after preloader

            return () => clearTimeout(initialDelay);
        }
    }, [loading, isReady]);

    // Set up idle detection only after initial delay
    useEffect(() => {
        if (!isReady) return; // Don't start until ready

        let timeoutId;
        const IDLE_TIMEOUT = 12000; // 12 seconds

        const resetTimer = () => {
            // Wake up if idle
            setIsIdle(false);

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsIdle(true);
            }, IDLE_TIMEOUT);
        };

        // Events to listen for
        const events = [
            'mousemove', 'mousedown', 'click',
            'scroll', 'keypress', 'touchstart'
        ];

        // Attach listeners
        events.forEach(event => {
            window.addEventListener(event, resetTimer);
        });

        // Start initial timer (12 seconds from when ready)
        timeoutId = setTimeout(() => {
            setIsIdle(true);
        }, IDLE_TIMEOUT);

        // Cleanup
        return () => {
            clearTimeout(timeoutId);
            events.forEach(event => {
                window.removeEventListener(event, resetTimer);
            });
        };
    }, [isReady]); // Only run when isReady changes

    return (
        <div className={`screensaver-overlay ${isIdle ? 'active' : ''}`}>
            <div className="stars-container">
                <div className="stars"></div>
                <div className="stars2"></div>
                <div className="stars3"></div>
            </div>
        </div>
    );
};

export default IdleScreensaver;
