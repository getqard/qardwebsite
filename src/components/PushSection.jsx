import React, { useRef, useState } from 'react';
import { Bell, ArrowRight } from 'lucide-react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import DeviceMockup from './DeviceMockup';

export default function PushSection() {
    const sectionRef = useRef(null);
    const [isRevealed, setIsRevealed] = useState(false);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        // Trigger the animation shortly after the section becomes sticky
        if (latest > 0.15 && !isRevealed) {
            setIsRevealed(true);
        }
    });

    // Mock data for notifications until user provides final assets
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

    return (
        <section ref={sectionRef} id="push-marketing" className="py-10 lg:py-24 text-[#0A0A0F] relative">
            <div className="w-full flex items-center">
                <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="max-w-xl relative z-10">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="inline-flex items-center justify-center p-3 mt-2 bg-indigo-50 text-indigo-600 rounded-2xl shadow-sm border border-indigo-100 relative shrink-0">
                                <Bell size={32} className="animate-pulse" />
                                {/* Simple ring animation around bell */}
                                <div className="absolute inset-0 border-2 border-indigo-400 rounded-2xl animate-ping opacity-20"></div>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight m-0">
                                Nachrichten direkt <br />auf den <span className="text-indigo-600">Sperrbildschirm.</span>
                            </h2>
                        </div>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Erreiche deine Kunden dort, wo sie 100x am Tag hinschauen. Schicke Angebote, News oder Reminder direkt auf das Handy – mit einer Öffnungsrate von über 90%.
                        </p>

                        <ul className="space-y-4 mb-10">
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Keine App Installation nötig.
                            </li>
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Gezielte reaktivierung schlafender Kunden.
                            </li>
                            <li className="flex items-center gap-3 text-gray-700 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span> Echtzeit-Zustellung weltweit.
                            </li>
                        </ul>

                        <button className="flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-800 transition-colors group">
                            Push-Kampagnen ansehen <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>

                    {/* Visual Lockscreen Mockup */}
                    <div className="relative h-[650px] flex items-center justify-center lg:justify-end">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[80px] pointer-events-none"></div>

                        <div className="w-full max-w-[340px] relative z-20">
                            <DeviceMockup className="w-full">
                                {/* Lockscreen Background */}
                                <div className="w-full h-full relative bg-zinc-900 rounded-[28px] overflow-hidden">
                                    <img
                                        src="/lockscreen-bg.png"
                                        alt="Wallpaper"
                                        className="absolute inset-0 w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    <div className="hidden absolute inset-0 flex-col items-center justify-center p-6 text-center bg-zinc-900 border border-white/5">
                                        <span className="text-4xl mb-3">📱</span>
                                        <span className="text-white/60 font-semibold text-sm">lockscreen-bg.png fehlt</span>
                                        <span className="text-white/40 mt-1 text-xs">Bitte Bild im /public Ordner ablegen.</span>
                                    </div>
                                    {/* Dark overlay for better text readability */}
                                    <div className="absolute inset-0 bg-black/20"></div>


                                    {/* Scroll-Linked Push Notifications Container */}
                                    <div className="relative z-20 px-2 space-y-2 flex flex-col mt-[80%]">
                                        {notifications.map((notif, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: -40 }}
                                                animate={isRevealed ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
                                                transition={{
                                                    duration: 0.6,
                                                    type: "spring",
                                                    bounce: 0.4,
                                                    delay: idx * 0.4 // 0.4s stagger between notifications
                                                }}
                                                className="bg-black/30 backdrop-blur-3xl border border-white/10 rounded-[22px] p-[10px] shadow-[0_24px_50px_rgba(0,0,0,0.8)] pointer-events-none"
                                            >
                                                <div className="flex items-start gap-2.5">
                                                    {/* App Icon / Logo */}
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

                                                    {/* Push Content */}
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
        </section>
    );
}
