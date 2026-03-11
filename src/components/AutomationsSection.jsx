import React, { useRef } from 'react';
import { Settings2, Coffee, Gift, CalendarDays, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export default function AutomationsSection() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-10%" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    return (
        <section className="py-12 lg:py-24 text-[#0A0A0F] relative">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <div className="max-w-xl relative z-10 order-1">
                    <div className="flex items-start gap-5 mb-6">
                        <div className="inline-flex shrink-0 mt-2 items-center justify-center p-3 bg-indigo-50 text-indigo-600 rounded-2xl shadow-sm border border-indigo-100">
                            <Settings2 size={24} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                            Mach aus Erstkunden <br /> echte <span className="text-indigo-600">Stammkunden.</span>
                        </h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                        Schalte deinen Umsatz auf Autopilot. Einmal eingerichtet, erkennt QARD automatisch den perfekten Moment, um deine Kunden zurück ins Geschäft zu holen.
                    </p>

                    <div className="space-y-6">
                        <div className="flex gap-4">
                            <div className="shrink-0 w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center text-orange-600 border border-orange-100">
                                <Coffee size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Inaktive Kunden reaktivieren</h4>
                                <p className="text-sm text-gray-600">Jemand war seit 14 Tagen nicht mehr da? QARD schickt vollautomatisch eine Erinnerung (z.B. "Wir vermissen dich - komm vorbei") direkt auf den Sperrbildschirm.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="shrink-0 w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center text-pink-600 border border-pink-100">
                                <Gift size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Am Geburtstag überraschen</h4>
                                <p className="text-sm text-gray-600">Baue emotionale Bindung auf. Das System gratuliert ganz von alleine und spendiert z.B. einen Gratis-Kaffee zum Ehrentag.</p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="shrink-0 w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 border border-blue-100">
                                <CalendarDays size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Wochentags-Automatisierung</h4>
                                <p className="text-sm text-gray-600">Dein Dienstag ist immer ruhig? QARD kann an bestimmten Wochentagen zu definierten Uhrzeiten z.B. ein leckeres Mittagsmenü pushen, um den Laden zu füllen.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visual Cards Mockup */}
                <div className="order-2 relative h-[600px] flex items-center justify-center" ref={containerRef}>
                    {/* Background glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-indigo-100 via-purple-50 to-orange-50 rounded-full blur-[80px] pointer-events-none opacity-70"></div>

                    <motion.div
                        className="relative z-10 w-full max-w-[420px] pt-8"
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                    >
                        {/* Header of the mock UI */}
                        <motion.div variants={cardVariants} className="mb-6 flex items-center justify-between px-2">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">Magische Regeln</h3>
                                <p className="text-sm text-gray-500">3 Aktive Automatisierungen</p>
                            </div>
                            <div className="w-10 h-10 rounded-[8px] flex items-center justify-center shadow-[inset_0_1px_4px_rgba(0,0,0,0.3)] relative overflow-hidden" style={{ backgroundColor: "rgb(95, 70, 43)" }}>
                                <img
                                    src="/cafe-milano-logo.png"
                                    alt="Logo"
                                    className="absolute inset-0 w-full h-full object-contain p-[1px] rounded-[8px]"
                                />
                            </div>
                        </motion.div>

                        {/* Card 1: Winback */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-5 mb-4 shadow-[0_20px_40px_rgba(0,0,0,0.04)] relative overflow-hidden group hover:-translate-y-1 transition-transform"
                        >
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-orange-400"></div>
                            <div className="flex justify-between items-start mb-2">
                                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-50 border border-green-100 text-green-600 text-[10px] font-bold tracking-wider uppercase">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                    Aktiv
                                </div>
                                <Coffee className="text-orange-400 opacity-50 group-hover:opacity-100 transition-opacity" size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-1">Inaktivität: 14 Tage</h4>
                            <p className="text-sm text-gray-500 mb-4">Nachricht an Kunden senden, die seit 14 Tagen inaktiv sind.</p>
                            <div className="flex items-center gap-2 text-indigo-600 font-medium text-sm">
                                <span className="group-hover:translate-x-1 transition-transform">Regel ansehen</span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                            </div>
                        </motion.div>

                        {/* Card 2: Birthday */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-5 mb-4 shadow-[0_20px_40px_rgba(0,0,0,0.04)] relative overflow-hidden group hover:-translate-y-1 transition-transform"
                        >
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-pink-400"></div>
                            <div className="flex justify-between items-start mb-2">
                                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-50 border border-green-100 text-green-600 text-[10px] font-bold tracking-wider uppercase">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                    Aktiv
                                </div>
                                <Gift className="text-pink-400 opacity-50 group-hover:opacity-100 transition-opacity" size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-1">Happy Birthday!</h4>
                            <p className="text-sm text-gray-500 mb-4">Gratis-Kaffee am Geburtstag automatisch senden.</p>
                            <div className="flex items-center gap-2 text-indigo-600 font-medium text-sm">
                                <span className="group-hover:translate-x-1 transition-transform">Regel ansehen</span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                            </div>
                        </motion.div>

                        {/* Card 3: Slow Days */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-white/80 backdrop-blur-xl border border-white rounded-3xl p-5 shadow-[0_20px_40px_rgba(0,0,0,0.04)] relative overflow-hidden group hover:-translate-y-1 transition-transform"
                        >
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-400"></div>
                            <div className="flex justify-between items-start mb-2">
                                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-green-50 border border-green-100 text-green-600 text-[10px] font-bold tracking-wider uppercase">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                                    Aktiv
                                </div>
                                <CalendarDays className="text-blue-400 opacity-50 group-hover:opacity-100 transition-opacity" size={24} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-1">Wochentags-Boost</h4>
                            <p className="text-sm text-gray-500 mb-4">Mittagsmenü jeden Dienstag von 10-14 Uhr bewerben.</p>
                            <div className="flex items-center gap-2 text-indigo-600 font-medium text-sm">
                                <span className="group-hover:translate-x-1 transition-transform">Regel ansehen</span>
                                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                            </div>
                        </motion.div>

                    </motion.div>
                </div>

            </div>
        </section>
    );
}
