import React from 'react';
import { motion } from 'framer-motion';
import {
    Utensils,
    Coffee,
    Scissors,
    Wind,
    Sparkles,
    ShoppingBag,
    Dumbbell,
    Pizza,
    PlusSquare,
    Sparkle,
    Beer,
    Heart
} from 'lucide-react';

const targets = [
    { name: "Restaurants", icon: Utensils, color: "text-orange-500", bg: "bg-orange-50" },
    { name: "Cafés", icon: Coffee, color: "text-amber-700", bg: "bg-amber-50" },
    { name: "Barbershops", icon: Scissors, color: "text-blue-500", bg: "bg-blue-50" },
    { name: "Bäckereien", icon: Pizza, color: "text-yellow-600", bg: "bg-yellow-50" },
    { name: "Kosmetik", icon: Sparkle, color: "text-emerald-500", bg: "bg-emerald-50" },
    { name: "Shisha Bars", icon: Wind, color: "text-purple-500", bg: "bg-purple-50" },
    { name: "Fitness", icon: Dumbbell, color: "text-blue-600", bg: "bg-blue-50" },
    { name: "Einzelhandel", icon: ShoppingBag, color: "text-indigo-500", bg: "bg-indigo-50" },
    { name: "Nagelstudios", icon: Heart, color: "text-pink-500", bg: "bg-pink-50" },
    { name: "Bars & Clubs", icon: Beer, color: "text-red-500", bg: "bg-red-50" }
];

export default function TargetAudience() {
    return (
        <section className="pt-24 pb-32 text-center relative">
            <div className="max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-[#0A0A0F] tracking-tight leading-[1.1]">
                        Für jedes lokale Geschäft,<br className="hidden md:block" />
                        das <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Stammkunden will.</span>
                    </h2>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                        Egal ob Café, Barbershop oder Restaurant — QARD passt sich deinem Business an.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6"
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.08
                            }
                        }
                    }}
                >
                    {targets.map((target, i) => (
                        <motion.div
                            key={i}
                            variants={{
                                hidden: { opacity: 0, scale: 0.8, y: 20 },
                                show: { opacity: 1, scale: 1, y: 0 }
                            }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                            }}
                            className="group relative p-8 bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:border-blue-100 transition-all duration-300 flex flex-col items-center gap-5 cursor-default overflow-hidden"
                        >
                            {/* Hover Background Accent */}
                            <div className={`absolute inset-0 ${target.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                            <div className={`relative z-10 w-14 h-14 rounded-2xl ${target.bg} flex items-center justify-center ${target.color} group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                                <target.icon size={28} />
                            </div>

                            <span className="relative z-10 font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 text-lg">
                                {target.name}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
