import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { QrCode, ScanLine, Gift } from 'lucide-react';
import WalletPass from './WalletPass';

export default function Features() {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        const observers = [];
        const stepElements = document.querySelectorAll('.step-item');

        stepElements.forEach((el, index) => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveStep(index);
                    }
                },
                { rootMargin: '-40% 0px -40% 0px' }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => {
            observers.forEach(obs => obs.disconnect());
        };
    }, []);

    const steps = [
        {
            icon: <QrCode size={32} />,
            title: "1. QR-Code scannen",
            desc: "Deine Kunden scannen den QR-Code an der Kasse oder auf dem Tischaufsteller. Der Wallet-Pass wird sofort und ohne App-Download installiert."
        },
        {
            icon: <ScanLine size={32} />,
            title: "2. Stempel sammeln",
            desc: "Deine Mitarbeiter nutzen die QARD POS App, um den Pass des Kunden zu scannen und verteilen so Stempel in Echtzeit."
        },
        {
            icon: <Gift size={32} />,
            title: "3. Belohnung einlösen",
            desc: "Sobald die Karte voll ist, ändert sich das Design automatisch. Der Kunde löst seine Prämie ein und der Zyklus beginnt von vorn."
        }
    ];

    return (
        <section className="py-32 bg-[#030308] text-white relative" id="features">
            {/* Background Meshes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                        So funktioniert's
                    </h2>
                    <p className="text-lg text-white/50">
                        Drei einfache Schritte. Keine Hardware nötig.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-16 relative">

                    {/* Left Side: Scrolling Text Steps */}
                    <div className="md:w-1/2 py-[10vh] md:py-[20vh] space-y-24 md:space-y-[30vh]">
                        {steps.map((step, i) => {
                            const isActive = activeStep === i;
                            return (
                                <div
                                    key={i}
                                    className={`step-item transition-all duration-700 ease-out ${isActive ? 'opacity-100 blur-0 scale-100' : 'opacity-30 blur-sm scale-95'}`}
                                >
                                    <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6 border border-indigo-500/30 shadow-[0_0_30px_rgba(99,102,241,0.2)]">
                                        {step.icon}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">{step.title}</h3>
                                    <p className="text-xl text-white/60 leading-relaxed">
                                        {step.desc}
                                    </p>

                                    {/* Mobile Mockup (Only visible on small screens) */}
                                    <div className="mt-12 md:hidden flex justify-center">
                                        <Mockup activeStep={i} mobile />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right Side: Sticky Phone Mockup (Desktop) */}
                    <div className="md:w-1/2 hidden md:block">
                        <div className="sticky top-32 h-[750px] flex items-center justify-center">
                            <Mockup activeStep={activeStep} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Mockup({ activeStep, mobile = false }) {
    const sizes = mobile
        ? { w: '260px', h: '520px', rounded: '40px', border: '4px' }
        : { w: '340px', h: '690px', rounded: '55px', border: '6px' };

    // Generate Pass Data based on step
    const getPassData = (progress) => ({
        type: "stamp",
        shopName: "Café Milano",
        title: "Stempelkarte",
        logoText: "☕",
        progress: progress,
        maxProgress: 10,
        mainLabel: "DEINE STEMPEL",
        secondaryFields: [
            { label: "PRÄMIE", value: "Gratis Kaffee" },
            { label: "LETZTER BESUCH", value: progress === 0 ? "Noch nie" : "Heute" }
        ],
        qrColor: "#6366f1"
    });

    return (
        <div style={{ width: sizes.w, height: sizes.h, borderRadius: sizes.rounded, borderWidth: sizes.border }} className={`relative bg-black border-[#222] shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-500`}>
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[30%] h-[30px] bg-black rounded-full z-50"></div>

            <div className="absolute inset-0 bg-[#0A0A0F] pt-16 px-4 flex flex-col items-center border-[4px] border-black rounded-[55px]">
                {/* Step 1: Add to Wallet */}
                <motion.div
                    className="absolute inset-0 pt-20 px-6 flex flex-col items-center justify-center z-10"
                    initial={false}
                    animate={{ opacity: activeStep === 0 ? 1 : 0, scale: activeStep === 0 ? 1 : 0.9, pointerEvents: activeStep === 0 ? 'auto' : 'none' }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-full bg-[#111] border border-white/10 rounded-3xl p-6 shadow-2xl text-center glass-panel">
                        <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-full mx-auto mb-4 flex items-center justify-center transition-transform hover:scale-105 hover:bg-white/10">
                            <QrCode className="text-white" size={32} />
                        </div>
                        <h4 className="font-bold text-white text-lg mb-2">Wallet Pass hinzufügen</h4>
                        <p className="text-xs text-white/50 mb-6">Café Milano Stempelkarte</p>
                        <button className="w-full bg-indigo-500 hover:bg-indigo-600 transition-colors text-white py-3 rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                            hinzufügen
                        </button>
                    </div>
                </motion.div>

                {/* Step 2: Pass with 5 Stamps */}
                <motion.div
                    className="absolute inset-0 pt-20 px-2 z-20"
                    initial={false}
                    animate={{ opacity: activeStep === 1 ? 1 : 0, x: activeStep === 1 ? 0 : 50, pointerEvents: activeStep === 1 ? 'auto' : 'none' }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="scale-[0.88] origin-top">
                        <WalletPass data={getPassData(5)} />
                    </div>
                </motion.div>

                {/* Step 3: Reward Unlocked */}
                <motion.div
                    className="absolute inset-0 pt-20 px-2 z-30"
                    initial={false}
                    animate={{ opacity: activeStep === 2 ? 1 : 0, scale: activeStep === 2 ? 1 : 1.1, pointerEvents: activeStep === 2 ? 'auto' : 'none' }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="scale-[0.88] origin-top relative">
                        {/* Glowing Aura for reward */}
                        <div className="absolute inset-0 bg-yellow-500/40 blur-[80px] z-[-1]"></div>

                        {/* Modified Wallet Pass for Reward State */}
                        <div className="relative">
                            <WalletPass data={{ ...getPassData(10), qrColor: "#eab308" }} />
                            {/* Overlay specific for the reward to make it obvious */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: activeStep === 2 ? 1 : 0, y: activeStep === 2 ? 0 : 20 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="absolute inset-x-4 top-1/2 -translate-y-1/2 bg-yellow-500/90 backdrop-blur-md rounded-2xl p-6 text-center text-black shadow-[0_0_40px_rgba(234,179,8,0.5)] border border-yellow-300"
                            >
                                <Gift size={48} className="mx-auto mb-2 text-yellow-900" />
                                <h4 className="text-2xl font-black mb-1 text-yellow-950">Gratis Kaffee!</h4>
                                <p className="text-xs font-semibold text-yellow-900/70 uppercase tracking-widest">Jetzt einlösen</p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
