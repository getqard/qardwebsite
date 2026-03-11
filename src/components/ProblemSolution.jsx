import React from 'react';

export default function ProblemSolution() {
    return (
        <section className="py-24 bg-white text-[#0A0A0F] relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-indigo-600 font-bold tracking-wider uppercase text-sm mb-4 block">Die Lösung</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                        Kundenbindung ist kaputt. <br /> QARD repariert sie.
                    </h2>
                    <p className="text-lg text-gray-600">
                        Ein System. Direkt im Wallet deiner Kunden. Ohne App, ohne Aufwand, ohne Technikwissen.
                    </p>
                </div>

                {/* Comparison / Solution Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* The Old Way (Problem) */}
                    <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                        <h3 className="text-2xl font-bold mb-6 text-gray-800">Die Realität heute:</h3>
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Papierkarten?</h4>
                                <p className="text-gray-600 text-sm">Werden vergessen, verloren oder liegen zu Hause. Kein Tracking, keine Daten.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Eigene App-Downloads?</h4>
                                <p className="text-gray-600 text-sm">90% deiner Kunden laden keine App runter. Zu viel Aufwand, zu wenig Speicherplatz.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900 mb-1">Null Kundendaten?</h4>
                                <p className="text-gray-600 text-sm">Du weißt nicht wer wiederkommt, wer abspringt oder welche Aktion wirklich funktioniert.</p>
                            </div>
                        </div>
                    </div>

                    {/* The New Way (Solution) */}
                    <div className="bg-indigo-50/50 rounded-3xl p-8 border border-indigo-100 relative overflow-hidden">
                        {/* decorative element */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

                        <h3 className="text-2xl font-bold mb-6 text-indigo-900 relative z-10">Die QARD Lösung:</h3>
                        <div className="grid sm:grid-cols-2 gap-4 relative z-10">
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-indigo-50 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-indigo-900 mb-2 leading-tight">Apple & Google Wallet</h4>
                                <p className="text-gray-600 text-xs leading-relaxed">Dein Kunde scannt einen QR-Code und hat dein Bonusprogramm auf dem Handy. In Sekunden.</p>
                            </div>
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-indigo-50 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-indigo-900 mb-2 leading-tight">Push-Nachrichten</h4>
                                <p className="text-gray-600 text-xs leading-relaxed">Schick deinen Kunden Angebote direkt auf den Sperrbildschirm. Gezielt für Return-Visits.</p>
                            </div>
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-indigo-50 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-indigo-900 mb-2 leading-tight">Standort-Trigger</h4>
                                <p className="text-gray-600 text-xs leading-relaxed">Wenn dein Kunde an deinem Laden vorbeiläuft, bekommt er automatisch eine Benachrichtigung.</p>
                            </div>
                            <div className="bg-white p-5 rounded-2xl shadow-sm border border-indigo-50 hover:shadow-md transition-shadow">
                                <h4 className="font-bold text-indigo-900 mb-2 leading-tight">Echtzeit-Dashboard</h4>
                                <p className="text-gray-600 text-xs leading-relaxed">Sieh live wie viele Pässe installiert wurden und wer wiederkommt. Echte Zahlen statt Bauchgefühl.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
