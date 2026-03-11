import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogoClick = () => {
        if (location.pathname === '/') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            navigate('/');
        }
    };

    const navLinks = [
        { name: 'Lösung', href: '/#push-marketing' },
        { name: 'Kommandozentrale', href: '/#dashboard' },
        { name: 'Preise', href: '/#pricing' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030308]/60 backdrop-blur-xl border-b border-white/5 shadow-sm">
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
                            className="text-sm font-medium text-white/50 hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="w-px h-4 bg-white/10 mx-2"></div>
                    <Link to="/kontakt" className="px-5 py-2.5 rounded-full bg-indigo-500 hover:bg-indigo-600 active:scale-95 text-white text-sm font-bold transition-all shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/50">
                        Kostenlos anfragen
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white/70 hover:text-white transition-colors p-2" onClick={() => setIsOpen(!isOpen)}>
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
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="h-px bg-white/10 my-2" />
                    <Link to="/kontakt" onClick={() => setIsOpen(false)} className="w-full py-3 text-center rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-bold transition-colors shadow-lg">
                        Kostenlos anfragen
                    </Link>
                </motion.div>
            )}
        </nav>
    );
}
