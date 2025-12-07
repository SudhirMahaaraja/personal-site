import { useState, useRef, useEffect } from 'react';
import audioFile from '../assets/Clairvoyant - MISOGI [music].mp3';

const AudioPlayer = ({ mobile = false }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.2;
        }
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                // Fade in effect
                audioRef.current.volume = 0;
                audioRef.current.play();

                // Gradually increase volume over 2 seconds
                const targetVolume = 0.3;
                const fadeInDuration = 2000; // 2 seconds
                const startTime = Date.now();

                const fadeIn = () => {
                    const elapsed = Date.now() - startTime;
                    const progress = Math.min(elapsed / fadeInDuration, 1);

                    if (audioRef.current) {
                        audioRef.current.volume = targetVolume * progress;
                    }

                    if (progress < 1) {
                        requestAnimationFrame(fadeIn);
                    }
                };

                fadeIn();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="audio-player-container">
            <audio ref={audioRef} src={audioFile} loop />

            <button
                className={`audio-btn ${isPlaying ? 'playing' : ''} ${mobile ? 'mobile' : ''}`}
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause Music" : "Play Music"}
            >
                <div className="wav-logo">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </button>

            <style>{`
                .audio-btn {
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.2s ease;
                }

                .audio-btn:hover {
                    transform: scale(1.1);
                }

                /* Mobile button styling */
                .audio-btn.mobile {
                    width: 100%;
                    border: 1px solid var(--border-color);
                    border-radius: 12px;
                    padding: 12px;
                    color: var(--text-primary);
                    gap: 12px;
                    background: transparent;
                    transform: none;
                }

                .audio-btn.mobile:hover {
                    transform: none;
                    background: rgba(255, 255, 255, 0.05);
                }

                .audio-label {
                    font-size: 0.95rem;
                    font-weight: 500;
                }

                .wav-logo {
                    display: flex;
                    align-items: center;
                    gap: 3px;
                    height: 20px;
                }

                .bar {
                    width: 3px;
                    background-color: var(--text-primary);
                    border-radius: 99px;
                    animation: none;
                    height: 4px;
                    transition: height 0.2s ease, background-color 0.3s ease;
                }

                /* Static heights when paused */
                .bar:nth-child(1) { height: 8px; }
                .bar:nth-child(2) { height: 16px; }
                .bar:nth-child(3) { height: 12px; }
                .bar:nth-child(4) { height: 6px; }

                /* Playing Animation */
                .playing .bar {
                    animation: sound-wave 1s ease-in-out infinite;
                    background-color: var(--accent-color);
                }

                .playing .bar:nth-child(1) { animation-delay: 0.0s; }
                .playing .bar:nth-child(2) { animation-delay: 0.2s; }
                .playing .bar:nth-child(3) { animation-delay: 0.4s; }
                .playing .bar:nth-child(4) { animation-delay: 0.1s; }

                /* Hover Effect when playing */
                .playing:hover .bar {
                    background-color: var(--text-primary); /* Change color on hover */
                }

                @keyframes sound-wave {
                    0%, 100% { height: 4px; }
                    50% { height: 20px; }
                }
            `}</style>
        </div>
    );
};

export default AudioPlayer;
