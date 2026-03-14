import React, { useState, useRef, useEffect, useCallback } from 'react';
import SlideContent, { TOTAL_SLIDES } from '../components/SlideContent';

const SLIDE_STEPS = {
    0: 0, 
    1: 5, 
    2: 4, 
    3: 0, 
    4: 0, 
    5: 0, 
    6: 1, 
    7: 1, 
    8: 0, 
    9: 2, 
    10: 2, 
    11: 1,
    12: 0,
    13: 0,
    14: 4,
    15: 4,
};

// Map names for the preview titles
const SLIDE_NAMES = [
    "Intro: Local Hero", 
    "Das Problem & Der Moment", 
    "Der Kontakt (Stempelkarte)",
    "Geofencing", 
    "Geburtstag", 
    "Google-Reviews", 
    "Wallet Context",
    "Die Brücke", 
    "System nicht Tool", 
    "Das Ökosystem",
    "Die Zielgruppe & Markt", 
    "Der Ask",
    "Transition (Leer)",
    "QARD Premium",
    "Wachstumsziele",
    "Vertriebsstrategie"
];

const SPEAKER_NOTES = {
    0: { 0: "- - Einstieg: Warteschlange vor dem Laden.T==ausende==[KLICK] Leute da... \n---\n\n---\n> und am nächsten Tag ist der Laden wieder leer. **Warum? Weil ihr sie nicht halten könnt.**" },
    1: {
        0: "Ich hab euch gerade erzählt was das Problem ist. \nJetzt zeig ich euch mal wie das aussieht",
        1: "Hunderte Kunden gehen in lokale Geschäfte. [KLICK]",
        2: "wie viele kommen davon wieder? [KLICK]",
        3: "Man weiß es nicht!\n\nKein Gastronom, Kein Café, Kein Friseur. \nHunderte kommen rein, hunderte gehen raus. \n\nEs gibt keinen effektiven Weg auch nur einen davon wieder zu erreichen \n",
        4: "Und alles was es bisher gibt? \n\n- Papierstempelkarten – kennt jeder. Vergisst jeder. Verliert jeder.\n- Treue-Apps – klingt super in der Theorie. Lädt keiner runter. \n- Und dann noch Newsletter, Flyer, Rabattzettel etc.  - all das landet im Spam oder Müll\n[PAUSE]\nUnd am Ende bleibt dem Betrieber genau eine Strategie\n",
        5: "Hoffen, dass sie wiederkommen.\n\nAber Hoffnung ist keine Strategie\n\nUnd genau da setzt QARD an"
    },
    2: {
        0: "Und so funktioniert das:\n- Nicht über Instagram wo Algorithmus entscheidet\n- Nicht über ne App die niemand runterlädt\n\nSondern : DIREKT auf dem Handy [KLICK]. Direkt auf dem Sperrbildschirm.",
        1: "Direkt auf dem Sperrbildschirm. [KLICK]",
        2: "[KLICK]",
        3: "Ab dem ersten Besuch: Der Kunde ist im System. \n\nMan kann ihm schrieben\n\nJederzeit. Und direkt.",
        4: "Kommt er zwei Wochen nicht mehr? \n\nDas System merkt das – und holt ihn zurück.  Automatisch!"
    },
    3: { 0: "Was passiert wenn er am Laden vorbeiläuft? \n\nSein Handy erinnert ihn an das Geschäft" },
    4: { 0: "Er hat Geburtstag? \n\nDann bekommt er ein Geschenk.\n\nAutomatisch und  ohne dass jemand einen Finger rührt." },
    5: { 0: "Und stellt euch vor – er war zufrieden und bewertet das Geschäft auf Google. \n\nVon allein. Ohne dass ihn jemand aktiv fragt." },
    6: { 0: "Und das liebes StartUpStage. \n\nDas ist KEIN KONZEPT.  Das Existiert. Jetzt schon!", 1: "Kurz zum Verständnis wie das funktioniert.\n\nAuf jedem iPhone ist eine App vorinstalliert die ihr alle kennt – Apple Wallet.\n\nDa habt ihr eure Kreditkarten drin, Boardingpässe, Konzerttickets.\n\nAuf Android gibt es das Gleiche mit Google Wallet. Das ist auf drei Milliarden Handys weltweit einfach schon drauf.\n\nIch hab diese Infrastruktur genommen – die schon auf jedem Handy existiert – und darum ein komplettes Kundenbindungssystem gebaut" },
    7: { 0: "Digitale Stempelkarten, Punktesysteme, VIP-Mitgliedschaften – \n\ndas ist das was der Kunde sieht.\n\n Das ist der Grund warum er sein Handy hinhält. ", 1: "Aber der eigentliche Wert beginnt danach.\n\n Ab dem Moment wo er drin ist, hat man den Kontakt. \n\nAb da kann man schreiben, ihn zurückholen, ihn belohnen. \n\nDie Stempelkarte ist der Einstieg.  Und das System dahinter ist QARD" },
    8: { 0: "Und mit System mich t meine ich nicht ein Tool wo man sich eine digitale Stempelkarte zusammenklickt. \n\nSowas gibt es.\n\n Ich meine ein System das die komplette Arbeit für einen  übernimmt. \nDas automatisch erkennt welcher Kunde seit zwei Wochen nicht mehr da war – und ihn zurückholt.\n Das weiß wann er Geburtstag hat und was schenkt. \n\n[PAUSE] Und wenn der Geschäftsführer nicht mal weiß was er seinen Kunden schreiben soll, schlägt ihm eine KI die perfekte Nachricht vor. Er tippt einmal – fertig. " },
    9: { 0: "Dafür hab ich alles gebaut was man braucht. \n\n- Eine App für den Chef – damit er alles  sieht und steuern kann.\n\n- Eine App für das Team an der Kasse oder Bedienung. \n\n- Und ein Backend das im Hintergrund rund um die Uhr automatisch arbeitet\n\nUnd das alles landet am Ende hier. Direkt auf dem Sperrbildschirm eures Kunden. Ohne App-Download. Ohne irgendwas", 1: "[KLICK]", 2: "[KLICK]" },
    10: { 0: "Für wen ist das Ganze?", 1: "Gastro, Beauty, Barber, Retail, Dienstleister \n– jeder der einen Laden hat und Kunden durch die Tür kommen. \n\nund jeder der Stammkundenwill", 2: "Allein in Deutschland sind das... ==1 Million Geschäfte.== Und keines von denen hat aktuell so ein System." },
    11: { 0: "wie gesagt aif fianziellem Invest bin ich nicht aus. Das steht schon. ", 1: "Woran mir liegt ist der richtige Partner. \n\nJemand der Türen öffnet die ich alleine nicht aufkriege.\n\n Netzwerk, Vertriebserfahrung, Zugang zur Gastro-Welt. \n\nOb das eine Beteiligung wird, ein Revenue-Share oder eine strategische Kooperation – das find ich lieber gemeinsam raus " },
    12: { 0: "[PAUSE]\n> Transition – kurz wirken lassen" },
    13: { 0: "Das ist das Produkt. **99€ im Monat.** All-in-One. Einrichtung kostet 199€. ==Transparent und fair.==" },
    14: { 0: "Wie geht's weiter?", 1: "==Launch diese Woche.== Produkt ist ready.", 2: "Sommer 2026: **100 Kunden. 10k MRR.**", 3: "Ende 2026: **500 Kunden. 50k MRR.**", 4: "2027: Skalierung DACH. ==Über 1000 Kunden und 100k MRR.==" },
    15: { 0: "Vertriebsstrategie: **4 klar definierte Säulen**, die sofort bereit sind.", 1: "- **Vor-Ort D2D** durch unsere erfahrenen Vertriebler. Wir haben das schon gemacht.", 2: "- **Performance Ads** durch unser Inhouse-Team. Konsequente Skalierung.", 3: "- ==Die Geheimwaffe.== Unser automatisierter Prozess, über den wir gerne unter NDA sprechen.", 4: "- **Strategische Partnerschaften** wie Kassensysteme und Agenturen." }
};

// --- LivePreview (compact, no card styling) ---

const LivePreview = ({ slide, step }) => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        if (!containerRef.current || !contentRef.current) return;
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                const scale = entry.contentRect.width / 1920;
                if (contentRef.current) {
                    contentRef.current.style.transform = `scale(${scale})`;
                }
            }
        });
        resizeObserver.observe(containerRef.current);
        return () => resizeObserver.disconnect();
    }, []);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full bg-[#03040b] rounded-lg overflow-hidden border border-white/5 pointer-events-none select-none"
        >
            <div
                ref={contentRef}
                className="absolute w-[1920px] h-[1080px] origin-top-left"
                style={{ top: 0, left: 0 }}
            >
                <div className="w-[1920px] h-[1080px] overflow-hidden bg-qard-dark relative">
                    <SlideContent currentSlide={slide} slideStep={step} isPreview={true} />
                </div>
            </div>
        </div>
    );
};

// --- Toolbar Button ---

const Btn = ({ children, onClick, active, className = '' }) => (
    <button
        onClick={onClick}
        className={`px-2 py-1 rounded text-xs font-medium transition-colors ${active ? 'bg-white/10 text-white' : 'text-gray-500 hover:text-gray-300 hover:bg-white/5'} ${className}`}
    >
        {children}
    </button>
);

// --- Slide Sidebar Navigation ---

const SlideNav = ({ isOpen, currentSlide, onNavigate, onClose }) => (
    <>
        {/* Backdrop */}
        <div
            className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-200 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            onClick={onClose}
        />
        {/* Sidebar */}
        <div
            className={`fixed inset-y-0 left-0 w-72 z-50 bg-[#111113] border-r border-white/10 overflow-y-auto transition-transform duration-200 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            <div className="p-3 flex items-center justify-between border-b border-white/10">
                <span className="text-sm font-bold text-white">Folien</span>
                <button onClick={onClose} className="text-gray-500 hover:text-white text-lg leading-none px-1">&times;</button>
            </div>
            <div className="p-2 flex flex-col gap-2">
                {SLIDE_NAMES.map((name, idx) => (
                    <button
                        key={idx}
                        onClick={() => onNavigate(idx)}
                        className={`text-left rounded-lg overflow-hidden transition-all ${
                            idx === currentSlide
                                ? 'ring-2 ring-[#1a56ff] ring-offset-1 ring-offset-[#111113]'
                                : 'hover:ring-1 hover:ring-white/20'
                        }`}
                    >
                        <div className="w-full aspect-video pointer-events-none select-none">
                            {isOpen && <LivePreview slide={idx} step={0} />}
                        </div>
                        <div className="px-2 py-1.5 bg-white/[0.03]">
                            <span className="text-[11px] font-bold text-gray-400">{idx + 1}</span>
                            <span className="text-[11px] text-gray-500 ml-1.5">{name}</span>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    </>
);

// --- Notes Rendering ---

const parseInline = (text) => {
    const regex = /(==(.+?)==|\*\*(.+?)\*\*|\[KLICK\]|\[PAUSE\])/g;
    const parts = [];
    let lastIndex = 0;
    let match;
    let k = 0;

    while ((match = regex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.slice(lastIndex, match.index));
        }
        if (match[2]) {
            parts.push(<mark key={k++} className="bg-yellow-400/25 text-yellow-200 px-0.5 rounded-sm">{match[2]}</mark>);
        } else if (match[3]) {
            parts.push(<strong key={k++} className="text-white font-bold">{match[3]}</strong>);
        } else if (match[0] === '[KLICK]') {
            parts.push(<span key={k++} className="inline-flex items-center px-1.5 py-0.5 bg-[#1a56ff]/20 text-[#4a7aff] text-[0.65em] font-bold rounded mx-1 uppercase tracking-wider align-middle">▶ KLICK</span>);
        } else if (match[0] === '[PAUSE]') {
            parts.push(<span key={k++} className="inline-flex items-center px-1.5 py-0.5 bg-amber-500/15 text-amber-400 text-[0.65em] font-bold rounded mx-1 uppercase tracking-wider align-middle">⏸ PAUSE</span>);
        }
        lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
        parts.push(text.slice(lastIndex));
    }
    return parts.length > 0 ? parts : [text];
};

const renderNotes = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, i) => {
        if (line.trim() === '---') return <hr key={i} className="border-white/10 my-4" />;
        if (line.trim() === '') return <div key={i} className="h-3" />;
        if (line.trimStart().startsWith('> ')) {
            return <p key={i} className="text-white/30 italic pl-3 border-l-2 border-white/10 my-1">{parseInline(line.trimStart().slice(2))}</p>;
        }
        if (line.trimStart().startsWith('- ')) {
            return <div key={i} className="flex gap-2.5 items-start my-0.5"><span className="text-[#1a56ff] shrink-0">•</span><span>{parseInline(line.trimStart().slice(2))}</span></div>;
        }
        return <p key={i} className="my-0.5">{parseInline(line)}</p>;
    });
};

// --- Main Presenter ---

const Presenter = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slideStep, setSlideStep] = useState(0);
    const [elapsedSeconds, setElapsedSeconds] = useState(0);
    const [isTimerRunning, setIsTimerRunning] = useState(false);
    const timerRef = useRef(null);

    // Notes state
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);

    const [noteText, setNoteText] = useState('');
    const [isSaved, setIsSaved] = useState(true);
    const prevNav = useRef({ slide: 0, step: 0, text: '', saved: true });
    const textareaRef = useRef(null);

    // Adjustable settings (persisted)
    const [fontSize, setFontSize] = useState(() => parseInt(localStorage.getItem('qp-fontsize')) || 26);
    const [noteWidth, setNoteWidth] = useState(() => parseInt(localStorage.getItem('qp-notewidth')) || 100);
    const [slidesHeight, setSlidesHeight] = useState(() => parseInt(localStorage.getItem('qp-slidesheight')) || 35);

    // --- Sync System ---
    useEffect(() => {
        const handleStorage = (e) => {
            if (e.key === 'qard-pitch-sync' && e.newValue) {
                try {
                    const data = JSON.parse(e.newValue);
                    setCurrentSlide(data.currentSlide);
                    setSlideStep(data.slideStep);
                } catch (err) {}
            }
        };
        const bc = new BroadcastChannel('pitch-sync');
        bc.onmessage = (event) => {
            if (event.data?.type === 'SYNC_STATE' && event.data._source !== 'presenter') {
                setCurrentSlide(event.data.currentSlide);
                setSlideStep(event.data.slideStep);
            }
        };
        window.addEventListener('storage', handleStorage);
        return () => {
            window.removeEventListener('storage', handleStorage);
            bc.close();
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    // --- Broadcast ---
    const broadcastState = useCallback((slide, step) => {
        if (!isTimerRunning) setIsTimerRunning(true);
        const syncData = { currentSlide: slide, slideStep: step, _t: Date.now(), _source: 'presenter' };
        localStorage.setItem('qard-pitch-sync', JSON.stringify(syncData));
        const bc = new BroadcastChannel('pitch-sync');
        bc.postMessage({ type: 'SYNC_STATE', ...syncData });
        bc.close();
    }, [isTimerRunning]);

    // --- Timer ---
    useEffect(() => {
        if (isTimerRunning) {
            timerRef.current = setInterval(() => setElapsedSeconds(prev => prev + 1), 1000);
        }
        return () => { if (timerRef.current) clearInterval(timerRef.current); };
    }, [isTimerRunning]);

    const formatTime = (s) => {
        const m = Math.floor(s / 60).toString().padStart(2, '0');
        return `${m}:${(s % 60).toString().padStart(2, '0')}`;
    };

    // --- Notes loading & auto-save on navigation ---
    useEffect(() => {
        const prev = prevNav.current;
        // Auto-save previous note if unsaved
        if ((prev.slide !== currentSlide || prev.step !== slideStep) && !prev.saved) {
            localStorage.setItem(`qard-notes-${prev.slide}-${prev.step}`, prev.text);
        }
        // Load note for new slide/step
        const key = `qard-notes-${currentSlide}-${slideStep}`;
        const saved = localStorage.getItem(key);
        const newText = saved ?? SPEAKER_NOTES[currentSlide]?.[slideStep] ?? '';
        setNoteText(newText);
        setIsSaved(true);
        prevNav.current = { slide: currentSlide, step: slideStep, text: newText, saved: true };
    }, [currentSlide, slideStep]);

    const handleNoteChange = (e) => {
        const text = e.target.value;
        setNoteText(text);
        setIsSaved(false);
        prevNav.current.text = text;
        prevNav.current.saved = false;
    };

    const saveNote = useCallback(() => {
        localStorage.setItem(`qard-notes-${currentSlide}-${slideStep}`, noteText);
        setIsSaved(true);
        prevNav.current.saved = true;
    }, [currentSlide, slideStep, noteText]);

    const insertFormat = useCallback((prefix, suffix, replace) => {
        const ta = textareaRef.current;
        if (!ta) return;
        const start = ta.selectionStart;
        const end = ta.selectionEnd;
        const text = noteText;
        let newText, cursorPos;

        if (replace) {
            // replace hat Priorität: ersetzt Selection oder fügt an Cursor ein
            newText = text.slice(0, start) + replace + text.slice(end);
            cursorPos = start + replace.length;
        } else if (start !== end) {
            // Text selected → wrap
            const selected = text.slice(start, end);
            newText = text.slice(0, start) + prefix + selected + suffix + text.slice(end);
            cursorPos = start + prefix.length + selected.length + suffix.length;
        } else {
            // Nothing selected, insert prefix+suffix, cursor between
            newText = text.slice(0, start) + prefix + suffix + text.slice(end);
            cursorPos = start + prefix.length;
        }

        setNoteText(newText);
        setIsSaved(false);
        prevNav.current.text = newText;
        prevNav.current.saved = false;

        requestAnimationFrame(() => {
            ta.focus();
            ta.setSelectionRange(cursorPos, cursorPos);
        });
    }, [noteText]);

    const insertLinePrefix = useCallback((linePrefix) => {
        const ta = textareaRef.current;
        if (!ta) return;
        const start = ta.selectionStart;
        const text = noteText;
        // Find the beginning of the current line
        const lineStart = text.lastIndexOf('\n', start - 1) + 1;
        const newText = text.slice(0, lineStart) + linePrefix + text.slice(lineStart);
        const cursorPos = start + linePrefix.length;

        setNoteText(newText);
        setIsSaved(false);
        prevNav.current.text = newText;
        prevNav.current.saved = false;

        requestAnimationFrame(() => {
            ta.focus();
            ta.setSelectionRange(cursorPos, cursorPos);
        });
    }, [noteText]);

    const resetNote = () => {
        const defaultNote = SPEAKER_NOTES[currentSlide]?.[slideStep] ?? '';
        setNoteText(defaultNote);
        localStorage.removeItem(`qard-notes-${currentSlide}-${slideStep}`);
        setIsSaved(true);
        prevNav.current.text = defaultNote;
        prevNav.current.saved = true;
    };

    const [copyFeedback, setCopyFeedback] = useState(false);
    const copyAllNotes = async () => {
        const allNotes = {};
        for (let slide = 0; slide < TOTAL_SLIDES; slide++) {
            const maxSteps = SLIDE_STEPS[slide] || 0;
            allNotes[slide] = {};
            for (let step = 0; step <= maxSteps; step++) {
                const saved = localStorage.getItem(`qard-notes-${slide}-${step}`);
                allNotes[slide][step] = saved ?? SPEAKER_NOTES[slide]?.[step] ?? '';
            }
        }
        await navigator.clipboard.writeText(JSON.stringify(allNotes, null, 4));
        setCopyFeedback(true);
        setTimeout(() => setCopyFeedback(false), 1500);
    };

    // --- Persist settings ---
    useEffect(() => { localStorage.setItem('qp-fontsize', fontSize); }, [fontSize]);
    useEffect(() => { localStorage.setItem('qp-notewidth', noteWidth); }, [noteWidth]);
    useEffect(() => { localStorage.setItem('qp-slidesheight', slidesHeight); }, [slidesHeight]);

    // --- Navigation ---
    const nextStep = useCallback(() => {
        const maxStepsForCurrent = SLIDE_STEPS[currentSlide] || 0;
        if (slideStep < maxStepsForCurrent) {
            const newStep = slideStep + 1;
            setSlideStep(newStep);
            broadcastState(currentSlide, newStep);
        } else if (currentSlide < TOTAL_SLIDES - 1) {
            const newSlide = currentSlide + 1;
            setCurrentSlide(newSlide);
            setSlideStep(0);
            broadcastState(newSlide, 0);
        }
    }, [currentSlide, slideStep, broadcastState]);

    const prevStep = useCallback(() => {
        if (slideStep > 0) {
            const newStep = slideStep - 1;
            setSlideStep(newStep);
            broadcastState(currentSlide, newStep);
        } else if (currentSlide > 0) {
            const newSlide = currentSlide - 1;
            const newStep = SLIDE_STEPS[newSlide] || 0;
            setCurrentSlide(newSlide);
            setSlideStep(newStep);
            broadcastState(newSlide, newStep);
        }
    }, [currentSlide, slideStep, broadcastState]);

    // --- Key Listener (skip when typing in textarea) ---
    useEffect(() => {
        const handleKeyDown = (e) => {
            // Cmd/Ctrl+S to save notes
            if ((e.metaKey || e.ctrlKey) && e.key === 's') {
                e.preventDefault();
                saveNote();
                return;
            }
            // ESC closes sidebar
            if (e.key === 'Escape' && sidebarOpen) {
                setSidebarOpen(false);
                return;
            }
            // Don't navigate when typing
            if (e.target.tagName === 'TEXTAREA') return;

            if (e.key === 'ArrowRight' || e.key === ' ') {
                nextStep();
            } else if (e.key === 'ArrowLeft') {
                prevStep();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [nextStep, prevStep, saveNote, sidebarOpen]);

    // --- Derived values ---
    const maxStepsCurrent = SLIDE_STEPS[currentSlide] || 0;
    const isLastStepOfSlide = slideStep >= maxStepsCurrent;
    const isAbsoluteLast = isLastStepOfSlide && currentSlide === TOTAL_SLIDES - 1;

    let nextSlideIndex = currentSlide;
    let nextStepIndex = slideStep + 1;
    if (isLastStepOfSlide && !isAbsoluteLast) {
        nextSlideIndex = currentSlide + 1;
        nextStepIndex = 0;
    }

    return (
        <div className="h-screen flex flex-col p-3 gap-2 bg-[#0A0A0B] text-white overflow-hidden">

            {/* ---- Slide Sidebar ---- */}
            <SlideNav
                isOpen={sidebarOpen}
                currentSlide={currentSlide}
                onNavigate={(idx) => {
                    setCurrentSlide(idx);
                    setSlideStep(0);
                    broadcastState(idx, 0);
                    setSidebarOpen(false);
                }}
                onClose={() => setSidebarOpen(false)}
            />

            {/* ---- Minimal Top Bar ---- */}
            <div className="shrink-0 flex justify-between items-center px-1 py-1">
                <div className="flex items-center gap-3">
                    {/* Sidebar toggle */}
                    <Btn onClick={() => setSidebarOpen(prev => !prev)}>&#9780;</Btn>

                    {/* Nav buttons */}
                    <div className="flex items-center gap-1">
                        <Btn onClick={prevStep}>&#9664;</Btn>
                        <Btn onClick={nextStep}>&#9654;</Btn>
                    </div>

                    <div className="w-7 h-7 bg-gradient-to-br from-[#1a56ff] to-[#ff00d4] rounded-md flex items-center justify-center font-bold text-xs">
                        {currentSlide + 1}
                    </div>
                    <span className="text-sm font-bold text-white truncate max-w-[200px]">{SLIDE_NAMES[currentSlide]}</span>
                    <span className="text-[11px] text-gray-500 tabular-nums">Phase {slideStep + 1}/{maxStepsCurrent + 1}</span>
                </div>

                <div className="flex items-center gap-4">
                    <span className={`text-xl font-mono tabular-nums ${isTimerRunning ? 'text-white' : 'text-gray-600'}`}>
                        {formatTime(elapsedSeconds)}
                    </span>
                    <Btn onClick={() => {
                        setCurrentSlide(0); setSlideStep(0); setElapsedSeconds(0); setIsTimerRunning(false);
                        broadcastState(0, 0);
                    }}>Reset</Btn>
                </div>
            </div>

            {/* ---- Content Area (slides + notes) ---- */}
            <div className="flex-1 min-h-0 flex flex-col gap-2">

                {/* Slides Row */}
                <div
                    className="shrink-0 grid grid-cols-2 gap-3"
                    style={{ height: `${slidesHeight}vh` }}
                >
                    {/* Current */}
                    <div className="relative min-h-0">
                        <span className="absolute top-1.5 left-2 z-10 px-2 py-0.5 bg-[#1a56ff]/20 text-[#1a56ff] rounded text-[10px] font-bold uppercase tracking-wider">
                            Live
                        </span>
                        <LivePreview slide={currentSlide} step={slideStep} />
                    </div>
                    {/* Next */}
                    <div className="relative min-h-0 opacity-50">
                        <span className="absolute top-1.5 left-2 z-10 px-2 py-0.5 bg-white/10 text-gray-400 rounded text-[10px] font-bold uppercase tracking-wider">
                            Next
                        </span>
                        {isAbsoluteLast ? (
                            <div className="w-full h-full flex items-center justify-center bg-white/[0.02] rounded-lg border border-white/5">
                                <span className="text-sm text-gray-600">Ende</span>
                            </div>
                        ) : (
                            <LivePreview slide={nextSlideIndex} step={nextStepIndex} />
                        )}
                    </div>
                </div>

                {/* ---- Notes Area ---- */}
                <div className="flex-1 min-h-0 flex flex-col">
                    {/* Notes Toolbar */}
                    <div className="shrink-0 flex items-center gap-1.5 py-1.5 flex-wrap">
                        {/* Save */}
                        <button
                            onClick={saveNote}
                            className={`px-2.5 py-1 rounded text-xs font-bold transition-all ${
                                isSaved
                                    ? 'bg-emerald-500/15 text-emerald-400'
                                    : 'bg-amber-500/20 text-amber-400'
                            }`}
                        >
                            {isSaved ? 'Gespeichert' : 'Speichern'}
                        </button>

                        <div className="h-3 w-px bg-white/10 mx-1" />

                        {/* Font Size */}
                        <Btn onClick={() => setFontSize(s => Math.max(14, s - 2))}>A-</Btn>
                        <span className="text-[10px] text-gray-600 tabular-nums w-7 text-center">{fontSize}</span>
                        <Btn onClick={() => setFontSize(s => Math.min(48, s + 2))}>A+</Btn>

                        <div className="h-3 w-px bg-white/10 mx-1" />

                        {/* Width */}
                        <Btn onClick={() => setNoteWidth(w => Math.max(30, w - 10))}>Schmal</Btn>
                        <span className="text-[10px] text-gray-600 tabular-nums w-8 text-center">{noteWidth}%</span>
                        <Btn onClick={() => setNoteWidth(w => Math.min(100, w + 10))}>Breit</Btn>

                        <div className="h-3 w-px bg-white/10 mx-1" />

                        {/* Slides height */}
                        <Btn onClick={() => setSlidesHeight(h => Math.max(15, h - 5))}>Slides -</Btn>
                        <Btn onClick={() => setSlidesHeight(h => Math.min(55, h + 5))}>Slides +</Btn>

                        <div className="h-3 w-px bg-white/10 mx-1" />

                        {/* Reset note */}
                        <Btn onClick={resetNote}>Zurücksetzen</Btn>

                        {/* Copy all notes as JSON */}
                        <Btn onClick={copyAllNotes} className={copyFeedback ? '!text-emerald-400' : ''}>
                            {copyFeedback ? '✓ Kopiert' : 'Alle Notizen kopieren'}
                        </Btn>

                        <div className="h-3 w-px bg-white/10 mx-1" />

                        {/* Lesen / Bearbeiten Toggle */}
                        <div className="flex rounded-md overflow-hidden border border-white/10">
                            <Btn onClick={() => setIsEditMode(false)} active={!isEditMode} className="rounded-none border-0">Lesen</Btn>
                            <Btn onClick={() => setIsEditMode(true)} active={isEditMode} className="rounded-none border-0">Bearbeiten</Btn>
                        </div>

                        <span className="text-[10px] text-gray-600 ml-auto hidden md:inline">{isEditMode ? 'Cmd+S speichern' : 'Doppelklick → Bearbeiten'}</span>
                    </div>

                    {/* Notes Content */}
                    {isEditMode ? (
                        <div className="flex-1 min-h-0 flex flex-col rounded-lg bg-white/[0.02] border border-white/5">
                            {/* Formatting Buttons */}
                            <div className="shrink-0 border-b border-white/5 px-3 py-1.5 flex flex-wrap gap-1" onMouseDown={(e) => e.preventDefault()}>
                                <Btn onClick={() => insertFormat('==', '==')} className="!text-yellow-300/80">Markieren</Btn>
                                <Btn onClick={() => insertFormat('**', '**')} className="!text-white font-bold">Fett</Btn>
                                <Btn onClick={() => insertFormat('', '', '[KLICK]')} className="!text-[#4a7aff]">KLICK</Btn>
                                <Btn onClick={() => insertFormat('', '', '[PAUSE]')} className="!text-amber-400">PAUSE</Btn>
                                <Btn onClick={() => insertLinePrefix('- ')}>• Liste</Btn>
                                <Btn onClick={() => insertFormat('', '', '\n---\n')}>Trenner</Btn>
                                <Btn onClick={() => insertLinePrefix('> ')} className="!text-gray-500">Regie</Btn>
                            </div>
                            <div className="flex-1 min-h-0 overflow-auto flex justify-center p-4">
                                <textarea
                                    ref={textareaRef}
                                    value={noteText}
                                    onChange={handleNoteChange}
                                    spellCheck={false}
                                    className="w-full bg-transparent text-white/90 resize-none outline-none font-medium placeholder-gray-600 selection:bg-blue-500/30"
                                    style={{
                                        fontSize: `${fontSize}px`,
                                        lineHeight: 1.6,
                                        maxWidth: noteWidth < 100 ? `${noteWidth}%` : undefined,
                                    }}
                                    placeholder="Notizen hier eingeben..."
                                />
                            </div>
                        </div>
                    ) : (
                        <div
                            className="flex-1 min-h-0 overflow-auto flex justify-center rounded-lg bg-white/[0.02] border border-white/5 p-4 cursor-default"
                            onDoubleClick={() => setIsEditMode(true)}
                        >
                            <div
                                className="w-full text-white/90 font-medium"
                                style={{
                                    fontSize: `${fontSize}px`,
                                    lineHeight: 1.6,
                                    maxWidth: noteWidth < 100 ? `${noteWidth}%` : undefined,
                                }}
                            >
                                {noteText ? renderNotes(noteText) : (
                                    <span className="text-gray-600">Keine Notizen vorhanden. Doppelklick zum Bearbeiten.</span>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Presenter;
