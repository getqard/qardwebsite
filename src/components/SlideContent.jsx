import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import { User, Calendar, CreditCard, Ticket, Music, RefreshCw, MapPin, Gift, Star, Bot, Smartphone, Settings, Target, Lock, Building2 } from 'lucide-react';
import DeviceMockup from './DeviceMockup';

export const TOTAL_SLIDES = 16;

// --- Sub-Components ---

const CounterValue = ({ slideStep, className, isPreview }) => {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('#ffffff');
    const [showQuestionMark, setShowQuestionMark] = useState(false);

    useEffect(() => {
        if (isPreview) {
            if (slideStep >= 3) {
                setCount(0);
                setColor('#ef4444');
                setShowQuestionMark(true);
            } else if (slideStep >= 1) {
                setCount(100);
                setColor('#ffffff');
                setShowQuestionMark(false);
            }
            return;
        }

        if (slideStep === 1) {
            setShowQuestionMark(false);
            setColor('#ffffff');
            const controls = animate(0, 100, {
                duration: 1.5,
                ease: [0.16, 1, 0.3, 1],
                onUpdate: (latest) => setCount(Math.round(latest))
            });
            return () => controls.stop();
        } else if (slideStep === 2) {
            setCount(100);
            setColor('#ffffff');
            setShowQuestionMark(false);
        } else if (slideStep === 3) {
            const controls = animate(100, 0, {
                duration: 2.5,
                ease: [0.16, 1, 0.3, 1],
                onUpdate: (latest) => {
                    setCount(Math.round(latest));
                    const progress = (100 - latest) / 100;
                    if (progress > 0.6) setColor('#ef4444');
                }
            });

            const timeout = setTimeout(() => setShowQuestionMark(true), 2600);

            return () => {
                controls.stop();
                clearTimeout(timeout);
            };
        }
    }, [slideStep, isPreview]);

    if (showQuestionMark) {
        return (
            <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: [1, 1.1, 1] }}
                transition={{
                    opacity: { duration: 0.5 },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className={`text-red-500 ${className}`}
            >
                ?
            </motion.span>
        );
    }

    return (
        <span className={className} style={{ color }}>
            {count}
        </span>
    );
};

const CustomerCounter = ({ isPreview }) => {
    const [count, setCount] = useState(isPreview ? 42 : 1);

    useEffect(() => {
        if (isPreview) return;
        const interval = setInterval(() => {
            setCount(prev => (prev < 99 ? prev + 1 : 1));
        }, 800);
        return () => clearInterval(interval);
    }, [isPreview]);

    return (
        <div className="flex flex-col items-center text-center">
            <motion.div
                key={count}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{
                    scale: [0.5, 1.1, 1],
                    opacity: 1
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-white font-bold text-8xl md:text-[9.5rem] leading-none mb-6 tabular-nums"
            >
                +{count}
            </motion.div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-400 text-2xl font-medium tracking-wide mb-8"
            >
                Neuer Kunde
            </motion.p>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                className="text-white text-sm font-light tracking-[0.2em] uppercase"
            >
                Name · Geburtstag · Erreichbar
            </motion.p>
        </div>
    );
};

const InactivityPush = ({ isPreview }) => {
    const [showPush, setShowPush] = useState(isPreview);

    useEffect(() => {
        if (isPreview) return;
        const show1 = setTimeout(() => setShowPush(true), 1500);
        const hide = setTimeout(() => setShowPush(false), 7500);
        const show2 = setTimeout(() => setShowPush(true), 9000);

        return () => {
            clearTimeout(show1);
            clearTimeout(hide);
            clearTimeout(show2);
        };
    }, [isPreview]);

    return (
        <div className="w-full h-full relative overflow-hidden bg-black flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: isPreview ? 0.6 : 0 }}
                animate={{ opacity: isPreview ? 0.6 : 1 }}
                transition={{ delay: isPreview ? 0 : 0.8, duration: isPreview ? 0 : 1 }}
                className="absolute inset-0"
            >
                <img src="/lockscreen-bg.webp" alt="Lockscreen" className="w-full h-full object-cover opacity-60" />
                <div className="absolute inset-0 bg-black/30" />
            </motion.div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/20 blur-[60px] rounded-full z-10" />

            <AnimatePresence>
                {showPush && (
                    <motion.div
                        initial={{ y: -50, opacity: 0, scale: 0.9 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: -50, opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="relative z-20 w-[92%] bg-black/30 backdrop-blur-3xl border border-white/10 rounded-[22px] p-4 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] flex items-start gap-3.5"
                    >
                        <div className="w-11 h-11 rounded-[10px] bg-black shrink-0 flex items-center justify-center overflow-hidden border border-white/5 shadow-inner">
                            <img src="/doener-logo.webp" alt="Logo" className="w-full h-full object-contain p-1" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline mb-0.5">
                                <span className="text-white/95 font-bold text-[13px] tracking-tight">Original Berliner Döner</span>
                                <span className="text-white/40 text-[10px]">Gerade eben</span>
                            </div>
                            <p className="text-white/90 text-[12.5px] leading-snug font-medium">
                                Schon 14 Tage nicht gesehen! 🥙 Wir vermissen dich – komm vorbei und genieße deinen Treue-Döner.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const SolutionItem = ({ title, subtitle, icon, delay, animation }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.8 }}
        className="flex flex-col items-center text-center group"
    >
        <div className="relative w-40 h-40 md:w-64 md:h-64 mb-10 flex items-center justify-center">
            {animation === 'trash' && (
                <div className="relative w-full h-full flex flex-col items-center justify-center">
                    <motion.div
                        animate={{
                            rotate: -15,
                            y: [0, -20, 200],
                            opacity: [1, 1, 0]
                        }}
                        transition={{
                            delay: delay + 1.2,
                            duration: 2.5,
                            repeat: Infinity,
                            repeatDelay: 1,
                            times: [0, 0.2, 1]
                        }}
                        className="z-10"
                    >
                        <div className="scale-125 md:scale-150">
                            {icon}
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: delay + 1.8 }}
                        className="absolute -bottom-10 text-6xl md:text-7xl"
                    >
                        🗑️
                    </motion.div>
                </div>
            )}

            {animation === 'reject' && (
                <div className="relative w-full h-full flex items-center justify-center">
                    <div className="opacity-40 group-hover:opacity-100 transition-opacity duration-500 scale-125 md:scale-150">
                        {icon}
                    </div>
                    <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                            scale: [0, 1.2, 1, 1, 0],
                            opacity: [0, 1, 1, 1, 0]
                        }}
                        transition={{
                            delay: delay + 1,
                            duration: 3,
                            repeat: Infinity,
                            repeatDelay: 1.5,
                            times: [0, 0.1, 0.2, 0.8, 1]
                        }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    >
                        <div className="text-red-500 text-9xl md:text-[14rem] font-bold drop-shadow-2xl">✕</div>
                    </motion.div>
                </div>
            )}

            {animation === 'fall' && (
                <div className="relative w-full h-full flex items-center justify-center">
                    <motion.div
                        animate={{
                            y: [0, 20, 250],
                            opacity: [1, 1, 0]
                        }}
                        transition={{
                            delay: delay + 1.5,
                            duration: 2,
                            repeat: Infinity,
                            repeatDelay: 1.5,
                            times: [0, 0.2, 1]
                        }}
                        className="scale-125 md:scale-150"
                    >
                        {icon}
                    </motion.div>
                </div>
            )}
        </div>

        <h4 className="text-2xl md:text-4xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-500">{title}</h4>
        <p className="text-base md:text-xl text-gray-400 font-light tracking-wide">{subtitle}</p>
    </motion.div>
);

const PaperCardIcon = () => (
    <div className="w-24 h-32 bg-white/10 border-2 border-white/20 rounded-lg flex flex-col p-4 gap-2 relative shadow-2xl overflow-hidden">
        <div className="w-full h-2 bg-white/20 rounded" />
        <div className="grid grid-cols-2 gap-2 mt-2">
            {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-square rounded-full border border-white/30 flex items-center justify-center text-[8px] text-white/50">
                    {i < 3 ? '✓' : ''}
                </div>
            ))}
        </div>
        <div className="absolute top-[-20%] right-[-20%] w-1/2 h-full bg-white/5 rotate-45" />
    </div>
);

const AppIcon = () => (
    <div className="w-24 h-44 bg-gray-800 border-4 border-gray-700 rounded-[2rem] p-3 shadow-2xl relative overflow-hidden">
        <div className="w-8 h-1 bg-gray-700 rounded-full mx-auto mb-4" />
        <div className="flex flex-col gap-2">
            <div className="w-full h-12 bg-white/5 rounded-xl border border-white/10" />
            <div className="w-full h-12 bg-white/5 rounded-xl border border-white/10" />
            <div className="w-full h-12 bg-white/5 rounded-xl border border-white/10" />
        </div>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border-2 border-gray-700" />
    </div>
);

const NewsletterIcon = () => (
    <div className="w-32 h-24 bg-blue-500/20 border-2 border-blue-400/40 rounded-sm shadow-2xl flex flex-col p-3 relative transform -rotate-6">
        <div className="w-2/3 h-2 bg-blue-400/30 mb-2" />
        <div className="flex gap-2">
            <div className="w-1/3 h-10 bg-white/10" />
            <div className="w-2/3 flex flex-col gap-1">
                <div className="w-full h-1 bg-white/20" />
                <div className="w-full h-1 bg-white/20" />
                <div className="w-full h-1 bg-white/20" />
            </div>
        </div>
        <div className="absolute top-2 right-2 text-xl opacity-40">📧</div>
    </div>
);

const GeofencingMap = ({ isPreview }) => {
    const [showPush, setShowPush] = useState(isPreview);

    useEffect(() => {
        if (isPreview) return;
        const initialTimer = setTimeout(() => setShowPush(true), 1500);
        const interval = setInterval(() => {
            setShowPush(false);
            setTimeout(() => setShowPush(true), 1000);
        }, 5000);

        return () => {
            clearTimeout(initialTimer);
            clearInterval(interval);
        };
    }, [isPreview]);

    return (
        <div className="w-full h-full relative">
            <div className="absolute inset-0 bg-zinc-950 rounded-[3rem] overflow-hidden shadow-inner border border-white/5">
                <img
                    src="/geofence-map.webp"
                    alt="Geofence Map"
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
                />
                <div className="absolute inset-0 bg-indigo-900/10 mix-blend-overlay" />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-[280px] h-[280px] rounded-full border-2 border-blue-500/30 bg-blue-500/10 flex items-center justify-center relative backdrop-blur-[2px]">
                        <div className="w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,1)] border border-white/50" />
                        <motion.div
                            className="absolute inset-0 rounded-full bg-blue-400/20"
                            animate={{
                                scale: [1, 1.3, 1],
                                opacity: [0.3, 0.1, 0.3]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                </div>

                <motion.div
                    className="absolute w-6 h-6 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)] border-2 border-white flex items-center justify-center z-20"
                    initial={isPreview ? { top: "50%", left: "50%", scale: 1 } : { top: "15%", left: "15%", scale: 0 }}
                    animate={{ top: "50%", left: "50%", scale: 1 }}
                    transition={{ duration: isPreview ? 0 : 2, ease: "easeInOut" }}
                    style={{ translateX: "-50%", translateY: "-50%" }}
                >
                    {showPush && (
                        <motion.div
                            className="absolute inset-0 rounded-full bg-blue-400/60"
                            animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                        />
                    )}
                </motion.div>
            </div>

            <AnimatePresence>
                {showPush && (
                    <motion.div
                        initial={{ y: -60, opacity: 0, scale: 0.9 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: -60, opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="absolute top-4 left-1/2 -translate-x-1/2 z-50 w-[105%] bg-black/40 backdrop-blur-3xl border border-white/20 rounded-3xl p-6 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] flex items-center gap-6"
                    >
                        <div className="w-16 h-16 rounded-2xl bg-[#5f462b] shrink-0 flex items-center justify-center overflow-hidden border border-white/10 shadow-2xl">
                            <img src="/cafe-milano-logo.png" alt="Logo" className="w-full h-full object-contain p-2" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline mb-1">
                                <span className="text-white font-bold text-xl uppercase tracking-wider">Café Milano</span>
                                <span className="text-white/40 text-[11px] font-medium">Gerade eben</span>
                            </div>
                            <p className="text-white/95 text-xl leading-snug font-semibold">
                                Du bist in der Nähe! ✨ Komm auf einen Kaffee vorbei.
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const BirthdayPush = ({ isPreview }) => {
    const [isAwake, setIsAwake] = useState(isPreview);
    const [showPush, setShowPush] = useState(isPreview);

    useEffect(() => {
        if (isPreview) return;
        const wakeUp = setTimeout(() => setIsAwake(true), 800);
        const pushIn = setTimeout(() => setShowPush(true), 1200);
        return () => {
            clearTimeout(wakeUp);
            clearTimeout(pushIn);
        };
    }, [isPreview]);

    return (
        <div className="w-full h-full relative bg-black overflow-hidden flex flex-col items-center justify-center">
            <motion.div
                initial={{ opacity: isPreview ? 0.6 : 0 }}
                animate={{ opacity: isAwake ? 0.6 : 0 }}
                transition={{ duration: isPreview ? 0 : 1 }}
                className="absolute inset-0"
            >
                <img src="/lockscreen-bg.webp" alt="Lockscreen" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30" />
            </motion.div>

            <AnimatePresence>
                {showPush && (
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 120, damping: 15 }}
                        className="relative z-20 w-[92%] bg-black/30 backdrop-blur-3xl border border-white/10 rounded-[22px] p-4 shadow-2xl flex items-start gap-4"
                    >
                        <div className="w-12 h-12 rounded-full bg-black shrink-0 flex items-center justify-center overflow-hidden border border-white/5">
                            <img src="/doener-logo.webp" alt="Logo" className="w-full h-full object-contain p-1.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline mb-0.5">
                                <span className="text-white/95 font-bold text-[13px]">Original Berliner Döner</span>
                                <span className="text-white/40 text-[10px]">Gerade eben</span>
                            </div>
                            <p className="text-white/90 text-[12.5px] leading-snug font-medium">
                                Alles Gute zum Geburtstag! 🎂 Dein Gratis-Döner wartet heute auf dich. Zeig diese Nachricht an der Kasse!
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const GoogleReviewGraphic = ({ isPreview }) => {
    const [step, setStep] = useState(isPreview ? 3 : 0);

    useEffect(() => {
        if (isPreview) return;
        const t1 = setTimeout(() => setStep(1), 800);
        const t2 = setTimeout(() => setStep(2), 1500);
        const t3 = setTimeout(() => setStep(3), 3500);
        return () => {
            clearTimeout(t1);
            clearTimeout(t2);
            clearTimeout(t3);
        };
    }, [isPreview]);

    return (
        <div className="bg-white rounded-[24px] overflow-hidden shadow-2xl flex flex-col p-8 text-center relative max-w-md mx-auto">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center mb-8"
            >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-green-500/20">
                    <span className="text-white text-3xl font-bold">✓</span>
                </div>
                <h3 className="text-gray-900 text-xl font-bold mb-1">Deine Karte ist bereit! 🎉</h3>
                <p className="text-gray-500 text-sm">Deine bestehende Karte wurde geladen.</p>
            </motion.div>

            <AnimatePresence>
                {step >= 1 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-green-50 rounded-2xl p-6 border border-green-100 mb-6"
                    >
                        <h4 className="text-gray-900 font-bold text-lg mb-1">Eine Sekunde noch?</h4>
                        <p className="text-green-800 text-sm font-medium mb-6">Dein Feedback bedeutet uns die Welt! 💚</p>

                        <div className="flex justify-center gap-2 mb-2">
                            {[1, 2, 3, 4, 5].map((star, i) => (
                                <motion.div
                                    key={star}
                                    initial={{ color: '#E5E7EB', scale: 1 }}
                                    animate={step >= 2 ? {
                                        color: '#FBBF24',
                                        scale: [1, 1.25, 1]
                                    } : {}}
                                    transition={{
                                        delay: i * 0.3,
                                        duration: 0.4,
                                        ease: "easeOut"
                                    }}
                                    className="text-4xl"
                                >
                                    ★
                                </motion.div>
                            ))}
                        </div>

                        <AnimatePresence>
                            {step >= 3 && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{ duration: 0.6 }}
                                    className="flex flex-col items-center"
                                >
                                    <p className="text-green-600 text-sm font-bold tracking-wide">
                                        → Weiterleitung zu Google
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="mt-auto pt-4 border-t border-gray-100">
                <p className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">
                    Powered by QARD
                </p>
            </div>
        </div>
    );
};

const Confetti = ({ isPreview }) => {
    const count = isPreview ? 10 : 40;
    const particles = Array.from({ length: count });
    const colors = ['#FFD700', '#FF00D4', '#1A56FF', '#9D00FF', '#00FA9A', '#FF4500'];

    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            {particles.map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        top: -50,
                        left: `${Math.random() * 100}%`,
                        scale: Math.random() * 0.8 + 0.4,
                        rotate: Math.random() * 360,
                        opacity: 1
                    }}
                    animate={{
                        top: '120%',
                        left: `${(Math.random() * 40 - 20) + (i / particles.length * 100)}%`,
                        rotate: Math.random() * 1080,
                        opacity: [1, 1, 0.8, 0]
                    }}
                    transition={{
                        delay: 1.2 + Math.random() * 3,
                        duration: 3 + Math.random() * 4,
                        ease: "easeOut"
                    }}
                    className="absolute"
                    style={{
                        width: Math.random() * 8 + 4 + 'px',
                        height: Math.random() * 8 + 4 + 'px',
                        backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                        borderRadius: i % 3 === 0 ? '2px' : i % 3 === 1 ? '50%' : '1px'
                    }}
                />
            ))}
        </div>
    );
};

const ShimmerText = ({ text }) => {
    return (
        <motion.h1
            className="text-6xl md:text-8xl font-bold tracking-tighter"
            style={{
                background: 'linear-gradient(to right, #ff00d4, #9d00ff, #1a56ff, #ff00d4)',
                backgroundSize: '300% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                paddingBottom: '0.1em',
            }}
            animate={{
                backgroundPosition: ['0% center', '300% center']
            }}
            transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
            }}
        >
            {text}
        </motion.h1>
    );
};

const WalletIcons = () => {
    const icons = [
        { Icon: CreditCard, label: 'Kreditkarte' },
        { Icon: Ticket, label: 'Boarding-Pass' },
        { Icon: Music, label: 'Konzertticket' }
    ];

    return (
        <div className="flex items-center justify-center gap-12 md:gap-20">
            {icons.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: i * 0.4,
                        duration: 0.6,
                        type: "spring",
                        stiffness: 100
                    }}
                    className="flex flex-col items-center gap-4"
                >
                    <item.Icon className="w-16 h-16 md:w-20 md:h-20 text-white/90" strokeWidth={1.5} />
                </motion.div>
            ))}
        </div>
    );
};

const StrikeThroughText = ({ text }) => {
    return (
        <div className="relative inline-block">
            <span className="text-xl md:text-2xl text-gray-500 font-medium">
                {text}
            </span>
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeInOut" }}
                className="absolute top-1/2 left-0 h-[2px] bg-red-500/60"
            />
        </div>
    );
};

const FeatureList = () => {
    const features = [
        { Icon: RefreshCw, color: '#f97316', text: 'Erkennt inaktive Kunden – holt sie zurück' },
        { Icon: Gift, color: '#eab308', text: 'Weiß wann er Geburtstag hat' },
        { Icon: Star, color: '#facc15', text: 'Leitet gute Bewertungen direkt auf Google' },
        { Icon: Bot, color: '#a855f7', text: 'KI schlägt die perfekte Nachricht vor' }
    ];

    return (
        <div className="flex flex-col gap-6 w-full max-w-2xl">
            {features.map((f, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + (i * 0.4), duration: 0.5 }}
                    className="flex items-center gap-6"
                >
                    <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-white/5"
                        style={{ backgroundColor: `${f.color}20` }}
                    >
                        <f.Icon className="w-6 h-6" style={{ color: f.color }} />
                    </div>
                    <span className="text-xl md:text-2xl text-white font-medium">
                        {f.text}
                    </span>
                </motion.div>
            ))}
        </div>
    );
};

const EcosystemCard = ({ index, title, desc, img, isBackend, hideNotch = false }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.8 }}
            className="flex flex-col items-center gap-6"
        >
            <div className="w-full aspect-[9/16] max-w-[180px] relative">
                {isBackend ? (
                    <div className="w-full h-full bg-white/5 rounded-[22px] border border-white/10 flex items-center justify-center shadow-2xl">
                        <div className="w-20 h-20 bg-gradient-to-br from-[#1a56ff] to-[#ff00d4] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(26,86,255,0.3)]">
                            <Settings className="w-10 h-10 text-white" />
                        </div>
                    </div>
                ) : (
                    <DeviceMockup className="w-full pointer-events-none" hideNotch={hideNotch}>
                        <div className="w-full h-full bg-[#111] rounded-[22px] overflow-hidden">
                            <img src={img} alt={title} className="w-full h-full object-cover" />
                        </div>
                    </DeviceMockup>
                )}
            </div>
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
                <p className="text-sm text-gray-400 font-medium px-4">{desc}</p>
            </div>
        </motion.div>
    );
};

const EcosystemLines = () => {
    return (
        <svg className="absolute top-0 left-0 w-full h-[120px] pointer-events-none" viewBox="0 0 1000 120" preserveAspectRatio="none">
            <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1a56ff" />
                    <stop offset="100%" stopColor="#ff00d4" />
                </linearGradient>
            </defs>

            <motion.path
                d="M 166 0 L 166 20 Q 166 80 500 100"
                fill="none"
                stroke="url(#line-gradient)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
            />

            <motion.path
                d="M 500 0 L 500 100"
                fill="none"
                stroke="url(#line-gradient)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.3, duration: 0.8 }}
            />

            <motion.path
                d="M 833 0 L 833 20 Q 833 80 500 100"
                fill="none"
                stroke="url(#line-gradient)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
            />
        </svg>
    );
};

const IndustryRush = ({ isPreview }) => {
    const words = [
        "Döner", "Café", "Barber", "Kosmetik", "Bäckerei", "Shisha Bar",
        "Restaurant", "Pizzeria", "Eisdiele", "Nagelstudio", "Friseur",
        "Tattoo", "Waschsalon", "Fitnessstudio", "Blumenladen", "Weinbar",
        "Späti", "Kiosk", "Burger", "Sushi", "Massage", "Brauerei"
    ];

    const itemCount = isPreview ? 20 : 150;
    const rushItems = Array.from({ length: itemCount }).map((_, i) => ({
        text: words[Math.floor(Math.random() * words.length)],
        left: Math.random() * 90 + '%',
        delay: Math.random() * 4,
        duration: 2 + Math.random() * 2,
        size: Math.floor(Math.random() * 40 + 20) + 'px',
        opacity: Math.random() * 0.5 + 0.2
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {rushItems.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ y: '110vh', opacity: 0 }}
                    animate={{ y: '-10vh', opacity: item.opacity }}
                    transition={{
                        delay: item.delay,
                        duration: item.duration,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="absolute text-white font-bold whitespace-nowrap"
                    style={{
                        left: item.left,
                        fontSize: item.size
                    }}
                >
                    {item.text}
                </motion.div>
            ))}
        </div>
    );
};

const MillionCounter = ({ isPreview }) => {
    const [count, setCount] = useState(isPreview ? 1000000 : 0);
    const [isDone, setIsDone] = useState(isPreview);

    useEffect(() => {
        if (isPreview) return;
        const stages = [
            { to: 10000, duration: 150 },
            { to: 50000, duration: 150 },
            { to: 100000, duration: 200 },
            { to: 250000, duration: 250 },
            { to: 500000, duration: 300 },
            { to: 750000, duration: 350 },
            { to: 900000, duration: 400 },
            { to: 950000, duration: 450 },
            { to: 980000, duration: 500 },
            { to: 1000000, duration: 600 }
        ];

        let currentStage = 0;
        let startCount = 0;

        const runStage = () => {
            if (currentStage >= stages.length) {
                setIsDone(true);
                return;
            }

            const { to, duration } = stages[currentStage];
            const startTime = performance.now();

            const step = (now) => {
                const progress = Math.min((now - startTime) / duration, 1);
                const val = Math.floor(startCount + (to - startCount) * progress);
                setCount(val);

                if (progress < 1) {
                    requestAnimationFrame(step);
                } else {
                    startCount = to;
                    currentStage++;
                    runStage();
                }
            };
            requestAnimationFrame(step);
        };

        const timeout = setTimeout(runStage, 300);
        return () => clearTimeout(timeout);
    }, [isPreview]);

    return (
        <motion.div
            className="flex items-center justify-center font-bold tracking-tighter"
            animate={isDone ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 0.4 }}
        >
            <span className="text-[120px] md:text-[180px] text-white">
                {count.toLocaleString('de-DE')}
                {isDone && "+"}
            </span>
        </motion.div>
    );
};

const Pillar = ({ step, requiredStep, icon: Icon, title, texts, badge, isGold }) => (
    <AnimatePresence>
        {step >= requiredStep && (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className={`flex-1 min-w-[220px] max-w-[280px] min-h-[320px] rounded-[16px] p-6 flex flex-col gap-3 backdrop-blur-2xl transition-all duration-300
                    ${isGold ? 'bg-white/[0.04] border border-[#FFD700]/30 shadow-[0_0_20px_rgba(255,215,0,0.08),_0_8px_32px_rgba(0,0,0,0.4)] hover:border-[#FFD700]/60 hover:shadow-[0_0_25px_rgba(255,215,0,0.15),_0_8px_32px_rgba(0,0,0,0.4)]' 
                             : 'bg-white/[0.06] border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-[#ff00d4]/40 hover:shadow-[0_0_20px_rgba(255,0,212,0.15),_0_8px_32px_rgba(0,0,0,0.3)]'}`}
            >
                <div className="mb-2">
                    {isGold ? <Icon color="#FFD700" size={36} /> : <Icon stroke="url(#qard-icon-gradient)" size={36} />}
                </div>
                <h3 className="text-white font-bold text-[22px] leading-tight">{title}</h3>
                <div className="flex flex-col gap-2.5">
                    {texts.map((t, i) => (
                        <p key={i} className="text-gray-300 text-[15px] leading-snug">{t}</p>
                    ))}
                </div>
                <div className="mt-auto pt-5 flex">
                    {badge}
                </div>
            </motion.div>
        )}
    </AnimatePresence>
);

// --- Main SlideContent Component ---

const SlideContent = ({ currentSlide, slideStep, isPreview = false, isFullscreen = false, onNextSlide, onNavigate }) => {
    const fadeVariants = {
        enter: { opacity: 0 },
        center: { opacity: 1 },
        exit: { opacity: 0 },
    };

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={currentSlide}
                variants={fadeVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: currentSlide === 1 ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full flex flex-col items-center justify-center text-white cursor-pointer"
                onClick={onNextSlide}
            >
                {currentSlide === 0 ? (
                    <>
                        <div className="absolute inset-0 z-0 overflow-hidden bg-[#03040b]">
                            <div className="absolute inset-0 bg-[#03040b]" />
                            <motion.div
                                className="absolute -right-[10%] top-[10%] w-[80%] h-[80%] rounded-full blur-[120px]"
                                style={{ background: 'radial-gradient(circle, rgba(255, 0, 212, 0.35) 0%, transparent 70%)' }}
                                animate={{ y: [0, 20, -10, 0], scale: [1, 1.05, 0.98, 1] }}
                                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                            />
                            <motion.div
                                className="absolute -right-[5%] -bottom-[10%] w-[90%] h-[90%] rounded-full blur-[140px]"
                                style={{ background: 'radial-gradient(circle, rgba(26, 86, 255, 0.55) 0%, transparent 70%)' }}
                                animate={{ x: [0, -20, 10, 0], scale: [1, 0.97, 1.03, 1] }}
                                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            />
                            <div className="absolute inset-0 bg-grid-pattern-dense opacity-[0.08] mix-blend-overlay pointer-events-none" />
                        </div>

                        <div className="z-10 relative flex flex-col items-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                className="flex flex-col items-center"
                            >
                                <motion.div
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative group"
                                >
                                    <div className="absolute inset-0 bg-white/5 blur-[80px] rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                                    <div className="relative pointer-events-none flex items-center justify-center">
                                        <img src="/LOGONEU.svg" alt="QARD Logo" className="w-96 md:w-[48rem] lg:w-[56rem] drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] brightness-125 relative z-10" />
                                        <motion.div
                                            className="absolute inset-0 z-20 mix-blend-plus-lighter"
                                            style={{
                                                background: 'linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.8) 50%, transparent 80%)',
                                                backgroundSize: '200% 100%',
                                                WebkitMaskImage: 'url(/LOGONEU.svg)',
                                                WebkitMaskSize: 'contain',
                                                WebkitMaskRepeat: 'no-repeat',
                                                WebkitMaskPosition: 'center',
                                                maskImage: 'url(/LOGONEU.svg)',
                                                maskSize: 'contain',
                                                maskRepeat: 'no-repeat',
                                                maskPosition: 'center'
                                            }}
                                            animate={{ backgroundPosition: ['150% 0%', '-50% 0%'] }}
                                            transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2, ease: [0.4, 0, 0.2, 1] }}
                                        />
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.8 }}
                            transition={{ delay: 2.5, duration: 2 }}
                            className="absolute bottom-32 lg:bottom-40 left-0 right-0 z-20 flex flex-col items-center pointer-events-none"
                        >
                            <div className="h-[1px] w-24 bg-white/30 mb-8" />
                            <div className="flex flex-col items-center gap-3">
                                <h2 className="text-4xl md:text-7xl tracking-[0.3em] uppercase font-light text-white drop-shadow-lg">Lano Aziz</h2>
                                <p className="text-sm md:text-base tracking-[0.6em] uppercase font-extralight text-white/50">Founder & Developer</p>
                            </div>
                        </motion.div>
                    </>
                ) : currentSlide === 1 ? (
                    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-qard-dark">
                        <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

                        <div className="flex flex-col items-center gap-12 relative z-10 w-full max-w-7xl px-8">
                            <AnimatePresence mode="wait">
                                {slideStep < 4 ? (
                                    <motion.div
                                        key="phases-1-3"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0, y: -50 }}
                                        transition={{ duration: 0.6 }}
                                        className="flex flex-col items-center gap-12"
                                    >
                                        <div className="flex flex-col items-center min-h-[300px] justify-center">
                                            <AnimatePresence>
                                                {slideStep >= 1 && (
                                                    <motion.div
                                                        key="counter"
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        animate={{ opacity: 1, scale: 1 }}
                                                        className="flex flex-col items-center"
                                                    >
                                                        <CounterValue
                                                            slideStep={slideStep}
                                                            className="text-[180px] md:text-[280px] font-bold tracking-tighter tabular-nums leading-none"
                                                            isPreview={isPreview}
                                                        />

                                                        <AnimatePresence>
                                                            {slideStep < 3 && (
                                                                <motion.p
                                                                    key="kunden-sub"
                                                                    initial={{ opacity: 0, y: 10 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    exit={{ opacity: 0, scale: 0.9 }}
                                                                    className="text-2xl md:text-4xl tracking-[0.4em] uppercase font-light mt-4"
                                                                >
                                                                    Kunden heute.
                                                                </motion.p>
                                                            )}
                                                        </AnimatePresence>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        <div className="min-h-[100px] flex items-center justify-center">
                                            {slideStep >= 2 && (
                                                <motion.h3
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ duration: 1, delay: 0.3 }}
                                                    className="text-4xl md:text-6xl font-medium text-white text-center leading-tight max-w-5xl"
                                                >
                                                    Wie viele kommen morgen wieder?
                                                </motion.h3>
                                            )}
                                        </div>
                                    </motion.div>
                                ) : slideStep === 4 ? (
                                    <motion.div
                                        key="phase-4"
                                        initial={{ opacity: 0, y: 40 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.5 } }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        className="w-full flex flex-col items-center"
                                    >
                                        <h2 className="text-4xl md:text-7xl font-light tracking-[0.2em] uppercase text-white/40 mb-24">Gescheiterte Lösungen</h2>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-32 w-full">
                                            <SolutionItem
                                                delay={0}
                                                title="Papierstempelkarten"
                                                subtitle="Vergessen. Verloren. Verschwunden."
                                                icon={<PaperCardIcon />}
                                                animation="trash"
                                            />
                                            <SolutionItem
                                                delay={4.0}
                                                title="Treue-Apps"
                                                subtitle="Lädt keiner runter."
                                                icon={<AppIcon />}
                                                animation="reject"
                                            />
                                            <SolutionItem
                                                delay={8.0}
                                                title="Newsletter & Flyer"
                                                subtitle="Spam oder Müll."
                                                icon={<NewsletterIcon />}
                                                animation="fall"
                                            />
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="phase-5"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 1 }}
                                        className="w-full h-full flex items-center justify-center p-12"
                                    >
                                        <h1 className="text-6xl md:text-[8rem] font-bold text-center leading-[1.1] tracking-tight">
                                            <span className="bg-gradient-to-r from-[#ff00d4] via-[#9d00ff] to-[#1a56ff] bg-clip-text text-transparent drop-shadow-2xl">
                                                Hoffen, dass sie wiederkommen.
                                            </span>
                                        </h1>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <AnimatePresence>
                            {slideStep >= 1 && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.4 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 pointer-events-none overflow-hidden"
                                >
                                    <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full" />
                                    <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-pink-600/10 blur-[120px] rounded-full" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ) : currentSlide === 2 ? (
                    <div className="w-full h-full flex items-center justify-center bg-qard-dark px-20">
                        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="min-h-[400px] flex flex-col justify-center">
                                <AnimatePresence mode="wait">
                                    {slideStep < 3 ? (
                                        <motion.div
                                            key="headlines"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="flex flex-col gap-14"
                                        >
                                            <motion.p
                                                initial={{ opacity: 0, x: -30 }}
                                                animate={{ opacity: 0.4, x: 0 }}
                                                transition={{ duration: 1 }}
                                                className="text-4xl md:text-6xl font-light text-white line-through decoration-white/40 leading-[1.15]"
                                            >
                                                Nicht Instagram.<br />Nicht eine App.
                                            </motion.p>

                                            {slideStep >= 1 && (
                                                <motion.h2
                                                    initial={{ opacity: 0, x: -30 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 1 }}
                                                    className="text-5xl md:text-8xl font-bold text-white tracking-tight"
                                                >
                                                    Direkt auf dem Handy.
                                                </motion.h2>
                                            )}

                                            {slideStep >= 2 && (
                                                <motion.h2
                                                    initial={{ opacity: 0, x: -30 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 1 }}
                                                    className="text-5xl md:text-8xl font-bold tracking-tight"
                                                >
                                                    <span className="bg-gradient-to-r from-[#ff00d4] via-[#9d00ff] to-[#1a56ff] bg-clip-text text-transparent">
                                                        Direkt auf dem Sperrbildschirm.
                                                    </span>
                                                </motion.h2>
                                            )}
                                        </motion.div>
                                    ) : slideStep === 3 ? (
                                        <motion.div
                                            key="customer-info"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="flex flex-col gap-8"
                                        >
                                            <div className="w-20 h-20 md:w-28 md:h-28 bg-gradient-to-br from-[#ff00d4] via-[#9d00ff] to-[#1a56ff] rounded-[2rem] flex items-center justify-center shadow-[0_20px_50px_rgba(157,0,255,0.3)] mb-4 border border-white/20 relative group">
                                                <div className="absolute inset-0 bg-white/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                <User size={48} className="text-white relative z-10" strokeWidth={1.5} />
                                            </div>
                                            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                                                Jeder Kunde – <br />ihr wisst wer er ist.
                                            </h2>
                                            <p className="text-2xl md:text-3xl text-gray-400 font-light">
                                                Ihr könnt ihm schreiben. Jederzeit.
                                            </p>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="inactivity-info"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            className="flex flex-col gap-8"
                                        >
                                            <div className="w-20 h-20 md:w-28 md:h-28 bg-orange-500/20 rounded-[2rem] flex items-center justify-center shadow-[0_20px_50px_rgba(249,115,22,0.2)] mb-4 border border-orange-500/20 relative group">
                                                <div className="absolute inset-0 bg-orange-500/10 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                                <Calendar size={48} className="text-orange-500 relative z-10" strokeWidth={1.5} />
                                            </div>
                                            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                                                Kommt er nicht mehr?
                                            </h2>
                                            <p className="text-2xl md:text-3xl text-gray-400 font-light">
                                                Euer System holt ihn zurück. <br />Automatisch.
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div className="relative flex justify-center lg:justify-end min-h-[600px] items-center">
                                <AnimatePresence>
                                    {slideStep >= 3 && (
                                        <motion.div
                                            initial={{ opacity: 0, x: 100 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: 100 }}
                                            transition={{ duration: 0.8, ease: "easeOut" }}
                                            className="relative"
                                        >
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />

                                            <div className="w-[300px] md:w-[380px] scale-110">
                                                <DeviceMockup className="w-full text-left">
                                                    <div className="w-full h-full relative bg-black rounded-[28px] overflow-hidden shadow-2xl flex flex-col items-center justify-center">
                                                        <AnimatePresence mode="wait">
                                                            {slideStep === 3 ? (
                                                                <motion.div
                                                                    key="counter"
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1 }}
                                                                    exit={{ opacity: 0 }}
                                                                    transition={{ duration: 0.3 }}
                                                                >
                                                                    <CustomerCounter isPreview={isPreview} />
                                                                </motion.div>
                                                            ) : (
                                                                <motion.div
                                                                    key="push"
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1 }}
                                                                    transition={{ delay: 0.5, duration: 0.5 }}
                                                                    className="w-full h-full"
                                                                >
                                                                    <InactivityPush isPreview={isPreview} />
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[35%] h-[5px] bg-white/20 rounded-full z-30" />
                                                    </div>
                                                </DeviceMockup>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                ) : currentSlide === 3 ? (
                    <div className="w-full h-full flex items-center justify-center bg-qard-dark px-20">
                        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="flex flex-col gap-10">
                                <motion.h2
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                    className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight"
                                >
                                    Was passiert wenn er an eurem <br />Laden vorbeiläuft?
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="text-2xl md:text-3xl text-gray-400 font-light"
                                >
                                    Sein Handy weiß wo er ist. <br />QARD verbindet euch.
                                </motion.p>

                                <motion.h2
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 1.0, duration: 0.8 }}
                                    className="text-3xl md:text-4xl font-bold tracking-tight"
                                >
                                    <span className="bg-gradient-to-r from-[#ff00d4] via-[#9d00ff] to-[#1a56ff] bg-clip-text text-transparent">
                                        Automatisch. Ohne dass ihr <br />irgendwas tut.
                                    </span>
                                </motion.h2>
                            </div>

                            <div className="relative flex justify-center lg:justify-end">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                    transition={{ duration: 1.2, ease: "easeOut" }}
                                    className="w-full max-w-[500px] aspect-square relative rounded-[3rem] border border-white/10 shadow-2xl"
                                >
                                    <GeofencingMap isPreview={isPreview} />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                ) : currentSlide === 4 ? (
                    <div className="w-full h-full flex items-center justify-center bg-qard-dark px-20 relative overflow-hidden">
                        <Confetti isPreview={isPreview} />
                        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="flex flex-col gap-10">
                                <motion.h2
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                    className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight"
                                >
                                    Geburtstag?
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="text-2xl md:text-3xl text-gray-400 font-light"
                                >
                                    Ein Geschenk wartet. <br />Ohne dass ihr dran denken müsst.
                                </motion.p>
                            </div>

                            <div className="relative flex justify-center lg:justify-end min-h-[600px] items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: 80 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="relative"
                                >
                                    <div className="w-[300px] md:w-[380px] scale-110">
                                        <DeviceMockup className="w-full text-left">
                                            <div className="w-full h-full relative bg-black rounded-[28px] overflow-hidden shadow-2xl">
                                                <BirthdayPush isPreview={isPreview} />
                                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[35%] h-[5px] bg-white/20 rounded-full z-30" />
                                            </div>
                                        </DeviceMockup>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                ) : currentSlide === 5 ? (
                    <div className="w-full h-full flex items-center justify-center bg-qard-dark px-20">
                        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="flex flex-col gap-10">
                                <motion.h2
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                    className="text-4xl md:text-6xl font-bold text-white leading-tight tracking-tight"
                                >
                                    Zufrieden?
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="text-2xl md:text-3xl text-gray-400 font-light"
                                >
                                    Bewertet euch auf Google. <br />Von allein.
                                </motion.p>
                            </div>

                            <div className="relative flex justify-center lg:justify-end min-h-[600px] items-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
                                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="w-full max-w-[460px]"
                                >
                                    <GoogleReviewGraphic isPreview={isPreview} />
                                </motion.div>
                            </div>
                        </div>
                    </div>
                ) : currentSlide === 6 ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-qard-dark px-20 relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            {slideStep === 0 ? (
                                <motion.div
                                    key="kein-konzept"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="text-center"
                                >
                                    <ShimmerText text="Kein Konzept. Das existiert. Jetzt." />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="wallet-explanation"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="flex flex-col items-center text-center gap-16"
                                >
                                    <WalletIcons />

                                    <div className="flex flex-col gap-6">
                                        <motion.h3
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5, duration: 0.6 }}
                                            className="text-4xl md:text-5xl font-bold text-white tracking-tight"
                                        >
                                            Apple Wallet. Google Wallet.
                                        </motion.h3>
                                        <motion.p
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 1, duration: 0.6 }}
                                            className="text-2xl md:text-3xl text-gray-400 font-light"
                                        >
                                            Auf 3 Milliarden Smartphones. Schon vorinstalliert.
                                        </motion.p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ) : currentSlide === 7 ? (
                    <div className="w-full h-full flex items-center justify-center bg-qard-dark px-20 relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            {slideStep === 0 ? (
                                <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                                    <motion.div
                                        key="view-text"
                                        initial={{ opacity: 0, x: -30 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -30 }}
                                        className="flex flex-col gap-6"
                                    >
                                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                                            Das ist was der Kunde sieht.
                                        </h2>
                                    </motion.div>

                                    <motion.div
                                        key="view-mockup"
                                        initial={{ opacity: 0, x: 80 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ x: 150, opacity: 0, scale: 0.8, filter: 'blur(10px)' }}
                                        transition={{ duration: 0.8 }}
                                        className="relative flex justify-center lg:justify-end"
                                    >
                                        <div className="w-[300px] md:w-[380px] scale-110">
                                            <DeviceMockup className="w-full text-left">
                                                <div className="w-full h-full relative bg-[#111] rounded-[28px] overflow-hidden shadow-2xl">
                                                    <img
                                                        src="/wallet-pass.webp"
                                                        alt="Original Berliner Döner Wallet Pass"
                                                        className="w-full h-full object-cover object-top"
                                                    />
                                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[35%] h-[5px] bg-white/20 rounded-full z-30" />
                                                </div>
                                            </DeviceMockup>
                                        </div>
                                    </motion.div>
                                </div>
                            ) : (
                                <motion.div
                                    key="value-text"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    className="text-center"
                                >
                                    <ShimmerText text="Der eigentliche Wert beginnt danach." />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ) : currentSlide === 8 ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-qard-dark px-20">
                        <div className="max-w-4xl w-full flex flex-col items-center gap-12">
                            <div className="relative">
                                <StrikeThroughText text="Ein Tool wo man sich eine Stempelkarte zusammenklickt." />
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.8 }}
                                className="flex flex-col items-center gap-12 w-full"
                            >
                                <h2 className="text-4xl md:text-5xl font-bold text-white text-center">
                                    Ein System das für dich arbeitet.
                                </h2>

                                <FeatureList />
                            </motion.div>
                        </div>
                    </div>
                ) : currentSlide === 9 ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-qard-dark px-10 relative overflow-hidden">
                        <div className="max-w-7xl w-full flex flex-col items-center relative gap-20">
                            <div className="grid grid-cols-3 gap-8 md:gap-16 w-full relative z-20">
                                <EcosystemCard
                                    index={0}
                                    title="Chef-App"
                                    desc="Kunden sehen. Steuern. Analysieren."
                                    img="/chefapp.webp"
                                />
                                <EcosystemCard
                                    index={1}
                                    title="Team-App"
                                    desc="Scannen. Stempeln. Fertig."
                                    img="/scanapp.webp"
                                    hideNotch={true}
                                />
                                <EcosystemCard
                                    index={2}
                                    title="Backend"
                                    desc="Arbeitet automatisch. 24/7."
                                    isBackend
                                />
                            </div>

                            <div className="relative w-full h-[200px] flex flex-col items-center">
                                <EcosystemLines />

                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 2.0, duration: 0.5, type: "spring" }}
                                    className="mt-28 flex flex-col items-center gap-4"
                                >
                                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center border border-white/10 shadow-2xl">
                                        <Smartphone className="w-8 h-8 text-white" />
                                    </div>
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 2.4, duration: 0.6 }}
                                        className="text-xl md:text-2xl font-bold text-gradient-primary"
                                    >
                                        → Sperrbildschirm deines Kunden
                                    </motion.span>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                ) : currentSlide === 10 ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-qard-dark px-10 relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            {slideStep === 0 ? (
                                <motion.h2
                                    key="fur-wen"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    className="text-8xl md:text-[160px] font-bold text-white tracking-tighter"
                                >
                                    Für wen?
                                </motion.h2>
                            ) : slideStep === 1 ? (
                                <motion.div
                                    key="industry-rush"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="w-full h-full"
                                >
                                    <IndustryRush isPreview={isPreview} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="million-counter"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex flex-col items-center gap-12"
                                >
                                    <div className="flex flex-col items-center">
                                        <MillionCounter isPreview={isPreview} />
                                    </div>

                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 2.5, duration: 0.8 }}
                                        className="flex flex-col items-center gap-4"
                                    >
                                        <h3 className="text-3xl md:text-5xl font-bold text-gradient-primary text-center">
                                            Lokale Geschäfte. Allein in Deutschland.
                                        </h3>
                                        <p className="text-lg md:text-xl text-gray-500 font-medium mt-2">
                                            Und keins hat ein System das für sie arbeitet.
                                        </p>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ) : currentSlide === 11 ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-qard-dark px-10 relative overflow-hidden">
                        <AnimatePresence mode="wait">
                            {slideStep === 0 ? (
                                <motion.div
                                    key="ask-symbolic"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    className="flex flex-col items-center gap-4"
                                >
                                    <h2 className="text-[180px] font-bold text-white tracking-tighter leading-none">
                                        1€
                                    </h2>
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-lg text-gray-500 italic"
                                    >
                                        Symbolisch.
                                    </motion.p>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="ask-partner"
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center text-center gap-8"
                                >
                                    <h2 className="text-4xl md:text-[42px] font-bold text-gradient-primary tracking-tight">
                                        Der richtige Partner.
                                    </h2>
                                    <div className="flex flex-col gap-2">
                                        <motion.p
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="text-2xl font-bold text-white"
                                        >
                                            Netzwerk · Vertrieb · Zugang zur Gastro-Welt
                                        </motion.p>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ) : currentSlide === 12 ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-qard-dark px-10 relative overflow-hidden">
                        {/* Empty transition slide */}
                    </div>
                ) : currentSlide === 13 ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-qard-dark px-10 relative overflow-hidden">
                        <div className="max-w-[800px] w-full flex flex-col items-center py-10">
                            {/* Header Section */}
                            <div className="flex flex-col items-center gap-4 mb-16">
                                <span className="bg-[#1E2540] text-blue-300 px-4 py-1.5 rounded-full text-sm font-bold tracking-widest shadow-md">
                                    ALL-IN-ONE LÖSUNG
                                </span>
                                <div className="flex items-baseline gap-2">
                                    <h2 className="text-[120px] font-bold text-white leading-none tracking-tighter">99€</h2>
                                    <span className="text-[24px] text-gray-500 font-medium">/Monat</span>
                                </div>
                                <span className="text-[16px] text-gray-500 mt-2 font-medium">Netto zzgl. MwSt.</span>
                            </div>

                            {/* Features List */}
                            <div className="flex flex-col gap-6 mb-20 w-fit mx-auto">
                                <div className="flex items-center gap-6">
                                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-green-500/10 rounded-full">
                                        <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-2xl text-white font-medium">Alle Features inklusive</span>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-green-500/10 rounded-full">
                                        <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-2xl text-white font-medium">Unbegrenzt Nachrichten</span>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-green-500/10 rounded-full">
                                        <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-2xl text-white font-medium">Unbegrenzt Kundenkarten</span>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-green-500/10 rounded-full">
                                        <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-2xl text-white font-medium">100% DSGVO-konform</span>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-green-500/10 rounded-full">
                                        <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                                    </div>
                                    <span className="text-2xl text-white font-medium">Ohne Mindestlaufzeit / Monatlich kündbar</span>
                                </div>
                            </div>

                            {/* Setup Footer */}
                            <div className="w-full flex justify-between items-center bg-gradient-to-r from-white/5 to-white/[0.02] border border-white/10 px-10 py-8 rounded-3xl shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-purple-500" />
                                <div className="flex flex-col gap-2">
                                    <span className="text-2xl text-white font-bold">Einmaliges Setup</span>
                                    <span className="text-gray-400 text-base font-medium">Design, Wallet-Zertifikate, System-Setup, Onboarding</span>
                                </div>
                                <span className="text-[40px] tracking-tight font-bold text-white">199€</span>
                            </div>
                        </div>
                    </div>
                ) : currentSlide === 14 ? (
                    <div className="w-full h-full flex flex-col items-center justify-end bg-qard-dark px-10 relative overflow-hidden pb-32">
                        {/* Title */}
                        <div className="absolute top-12 left-12 lg:top-16 lg:left-16">
                            <span className="text-white/40 text-[16px] tracking-wider uppercase font-medium">Wachstumsziele</span>
                        </div>

                        {/* Stairs Container */}
                        <div className="w-full max-w-[1200px] h-[340px] mx-auto flex items-end justify-center gap-1">
                            
                            {/* Step 1 Container */}
                            <div className="flex-1 overflow-hidden flex items-end h-full">
                                <AnimatePresence>
                                    {slideStep >= 1 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 110 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            className="w-full bg-[#11162A]/80 border border-white/10 rounded-t-xl flex flex-col items-center justify-start pt-6 gap-0.5 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] relative overflow-hidden"
                                            style={{ height: '110px' }}
                                        >
                                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1a56ff]/50 to-transparent" />
                                            <span className="text-white font-bold text-[18px] leading-tight tracking-tight">Launch</span>
                                            <span className="text-gray-400 text-[14px] leading-tight mt-1">Produkt fertig</span>
                                            <span className="text-[#1a56ff] font-medium text-[12px] leading-tight mt-0.5">Diese Woche</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            
                            {/* Step 2 Container */}
                            <div className="flex-1 overflow-hidden flex items-end h-full">
                                <AnimatePresence>
                                    {slideStep >= 2 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 170 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            className="w-full bg-[#18203E]/80 border border-white/10 border-b-0 rounded-t-xl flex flex-col items-center justify-start pt-8 gap-0.5 backdrop-blur-xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),_0_-10px_30px_-15px_rgba(26,86,255,0.2)] relative z-10 overflow-hidden"
                                            style={{ height: '170px' }}
                                        >
                                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#1a56ff]/70 to-transparent" />
                                            <div className="absolute inset-0 bg-gradient-to-b from-[#1a56ff]/10 to-transparent pointer-events-none" />
                                            <span className="text-white font-bold text-[22px] leading-tight tracking-tight relative z-10">100 Kunden</span>
                                            <span className="text-gradient-primary font-bold text-[18px] leading-tight mt-0.5 relative z-10">10.000€ MRR</span>
                                            <span className="text-[#1a56ff] font-medium text-[12px] leading-tight mt-2.5 relative z-10">Sommer 2026</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Step 3 Container */}
                            <div className="flex-1 overflow-hidden flex items-end h-full">
                                <AnimatePresence>
                                    {slideStep >= 3 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 230 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            className="w-full bg-[#1F2B52]/90 border border-[#1a56ff]/30 border-b-0 rounded-t-xl flex flex-col items-center justify-start pt-10 gap-0.5 backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),_0_-10px_40px_-10px_rgba(26,86,255,0.3)] relative z-20 overflow-hidden"
                                            style={{ height: '230px' }}
                                        >
                                            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#ff00d4]/50 to-transparent" />
                                            <div className="absolute inset-0 bg-gradient-to-b from-[#1a56ff]/20 to-transparent pointer-events-none" />
                                            <span className="text-white font-bold text-[26px] leading-tight tracking-tight relative z-10">500 Kunden</span>
                                            <span className="text-gradient-primary font-bold text-[22px] leading-tight mt-0.5 relative z-10">50.000€ MRR</span>
                                            <span className="text-[#ff00d4] font-medium text-[12px] leading-tight mt-3.5 relative z-10">Ende 2026</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Step 4 Container */}
                            <div className="flex-1 overflow-hidden flex items-end h-full">
                                <AnimatePresence>
                                    {slideStep >= 4 && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 310 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                            className="w-full bg-gradient-to-b from-[#253266] to-[#1F2B52] border border-[#ff00d4]/40 border-b-0 rounded-t-2xl flex flex-col items-center justify-start pt-12 gap-0.5 relative backdrop-blur-3xl shadow-[inset_0_1px_2px_rgba(255,255,255,0.3),_0_-15px_60px_-15px_rgba(255,0,212,0.5)] z-30 overflow-hidden"
                                            style={{ height: '310px' }}
                                        >
                                            <motion.div
                                                animate={{ opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                                className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white to-transparent"
                                            />
                                            <motion.div
                                                animate={{ opacity: [0.6, 1, 0.6] }}
                                                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                                className="absolute inset-0 bg-gradient-to-b from-[#ff00d4]/30 via-[#1a56ff]/10 to-transparent pointer-events-none"
                                            />
                                            <span className="text-white font-bold text-[34px] leading-none z-10 tracking-tight drop-shadow-md">1.000+</span>
                                            <span className="text-gradient-primary font-bold text-[28px] leading-tight z-10 mt-1.5 drop-shadow-md">100.000€ MRR</span>
                                            <span className="text-white font-bold text-[14px] leading-tight mt-4 z-10 tracking-widest uppercase py-1 px-3 bg-white/10 rounded-full border border-white/20">2027 · DACH</span>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                        </div>
                    </div>
                ) : currentSlide === 15 ? (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-qard-dark px-10 relative overflow-hidden">
                        {/* Gradient definition for icons */}
                        <svg width="0" height="0" className="absolute">
                            <defs>
                                <linearGradient id="qard-icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop stopColor="#ff00d4" offset="0%" />
                                    <stop stopColor="#1a56ff" offset="100%" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Title */}
                        <div className="absolute top-12 left-12 lg:top-16 lg:left-16">
                            <h1 className="text-white font-bold text-[20px]">Vertriebsstrategie</h1>
                            <p className="text-gray-500 text-[14px] mt-1 tracking-wide">4 Säulen. Alle bereit.</p>
                        </div>

                        {/* Pillars Container */}
                        <div className="w-full max-w-[1400px] flex items-stretch justify-center gap-6 mt-16 flex-wrap">
                            <Pillar 
                                step={slideStep} 
                                requiredStep={1} 
                                icon={MapPin} 
                                title="Vor-Ort D2D" 
                                texts={['Erfahrene Vertriebler.', '5 Demos / Tag.', 'Abschluss vor Ort.']}
                                badge={<div className="mt-auto bg-[#00E676]/15 border border-[#00E676]/20 text-[#00E676] text-[13px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-pulse" />Ab sofort</div>}
                            />
                            <Pillar 
                                step={slideStep} 
                                requiredStep={2} 
                                icon={Target} 
                                title="Performance" 
                                texts={['Inhouse Meta Ads Team.', 'Laserfokussierte Leads.', 'Gezielte Skalierung.']}
                                badge={<div className="mt-auto bg-white/10 text-gray-300 text-[13px] font-bold px-3 py-1.5 rounded-full">Ab Monat 1</div>}
                            />
                            <Pillar 
                                step={slideStep} 
                                requiredStep={3} 
                                icon={Lock} 
                                title="Geheimwaffe" 
                                texts={['10-20 heiße Leads / Tag.', 'Vollautomatisiert.', 'Kein manueller Aufwand.']}
                                badge={<div className="mt-auto bg-[#FFD700]/15 border border-[#FFD700]/20 text-[#FFD700] text-[13px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5"><Lock size={13} className="text-[#FFD700]" />Unter NDA</div>}
                                isGold={true}
                            />
                            <Pillar 
                                step={slideStep} 
                                requiredStep={4} 
                                icon={Building2} 
                                title="Partnerschaften" 
                                texts={['Kassensysteme.', 'Agenturen.', 'Revenue-Share.']}
                                badge={<div className="mt-auto bg-white/10 text-gray-300 text-[13px] font-bold px-3 py-1.5 rounded-full">Individuell</div>}
                            />
                        </div>
                    </div>
                ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-qard-dark px-10">
                         <div className="max-w-4xl text-center space-y-6">
                            <h2 className="text-6xl md:text-8xl font-bold tracking-tight">Slide {currentSlide}</h2>
                            <p className="text-xl md:text-2xl text-white/60 font-light tracking-wide italic">Inhalt folgt...</p>
                         </div>
                    </div>
                )}

                {/* Navigation Indicator */}
                {!isFullscreen && (
                    <div className="absolute bottom-6 md:bottom-12 left-0 right-0 flex justify-center items-center gap-3 z-50">
                        {Array.from({ length: TOTAL_SLIDES }).map((_, idx) => (
                            <button
                                key={idx}
                            onClick={(e) => {
                                e.stopPropagation();
                                if (onNavigate) onNavigate(idx);
                            }}
                            className={`transition-all duration-300 rounded-full cursor-pointer focus:outline-none
                                ${currentSlide === idx
                                    ? 'w-10 md:w-16 h-1.5 md:h-2 bg-white/90'
                                    : 'w-2 h-2 md:w-2.5 md:h-2.5 bg-white/30 hover:bg-white/50'
                                }`}
                        />
                    ))}
                    </div>
                )}
            </motion.div>
        </AnimatePresence>
    );
};

export default SlideContent;
