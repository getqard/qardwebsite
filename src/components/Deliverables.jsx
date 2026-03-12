import React from 'react';
import { motion } from 'framer-motion';
import {
    Rocket,
    Layout,
    Smartphone,
    QrCode,
    HeartHandshake
} from 'lucide-react';
import { smoothScrollTo } from '../utils/smoothScroll';

const DeliverableCard = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        whileHover={{ y: -5 }}
        className="group relative p-6 bg-gray-50 border border-gray-100 rounded-[2rem] hover:bg-white hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
    >
        <div className="flex flex-col gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/5 flex items-center justify-center text-indigo-500 group-hover:scale-110 transition-transform">
                <Icon size={22} />
            </div>
            <div>
                <h4 className="text-lg font-bold text-[#0A0A0F] mb-1 tracking-tight">{title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
            </div>
        </div>
    </motion.div>
);

export default function Deliverables() {
    const items = [
        {
            icon: Layout,
            title: "Individuelles Design",
            desc: "Alles in deinem Look — mit deinem Logo und deinen Farben."
        },
        {
            icon: Smartphone,
            title: "Scanner-App & Dashboard",
            desc: "Dein Team bekommt eine eigene App zum Stempeln. Dein Dashboard ist sofort einsatzbereit."
        },
        {
            icon: QrCode,
            title: "Hardware Inklusive",
            desc: "5 Aufsteller mit NFC & QR-Code — direkt zu dir geliefert."
        },
        {
            icon: HeartHandshake,
            title: "Full-Service Setup",
            desc: "Wir richten alles ein. Du musst nichts tun."
        }
    ];

    return (
        <section className="pt-24 pb-12 bg-white relative z-10 w-full overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 text-gray-500 text-xs font-bold uppercase tracking-widest mb-8"
                    >
                        <Rocket size={14} className="text-indigo-500" />
                        In 2 Tagen Live
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-6xl font-display font-bold mb-6 leading-[1.1] tracking-tight text-[#0A0A0F]"
                    >
                        Kein Aufwand. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Wir machen das für dich.</span>
                    </motion.h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Lehn dich zurück. Wir gestalten, richten ein und liefern alles schlüsselfertig — startklar in 48 Stunden.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {items.map((item, i) => (
                        <DeliverableCard
                            key={i}
                            {...item}
                            delay={i * 0.1}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 p-8 rounded-[2.5rem] bg-[#0A0A0F] border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left shadow-2xl shadow-indigo-500/20"
                >
                    <div>
                        <h4 className="text-xl font-bold mb-1 text-white">Bereit?</h4>
                        <p className="text-white/60 text-sm font-medium">Dein System kann in 48 Stunden stehen.</p>
                    </div>
                    <a href="/#contact-form" onClick={(e) => smoothScrollTo(e, '/#contact-form')} className="px-8 py-4 bg-white text-[#0A0A0F] font-bold rounded-2xl hover:bg-gray-100 transition-all shadow-xl scale-100 hover:scale-105 active:scale-95 text-sm">
                        Jetzt kostenlos anfragen
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
