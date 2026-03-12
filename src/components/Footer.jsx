import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { smoothScrollTo } from '../utils/smoothScroll';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    };

    return (
        <footer className="text-gray-400 py-12 relative z-10">
            <div className="absolute -top-32 -right-20 w-[500px] h-[500px] bg-[rgba(255,0,212,0.06)] rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[rgba(26,86,255,0.1)] rounded-full blur-[160px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Highly Structured, Perfectly Aligned Footer */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pt-16 mb-8 border-b border-white/5 pb-10">
                    {/* Brand Column */}
                    <div className="md:col-span-12 lg:col-span-4 flex flex-col items-start">
                        <Link
                            to="/"
                            onClick={scrollToTop}
                            className="flex items-center gap-2 mb-4"
                        >
                            <img src="/LOGO_QARD_Master-02.svg" alt="QARD Logo" className="h-8 w-auto" />
                        </Link>
                        <p className="text-white/40 text-[15px] mb-6 leading-relaxed max-w-sm">
                            Die smarte Plattform für nachhaltige Kundenbindung. Verwandle Laufkundschaft in echte Stammkunden — einfach, digital und messbar.
                        </p>
                        
                        {/* Social & Contact Cluster - Inline Layout */}
                        <div className="flex flex-row items-center gap-2 bg-white/[0.03] border border-white/10 p-1.5 pr-4 rounded-2xl w-fit whitespace-nowrap overflow-hidden shadow-sm">
                            <a 
                                href="https://instagram.com/qard.systems" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="h-9 px-3 rounded-xl bg-white/5 flex items-center gap-2 hover:bg-white/10 transition-all border border-white/5 group shrink-0"
                            >
                                <img src="/insta.svg" alt="" className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                                <span className="text-[13px] font-bold text-white/70 group-hover:text-white transition-colors">qard.systems</span>
                            </a>
                            <div className="h-4 w-px bg-white/10 shrink-0 mx-1"></div>
                            <a 
                                href="mailto:hello@getqard.com"
                                className="h-9 px-3 flex items-center gap-2 text-[13px] text-white/60 hover:text-white transition-colors font-bold shrink-0"
                            >
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-60"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                hello@getqard.com
                            </a>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="md:col-span-4 lg:col-span-3 lg:col-start-6">
                        <h4 className="font-black mb-5 text-white text-[11px] uppercase tracking-[0.25em] opacity-90">Features</h4>
                        <ul className="space-y-3 text-[15px] text-white/35 font-medium">
                            <li><a href="/#push-marketing" onClick={(e) => smoothScrollTo(e, '/#push-marketing')} className="hover:text-white transition-colors flex items-center gap-3 group"><span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all"></span>Push-Nachrichten</a></li>
                            <li><a href="/#geofencing" onClick={(e) => smoothScrollTo(e, '/#geofencing')} className="hover:text-white transition-colors flex items-center gap-3 group"><span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all"></span>GPS-Nachrichten</a></li>
                            <li><a href="/#dashboard" onClick={(e) => smoothScrollTo(e, '/#dashboard')} className="hover:text-white transition-colors flex items-center gap-3 group"><span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all"></span>Dashboard</a></li>
                            <li><a href="/#google-reviews" onClick={(e) => smoothScrollTo(e, '/#google-reviews')} className="hover:text-white transition-colors flex items-center gap-3 group"><span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all"></span>Google-Bewertungen</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4 lg:col-span-2">
                        <h4 className="font-black mb-5 text-white text-[11px] uppercase tracking-[0.25em] opacity-90">Navigation</h4>
                        <ul className="space-y-3 text-[15px] text-white/35 font-medium">
                            <li><a href="/#push-marketing" onClick={(e) => smoothScrollTo(e, '/#push-marketing')} className="hover:text-white transition-colors flex items-center gap-3 group"><span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all"></span>Funktionen</a></li>
                            <li><a href="/#how-it-works" onClick={(e) => smoothScrollTo(e, '/#how-it-works')} className="hover:text-white transition-colors flex items-center gap-3 group"><span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all"></span>So funktioniert's</a></li>
                            <li><a href="/#pricing" onClick={(e) => smoothScrollTo(e, '/#pricing')} className="hover:text-white transition-colors flex items-center gap-3 group"><span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all"></span>Preise</a></li>
                            <li><a href="/#contact" onClick={(e) => smoothScrollTo(e, '/#contact')} className="hover:text-white transition-colors flex items-center gap-3 group"><span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all"></span>Kontakt</a></li>
                        </ul>
                    </div>

                    <div className="md:col-span-4 lg:col-span-2">
                        <h4 className="font-black mb-5 text-white text-[11px] uppercase tracking-[0.25em] opacity-90">Rechtliches</h4>
                        <ul className="space-y-3 text-[15px] text-white/35 font-medium">
                            <li><Link to="/impressum" onClick={scrollToTop} className="hover:text-white transition-colors flex items-center gap-3 group"><span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all"></span>Impressum</Link></li>
                            <li><Link to="/datenschutz" onClick={scrollToTop} className="hover:text-white transition-colors flex items-center gap-3 group"><span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all"></span>Datenschutz</Link></li>
                            <li><Link to="/agb" onClick={scrollToTop} className="hover:text-white transition-colors flex items-center gap-3 group"><span className="w-1 h-1 rounded-full bg-indigo-500 opacity-0 group-hover:opacity-100 transition-all"></span>AGB</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] text-white/30 uppercase tracking-[0.3em] font-black pb-8">
                    <div className="flex items-center gap-3">
                        <span className="text-white/40">&copy; {new Date().getFullYear()} QARD</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-10">
                        <span className="text-white/40 flex items-center gap-2">Made with <span className="text-red-500/80 animate-pulse text-[14px]">❤️</span> in Nuremberg</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
