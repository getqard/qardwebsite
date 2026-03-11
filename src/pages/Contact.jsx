import React, { useState } from 'react';
import LegalLayout from '../components/LegalLayout';
import { Mail, Phone, User, Building2, ArrowRight, Check, Loader2, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', business: '', email: '', phone: '', message: '' });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) return;

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
                    Nachricht: formData.message,
                    _subject: `Kontaktanfrage von ${formData.name} – ${formData.business || 'k.A.'}`,
                }),
            });
            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', business: '', email: '', phone: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    const inputClass = "w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all font-medium placeholder:text-white/20 text-white";
    const iconClass = "absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within/input:text-indigo-400 transition-colors";

    return (
        <LegalLayout title="Kontakt">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <p className="text-lg text-gray-300">
                        Hast du Fragen oder möchtest du mehr über QARD erfahren? Schreib uns einfach eine Nachricht, wir freuen uns darauf!
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-indigo-500/10 rounded-lg">
                                <Mail className="text-indigo-400" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-white">E-Mail</h3>
                                <a href="mailto:hello@getqard.com" className="text-gray-400 hover:text-white transition-colors">hello@getqard.com</a>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-indigo-500/10 rounded-lg">
                                <Phone className="text-indigo-400" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-white">Telefon / WhatsApp</h3>
                                <a href="tel:+4915153741114" className="text-gray-400 hover:text-white transition-colors">0151 53741114</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                    {status === 'success' ? (
                        <div className="text-center py-12">
                            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-5">
                                <Check size={32} className="text-green-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">Nachricht gesendet!</h3>
                            <p className="text-white/50">Wir melden uns innerhalb von 24 Stunden bei dir.</p>
                            <button
                                onClick={() => setStatus('idle')}
                                className="mt-6 text-indigo-400 font-bold hover:text-indigo-300 transition-colors"
                            >
                                Weitere Nachricht senden
                            </button>
                        </div>
                    ) : (
                        <>
                            <h3 className="text-xl font-semibold mb-6 text-white">Schreib uns eine Nachricht</h3>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold uppercase tracking-wider text-white/30 ml-1">Name *</label>
                                        <div className="relative group/input">
                                            <User className={iconClass} size={16} />
                                            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Dein Name" className={inputClass} />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold uppercase tracking-wider text-white/30 ml-1">Geschäft</label>
                                        <div className="relative group/input">
                                            <Building2 className={iconClass} size={16} />
                                            <input type="text" name="business" value={formData.business} onChange={handleChange} placeholder="Dein Geschäft" className={inputClass} />
                                        </div>
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold uppercase tracking-wider text-white/30 ml-1">E-Mail *</label>
                                        <div className="relative group/input">
                                            <Mail className={iconClass} size={16} />
                                            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="deine@mail.de" className={inputClass} />
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[10px] font-bold uppercase tracking-wider text-white/30 ml-1">Telefon</label>
                                        <div className="relative group/input">
                                            <Phone className={iconClass} size={16} />
                                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+49 176 ..." className={inputClass} />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label className="text-[10px] font-bold uppercase tracking-wider text-white/30 ml-1">Nachricht *</label>
                                    <div className="relative group/input">
                                        <MessageSquare className="absolute left-4 top-4 text-white/20 group-focus-within/input:text-indigo-400 transition-colors" size={16} />
                                        <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} placeholder="Wie können wir dir helfen?" className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all font-medium placeholder:text-white/20 text-white resize-none" />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'sending'}
                                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed text-white font-bold text-lg rounded-xl transition-all flex items-center justify-center gap-2 mt-2"
                                >
                                    {status === 'sending' ? (
                                        <Loader2 size={20} className="animate-spin" />
                                    ) : (
                                        <>
                                            Nachricht senden
                                            <ArrowRight size={18} />
                                        </>
                                    )}
                                </button>

                                {status === 'error' && (
                                    <p className="text-center text-sm text-red-400 font-semibold">
                                        Etwas ist schiefgelaufen. Bitte versuche es erneut.
                                    </p>
                                )}
                            </form>
                        </>
                    )}
                </div>
            </div>
        </LegalLayout>
    );
};

export default Contact;
