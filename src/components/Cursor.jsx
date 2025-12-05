import { useEffect, useRef } from 'react';

const Cursor = () => {
    const dotRef = useRef(null);
    const outlineRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        const outline = outlineRef.current;

        if (!dot || !outline) return;

        let mouseX = 0;
        let mouseY = 0;
        let outlineX = 0;
        let outlineY = 0;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Immediate update for dot
            dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;

            // Interactive hover state
            const target = e.target;
            const isInteractive =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('interactive');

            if (isInteractive) {
                outline.style.width = '60px';
                outline.style.height = '60px';
                outline.style.backgroundColor = 'rgba(255, 221, 152, 0.1)';
                outline.style.borderColor = 'transparent';
            } else {
                outline.style.width = '40px';
                outline.style.height = '40px';
                outline.style.backgroundColor = 'transparent';
                outline.style.borderColor = 'rgba(255, 221, 152, 0.5)';
            }
        };

        const animateOutline = () => {
            // Smooth trailing effect
            outlineX += (mouseX - outlineX) * 0.15;
            outlineY += (mouseY - outlineY) * 0.15;

            outline.style.transform = `translate(${outlineX}px, ${outlineY}px) translate(-50%, -50%)`;

            requestAnimationFrame(animateOutline);
        };

        window.addEventListener('mousemove', onMouseMove);
        const animationId = requestAnimationFrame(animateOutline);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot"></div>
            <div ref={outlineRef} className="cursor-outline"></div>
        </>
    );
};

export default Cursor;
