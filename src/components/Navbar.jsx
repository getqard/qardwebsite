import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { smoothScrollTo } from '../utils/smoothScroll';

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (e, href) => {
        smoothScrollTo(e, href);
        if (isOpen) {
            setIsOpen(false);
        }
    };

    const handleLogoClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    const navLinks = [
        { name: 'Funktionen', href: '/#push-marketing' },
        { name: 'So funktioniert\'s', href: '/#how-it-works' },
        { name: 'Preise', href: '/#pricing' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030308]/85 backdrop-blur-xl border-b border-white/5 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={handleLogoClick}
                >
                    <img src="/LOGO_QARD_Master-02.svg" alt="QARD Logo" className="h-8 w-auto h-logo" />
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => handleNavClick(e, link.href)}
                            className="text-sm font-medium text-white/50 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="w-px h-4 bg-white/10 mx-2"></div>
                    <a href="/#contact" onClick={(e) => handleNavClick(e, '/#contact')} className="px-5 py-2.5 rounded-full bg-indigo-500 hover:bg-indigo-600 active:scale-95 text-white text-sm font-bold transition-all shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/50">
                        Jetzt kostenlos anfragen
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white/70 hover:text-white transition-colors p-2" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? "Menü schließen" : "Menü öffnen"} aria-expanded={isOpen}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-20 left-0 right-0 bg-[#030308]/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-white/70 hover:text-white py-2 font-medium"
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="h-px bg-white/10 my-2" />
                    <a href="/#contact" onClick={(e) => handleNavClick(e, '/#contact')} className="w-full py-3 text-center rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-bold transition-colors shadow-lg">
                        Jetzt kostenlos anfragen
                    </a>
                </motion.div>
            )}
        </nav>
    );
}
