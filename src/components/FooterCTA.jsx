import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { smoothScrollTo } from '../utils/smoothScroll';

export default function FooterCTA() {
    return (
        <section className="relative z-10 pt-16 lg:pt-24 pb-12">
            {/* Subtle ambient glows */}
            <div className="absolute -right-40 top-1/3 w-[600px] h-[600px] bg-[rgba(255,0,212,0.08)] rounded-full blur-[200px] pointer-events-none" />
            <div className="absolute -right-20 bottom-0 w-[600px] h-[600px] bg-[rgba(26,86,255,0.15)] rounded-full blur-[200px] pointer-events-none translate-y-1/3" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Big CTA */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative bg-[#05050A] border border-white/10 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)]"
                >
                    {/* Refined Animated Mesh Background - Deep brand colors */}
                    <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-[#05050A] via-indigo-950/40 to-[#0A0A0F]"
                        animate={{
                            background: [
                                "radial-gradient(circle at 10% 20%, rgba(30,27,75,0.8) 0%, rgba(5,5,10,1) 50%, rgba(5,5,10,1) 100%)",
                                "radial-gradient(circle at 90% 80%, rgba(30,27,75,0.8) 0%, rgba(49,46,129,0.4) 50%, rgba(5,5,10,1) 100%)",
                                "radial-gradient(circle at 20% 90%, rgba(49,46,129,0.6) 0%, rgba(30,27,75,0.6) 50%, rgba(5,5,10,1) 100%)",
                                "radial-gradient(circle at 80% 10%, rgba(5,5,10,1) 0%, rgba(30,27,75,0.7) 50%, rgba(5,5,10,1) 100%)",
                                "radial-gradient(circle at 10% 20%, rgba(30,27,75,0.8) 0%, rgba(5,5,10,1) 50%, rgba(5,5,10,1) 100%)",
                            ]
                        }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />

                    {/* Subtle Glass Overlays for Depth */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none mix-blend-screen" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none mix-blend-screen" />

                    <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl xl:text-6xl font-display font-bold mb-6 relative z-10 text-white tracking-tight leading-tight"
                    >
                        Deine Kunden warten. <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-white to-purple-200">Hol sie zurück.</span>
                    </motion.h2>

                    <motion.p 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto relative z-10 font-medium"
                    >
                        Starte jetzt und bring deine Kunden dazu, immer wieder zu kommen. Ohne App, ohne Aufwand.
                    </motion.p>
                    
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10"
                    >
                        {/* Primary Button with Subtle Action Pulse */}
                        <motion.a
                            href="/#contact"
                            onClick={(e) => smoothScrollTo(e, '/#contact')}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            animate={{
                                boxShadow: [
                                    "0 0 0px 0px rgba(255, 255, 255, 0.4)",
                                    "0 0 20px 5px rgba(255, 255, 255, 0.1)",
                                    "0 0 0px 0px rgba(255, 255, 255, 0.4)"
                                ]
                            }}
                            transition={{
                                boxShadow: {
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }}
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#0A0A0F] font-black text-lg transition-all flex items-center justify-center gap-2 relative overflow-hidden group"
                        >
                            <span className="relative z-10">Jetzt kostenlos anfragen</span>
                            <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        
                        {/* Secondary Button */}
                        <motion.a
                            href="/#pricing"
                            onClick={(e) => smoothScrollTo(e, '/#pricing')}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/20 text-white font-bold text-lg transition-all flex items-center justify-center backdrop-blur-sm"
                        >
                            Preise ansehen
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
