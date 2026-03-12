import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { smoothScrollTo } from '../utils/smoothScroll';
import DeviceMockup from './DeviceMockup';
import WalletPass from './WalletPass';

export default function Hero() {
    const [showPush, setShowPush] = useState(false);

    useEffect(() => {
        // Show initially after 1.2s delay
        const initialTimer = setTimeout(() => setShowPush(true), 1200);

        // Setup loop: stay visible for 6s, hide for 2s, repeat
        const loopTimer = setInterval(() => {
            setShowPush(false);
            setTimeout(() => {
                setShowPush(true);
            }, 2000); // Wait 2s before showing again
        }, 8000);

        return () => {
            clearTimeout(initialTimer);
            clearInterval(loopTimer);
        };
    }, []);

    return (
        <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-32 overflow-hidden bg-qard-dark text-white min-h-[85vh] flex items-center">
            {/* Dark Navy QARD Gradient Array */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute inset-0 bg-grid-pattern-dense opacity-20 pointer-events-none mix-blend-overlay"></div>

            <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Text Content */}
                <div className="max-w-xl">
                    <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 tracking-tight">
                        Deine Kunden kommen zurück. <br />
                        <span className="text-gradient-primary">Automatisch.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-white/60 leading-relaxed mb-10 max-w-xl">
                        Belohnen. Erreichen. Zurückholen — direkt auf dem Handy deiner Kunden. Keine App. Läuft einfach.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-6">
                        <a href="/#contact" onClick={(e) => smoothScrollTo(e, '/#contact')} className="px-8 py-4.5 rounded-2xl bg-indigo-500 hover:bg-indigo-600 text-white font-bold transition-all shadow-[0_0_30px_rgba(99,102,241,0.4)] hover:scale-105 active:scale-95 text-lg flex items-center justify-center">
                            Jetzt kostenlos anfragen
                        </a>
                        <a href="/#how-it-works" onClick={(e) => smoothScrollTo(e, '/#how-it-works')} className="px-8 py-4.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold transition-all flex items-center justify-center text-lg">
                            So funktioniert's
                        </a>
                    </div>

                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[13px] md:text-sm text-white/50 font-medium">
                        <span className="flex items-center tracking-wide"><span className="text-emerald-400 mr-1.5">✓</span> Monatlich kündbar</span>
                        <span className="hidden sm:inline text-white/30">·</span>
                        <span className="flex items-center tracking-wide"><span className="text-emerald-400 mr-1.5">✓</span> 100% DSGVO-konform</span>
                        <span className="hidden sm:inline text-white/30">·</span>
                        <span className="flex items-center tracking-wide"><span className="text-emerald-400 mr-1.5">✓</span> In wenigen Tagen startklar</span>
                    </div>
                </div>

                {/* Animated Mockup (Phase 3) */}
                <div className="relative h-[650px] w-full flex items-center justify-center lg:justify-end perspective-1000">
                    <motion.div
                        initial={{ y: 60, opacity: 0, rotateX: 10 }}
                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full relative z-20 flex justify-center lg:justify-end"
                    >
                        {/* Continuous Levitation/Floating Effect */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="w-full max-w-[320px] lg:max-w-[340px]"
                        >
                            <DeviceMockup className="w-full">
                                {/* 1. Wallet Pass Background */}
                                <div className="w-full h-full bg-[#111] relative">
                                    <img
                                        src="/wallet-pass.webp"
                                        alt="Original Berliner Döner Wallet Pass"
                                        className="w-full h-full object-cover object-top"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    <div className="hidden absolute inset-0 flex-col items-center justify-center p-6 text-center bg-zinc-900 border border-white/5">
                                        <span className="text-4xl mb-3">🎟️</span>
                                        <span className="text-white/60 font-semibold text-sm">wallet-pass.webp fehlt</span>
                                        <span className="text-white/40 mt-1 text-xs">Bitte Bild im /public Ordner ablegen.</span>
                                    </div>
                                </div>

                                {/* 2. Apple Push Notification (Spring Bounce) */}
                                <AnimatePresence>
                                    {showPush && (
                                        <motion.div
                                            initial={{ y: -150, opacity: 0 }}
                                            animate={{ y: 0, opacity: 1 }}
                                            exit={{ y: -150, opacity: 0, transition: { duration: 0.4, ease: "easeIn" } }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 220,
                                                damping: 20
                                            }}
                                            className="absolute top-12 md:top-14 inset-x-2 bg-black/30 backdrop-blur-3xl border border-white/10 rounded-[22px] p-[10px] shadow-[0_24px_50px_rgba(0,0,0,0.8)] z-50 pointer-events-auto"
                                        >
                                            <div className="flex items-start gap-2.5">
                                                {/* App Icon / Logo */}
                                                <div className="w-[34px] h-[34px] rounded-[8px] bg-black shrink-0 flex items-center justify-center shadow-[inset_0_1px_4px_rgba(0,0,0,0.3)] relative overflow-hidden mt-0.5">
                                                    <img
                                                        src="/doener-logo.webp"
                                                        alt="Logo"
                                                        className="absolute inset-0 w-full h-full object-contain p-[1px] rounded-[8px]"
                                                        onError={(e) => {
                                                            e.target.style.display = 'none';
                                                            e.target.nextSibling.style.display = 'block';
                                                        }}
                                                    />
                                                    <div className="hidden w-full h-full bg-indigo-500 rounded-[8px]"></div>
                                                </div>

                                                {/* Push Content */}
                                                <div className="flex-1 min-w-0 pt-[1px]">
                                                    <div className="flex items-baseline justify-between mb-[2px] gap-2">
                                                        <h4 className="text-white/95 font-semibold text-[13px] leading-none tracking-tight">Original Berliner Döner</h4>
                                                        <span className="text-white/40 text-[11px] shrink-0 font-medium whitespace-nowrap">Vor 1 Min.</span>
                                                    </div>
                                                    <p className="text-white/[0.85] text-[12.5px] leading-[1.3] tracking-[0.01em] mt-[3px]">
                                                        Max, Hunger auf Döner? 🥙 Komm vorbei – frisch und lecker wie immer!
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Home Indicator */}
                                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[35%] h-[5px] bg-white/40 rounded-full z-50 pointer-events-none"></div>
                            </DeviceMockup>
                        </motion.div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
