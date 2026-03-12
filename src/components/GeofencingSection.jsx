import React, { useRef, useState, useEffect } from 'react';
import { MapPin, Target } from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

export default function GeofencingSection() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-20%" });
    const [showPush, setShowPush] = useState(false);

    useEffect(() => {
        let intervalId;
        if (isInView) {
            // Wait 1.5s for the blue dot to reach the center, then start the loop
            const initialTimer = setTimeout(() => {
                setShowPush(true);

                // After the first push, set up a loop to hide and show it
                intervalId = setInterval(() => {
                    setShowPush(false);
                    setTimeout(() => {
                        setShowPush(true);
                    }, 1000); // Wait 1 second before showing again
                }, 5000); // Keep it visible for 4s, then hide

            }, 1500);

            return () => {
                clearTimeout(initialTimer);
                if (intervalId) clearInterval(intervalId);
            };
        }
    }, [isInView]);

    return (
        <section id="geofencing" className="pt-6 pb-10 lg:pt-16 lg:pb-24 text-[#0A0A0F] relative">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

                {/* Visual Map/Radar Mockup (Left on Desktop) */}
                <div className="order-2 lg:order-1 relative h-[380px] lg:h-[500px] flex items-center justify-center rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-200" ref={containerRef}>

                    {/* Background Map Image */}
                    <img
                        src="/geofence-map.webp"
                        alt="Geofencing-Karte mit GPS-Radius um ein Geschäft"
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-1000"
                    />

                    {/* Darker overlay to make UI elements pop slightly */}
                    <div className="absolute inset-0 bg-black/5 mix-blend-multiply"></div>

                    {/* Geofence Zone (Center) */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                        <div className="w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] rounded-full border-[2px] border-blue-500/50 bg-blue-500/20 flex items-center justify-center relative shadow-[0_0_40px_rgba(59,130,246,0.15)] backdrop-blur-[1px]">
                            {/* Inner Pin / Cafe marker Base */}
                            <div className="w-4 h-4 bg-blue-600 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.9)] border border-white/50 z-10"></div>

                            {/* Smooth Radar Ping Animation using Framer Motion */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-blue-400/30"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.6, 0, 0.6]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            ></motion.div>
                        </div>
                    </div>

                    {/* Moving User (Blue Dot) */}
                    <motion.div
                        className="absolute w-6 h-6 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)] border-2 border-white flex items-center justify-center z-10"
                        initial={{ top: "10%", left: "10%", scale: 0 }}
                        animate={isInView ? { top: "50%", left: "50%", scale: 1, x: "-50%", y: "-50%" } : { top: "10%", left: "10%", scale: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    >
                        {/* Pulse effect on the user dot when it stops */}
                        {showPush && (
                            <motion.div
                                className="absolute inset-0 rounded-full bg-blue-400/60"
                                animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                            ></motion.div>
                        )}
                    </motion.div>

                    {/* The Popup Push Notification */}
                    <AnimatePresence>
                        {showPush && (
                            <motion.div
                                initial={{ y: -50, opacity: 0, scale: 0.95 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ y: -50, opacity: 0, scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 220, damping: 20 }}
                                className="absolute top-6 inset-x-4 max-w-[340px] mx-auto bg-black/35 backdrop-blur-3xl border border-white/20 rounded-[22px] p-[10px] shadow-[0_24px_50px_rgba(0,0,0,0.5)] z-50 pointer-events-none"
                            >
                                <div className="flex items-start gap-2.5">
                                    {/* App Icon / Logo */}
                                    <div className="w-[34px] h-[34px] rounded-[8px] shrink-0 flex items-center justify-center shadow-[inset_0_1px_4px_rgba(0,0,0,0.3)] relative overflow-hidden mt-0.5" style={{ backgroundColor: "rgb(95, 70, 43)" }}>
                                        <img
                                            src="/cafe-milano-logo.png"
                                            alt="Café Milano Logo"
                                            loading="lazy"
                                            className="absolute inset-0 w-full h-full object-contain p-[1px] rounded-[8px]"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'block';
                                            }}
                                        />
                                        <div className="hidden w-full h-full rounded-[8px]" style={{ backgroundColor: "rgb(95, 70, 43)" }}></div>
                                    </div>

                                    {/* Push Content */}
                                    <div className="flex-1 min-w-0 pt-[1px]">
                                        <div className="flex items-baseline justify-between mb-[2px] gap-2">
                                            <h4 className="text-white/95 font-semibold text-[13px] leading-none tracking-tight truncate">Café Milano</h4>
                                            <span className="text-white/40 text-[11px] shrink-0 font-medium whitespace-nowrap">Gerade eben</span>
                                        </div>
                                        <p className="text-white/[0.85] text-[12.5px] leading-[1.3] tracking-[0.01em] mt-[3px] line-clamp-2">
                                            Du bist in der Nähe! Hast du Lust auf einen Kaffee? Komm rein.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>

                {/* Text Content (Right on Desktop) */}
                <div className="order-1 lg:order-2 max-w-xl relative z-10">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="inline-flex shrink-0 mt-2 items-center justify-center p-3 bg-indigo-50 text-indigo-600 rounded-2xl shadow-sm border border-indigo-100 relative">
                            <MapPin size={32} />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
                            Magische Anziehung.<br /><span className="text-indigo-600">Per GPS.</span>
                        </h2>
                    </div>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        Dein Kunde läuft an deinem Laden vorbei? Er bekommt automatisch eine Nachricht auf seinem Handy. Perfektes Timing, null Aufwand.
                    </p>

                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8 hover:shadow-md transition-shadow">
                        <div className="flex gap-4">
                            <Target className="text-indigo-500 shrink-0 mt-1" size={24} />
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1 leading-tight">Automatisch im richtigen Moment.</h4>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Laufkundschaft wird zu Stammkundschaft. Sobald jemand in der Nähe ist, holt QARD ihn zu dir rein.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

