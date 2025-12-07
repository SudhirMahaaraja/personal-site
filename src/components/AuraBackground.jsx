import React, { useEffect, useState } from 'react';

const AuraBackground = ({ opacity = 1, className = '' }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            // Treat width < 1024px (tablets included) as mobile/simplified view
            setIsMobile(window.innerWidth < 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        // Only load Unicorn Studio on Desktop
        if (isMobile) return;

        const initUnicorn = () => {
            if (window.UnicornStudio) {
                window.UnicornStudio.init();
                return;
            }

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

        initUnicorn();
        // Retry for safety
        const timeout = setTimeout(initUnicorn, 100);
        return () => clearTimeout(timeout);
    }, [isMobile]);

    const containerStyle = {
        opacity: opacity,
        transition: 'opacity 0.5s ease-in-out'
    };

    return (
        <div className={`aura-wrapper ${className}`} style={containerStyle}>
            {isMobile ? (
                /* Mobile Fallback: Animated CSS Blobs */
                <div className="mobile-aura-container">
                    <div className="aura-blob blob-1"></div>
                    <div className="aura-blob blob-2"></div>
                    <div className="aura-blob blob-3"></div>
                </div>
            ) : (
                /* Desktop: Full WebGL Aura */
                <div
                    className="aura-background-component"
                    data-alpha-mask="82"
                >
                    <div data-us-project="OGV3DwiIWxPelWFZjtEu" className="us-project-container"></div>
                </div>
            )}

            {/* Ambient Glows (Shared) */}
            <div className="aura-glow glow-1"></div>
            <div className="aura-glow glow-2"></div>
        </div>
    );
};

export default AuraBackground;
