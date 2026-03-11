import React from 'react';
import { motion } from 'framer-motion';
import { Bell, MapPin, Cake, Clock, Flame } from 'lucide-react';

export default function PushNotifications() {
    const pushes = [
        { icon: <MapPin size={16} />, text: "Du bist ganz in der Nähe! Schau vorbei und hol dir deinen 8. Stempel. ☕", delay: 0 },
        { icon: <Cake size={16} />, text: "Happy Birthday! Dein Gratis-Dessert wartet auf dich. 🎂", delay: 1.5 },
        { icon: <Flame size={16} />, text: "Nur noch 1 Stempel bis zu deinem Gratis-Kaffee! 🔥", delay: 3 },
    ];

    return (
        <section className="py-32 bg-[#0A0A0F] text-white overflow-hidden relative border-y border-white/5">
            {/* Subtle Ambient Lighting */}
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Text Content */}
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight">
                            Erreiche deine Kunden direkt auf dem <span className="text-gradient-primary">Sperrbildschirm.</span>
                        </h2>
                        <p className="text-lg text-white/60 mb-12 leading-relaxed">
                            Wallet-Passes erlauben es dir, Push-Nachrichten zu senden, ohne dass der Kunde eine App installieren muss.
                            Automatisiert, personalisiert und extrem effektiv.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-6">
                            {[
                                { icon: <MapPin className="text-blue-400" />, title: "Geofencing", desc: "Nachrichten wenn Kunden in der Nähe sind" },
                                { icon: <Cake className="text-pink-400" />, title: "Geburtstage", desc: "Automatische Geschenke zum Ehrentag" },
                                { icon: <Clock className="text-orange-400" />, title: "Inaktivität", desc: "Hol verlorene Kunden zurück" },
                                { icon: <Bell className="text-indigo-400" />, title: "Updates", desc: "News, Angebote & Erinnerungen" }
                            ].map((feature, i) => (
                                <div key={i} className="glass-panel p-6 rounded-3xl hover:-translate-y-1 transition-transform duration-300 group">
                                    <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        {feature.icon}
                                    </div>
                                    <h4 className="font-bold mb-2 text-lg text-white/90">{feature.title}</h4>
                                    <p className="text-sm text-white/50">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Animation / Mockup */}
                    <div className="relative h-[700px] flex justify-center items-center">
                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[600px] bg-gradient-to-br from-indigo-500/20 to-purple-500/20 blur-[100px] rounded-[3rem] transform rotate-3"></div>

                        {/* Ultra Realistic Phone Mockup (Lockscreen) */}
                        <div className="relative w-[340px] h-[690px] bg-black rounded-[55px] border-[6px] border-[#333] shadow-[0_30px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col transform -rotate-2 anim-elegant-float">
                            {/* Dynamic Island */}
                            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-50"></div>

                            {/* Lockscreen Wallpaper (Premium Dark iOS Look) */}
                            <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c28] to-[#0A0A0F]"></div>
                            {/* Subtle mesh pattern on lockscreen */}
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                            {/* Time */}
                            <div className="relative z-10 pt-20 text-center">
                                <div className="text-white/80 text-xl font-medium mb-1">Dienstag, 14. Mai</div>
                                <div className="text-white text-[80px] font-bold tracking-tight leading-none drop-shadow-lg">09:41</div>
                            </div>

                            {/* Notifications Container */}
                            <div className="relative z-10 flex-1 px-4 pt-16 flex flex-col gap-3">
                                {pushes.map((push, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ y: 50, opacity: 0, scale: 0.95 }}
                                        whileInView={{ y: 0, opacity: 1, scale: 1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ delay: push.delay, duration: 0.6, type: "spring", bounce: 0.4 }}
                                        className="bg-white/10 backdrop-blur-3xl border border-white/20 p-4 rounded-[24px] shadow-[0_10px_30px_rgba(0,0,0,0.4)]"
                                    >
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-6 h-6 bg-indigo-500 rounded-md flex items-center justify-center text-white shadow-sm">
                                                <span className="text-[10px] font-bold">Q</span>
                                            </div>
                                            <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">Wallet</span>
                                            <span className="text-xs text-white/50 ml-auto">Jetzt</span>
                                        </div>
                                        <p className="text-sm text-white font-medium leading-snug">
                                            {push.text}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Home Indicator */}
                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1.5 bg-white/80 rounded-full"></div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
