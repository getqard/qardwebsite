import React from 'react';
import { motion } from 'framer-motion';

export default function DeviceMockup({ children, className = "" }) {
    return (
        <div className={`relative mx-auto w-full max-w-[320px] aspect-[19.5/40] ${className}`}>
            {/* The Phone Hardware Frame */}
            <div className="absolute inset-0 rounded-[3rem] border-[8px] border-zinc-800 bg-black shadow-2xl overflow-hidden ring-1 ring-white/10 z-20 pointer-events-none">
                {/* Dynamic Island Mock */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-50"></div>

                {/* Screen Content Wrapper */}
                <div className="absolute inset-0 z-10 bg-zinc-900 overflow-hidden pointer-events-auto">
                    {children}
                </div>

                {/* Screen Glare reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-40 mix-blend-overlay pointer-events-none"></div>
            </div>

            {/* Hardware Buttons (Volume & Power) */}
            <div className="absolute top-24 -left-[10px] w-1 h-12 bg-zinc-700 rounded-l-md pointer-events-none"></div>
            <div className="absolute top-40 -left-[10px] w-1 h-12 bg-zinc-700 rounded-l-md pointer-events-none"></div>
            <div className="absolute top-32 -right-[10px] w-1 h-16 bg-zinc-700 rounded-r-md pointer-events-none"></div>

            {/* Massive Shadow for Levitation effect */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[80%] h-8 bg-black/60 blur-xl rounded-[100%] z-0 pointer-events-none transition-all duration-1000"></div>
        </div>
    );
}
