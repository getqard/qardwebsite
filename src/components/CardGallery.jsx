import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import WalletPass from './WalletPass';

export default function CardGallery() {
    const cards = [
        {
            type: "stamp",
            shopName: "Café Milano",
            title: "Stempelkarte",
            logoText: "☕",
            progress: 7,
            maxProgress: 10,
            mainLabel: "DEINE STEMPEL",
            secondaryFields: [
                { label: "PRÄMIE", value: "Gratis Kaffee" },
                { label: "STATUS", value: "Silber" }
            ],
            qrColor: "#6366f1"
        },
        {
            type: "stamp",
            shopName: "Pizzeria Napoli",
            title: "Treuepass",
            logoText: "🍕",
            progress: 3,
            maxProgress: 5,
            mainLabel: "DEINE PIZZEN",
            secondaryFields: [
                { label: "PRÄMIE", value: "Gratis Pizza" },
                { label: "STATUS", value: "Gold" }
            ],
            qrColor: "#ef4444"
        },
        {
            type: "member",
            shopName: "FitLife Gym",
            title: "Mitgliedskarte",
            logoText: "💪",
            progress: 1,
            maxProgress: 1,
            mainLabel: "DEIN ZUGANG",
            secondaryFields: [
                { label: "TARIF", value: "Premium 24/7" },
                { label: "GÜLTIG BIS", value: "Dez 2024" }
            ],
            qrColor: "#22c55e"
        },
        {
            type: "member",
            shopName: "Beauty Lounge",
            title: "VIP Pass",
            logoText: "✨",
            progress: 1,
            maxProgress: 1,
            mainLabel: "DEIN STATUS",
            secondaryFields: [
                { label: "RABATT", value: "15% auf alles" },
                { label: "NÄCHSTER TERMIN", value: "14. Mai" }
            ],
            qrColor: "#ec4899"
        },
        {
            type: "stamp",
            shopName: "Barbershop",
            title: "Stempelkarte",
            logoText: "✂️",
            progress: 9,
            maxProgress: 10,
            mainLabel: "DEINE BESUCHE",
            secondaryFields: [
                { label: "PRÄMIE", value: "Gratis Haarschnitt" },
                { label: "LETZTER BESUCH", value: "Vor 2 Wochen" }
            ],
            qrColor: "#f59e0b"
        }
    ];

    return (
        <section className="py-32 bg-[#030308] overflow-hidden relative" id="designs">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
                <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-white">
                    Individuelle Designs für <span className="text-gradient-primary">dein Business</span>
                </h2>
                <p className="text-lg text-white/50 max-w-2xl mx-auto">
                    Wir erstellen den perfekten Wallet-Pass passend zu deiner Marke.
                    Lade dein Logo hoch, wähle deine Farben und wir kümmern uns um den Rest.
                    Karten basieren zu 100% auf nativen Apple & Google Wallet Designs.
                </p>
            </div>

            {/* Scrolling Gallery */}
            <div className="relative w-full overflow-hidden flex items-center min-h-[550px] [perspective:1200px]">
                {/* Left/Right Gradients for smooth fade out */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030308] to-transparent z-20 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030308] to-transparent z-20 pointer-events-none"></div>

                <motion.div
                    className="flex gap-8 px-8 absolute left-0"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 40, ease: "linear", repeat: Infinity }}
                >
                    {/* Double the cards for infinite scroll effect */}
                    {[...cards, ...cards].map((card, i) => (
                        <div key={i} className="w-[320px] shrink-0 transform-gpu" style={{ perspective: '1200px' }}>
                            <TiltCard className="cursor-grab active:cursor-grabbing w-full">
                                <WalletPass data={card} />
                            </TiltCard>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
