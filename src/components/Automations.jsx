import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Target, CalendarDays, ArrowRight, Bell, Settings2 } from 'lucide-react';

export default function Automations() {
    const flows = [
        {
            icon: <Calendar className="text-pink-400" />,
            title: "Geburtstag",
            trigger: "Kunde hat heute Geburtstag",
            action: "Auto-Push: Happy Birthday! 🎂 Dein Gratis-Dessert wartet",
            color: "from-pink-500/20 to-rose-500/5",
            borderColor: "border-pink-500/30"
        },
        {
            icon: <Clock className="text-orange-400" />,
            title: "Inaktivität",
            trigger: "14 Tage kein Besuch",
            action: "Auto-Push: Wir vermissen dich! Dein Kaffee geht aufs Haus",
            color: "from-orange-500/20 to-amber-500/5",
            borderColor: "border-orange-500/30"
        },
        {
            icon: <Target className="text-indigo-400" />,
            title: "Fast geschafft",
            trigger: "Stempel 9/10 erreicht",
            action: "Auto-Push: Nur noch 1 Stempel! 🔥",
            color: "from-indigo-500/20 to-blue-500/5",
            borderColor: "border-indigo-500/30"
        },
        {
            icon: <CalendarDays className="text-emerald-400" />,
            title: "Wochenplan",
            trigger: "Montag 11:30 Uhr",
            action: "Auto-Push: Mittagspause? Dein Lieblings-Café wartet",
            color: "from-emerald-500/20 to-teal-500/5",
            borderColor: "border-emerald-500/30"
        }
    ];

    return (
        <section className="py-32 bg-[#0A0A0F] text-white relative border-y border-white/5">
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                        Set it. Forget it. <span className="text-gradient-primary">Umsatz läuft.</span>
                    </h2>
                    <p className="text-lg text-white/50">
                        Du musst nicht jeden Tag aktives Marketing machen. Erstelle einmal smarte Wenn-Dann-Regeln
                        und QARD kümmert sich vollautomatisch um den Rest.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Flow Diagrams */}
                    <div className="space-y-4">
                        {flows.map((flow, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "100px" }}
                                transition={{ delay: i * 0.15 }}
                                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-2xl bg-[#030308] border border-white/10 hover:border-white/20 transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-default group"
                            >
                                {/* Trigger */}
                                <div className="flex items-center gap-3 w-full sm:w-[40%]">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${flow.color} border ${flow.borderColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                                        {flow.icon}
                                    </div>
                                    <div className="text-sm font-semibold text-white/90">{flow.trigger}</div>
                                </div>

                                {/* Arrow */}
                                <div className="hidden sm:flex text-indigo-400 group-hover:translate-x-1 transition-transform">
                                    <ArrowRight size={20} />
                                </div>
                                <div className="sm:hidden pl-6 text-indigo-400">
                                    ↓
                                </div>

                                {/* Action */}
                                <div className="flex-1 bg-white/5 p-4 rounded-xl border border-white/5 shadow-inner w-full group-hover:bg-white/10 transition-colors">
                                    <div className="text-[10px] text-white/40 mb-1 font-bold uppercase tracking-widest">Dann Aktion</div>
                                    <div className="text-sm text-white/80 font-medium leading-snug">{flow.action}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Visual / UI Mockup (Dark Mode Configurator) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "100px" }}
                        className="relative h-[550px] bg-[#111] rounded-[2rem] border border-[#333] shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-8 overflow-hidden flex flex-col"
                    >
                        {/* Inner Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-[80px]"></div>

                        <div className="mb-8 relative z-10 flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-1 text-white">Neue Automatisierung</h3>
                                <p className="text-white/40 text-sm">Wenn [Bedingung], dann [Aktion].</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 text-white/40">
                                <Settings2 size={18} />
                            </div>
                        </div>

                        <div className="flex-1 relative z-10 space-y-6">
                            {/* Fake UI Elements */}
                            <div className="bg-[#1A1A24] p-5 rounded-2xl shadow-inner border border-white/5 relative">
                                <div className="absolute top-0 left-6 -translate-y-1/2 bg-[#1A1A24] px-2 text-[10px] font-bold text-indigo-400 uppercase tracking-wider">Auslöser (Wenn)</div>
                                <div className="flex items-center justify-between mt-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                                            <Clock size={20} />
                                        </div>
                                        <span className="font-semibold text-white/90">Kunde inaktiv für</span>
                                    </div>
                                    <div className="bg-[#0A0A0F] px-4 py-2 rounded-lg text-sm font-bold border border-white/10 shadow-inner">14 Tage</div>
                                </div>
                            </div>

                            <div className="w-px h-8 bg-indigo-500/30 mx-auto relative relative z-0">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]"></div>
                            </div>

                            <div className="bg-[#1A1A24] p-5 rounded-2xl shadow-inner border border-white/5 relative">
                                <div className="absolute top-0 left-6 -translate-y-1/2 bg-[#1A1A24] px-2 text-[10px] font-bold text-pink-400 uppercase tracking-wider">Aktion (Dann)</div>

                                <div className="flex items-center gap-3 mb-4 mt-2">
                                    <div className="w-10 h-10 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center">
                                        <Bell size={20} />
                                    </div>
                                    <span className="font-semibold text-white/90">Push-Nachricht senden</span>
                                </div>

                                <div className="bg-[#0A0A0F] p-4 rounded-xl border border-white/5 text-sm text-white/70 shadow-inner relative overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-indigo-500"></div>
                                    "Wir vermissen dich! Dein nächster Kaffee geht aufs Haus ☕"
                                </div>
                            </div>

                            <div className="mt-auto pt-8 flex justify-end gap-3">
                                <button className="px-6 py-2.5 rounded-xl font-medium text-white/50 hover:text-white hover:bg-white/5 transition-colors">
                                    Abbrechen
                                </button>
                                <button className="bg-indigo-500 hover:bg-indigo-600 transition-colors text-white px-6 py-2.5 rounded-xl font-bold shadow-[0_0_20px_rgba(99,102,241,0.4)] flex items-center gap-2">
                                    Aktivieren <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
