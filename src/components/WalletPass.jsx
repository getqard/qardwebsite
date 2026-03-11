import React from 'react';

export default function WalletPass({ data, className = "" }) {
    const {
        backgroundColor = '#000000',
        textColor = '#ffffff',
        accentColor = '#f97316', // Orange-ish default for labels
        logo,
        logoBg = 'transparent',
        headerText,
        subHeaderText = "KUNDE",
        subHeaderValue = "P1IH6N",
        heroImage,
        primaryFieldLabel = "DEINE STEMPEL",
        primaryFieldValue = "1 von 10",
        secondaryField1Label = "PRÄMIE",
        secondaryField1Value = "GRATIS HOTDOG & SOFTDRINK",
        secondaryField2Label,
        secondaryField2Value,
        secondaryField3Label = "DEIN FORTSCHRITT",
        secondaryField3Value, // Emojis here
        qrCodeBg = "#ffffff",
    } = data;

    return (
        <article
            className={`relative w-full aspect-[9/18] rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col ${className}`}
            style={{ backgroundColor, color: textColor }}
        >
            {/* Soft inner Reflection for realism */}
            <div className="absolute inset-0 border border-white/10 rounded-[2rem] pointer-events-none z-50"></div>

            {/* HEADER */}
            <header className="px-4 py-3 pb-2 flex justify-between items-start z-10 shrink-0">
                <div className="flex items-center gap-2">
                    {logo && (
                        <div
                            className="w-10 h-10 rounded-full flex items-center justify-center overflow-hidden shrink-0 border border-white/10"
                            style={{ backgroundColor: logoBg }}
                        >
                            {typeof logo === 'string' && logo.startsWith('http') ? (
                                <img src={logo} alt="Logo" className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-xl">{logo}</span>
                            )}
                        </div>
                    )}
                    <h3 className="font-semibold text-[14px] leading-tight tracking-tight">{headerText}</h3>
                </div>
                {subHeaderValue && (
                    <div className="text-right">
                        <div className="text-[9px] font-bold tracking-widest uppercase text-white/60 mb-[2px]">{subHeaderText}</div>
                        <div className="font-medium text-[13px]">{subHeaderValue}</div>
                    </div>
                )}
            </header>

            {/* STRIP IMAGE & PRIMARY FIELD */}
            <section className="relative w-full h-[140px] shrink-0 border-y border-white/5">
                {heroImage ? (
                    <img src={heroImage} alt="Cover" className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
                        <span className="text-white/20 text-xs">NO COVER IMAGE</span>
                    </div>
                )}

                {/* Overlay gradient for text readability if image is dark */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none"></div>

                {/* Primary Field (Huge Text) */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                    <div className="text-6xl font-light tracking-tighter drop-shadow-md mb-0">
                        {primaryFieldValue}
                    </div>
                    <div className="text-[10px] font-bold tracking-widest uppercase text-white drop-shadow-md">
                        {primaryFieldLabel}
                    </div>
                </div>
            </section>

            {/* SECONDARY FIELDS ROW */}
            <section className="px-4 py-3 flex justify-between items-start shrink-0 relative z-10">
                {/* Field 1 (Usually REWARD) */}
                {secondaryField1Value && (
                    <div className="flex-1">
                        <div className="text-[8px] font-bold tracking-widest uppercase mb-1" style={{ color: accentColor }}>{secondaryField1Label}</div>
                        <div className="text-[11px] font-medium leading-tight max-w-[120px]">{secondaryField1Value}</div>
                    </div>
                )}

                {/* Field 2 (Optional, e.g., POWERED BY) */}
                {secondaryField2Value && (
                    <div className="flex-1 text-center">
                        <div className="text-[8px] font-bold tracking-widest uppercase mb-1" style={{ color: accentColor }}>{secondaryField2Label}</div>
                        <div className="text-[11px] font-medium leading-tight">{secondaryField2Value}</div>
                    </div>
                )}

                {/* Field 3 (Usually PROGRESS EMOJIS) */}
                {secondaryField3Value && (
                    <div className="flex-1 text-right">
                        <div className="text-[8px] font-bold tracking-widest uppercase mb-1" style={{ color: accentColor }}>{secondaryField3Label}</div>
                        <div className="text-xs">{secondaryField3Value}</div>
                    </div>
                )}
            </section>

            {/* FLOATING QR CODE AREA */}
            <section className="flex-1 flex flex-col items-center justify-center relative z-10 pb-6">
                <div
                    className="w-32 h-32 rounded-xl flex items-center justify-center p-2 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                    style={{ backgroundColor: qrCodeBg }}
                >
                    {/* Mock QR Code Pattern */}
                    <div className="w-full h-full relative">
                        {/* Corners */}
                        <div className="absolute top-0 left-0 w-6 h-6 border-4 border-black"></div>
                        <div className="absolute top-0 right-0 w-6 h-6 border-4 border-black"></div>
                        <div className="absolute bottom-0 left-0 w-6 h-6 border-4 border-black"></div>
                        {/* Inner dots */}
                        <div className="absolute top-2 left-2 w-2 h-2 bg-black"></div>
                        <div className="absolute top-2 right-2 w-2 h-2 bg-black"></div>
                        <div className="absolute bottom-2 left-2 w-2 h-2 bg-black"></div>
                        {/* Random center noise */}
                        <div className="absolute inset-7 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)]" style={{ backgroundSize: '6px 6px', backgroundPosition: '0 0, 3px 3px' }}></div>
                    </div>
                </div>

                {/* Page dots (Mocking multiple passes) */}
                <div className="flex gap-1.5 mt-6">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                    <div className="w-1.5 h-1.5 rounded-full bg-white/30"></div>
                </div>
            </section>
        </article>
    );
}
