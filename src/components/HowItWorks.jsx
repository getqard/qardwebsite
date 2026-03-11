import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { QrCode, Smartphone, Sparkles, Gift } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Scannen & Loslegen",
        description: "Smartphone an den Aufsteller halten oder QR-Code scannen. Funktioniert sofort mit jedem modernen iPhone und Android. Kein App-Download nötig.",
        badge: "100% ohne App-Download",
        icon: QrCode,
        color: "text-blue-400",
        bgColor: "bg-blue-400/10",
        borderColor: "border-blue-400/20"
    },
    {
        id: 2,
        title: "Karte speichern",
        description: "Mit einem Klick ist die Karte in der nativen Apple Wallet (iPhone) oder Google Wallet (Android) gespeichert. Beide Apps sind ab Werk auf jedem Gerät vorinstalliert.",
        icon: Smartphone,
        color: "text-indigo-400",
        bgColor: "bg-indigo-400/10",
        borderColor: "border-indigo-400/20"
    },
    {
        id: 3,
        title: "Stempel sammeln",
        description: "Beim Bezahlen scannst du einfach den Pass des Kunden. Der neue Stempel erscheint in Echtzeit auf dem Display.",
        icon: Sparkles,
        color: "text-pink-400",
        bgColor: "bg-pink-400/10",
        borderColor: "border-pink-400/20"
    },
    {
        id: 4,
        title: "Belohnen & Binden",
        description: "Karte voll? Dein Kunde löst seine verdiente Prämie ein und sammelt direkt von vorne für die nächste Belohnung weiter.",
        icon: Gift,
        color: "text-orange-400",
        bgColor: "bg-orange-400/10",
        borderColor: "border-orange-400/20"
    }
];

const InteractiveMockups = ({ activeStep, activeData }) => (
    <div className="relative w-[300px] h-[300px] lg:w-full lg:max-w-[450px] lg:aspect-square pointer-events-auto">
        {/* Animated Background Glow */}
        <motion.div
            className={`absolute inset-0 rounded-full blur-[80px] lg:blur-[100px] transition-colors duration-700 ${activeData.bgColor.replace('/10', '/20')}`}
            layoutId="glow"
        />

        {/* Feature Display Box */}
        <div className="absolute inset-0 bg-[#0A0A0F]/80 lg:bg-white/5 backdrop-blur-3xl rounded-[2.5rem] lg:rounded-[3rem] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.5)] flex flex-col items-center justify-center p-6 lg:p-10 text-center overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeStep}
                    initial={{ scale: 0.95, opacity: 0, y: 15 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 1.05, opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex flex-col items-center w-full h-full justify-center absolute inset-0"
                >
                    {activeStep === 0 ? (
                        // Step 1: Hardware NFC Scan
                        <div className="absolute inset-0 w-full h-full bg-cover bg-center rounded-[2.5rem] lg:rounded-[3rem]" style={{ backgroundImage: "url('/NFCSCANHERZO.png')" }}>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-[2.5rem] lg:rounded-[3rem]"></div>
                            <div className="absolute top-[55%] left-[53%] z-10 w-24 h-24 lg:w-32 lg:h-32 -translate-x-full -translate-y-full origin-bottom-right">
                                {[0, 1, 2].map((i) => (
                                    <motion.div
                                        key={`nfc-ripple-${i}`}
                                        className="absolute bottom-0 right-0 rounded-tl-full border-t-[3px] border-l-[3px] border-white/80 pointer-events-none translate-x-[2px] translate-y-[2px]"
                                        initial={{ width: 10, height: 10, opacity: 0 }}
                                        animate={{ width: 80, height: 80, opacity: [0, 0.8, 0] }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i * 2 }}
                                    />
                                ))}
                            </div>
                            <div className="absolute bottom-6 lg:bottom-10 left-0 w-full text-center z-20">
                                <h4 className="text-xl lg:text-2xl font-bold text-white tracking-wider drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">NFC oder QR-Code</h4>
                            </div>
                        </div>
                    ) : activeStep === 1 ? (
                        // Step 2: Wallet Install Mockup
                        <div className="w-full h-full relative flex flex-col items-center justify-end p-0">
                            <div className="absolute inset-0 bg-indigo-500/10 blur-[60px] rounded-full z-0"></div>
                            <motion.div
                                className="relative w-[180px] h-[390px] lg:w-[252px] lg:h-[545px] bg-[#000] rounded-t-[2.2rem] lg:rounded-t-[2.7rem] border-[5px] lg:border-[7px] border-[#18181A] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col items-center z-10 -mb-[120px] lg:-mb-[224px]"
                                initial={{ y: "110%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 110, damping: 22, delay: 0.15 }}
                            >
                                <div className="absolute top-[8px] lg:top-[11px] left-1/2 -translate-x-1/2 w-[60px] h-[18px] lg:w-[85px] lg:h-[25px] bg-black rounded-full z-30 shadow-[0_0_10px_black]"></div>
                                <div className="w-full h-full relative">
                                    <img src="/step2herzo.png" alt="Apple Wallet Install Screen" className="w-full h-full object-cover object-top rounded-t-[1.8rem] lg:rounded-t-[2.2rem] bg-black" />
                                    <motion.div
                                        className="absolute top-[5.7%] right-[1.15%] w-[60px] h-[24px] lg:w-[80px] lg:h-[32px] border-2 border-[#1Da1F2] rounded-full bg-[#1Da1F2]/20 z-40 flex items-center justify-center pointer-events-none origin-center"
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ delay: 0.6, duration: 0.5 }}
                                    >
                                        <motion.div className="absolute inset-0 rounded-full border-2 border-[#1Da1F2]" animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    ) : activeStep === 2 ? (
                        // Step 3: Scan Process Mockup
                        <div className="w-full h-full relative flex flex-col items-center justify-end p-0">
                            <div className="absolute inset-0 bg-green-500/10 blur-[60px] rounded-full z-0"></div>
                            <motion.div
                                className="relative w-[165px] h-[360px] lg:w-[230px] lg:h-[500px] bg-[#000] rounded-[2rem] lg:rounded-[2.5rem] border-[5px] lg:border-[6px] border-[#18181A] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col items-center z-10 -mb-[80px] lg:-mb-[120px]"
                                initial={{ y: "110%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 110, damping: 22, delay: 0.15 }}
                            >
                                <div className="w-full h-full relative">
                                    <img src="/scannprozess.png" alt="Scan Process" className="w-full h-full object-cover object-[center_30%] opacity-90 rounded-[1.6rem] lg:rounded-[2rem]" />
                                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/40 to-black/80"></div>
                                    <motion.div className="absolute left-0 w-full h-[2px] lg:h-[3px] bg-green-400 shadow-[0_0_30px_rgba(74,222,128,1)] z-20" initial={{ top: "20%" }} animate={{ top: ["20%", "80%", "20%"] }} transition={{ duration: 3, ease: "linear", repeat: Infinity }} />
                                    <motion.div
                                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] bg-white/95 backdrop-blur-2xl border border-white/50 rounded-2xl p-4 lg:p-5 flex flex-col items-center shadow-[0_30px_60px_rgba(0,0,0,0.6)] z-30 min-w-[120px] lg:min-w-[160px]"
                                        initial={{ scale: 0.5, opacity: 0 }}
                                        animate={{ scale: [0.5, 1.1, 1], opacity: [0, 1, 1, 0] }}
                                        transition={{ duration: 3, times: [0, 0.1, 0.8, 1], repeat: Infinity, delay: 1.5 }}
                                    >
                                        <div className="w-10 h-10 lg:w-14 lg:h-14 bg-green-500 rounded-full flex items-center justify-center mb-1 lg:mb-2 shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                                            <svg className="w-5 h-5 lg:w-7 lg:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-gray-900 font-extrabold text-lg lg:text-xl tracking-tight leading-none mb-1">+1</span>
                                        <span className="text-gray-500 font-bold tracking-wide uppercase text-[8px] lg:text-[10px]">Stempel erfasst</span>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    ) : (
                        // Step 4: Reward Screen Mockup
                        <div className="w-full h-full relative flex flex-col items-center justify-end p-0">
                            <div className="absolute inset-0 bg-orange-500/10 blur-[60px] rounded-full z-0"></div>
                            <motion.div
                                className="relative w-[165px] h-[360px] lg:w-[230px] lg:h-[500px] bg-[#000] rounded-[2rem] lg:rounded-[2.5rem] border-[5px] lg:border-[6px] border-[#18181A] shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col items-center z-10 -mb-[60px] lg:-mb-[80px]"
                                initial={{ y: "110%", opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ type: "spring", stiffness: 110, damping: 22, delay: 0.15 }}
                            >
                                <div className="absolute top-[8px] lg:top-[10px] left-1/2 -translate-x-1/2 w-[55px] h-[16px] lg:w-[75px] lg:h-[22px] bg-black rounded-full z-30"></div>
                                <div className="w-full h-full relative">
                                    <img src="/pramie.png" alt="Reward Unlocked" className="w-full h-full object-cover object-top rounded-[1.6rem] lg:rounded-[2rem] bg-black" />
                                    <motion.div
                                        className="absolute top-[52%] left-1/2 -translate-x-1/2 w-[85%] h-[60px] lg:h-[85px] rounded-lg lg:rounded-xl border-2 border-orange-400 bg-orange-400/20 z-40 pointer-events-none"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: [0, 1, 0.5, 1], scale: [0.9, 1.05, 1, 1.05] }}
                                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                                    >
                                        <div className="absolute inset-0 bg-white/10 rounded-lg lg:rounded-xl blur-sm"></div>
                                        <motion.div className="absolute -inset-2 rounded-xl lg:rounded-2xl border border-orange-500/50" animate={{ scale: [1, 1.2], opacity: [1, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut", delay: 0.5 }} />
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    </div>
);

export default function HowItWorks() {
    const sectionRef = useRef(null);
    const stepsRef = useRef(null);
    const [activeStep, setActiveStep] = useState(0);
    const [showFixed, setShowFixed] = useState(false);
    const [fixedRight, setFixedRight] = useState(0);
    const [fixedWidth, setFixedWidth] = useState(0);

    // scrollYProgress tracks the STEPS area only (not the header)
    const { scrollYProgress } = useScroll({
        target: stepsRef,
        offset: ["start 65%", "end 65%"],
    });

    // Smooth progress bar
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Update active step based on scroll position - tuned for shorter bottom padding
    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((v) => {
            if (v < 0.28) setActiveStep(0);
            else if (v < 0.52) setActiveStep(1);
            else if (v < 0.75) setActiveStep(2);
            else setActiveStep(3);
        });
        return () => unsubscribe();
    }, [scrollYProgress]);

    // Control fixed visibility based on the STEPS container position
    useEffect(() => {
        const handleScroll = () => {
            if (!stepsRef.current || !sectionRef.current) return;
            const stepsRect = stepsRef.current.getBoundingClientRect();
            const windowH = window.innerHeight;

            // Show fixed panel when the STEPS area top reaches the center of the viewport
            // and hide when the STEPS area bottom passes above 50% of the viewport.
            // On mobile, keep it visible a bit longer since it sits at the bottom.
            const isMobile = window.innerWidth < 1024;
            const hideThreshold = isMobile ? windowH * 0.45 : windowH * 0.5;
            const visible = stepsRect.top < windowH * 0.8 && stepsRect.bottom > hideThreshold;
            
            setShowFixed(visible);

            // Calculate positioning for Desktop: right half of the max-w-7xl container
            if (!isMobile) {
                const maxW = Math.min(sectionRef.current.offsetWidth, 1280);
                const containerLeft = (window.innerWidth - maxW) / 2;
                const rightColumnLeft = containerLeft + maxW / 2;
                const rightColumnWidth = maxW / 2;

                setFixedRight(window.innerWidth - rightColumnLeft - rightColumnWidth);
                setFixedWidth(rightColumnWidth);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        handleScroll();
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    const activeData = steps[activeStep];

    return (
        <section className="pt-12 pb-32 text-white relative z-10 w-full" ref={sectionRef}>
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight text-white">
                        In 10 Sekunden im Wallet. <br />
                        <span className="text-indigo-400">Für immer im Kopf.</span>
                    </h2>
                    <p className="text-xl text-white/60">Das einfachste System für dich und deine Kunden. Kein Papierkram, keine separaten Apps.</p>
                </div>

                {/* Steps Area - precise scroll tracking */}
                <div ref={stepsRef} className="w-full lg:w-1/2 relative lg:pr-16">
                    {/* Progress Line */}
                    <div className="absolute left-[27px] top-0 w-[2px] bg-white/5" style={{ bottom: 'calc(20vh + 1rem)' }}>
                        <motion.div
                            className="absolute top-0 left-0 w-full bg-gradient-to-b from-indigo-500 to-purple-500 origin-top"
                            style={{ scaleY, height: "100%" }}
                        />
                    </div>

                    {/* Steps with balanced spacing for Mobile (tighter) vs Desktop (loose) */}
                    <div className="space-y-[45vh] lg:space-y-[28vh] pt-4 pb-[60vh] lg:pb-[20vh]">
                        {steps.map((step, index) => {
                            const isActive = activeStep === index;
                            return (
                                <div
                                    key={step.id}
                                    className={`relative pl-16 lg:pl-20 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? 'opacity-100 translate-x-0' : 'opacity-30 -translate-x-4'}`}
                                >
                                    {/* Step Circle */}
                                    <div className={`absolute left-0 top-1 w-12 h-12 lg:w-14 lg:h-14 rounded-full flex items-center justify-center font-bold text-xl border-2 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive ? `bg-qard-dark ${step.borderColor} ${step.color} scale-110 shadow-[0_0_20px_rgba(0,0,0,0.3)]` : 'bg-transparent border-white/10 text-white/50 scale-100'}`}>
                                        {step.id}
                                    </div>

                                    <div className="flex flex-col lg:flex-row lg:items-center gap-3 mb-4">
                                        <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">{step.title}</h3>
                                        {step.badge && (
                                            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] lg:text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider inline-block w-fit">
                                                {step.badge}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-lg lg:text-xl text-white/50 leading-relaxed pr-4">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* OVERLAYS: Desktop (Right fixed) and Mobile (Bottom fixed) */}
            <AnimatePresence>
                {showFixed && (
                    <>
                        {/* Desktop Overlay */}
                        <motion.div
                            className="hidden lg:flex fixed top-0 h-screen items-center justify-center z-40 pointer-events-none"
                            style={{ right: fixedRight, width: fixedWidth }}
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 40 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <InteractiveMockups activeStep={activeStep} activeData={activeData} />
                        </motion.div>

                        {/* Mobile Overlay (Fixed Bottom) */}
                        <motion.div
                            className="flex lg:hidden fixed bottom-6 left-0 w-full items-center justify-center z-40 pointer-events-none px-4"
                            initial={{ opacity: 0, y: 100, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 100, scale: 0.95 }}
                            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <InteractiveMockups activeStep={activeStep} activeData={activeData} />
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
