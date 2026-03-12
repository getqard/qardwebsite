import React from 'react';
import { motion } from 'framer-motion';
import { Star, Check } from 'lucide-react';

export default function BonusReviews() {
    return (
        <section id="google-reviews" className="pt-32 pb-12 text-[#0A0A0F] relative">
            {/* Background glowing orb - repositioned for blend */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-green-400/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">

                    {/* Left Side: Text Content */}
                    <div className="flex-1 space-y-8 text-center lg:text-left">
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 text-green-700 font-semibold text-sm shadow-sm"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="flex h-2 w-2 relative">
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            5-Sterne Autopilot
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h2 className="text-4xl md:text-5xl font-display font-bold leading-[1.15] mb-6 tracking-tight">
                                Und nebenbei sammelt QARD <br className="hidden md:block" />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600">
                                    Google-Bewertungen
                                </span> <br className="hidden lg:block" /> für dich.
                            </h2>
                            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                                Dein Kunde speichert die Karte — und wird direkt gefragt, ob er dich bewerten möchte. Genau im richtigen Moment, völlig automatisch.
                                <br /><br />
                                <strong className="text-gray-900">Das Resultat:</strong> Mehr Google-Bewertungen, besseres Ranking, neue Kunden — ohne dass du jemals danach fragen musst.
                            </p>
                        </motion.div>
                    </div>

                    {/* Right Side: Standalone Animated Review Card */}
                    <div className="w-full lg:w-[540px] flex-shrink-0 relative flex justify-center py-12 lg:py-0">

                        {/* Dramatic Glow Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-green-400/10 rounded-full blur-[100px] pointer-events-none"></div>

                        {/* Interactive Review Card */}
                        <motion.div
                            className="w-full max-w-[420px] bg-white rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.08),_0_0_0_1px_rgba(0,0,0,0.02)] p-10 flex flex-col items-center relative z-10"
                            initial={{ opacity: 0, scale: 0.9, y: 40 }}
                            whileInView={{ opacity: 1, scale: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ type: "spring", stiffness: 60, damping: 20 }}
                        >
                            {/* Inner Green Glow Element */}
                            <div className="absolute inset-0 rounded-[2.5rem] border-[1px] border-green-500/20 z-0 opacity-50"></div>
                            <div className="absolute inset-x-12 -top-12 h-24 bg-green-400/10 blur-3xl rounded-full z-0 pointer-events-none"></div>

                            <div className="relative z-10 w-full flex flex-col items-center">

                                {/* Large Animated Green Checkmark */}
                                <motion.div
                                    className="w-28 h-28 bg-gradient-to-b from-[#1ce579] to-[#12a153] rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(20,201,105,0.4)] mb-10 -mt-20"
                                    initial={{ scale: 0, y: 20 }}
                                    whileInView={{ scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                                >
                                    <motion.div
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.6 }}
                                    >
                                        <Check className="text-white w-14 h-14" strokeWidth={3} />
                                    </motion.div>
                                </motion.div>

                                <div className="text-center mb-10">
                                    <motion.h3
                                        className="text-[28px] font-bold text-gray-900 mb-3 tracking-tight flex items-center justify-center gap-2"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.4 }}
                                    >
                                        Deine Karte ist bereit! <span className="text-3xl">🎉</span>
                                    </motion.h3>
                                    <motion.p
                                        className="text-gray-500 text-lg"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.5 }}
                                    >
                                        Deine bestehende Karte wurde geladen.
                                    </motion.p>
                                </div>



                                {/* The "One second more" prompt */}
                                <motion.div 
                                    className="w-full flex flex-col items-center bg-green-50/30 rounded-3xl p-6 lg:p-8 border-2 border-green-500/30 relative"
                                    initial={{ scale: 0.95, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.8 }}
                                >
                                    <motion.h4
                                        className="font-bold text-gray-900 text-[20px] lg:text-[22px] mb-1"
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 1.1 }}
                                    >
                                        Eine Sekunde noch?
                                    </motion.h4>
                                    <motion.p
                                        className="text-gray-500 text-sm mb-6 text-center"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 1.2 }}
                                    >
                                        Dein Feedback bedeutet uns die Welt! <span className="text-green-500">💚</span>
                                    </motion.p>

                                    {/* Large Interactive Star Animation - Now auto-filling */}
                                    <div className="flex gap-3 lg:gap-4">
                                        {[1, 2, 3, 4, 5].map((i) => (
                                            <div key={`star-${i}`} className="relative">
                                                <Star className="w-10 h-10 lg:w-12 lg:h-12 text-gray-200" strokeWidth={1.5} />
                                                <motion.div
                                                    className="absolute inset-0 text-yellow-400"
                                                    initial={{ scale: 0, opacity: 0 }}
                                                    whileInView={{
                                                        scale: [0, 1],
                                                        opacity: [0, 1],
                                                    }}
                                                    viewport={{ once: true }}
                                                    transition={{
                                                        delay: 1.5 + (i * 0.15),
                                                        duration: 0.5,
                                                        ease: "easeOut"
                                                    }}
                                                >
                                                    <Star className="w-10 h-10 lg:w-12 lg:h-12 drop-shadow-[0_0_10px_rgba(250,204,21,0.4)]" fill="currentColor" strokeWidth={0} />
                                                </motion.div>
                                            </div>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.p
                                    className="text-gray-400 text-xs mt-10 tracking-widest uppercase font-semibold"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 1.8 }}
                                >
                                    Powered by Qard
                                </motion.p>
                            </div>
                        </motion.div>



                    </div>

                </div>
            </div>
        </section>
    );
}
