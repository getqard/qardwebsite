import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Settings2, Moon, Bell } from 'lucide-react';

export default function Geofencing() {
    return (
        <section className="py-32 bg-[#030308] text-white relative">
            {/* Premium Dark Grid Background */}
            <div className="absolute inset-0 bg-grid-pattern-dense opacity-20 mask-image-gradient-to-b" style={{ maskImage: 'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)' }}></div>
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Kunden in der Nähe? <br /><span className="text-gradient-primary">QARD weiß Bescheid.</span>
                    </h2>
                    <p className="text-lg text-white/50">
                        Locke Laufkundschaft sofort in dein Geschäft. Sobald ein Kunde mit deinem Wallet-Pass
                        in die Nähe kommt, erhält er vollautomatisch eine Erinnerung.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Animation / Visual */}
                    <div className="relative h-[550px] bg-[#0A0A0F] rounded-[3rem] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden flex items-center justify-center">
                        {/* Map Grid */}
                        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

                        {/* Store Location */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="relative">
                                {/* Pulsing Radius */}
                                <motion.div
                                    animate={{ scale: [1, 3], opacity: [0.6, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/30 rounded-full blur-md"
                                />
                                <motion.div
                                    animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1 }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-indigo-500/30 rounded-full blur-sm"
                                />

                                {/* Store Pin */}
                                <div className="relative z-10 w-14 h-14 bg-indigo-500 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(99,102,241,0.8)] border-2 border-white scale-110">
                                    <MapPin className="text-white" size={28} />
                                </div>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold px-4 py-2 rounded-full whitespace-nowrap shadow-xl">
                                    Café Milano
                                </div>
                            </div>
                        </div>

                        {/* Moving Customer */}
                        <motion.div
                            initial={{ x: -200, y: 150 }}
                            animate={{ x: [-200, -60, 0], y: [150, 60, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2"
                        >
                            <div className="w-8 h-8 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg border border-indigo-400 relative z-20">
                                <div className="w-3 h-3 bg-indigo-400 rounded-full shadow-[0_0_10px_#818cf8]"></div>
                            </div>

                            {/* Notification Popup that appears when close */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                                animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.8, 0.8, 1, 1, 0.8], y: [10, 10, -10, -10, 10] }}
                                transition={{ duration: 6, repeat: Infinity, times: [0, 0.6, 0.65, 0.9, 1] }}
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 bg-[#111] border border-[#333] shadow-[0_15px_30px_rgba(0,0,0,0.8)] rounded-xl p-3"
                            >
                                <div className="text-[10px] font-bold text-indigo-400 uppercase mb-1 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                                    Wallet
                                </div>
                                <div className="text-xs text-white/90 font-medium leading-tight">Du bist in der Nähe! Hol dir deinen nächsten Stempel ☕</div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-8">
                        {[
                            { icon: <Navigation />, title: "Konfigurierbarer Radius", desc: "Lege fest, ob Kunden im Umkreis von 100m oder 1km benachrichtigt werden sollen." },
                            { icon: <Settings2 />, title: "Smarte Kategorien", desc: "Passe die Nachrichten an dein Business an (Gastro, Retail, Beauty)." },
                            { icon: <Moon />, title: "Stille Stunden", desc: "Definiere Ruhezeiten (z.B. 22-07 Uhr), in denen keine Push-Nachrichten gesendet werden." },
                            { icon: <Bell />, title: "Frequenz-Limits", desc: "Schütze deine Kunden vor Spam. Maximal 1 Nachricht pro Tag pro Kunde." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "100px" }}
                                transition={{ delay: i * 0.1 }}
                                className="flex gap-4 p-4 rounded-2xl hover:bg-white/5 transition-colors group cursor-default"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-[#0A0A0F] border border-white/10 shadow-inner flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-110 group-hover:bg-indigo-500/10 group-hover:border-indigo-400/30 transition-all duration-300">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2 text-white/90">{item.title}</h4>
                                    <p className="text-white/50">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
