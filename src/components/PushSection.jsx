import React, { useRef } from 'react';
import { Bell } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import DeviceMockup from './DeviceMockup';

export default function PushSection() {
    const scrollAreaRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollAreaRef,
        offset: ["start end", "end start"]
    });

    // Snappy spring — immediate response, no lag
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 60, mass: 1 });

    // ScrollArea = 200vh → total range = 300vh
    // Sticky starts at ~33% (phone fully in viewport)
    // Sticky ends at ~67% (section bottom hits viewport bottom)

    // Notification 1: appears as phone enters viewport, done before sticky
    const op1 = useTransform(smoothProgress, [0.15, 0.30], [0, 1]);
    const y1 = useTransform(smoothProgress, [0.15, 0.30], [-30, 0]);
    const s1 = useTransform(smoothProgress, [0.15, 0.30], [0.9, 1]);

    // Notification 2: appears DURING sticky phase — scroll controls this
    const op2 = useTransform(smoothProgress, [0.42, 0.60], [0, 1]);
    const y2 = useTransform(smoothProgress, [0.42, 0.60], [-30, 0]);
    const s2 = useTransform(smoothProgress, [0.42, 0.60], [0.9, 1]);

    const motionValues = [
        { opacity: op1, y: y1, scale: s1 },
        { opacity: op2, y: y2, scale: s2 }
    ];

    const notifications = [
        {
            title: "Café Milano",
            message: "Dein gratis Flat White wartet auf dich! ☕️ Zeig diesen Code an der Kasse.",
            time: "Vor 2 Min.",
            logo: "/cafe-milano-logo.png",
            bgColor: "rgb(95, 70, 43)"
        },
        {
            title: "Studio Velluto",
            message: "Dein VIP-Termin wurde bestätigt ✨ Wir freuen uns auf dich!",
            time: "Gerade eben",
            logo: "/studio-velluto-logo.png",
            bgColor: "#000000"
        }
    ];

    const renderTextContent = () => (
        <>
            <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex items-center justify-center p-3 mt-2 bg-indigo-50 text-indigo-600 rounded-2xl shadow-sm border border-indigo-100 relative shrink-0">
                    <Bell size={32} />
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight m-0">
                    Nachrichten direkt <br />auf den <span className="text-indigo-600">Sperrbildschirm.</span>
                </h2>
            </div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Erreiche deine Kunden dort, wo sie am häufigsten hinschauen. Schicke Angebote, Reminder oder Aktionen direkt auf den Sperrbildschirm — mit über <span className="font-bold text-indigo-600">90% Öffnungsrate.</span>
            </p>
            <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Kunden kommen nicht mehr? Eine Nachricht reicht.
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Automatisch zur richtigen Zeit am richtigen Ort.
                </li>
                <li className="flex items-center gap-3 text-gray-700 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Keine App nötig — funktioniert auf jedem Handy. Schon vorinstalliert.
                </li>
            </ul>
        </>
    );

    return (
        <section id="push-marketing" className="text-[#0A0A0F] relative">
            {/* Mobile: Text scrolls normally BEFORE the sticky phone area */}
            <div className="lg:hidden px-6 pt-8 pb-4">
                <div className="max-w-xl">
                    {renderTextContent()}
                </div>
            </div>

            {/* Phone scroll area — this drives the scroll-linked animation */}
            <div ref={scrollAreaRef} className="h-[200vh] lg:h-auto relative">
                <div className="sticky top-0 h-screen lg:relative lg:h-auto flex items-center overflow-visible" style={{ willChange: 'transform' }}>
                    <div className="w-full lg:py-12">
                        <div className="max-w-7xl mx-auto px-6 w-full lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
                            {/* Desktop: text on the left */}
                            <div className="hidden lg:block max-w-xl">
                                {renderTextContent()}
                            </div>

                            {/* Phone mockup — centered on mobile, right on desktop */}
                            <div className="relative flex justify-center lg:justify-end">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-indigo-400/10 rounded-full blur-[80px] pointer-events-none -z-10"></div>
                                <div className="w-[275px] md:w-[290px] lg:w-[320px]">
                                    <DeviceMockup className="w-full text-left">
                                        <div className="w-full h-full relative bg-zinc-900 rounded-[28px] overflow-hidden">
                                            <img
                                                src="/lockscreen-bg.webp"
                                                alt="Wallpaper"
                                                className="absolute inset-0 w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.style.display = 'none';
                                                    e.target.nextSibling.style.display = 'flex';
                                                }}
                                            />
                                            <div className="hidden absolute inset-0 flex-col items-center justify-center p-6 text-center bg-zinc-900 border border-white/5">
                                                <span className="text-4xl mb-3">📱</span>
                                                <span className="text-white/60 font-semibold text-sm">lockscreen-bg.webp fehlt</span>
                                                <span className="text-white/40 mt-1 text-xs">Bitte Bild im /public Ordner ablegen.</span>
                                            </div>
                                            <div className="absolute inset-0 bg-black/20"></div>

                                            {/* Scroll-Linked Push Notifications */}
                                            <div className="relative z-20 px-2 space-y-2 flex flex-col mt-[80%]">
                                                {notifications.map((notif, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        style={motionValues[idx]}
                                                        className="bg-black/30 backdrop-blur-3xl border border-white/10 rounded-[22px] p-[10px] shadow-[0_24px_50px_rgba(0,0,0,0.8)] pointer-events-none"
                                                    >
                                                        <div className="flex items-start gap-2.5">
                                                            <div
                                                                className="w-[34px] h-[34px] rounded-[8px] shrink-0 flex items-center justify-center shadow-[inset_0_1px_4px_rgba(0,0,0,0.3)] relative overflow-hidden mt-0.5"
                                                                style={{ backgroundColor: notif.bgColor }}
                                                            >
                                                                <img
                                                                    src={notif.logo}
                                                                    alt={notif.title}
                                                                    className="absolute inset-0 w-full h-full object-contain p-[1px] rounded-[8px]"
                                                                    onError={(e) => {
                                                                        e.target.style.display = 'none';
                                                                        e.target.nextSibling.style.display = 'block';
                                                                    }}
                                                                />
                                                                <div className="hidden w-full h-full rounded-[8px]" style={{ backgroundColor: notif.bgColor }}></div>
                                                            </div>
                                                            <div className="flex-1 min-w-0 pt-[1px]">
                                                                <div className="flex items-baseline justify-between mb-[2px] gap-2">
                                                                    <h4 className="text-white/95 font-semibold text-[13px] leading-none tracking-tight truncate">{notif.title}</h4>
                                                                    <span className="text-white/40 text-[11px] shrink-0 font-medium whitespace-nowrap">{notif.time}</span>
                                                                </div>
                                                                <p className="text-white/[0.85] text-[12.5px] leading-[1.3] tracking-[0.01em] mt-[3px] line-clamp-2">
                                                                    {notif.message}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                ))}
                                            </div>

                                            {/* Home Indicator */}
                                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[35%] h-[5px] bg-white rounded-full z-50 pointer-events-none drop-shadow-md"></div>
                                        </div>
                                    </DeviceMockup>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
