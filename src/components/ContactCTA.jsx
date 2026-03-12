import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, User, Building2, ArrowRight, Check, Star, Wallet, Bell, Loader2 } from 'lucide-react';

const FloatingIcon = ({ icon: Icon, delay, x, y, size = 24 }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
            x: [0, 10, 0]
        }}
        transition={{
            duration: 8,
            delay,
            ease: "easeInOut"
        }}
        className="absolute pointer-events-none text-indigo-500/20"
        style={{ left: x, top: y }}
    >
        <Icon size={size} />
    </motion.div>
);

export default function ContactCTA() {
    const [formData, setFormData] = useState({ name: '', business: '', email: '', phone: '' });
    const [status, setStatus] = useState('idle'); // idle | sending | success | error

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email) return;

        setStatus('sending');
        try {
            const res = await fetch('https://formsubmit.co/ajax/hello@getqard.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({
                    Name: formData.name,
                    Geschäft: formData.business,
                    Email: formData.email,
                    Telefon: formData.phone,
                    _subject: `Neue Anfrage von ${formData.name} – ${formData.business || 'k.A.'}`,
                }),
            });
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', business: '', email: '', phone: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    return (
        <section className="pt-12 pb-16 lg:pb-32 bg-white text-[#0A0A0F] relative overflow-hidden" id="contact">
            {/* Advanced Background Decorations */}
            <div className="absolute top-0 right-0 w-[250px] h-[250px] lg:w-[600px] lg:h-[600px] bg-indigo-50/40 rounded-full blur-[40px] lg:blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[250px] h-[250px] lg:w-[600px] lg:h-[600px] bg-purple-50/40 rounded-full blur-[40px] lg:blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            {/* Floating Decorative Icons — hidden on mobile (GPU savings) */}
            <div className="hidden lg:block">
                <FloatingIcon icon={Wallet} delay={0} x="10%" y="20%" size={40} />
                <FloatingIcon icon={Star} delay={2} x="85%" y="15%" size={32} />
                <FloatingIcon icon={Bell} delay={4} x="15%" y="70%" size={36} />
                <FloatingIcon icon={Check} delay={1} x="80%" y="80%" size={28} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 text-sm font-bold text-indigo-600 mb-8 backdrop-blur-sm">
                            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                            Onboarding Plätze für diesen Monat verfügbar
                        </div>

                        <h2 className="text-5xl md:text-7xl font-display font-bold mb-8 leading-[1.02] tracking-tight">
                            Klingt gut? <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-[length:200%_auto] animate-gradient text-glow-sm">Lass uns kurz sprechen.</span>
                        </h2>

                        <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-lg font-medium">
                            Wir zeigen dir in einem kurzen Gespräch wie QARD funktioniert, was es für deinen Laden bringen kann und beantworten alle deine Fragen. Unverbindlich.
                        </p>

                        <div className="space-y-5">
                            {[
                                "Wir zeigen dir das System live an echten Beispielen",
                                "Wir erklären dir alles Schritt für Schritt",
                                "Kein Verkaufsdruck. Nur ehrliche Beratung."
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 * i }}
                                    className="flex items-center gap-4 group"
                                >
                                    <div className="w-7 h-7 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/20 group-hover:scale-110 transition-transform">
                                        <Check size={16} strokeWidth={3} />
                                    </div>
                                    <span className="font-bold text-gray-800 text-lg">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.98 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative"
                    >
                        {/* Glow Effect behind form */}
                        <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-500/10 via-purple-500/5 to-indigo-500/10 rounded-[4rem] blur-3xl opacity-60"></div>

                        <div id="contact-form" className="relative bg-white/90 border border-indigo-50/50 p-8 md:p-12 rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.06),0_10px_20px_rgba(79,70,229,0.03)] backdrop-blur-xl overflow-hidden group">
                            {/* Subtle internal gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/30 via-transparent to-white pointer-events-none"></div>

                             <h3 className="relative z-10 text-2xl md:text-3xl font-bold mb-8 text-[#0A0A0F] tracking-tight">Kostenlos beraten lassen</h3>

                            <AnimatePresence mode="wait">
                                {status === 'success' ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="relative z-10 text-center py-16"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                                            <Check size={40} className="text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-[#0A0A0F] mb-3">Anfrage gesendet!</h3>
                                        <p className="text-gray-500 text-lg">Wir melden uns innerhalb von 24 Stunden bei dir.</p>
                                        <button
                                            onClick={() => setStatus('idle')}
                                            className="mt-8 text-indigo-600 font-bold hover:text-indigo-800 transition-colors"
                                        >
                                            Weitere Anfrage senden
                                        </button>
                                    </motion.div>
                                ) : (
                                    <form key="form" onSubmit={handleSubmit} className="relative z-10 space-y-5">
                                        <div className="space-y-5">
                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.1em] text-gray-400 ml-1">Dein Name *</label>
                                                    <div className="relative group/input">
                                                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within/input:text-indigo-500 transition-colors" size={18} />
                                                        <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Maximilian Muster" className="w-full pl-12 pr-4 py-4 bg-indigo-50/30 border border-indigo-100/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all font-semibold placeholder:text-gray-300 text-[#0A0A0F]" />
                                                    </div>
                                                </div>
                                                <div className="space-y-1.5">
                                                    <label className="text-[10px] font-black uppercase tracking-[0.1em] text-gray-400 ml-1">Dein Geschäft</label>
                                                    <div className="relative group/input">
                                                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within/input:text-indigo-500 transition-colors" size={18} />
                                                        <input type="text" name="business" value={formData.business} onChange={handleChange} placeholder="Café Milano" className="w-full pl-12 pr-4 py-4 bg-indigo-50/30 border border-indigo-100/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all font-semibold placeholder:text-gray-300 text-[#0A0A0F]" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-black uppercase tracking-[0.1em] text-gray-400 ml-1">E-Mail Adresse *</label>
                                                <div className="relative group/input">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within/input:text-indigo-500 transition-colors" size={18} />
                                                    <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="max@beispiel.de" className="w-full pl-12 pr-4 py-4 bg-indigo-50/30 border border-indigo-100/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all font-semibold placeholder:text-gray-300 text-[#0A0A0F]" />
                                                </div>
                                            </div>

                                            <div className="space-y-1.5">
                                                <label className="text-[10px] font-black uppercase tracking-[0.1em] text-gray-400 ml-1">Telefonnummer</label>
                                                <div className="relative group/input">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-300 group-focus-within/input:text-indigo-500 transition-colors" size={18} />
                                                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+49 176 12345678" className="w-full pl-12 pr-4 py-4 bg-indigo-50/30 border border-indigo-100/50 rounded-2xl focus:outline-none focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-400 transition-all font-semibold placeholder:text-gray-300 text-[#0A0A0F]" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-4 pt-4">
                                            <motion.button
                                                type="submit"
                                                disabled={status === 'sending'}
                                                whileHover={status !== 'sending' ? { scale: 1.015, boxShadow: "0 20px 40px rgba(79, 70, 229, 0.2)" } : {}}
                                                whileTap={status !== 'sending' ? { scale: 0.985 } : {}}
                                                className="w-full py-5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-black text-xl rounded-2xl transition-all shadow-xl shadow-indigo-600/10 flex items-center justify-center gap-3 group relative overflow-hidden"
                                            >
                                                {status === 'sending' ? (
                                                    <Loader2 size={22} className="relative z-10 animate-spin" />
                                                ) : (
                                                    <>
                                                        <span className="relative z-10">Jetzt kostenlos anfragen</span>
                                                        <ArrowRight size={22} className="relative z-10 group-hover:translate-x-1.5 transition-transform" />
                                                    </>
                                                )}
                                            </motion.button>

                                            {status === 'error' && (
                                                <p className="text-center text-sm text-red-500 font-semibold">
                                                    Etwas ist schiefgelaufen. Bitte versuche es erneut.
                                                </p>
                                            )}

                                            <div className="flex items-center gap-4 py-2">
                                                <div className="h-px flex-1 bg-gray-100"></div>
                                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Oder direkt Kontakt</span>
                                                <div className="h-px flex-1 bg-gray-100"></div>
                                            </div>

                                            <motion.a
                                                href="https://wa.me/4915153741114"
                                                target="_blank"
                                                rel="noreferrer"
                                                whileHover={{ scale: 1.015, boxShadow: "0 20px 40px rgba(37, 211, 102, 0.2)" }}
                                                whileTap={{ scale: 0.985 }}
                                                className="flex items-center justify-center gap-3 bg-[#25D366] text-white font-black text-xl py-5 rounded-2xl transition-all group shadow-xl shadow-green-500/10 relative overflow-hidden"
                                            >
                                                <img src="/whatsapp.svg" alt="WhatsApp" loading="lazy" className="w-8 h-8 relative z-10 group-hover:scale-105 transition-transform" />
                                                <span className="relative z-10 font-black text-white">Direkt per WhatsApp</span>
                                            </motion.a>
                                        </div>

                                        <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] pt-2">
                                            Kostenlos & Unverbindlich
                                        </p>
                                    </form>
                                )}
                            </AnimatePresence>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
