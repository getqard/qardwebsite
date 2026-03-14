import React, { useState, useEffect, useCallback } from 'react';
import SlideContent, { TOTAL_SLIDES } from '../components/SlideContent';

const Pitch = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideStep, setSlideStep] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Initialize Sync System (LocalStorage is 100% reliable across tabs)
    useEffect(() => {
        const handleStorage = (e) => {
            if (e.key === 'qard-pitch-sync' && e.newValue) {
                try {
                    const data = JSON.parse(e.newValue);
                    setCurrentSlide(data.currentSlide);
                    setSlideStep(data.slideStep);
                } catch (err) {}
            }
        };

        // Also listen to BroadcastChannel as secondary fallback
        const bc = new BroadcastChannel('pitch-sync');
        bc.onmessage = (event) => {
            if (event.data?.type === 'SYNC_STATE' && event.data._source !== 'pitch') {
                setCurrentSlide(event.data.currentSlide);
                setSlideStep(event.data.slideStep);
            }
        };

        window.addEventListener('storage', handleStorage);

        return () => {
            window.removeEventListener('storage', handleStorage);
            bc.close();
        };
    }, []);

    // Broadcast state changes whenever they happen locally
    useEffect(() => {
        const syncData = { currentSlide, slideStep, _t: Date.now(), _source: 'pitch' };

        // 1. LocalStorage Sync
        localStorage.setItem('qard-pitch-sync', JSON.stringify(syncData));

        // 2. BroadcastChannel Sync
        const bc = new BroadcastChannel('pitch-sync');
        bc.postMessage({ type: 'SYNC_STATE', ...syncData });
        bc.close();
    }, [currentSlide, slideStep]);

    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((err) => {
                console.error(`Error attempting to enable fullscreen: ${err.message}`);
            });
        } else {
            document.exitFullscreen();
        }
    }, []);

    const SLIDE_STEPS_MAP = { 1:5, 2:4, 6:1, 7:1, 9:2, 10:2, 11:1, 14:4, 15:4 };

    const nextSlide = useCallback(() => {
        const maxStep = SLIDE_STEPS_MAP[currentSlide] || 0;
        if (slideStep < maxStep) {
            setSlideStep(prev => prev + 1);
        } else if (currentSlide < TOTAL_SLIDES - 1) {
            setCurrentSlide(prev => prev + 1);
            setSlideStep(0);
        }
    }, [currentSlide, slideStep]);

    const prevSlide = useCallback(() => {
        if (slideStep > 0) {
            setSlideStep(prev => prev - 1);
        } else if (currentSlide > 0) {
            const prevMax = SLIDE_STEPS_MAP[currentSlide - 1] || 0;
            setCurrentSlide(prev => prev - 1);
            setSlideStep(prevMax);
        }
    }, [currentSlide, slideStep]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === ' ') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            } else if (e.key.toLowerCase() === 'f') {
                toggleFullscreen();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };
        document.addEventListener('fullscreenchange', handleFullscreenChange);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, [nextSlide, prevSlide, toggleFullscreen]);

    const handleNavigate = useCallback((idx) => {
        setCurrentSlide(idx);
        setSlideStep(0);
    }, []);

    return (
        <div className="w-screen h-screen overflow-hidden bg-qard-dark relative">
            <SlideContent
                currentSlide={currentSlide}
                slideStep={slideStep}
                isPreview={false}
                isFullscreen={isFullscreen}
                onNextSlide={nextSlide}
                onNavigate={handleNavigate}
            />

            <div className={`absolute top-6 right-6 z-50 transition-opacity duration-1000 ${isFullscreen ? 'opacity-0' : 'opacity-20'}`}>
                <span className="text-white text-xs border border-white/20 px-2 py-1 rounded backdrop-blur-sm">F für Vollbild</span>
            </div>
        </div>
    );
};

export default Pitch;
