import React, { useEffect } from 'react';

const AuraBackground = ({ opacity = 1, className = '' }) => {
    useEffect(() => {
        const initUnicorn = () => {
            if (window.UnicornStudio) {
                window.UnicornStudio.init();
                return;
            }

            // Check if script already exists to prevent duplicates
            if (document.querySelector('script[src*="unicornStudio"]')) {
                return;
            }

            const script = document.createElement('script');
            script.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.34/dist/unicornStudio.umd.js";
            script.onload = () => {
                if (window.UnicornStudio) {
                    window.UnicornStudio.init();
                }
            };
            document.body.appendChild(script);
        };

        // Try init immediately in case it's already there
        initUnicorn();

        // If we navigated back, re-init might be needed if component unmounted
        const timeout = setTimeout(initUnicorn, 100);

        return () => clearTimeout(timeout);
    }, []);

    // Dynamic style for opacity to control intensity on different pages
    const containerStyle = {
        opacity: opacity,
        transition: 'opacity 0.5s ease-in-out'
    };

    return (
        <div className={`aura-wrapper ${className}`} style={containerStyle}>
            {/* Unicorn Studio Background */}
            <div
                className="aura-background-component"
                data-alpha-mask="82"
            >
                <div data-us-project="OGV3DwiIWxPelWFZjtEu" className="us-project-container"></div>
            </div>

            {/* Ambient Glows */}
            <div className="aura-glow glow-1"></div>
            <div className="aura-glow glow-2"></div>
        </div>
    );
};

export default AuraBackground;
