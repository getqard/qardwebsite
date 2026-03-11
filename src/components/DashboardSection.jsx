import React, { useRef, useEffect } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { BarChart3, Zap, Gift, Users, Send, Download } from 'lucide-react';

function AnimatedNumber({ value, suffix = "", prefix = "", isInView, delay = 0, isDecimal = false }) {
    const nodeRef = useRef(null);

    useEffect(() => {
        if (isInView) {
            const controls = animate(0, value, {
                duration: 1.5,
                ease: "easeOut",
                delay: delay,
                onUpdate(val) {
                    if (nodeRef.current) {
                        if (isDecimal) {
                            // Handle values > 999 formatted specifically for German (using dot)
                            let formattedValue = Math.floor(val).toString();
                            if (formattedValue.length > 3) {
                                formattedValue = formattedValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                            }
                            nodeRef.current.textContent = prefix + formattedValue + suffix;
                        } else {
                            nodeRef.current.textContent = prefix + Math.floor(val) + suffix;
                        }
                    }
                },
            });
            return () => controls.stop();
        }
    }, [value, isInView, suffix, prefix, delay, isDecimal]);

    return <span ref={nodeRef}>{prefix}0{suffix}</span>;
}

export default function DashboardSection() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10%" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 20 }
        }
    };

    return (
        <section id="dashboard" className="pt-24 pb-12 text-white relative z-10 w-full overflow-hidden" ref={containerRef}>
            {/* Background elements */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 lg:gap-16 items-center">

                {/* Visual Dashboard Mockup (Left on Desktop) */}
        <motion.div
            className="order-2 lg:order-1 relative w-full"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
        >
            {/* Perspective wrapper */}
            <div style={{ perspective: '2000px' }} className="w-full">
                <motion.div
                    className="w-full lg:w-full rounded-[20px] md:rounded-[24px] border border-white/5 bg-[#08080A]/90 backdrop-blur-3xl overflow-hidden shadow-[10px_20px_50px_rgba(0,0,0,0.8)] md:shadow-[20px_40px_80px_rgba(0,0,0,0.8)] flex flex-col"
                    style={{ rotateY: 8, rotateX: 5, z: 100 }}
                    initial={{ rotateY: 15, rotateX: 10, opacity: 0, scale: 0.9 }}
                    animate={isInView ? { rotateY: 8, rotateX: 5, opacity: 1, scale: 1 } : { rotateY: 15, rotateX: 10, opacity: 0, scale: 0.9 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    {/* Dashboard Header */}
                    <div className="flex justify-between items-center p-4 md:p-6 border-b border-white/5">
                        <div className="flex items-center gap-3 md:gap-4">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center p-[2px]">
                                <div className="bg-[#08080A] w-full h-full rounded-[7px] md:rounded-[10px] flex items-center justify-center overflow-hidden">
                                    <img src="/ICONAPP.svg" alt="QARD" className="w-full h-full p-1 md:p-1.5" />
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-white leading-tight text-base md:text-lg">Dashboard</h3>
                                <p className="text-white/50 text-[10px] md:text-xs">Guten Morgen, Café Milano 👋</p>
                            </div>
                        </div>
                        <div className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg bg-indigo-600/20 text-indigo-400 text-[10px] md:text-sm font-semibold flex items-center gap-1.5 md:gap-2 border border-indigo-500/30">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-indigo-400 animate-pulse"></div>
                            Scanner Aktiv
                        </div>
                    </div>

                    {/* Dashboard Content */}
                    <div className="p-4 md:p-6 space-y-3 md:space-y-4">

                        {/* Top Bar: Kundenbindung */}
                        <motion.div variants={itemVariants} className="bg-[#111116] border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-5 relative overflow-hidden">
                            <div className="flex justify-between items-end mb-3 md:mb-4 relative z-10">
                                <div>
                                    <div className="flex items-center gap-1.5 md:gap-2 mb-0.5 md:mb-1">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-400 md:w-4 md:h-4"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                                        <h4 className="font-bold text-white text-sm md:text-base">Kundenbindung</h4>
                                    </div>
                                    <p className="text-white/40 text-[10px] md:text-xs">Weltklasse! Deine Kunden sind<br className="hidden sm:block" />echte Fans!</p>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl md:text-4xl font-display font-bold text-white">
                                        <AnimatedNumber value={100} suffix="%" isInView={isInView} delay={0.3} />
                                    </div>
                                    <div className="text-green-400 text-[8px] md:text-[10px] font-bold bg-green-400/10 px-1.5 md:px-2 py-0.5 rounded-full inline-block mt-0.5 md:mt-1">↗ +2% zur Vorwoche</div>
                                </div>
                            </div>

                            {/* Progress Bar */}
                            <div className="w-full h-2 md:h-3 bg-white/5 rounded-full overflow-hidden relative z-10">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-orange-500 via-yellow-400 to-green-400 rounded-full"
                                    initial={{ width: "0%" }}
                                    animate={isInView ? { width: "100%" } : { width: "0%" }}
                                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                                ></motion.div>
                                {/* Glow effect for bar */}
                                <motion.div
                                    className="absolute top-1/2 left-0 h-4 md:h-8 bg-gradient-to-r from-orange-500 via-yellow-400 to-green-400 rounded-full blur-sm md:blur border-none opacity-30 -translate-y-1/2 mt-1"
                                    initial={{ width: "0%" }}
                                    animate={isInView ? { width: "100%" } : { width: "0%" }}
                                    transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
                                ></motion.div>
                            </div>

                            <div className="mt-2 md:mt-3 flex items-center gap-1 md:gap-1.5 text-[8px] md:text-[10px] text-white/30 font-bold uppercase tracking-wider relative z-10">
                                <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-green-500"></div>
                                Systeme Bereit
                            </div>
                        </motion.div>

                        {/* Middle Row: Stats & Action */}
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.2fr] gap-3 md:gap-4">
                            {/* Stat 1 */}
                            <motion.div variants={itemVariants} className="bg-[#111116] border border-green-500/20 rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col justify-between relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-green-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="flex justify-between items-start mb-2 md:mb-4">
                                    <span className="text-[8px] md:text-[10px] font-bold text-white/40 tracking-wider">STEMPEL</span>
                                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-md bg-green-500/10 text-green-400 flex items-center justify-center">
                                        <Zap size={10} className="md:w-3 md:h-3" fill="currentColor" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xl md:text-3xl font-display font-bold text-white mb-1 md:mb-2">
                                        <AnimatedNumber value={8432} isInView={isInView} delay={0.6} isDecimal={true} />
                                    </div>
                                    <div className="inline-block bg-green-500/10 text-green-400 text-[6px] sm:text-[7px] md:text-[9px] font-bold px-1.5 md:px-2 py-0.5 rounded-sm">IM ZEITRAUM (GESAMT)</div>
                                </div>
                            </motion.div>

                            {/* Stat 2 */}
                            <motion.div variants={itemVariants} className="bg-[#111116] border border-purple-500/20 rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col justify-between relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="flex justify-between items-start mb-2 md:mb-4">
                                    <span className="text-[8px] md:text-[10px] font-bold text-white/40 tracking-wider">EINLÖSUNGEN</span>
                                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-md bg-purple-500/10 text-purple-400 flex items-center justify-center">
                                        <Gift size={10} className="md:w-3 md:h-3" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xl md:text-3xl font-display font-bold text-white mb-1 md:mb-2">
                                        <AnimatedNumber value={645} isInView={isInView} delay={0.7} />
                                    </div>
                                    <div className="inline-block bg-purple-500/10 text-purple-400 text-[6px] sm:text-[7px] md:text-[9px] font-bold px-1.5 md:px-2 py-0.5 rounded-sm">IM ZEITRAUM (GESAMT)</div>
                                </div>
                            </motion.div>

                            {/* Stat 3 */}
                            <motion.div variants={itemVariants} className="bg-[#111116] border border-blue-500/20 rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col justify-between relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <div className="flex justify-between items-start mb-2 md:mb-4">
                                    <span className="text-[8px] md:text-[10px] font-bold text-white/40 tracking-wider text-left pr-1">NEUE KUNDEN</span>
                                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-md bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0">
                                        <Users size={10} className="md:w-3 md:h-3" />
                                    </div>
                                </div>
                                <div>
                                    <div className="text-xl md:text-3xl font-display font-bold text-white mb-1 md:mb-2">
                                        <AnimatedNumber value={1204} isInView={isInView} delay={0.8} isDecimal={true} />
                                    </div>
                                    <div className="inline-block bg-blue-500/10 text-blue-400 text-[6px] sm:text-[7px] md:text-[9px] font-bold px-1.5 md:px-2 py-0.5 rounded-sm">IM ZEITRAUM (GESAMT)</div>
                                </div>
                            </motion.div>

                            {/* Action Card: Push Senden */}
                            <motion.div variants={itemVariants} className="bg-gradient-to-br from-[#1C123D] to-[#120B29] border border-purple-500/30 rounded-xl md:rounded-2xl p-3 md:p-4 flex flex-col justify-center relative overflow-hidden cursor-pointer hover:border-purple-400/50 transition-colors group">
                                <div className="absolute -top-10 -right-10 w-24 h-24 md:w-32 md:h-32 bg-purple-500/30 blur-[20px] md:blur-[30px] rounded-full group-hover:bg-purple-400/40 transition-colors"></div>
                                <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-gradient-to-br from-purple-400 to-indigo-500 flex items-center justify-center mb-2 md:mb-3 shadow-[0_4px_20px_rgba(168,85,247,0.4)] relative z-10">
                                    <Send size={16} className="text-white ml-[-1px] mt-[1px] md:w-6 md:h-6 md:ml-[-2px] md:mt-[2px]" />
                                </div>
                                <h4 className="font-bold text-white text-sm md:text-lg relative z-10">Push Senden</h4>
                                <p className="text-[9px] md:text-xs text-white/50 flex items-center gap-1 mt-0.5 md:mt-1 relative z-10">
                                    <Users size={8} className="md:w-[10px] md:h-[10px] shrink-0" /> Alle Kunden <span className="hidden sm:inline">erreichen</span>
                                </p>
                            </motion.div>
                        </div>

                        {/* Bottom Row: Activity Chart */}
                        <motion.div variants={itemVariants} className="bg-[#111116] border border-white/5 rounded-xl md:rounded-2xl p-4 md:p-5 relative overflow-hidden h-[120px] md:h-[180px]">
                            <div className="flex justify-between items-center mb-2 md:mb-4">
                                <h5 className="text-[10px] md:text-xs font-bold text-white/80">Aktivität</h5>
                                <div className="flex gap-2 md:gap-3 text-[8px] md:text-[9px] font-bold text-white/40">
                                    <span className="flex items-center gap-1"><div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-green-400"></div> Stempel</span>
                                    <span className="flex items-center gap-1"><div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-purple-400"></div> Einlösungen</span>
                                </div>
                            </div>

                            {/* Very simplified CSS-only chart representation */}
                            <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 flex items-end px-2 opacity-80">
                                <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 100">
                                    {/* Grid lines */}
                                    <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                                    <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                                    <line x1="0" y1="80" x2="100" y2="80" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />

                                    {/* Green Line (Stempel) */}
                                    <motion.path
                                        d="M0,90 Q10,85 20,70 T40,60 T60,20 T80,40 T100,10"
                                        fill="none"
                                        stroke="#4ade80"
                                        strokeWidth="1.5"
                                        initial={{ pathLength: 0 }}
                                        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
                                    />
                                    <motion.path
                                        d="M0,90 Q10,85 20,70 T40,60 T60,20 T80,40 T100,10 L100,100 L0,100 Z"
                                        fill="url(#green-gradient)"
                                        opacity="0.1"
                                        initial={{ opacity: 0 }}
                                        animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
                                        transition={{ duration: 1, delay: 1.2 }}
                                    />

                                    {/* Purple Line (Einlösungen) */}
                                    <motion.path
                                        d="M0,95 Q15,90 30,80 T50,75 T70,50 T85,60 T100,30"
                                        fill="none"
                                        stroke="#a855f7"
                                        strokeWidth="1.5"
                                        initial={{ pathLength: 0 }}
                                        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                                        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.8 }}
                                    />

                                    {/* Gradients */}
                                    <defs>
                                        <linearGradient id="green-gradient" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0%" stopColor="#4ade80" stopOpacity="1" />
                                            <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </motion.div>

                {/* Text Content (Right on Desktop) */}
                <motion.div
                    className="order-1 md:order-2 max-w-xl relative z-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    <div className="flex items-start gap-4 mb-6">
                        <div className="inline-flex shrink-0 mt-2 items-center justify-center p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl shadow-sm border border-indigo-500/20">
                            <BarChart3 size={24} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-white">
                            Die ultimative <br /> <span className="text-indigo-400">Kommandozentrale.</span>
                        </h2>
                    </div>
                    <p className="text-lg text-white/60 mb-8 leading-relaxed">
                        Schluss mit Blindflug. In deiner QARD Admin-App hast du echte Daten und steuerst dein gesamtes Marketing per Knopfdruck – von Push-Nachrichten bis zu detaillierten Steuer-Reportings.
                    </p>

                    <div className="space-y-4">
                        <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                                    <Send size={16} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Kampagnen & Automatisierungen</h4>
                                    <p className="text-sm text-white/50">Triggere manuelle Push-Nachrichten an tausende Kunden gleichzeitig oder passe deine magischen Auto-Regeln an.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                                    <BarChart3 size={16} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Echtzeit-Performance</h4>
                                    <p className="text-sm text-white/50">Verfolge jeden gescannten Stempel und jede Einlösung live. Erkenne sofort, welche Kampagnen am besten konvertieren.</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div variants={itemVariants} className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 transition-colors">
                            <div className="flex items-start gap-3">
                                <div className="mt-1 w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                                    <Download size={16} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Steuerberater Export (DATEV ready)</h4>
                                    <p className="text-sm text-white/50">Exportiere alle eingelösten Prämien (z.B. Frei-Kaffee) mit einem Klick finanzamtkonform als CSV oder PDF für deine Buchhaltung.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

            </div >
        </section >
    );
}
