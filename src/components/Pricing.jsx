import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Wallet, BarChart3, Target, Zap, ShieldCheck } from 'lucide-react';
import { smoothScrollTo } from '../utils/smoothScroll';

const FeatureCategory = ({ title, icon: Icon, features }) => (
    <div className="space-y-6">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                <Icon size={24} />
            </div>
            <div>
                <h4 className="text-lg lg:text-xl font-bold text-white tracking-tight">{title}</h4>
                <p className="text-[10px] lg:text-xs text-indigo-400/60 uppercase tracking-widest font-bold">{features.length} FEATURES</p>
            </div>
        </div>
        <ul className="space-y-4">
            {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3 lg:gap-4 group">
                    <div className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-500/40 group-hover:bg-indigo-400 transition-colors" />
                    <div>
                        <p className="text-sm lg:text-[15px] font-bold text-white/90 group-hover:text-white transition-colors">{feature.name}</p>
                        {feature.desc && <p className="text-[12px] lg:text-xs text-white/40 leading-relaxed mt-1 font-medium">{feature.desc}</p>}
                    </div>
                </li>
            ))}
        </ul>
    </div>
);

const FeatureModal = ({ isOpen, onClose }) => {
    // Prevent body scrolling when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; }
    }, [isOpen]);

    const categories = [
        {
            title: "Kundenkarten",
            icon: Wallet,
            features: [
                { name: "Apple & Google Wallet", desc: "Zwei Systeme, eine Lösung." },
                { name: "Individuelle Karten-Gestaltung", desc: "Look & Feel deiner Marke." },
                { name: "Standort-Benachrichtigungen", desc: "Automatischer Push bei Annäherung." },
                { name: "Echtzeit-Aktualisierung", desc: "Stempel & Prämien sofort sichtbar." },
                { name: "Flexible Kartentypen", desc: "Stempel-, VIP- oder Punktekarte." },
                { name: "Ein Link & QR-Code für alles", desc: "Ein Code für alle Geräte." }
            ]
        },
        {
            title: "Analytics & Dashboard",
            icon: BarChart3,
            features: [
                { name: "Echtzeit-Dashboard", desc: "Alle Kennzahlen auf einen Blick." },
                { name: "Kampagnen-Statistiken", desc: "Detaillierte Auswertung von Scans." },
                { name: "Erkenne wer abspringt", desc: "Inaktive Kunden gezielt ansprechen." },
                { name: "Bewertungs-Management", desc: "Automatisch Google-Bewertungen sammeln." },
                { name: "Daten-Export", desc: "CSV/PDF für Steuerberater." },
                { name: "Live sehen was passiert", desc: "Alle Transaktionen in Echtzeit." }
            ]
        },
        {
            title: "Marketing & Bindung",
            icon: Target,
            features: [
                { name: "Push-Nachrichten", desc: "Angebote direkt aufs Display." },
                { name: "Professionelles Design", desc: "Poster, Flyer & Aufsteller inkl." },
                { name: "Einrichtung in deinem Design", desc: "Markengerechte Registrierung." },
                { name: "Personalisierte Daten", desc: "Namen & Geburtstage erfassen." },
                { name: "Kunden automatisch belohnen", desc: "Belohnung bei Meilensteinen." },
                { name: "Bewertungen sammeln", desc: "Automatisch mehr Google-Reviews." }
            ]
        },
        {
            title: "Automatisierung",
            icon: Zap,
            features: [
                { name: "Geburtstags-Nachrichten", desc: "Automatische Glückwünsche." },
                { name: "Inaktivitäts-Erinnerungen", desc: "Kunden zurückgewinnen." },
                { name: "Stempel-Erinnerung", desc: "Letzter Stempel Motivator." },
                { name: "Wochentags-Kampagnen", desc: "Timing basierte Aktionen." },
                { name: "Monatliche Reports", desc: "Performance-Bericht per E-Mail." },
                { name: "Geplante Nachrichten", desc: "Vorausplanung für Events." }
            ]
        },
        {
            title: "Support & Sicherheit",
            icon: ShieldCheck,
            features: [
                { name: "Mitarbeiter-Scanner-App", desc: "PIN-Schutz & Rollensystem." },
                { name: "100% DSGVO-konform", desc: "Rechtssichere Einwilligung." },
                { name: "Push-Limits", desc: "Anti-Spam Schutz für Kunden." },
                { name: "Multi-Standort", desc: "Zentral steuerbare Filialen." },
                { name: "Digitales Onboarding", desc: "Reibungsloser Startprozess." }
            ]
        }
    ];

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] overflow-y-auto custom-scrollbar bg-black/90 backdrop-blur-md">
                    <div className="min-h-full flex items-center justify-center p-4 sm:p-6 lg:p-8">
                        {/* Interactive backdrop specifically for closing when clicking OUTSIDE the modal area */}
                        <div className="absolute inset-0 cursor-pointer" onClick={onClose} />
                        
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="relative w-full max-w-6xl bg-qard-dark border border-white/10 rounded-[2rem] sm:rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] overflow-hidden z-10 my-8 flex flex-col"
                        >
                            {/* Sticky Header */}
                            <div className="sticky top-0 z-30 bg-qard-dark/90 backdrop-blur-xl border-b border-white/5 p-6 sm:p-8 md:p-12 flex justify-between items-start md:items-center">
                                <div>
                                    <h3 className="text-3xl md:text-5xl lg:text-5xl font-display font-bold text-white mb-2 leading-tight pr-12 md:pr-0">
                                        Alle Features. <span className="text-indigo-400 font-black">Keine Kompromisse.</span>
                                    </h3>
                                    <p className="text-white/40 text-sm md:text-lg">Alles was du brauchst. In einem System.</p>
                                </div>
                                <button
                                    onClick={onClose}
                                    aria-label="Schließen"
                                    className="absolute right-6 top-6 md:relative md:right-auto md:top-auto group p-3 md:p-4 bg-white/5 hover:bg-white/10 rounded-xl md:rounded-2xl text-white transition-all border border-white/10 hover:border-white/20"
                                >
                                    <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                                </button>
                            </div>

                            <div className="p-6 sm:p-8 md:p-12">
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-16">
                                    {categories.map((cat, i) => (
                                        <FeatureCategory key={i} {...cat} />
                                    ))}
                                </div>

                                {/* Footer Area inside Modal */}
                                <div className="mt-16 md:mt-20 pt-8 md:pt-12 border-t border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8 pb-4">
                                    <div className="flex items-start lg:items-center gap-4 lg:gap-5 p-5 lg:p-6 bg-white/5 rounded-2xl lg:rounded-3xl border border-white/5 w-full lg:max-w-lg">
                                        <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-green-500/20 flex items-center justify-center text-green-400 shrink-0 shadow-lg shadow-green-500/10">
                                            <ShieldCheck size={28} />
                                        </div>
                                        <div>
                                            <h5 className="text-white font-bold mb-1 text-sm lg:text-base">Sicher & DSGVO-Konform</h5>
                                            <p className="text-xs text-white/50 leading-relaxed font-medium">QARD nutzt native Wallet-Apps ohne Tracking von Drittanbietern. Deine Daten bleiben in Deutschland.</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col items-center gap-3 w-full lg:w-auto">
                                        <button
                                            onClick={onClose}
                                            className="w-full lg:w-auto px-8 lg:px-12 py-4 lg:py-5 bg-white text-qard-dark font-black rounded-xl lg:rounded-2xl transition-all shadow-xl hover:scale-105 active:scale-95 group flex items-center justify-center gap-3"
                                        >
                                            Verstanden
                                            <Check size={20} className="group-hover:translate-x-1 transition-transform" />
                                        </button>
                                        <p className="text-[10px] text-white/20 uppercase font-black tracking-[0.2em] hidden lg:block">Popup schließen</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );

    // Render using React Portal
    if (typeof document !== 'undefined') {
        return createPortal(modalContent, document.body);
    }
    return null;
};

export default function Pricing() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="pt-24 pb-12 text-white relative z-10 w-full" id="pricing">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight tracking-tight"
                    >
                        Ein Preis. <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Alles drin.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/60 text-lg max-w-2xl mx-auto"
                    >
                        Keine versteckten Kosten. Keine Mindestlaufzeit. <br />Volle Power ab Tag eins.
                    </motion.p>
                </div>

                <div className="max-w-2xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        {/* Dramatic Glow Background */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>

                        <div className="relative bg-qard-dark border border-white/10 rounded-[2.5rem] p-10 md:p-14 overflow-hidden shadow-2xl">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 border-b border-white/5 pb-8">
                                <div>
                                    <h3 className="text-3xl font-bold mb-2">QARD Premium</h3>
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
                                        All-In-One Lösung
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="flex items-baseline justify-end gap-2">
                                        <span className="text-7xl font-display font-black">99€</span>
                                        <span className="text-white/40 text-xl">/Monat</span>
                                    </div>
                                    <p className="text-white/30 text-sm mt-1 font-medium">Netto zzgl. MwSt.</p>
                                    <motion.div 
                                        className="mt-4 text-indigo-400 font-bold text-sm bg-indigo-500/10 py-2 px-4 rounded-xl border border-indigo-500/20 inline-block"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                    >
                                        Das sind gut 3€ am Tag. <br className="hidden sm:block" />
                                        Weniger als ein Cappuccino.
                                    </motion.div>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6 mb-12">
                                {[
                                    "Alle Features inklusive",
                                    "Unbegrenzt Kunden erreichen",
                                    "Unbegrenzt Kundenkarten",
                                    "Aufsteller & Werbematerial inklusive",
                                    "100% DSGVO-konform",
                                    "Monatlich kündbar"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-3 items-center">
                                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                                            <Check className="text-green-400" size={14} />
                                        </div>
                                        <span className="text-white/80 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col gap-4">
                                <a href="/#contact" onClick={(e) => smoothScrollTo(e, '/#contact')} className="w-full py-6 rounded-2xl bg-indigo-500 hover:bg-indigo-600 text-white font-bold transition-all shadow-[0_20px_40px_rgba(99,102,241,0.3)] text-xl flex items-center justify-center gap-3">
                                    Jetzt kostenlos anfragen
                                </a>

                                <button
                                    onClick={() => setIsModalOpen(true)}
                                    className="w-full py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white/70 font-bold transition-all border border-white/5 text-sm uppercase tracking-widest flex items-center justify-center gap-2"
                                >
                                    Alle Features ansehen
                                </button>
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-medium">
                                <div className="text-white/40">
                                    <span className="text-white">Setup-Gebühr:</span> 199€ einmalig — inkl. persönlichem Onboarding & fertigem Werbematerial
                                </div>
                                <div className="text-indigo-400">
                                    Kündbar ohne Mindestlaufzeit
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>

            <FeatureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </section>
    );
}
