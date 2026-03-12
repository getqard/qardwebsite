export function smoothScrollTo(e, href) {
    e.preventDefault();
    const hash = href.replace('/#', '').replace('#', '');
    const el = document.getElementById(hash);
    if (!el) return;

    // contentVisibility:auto on page sections uses estimated heights for
    // off-screen content → scrollIntoView calculates wrong scroll offset.
    // Fix: force all sections visible → accurate layout → scroll → restore.
    const cvSections = document.querySelectorAll('[style*="content-visibility"]');
    cvSections.forEach(s => { s.style.contentVisibility = 'visible'; });

    requestAnimationFrame(() => {
        el.scrollIntoView({ behavior: 'smooth' });

        // Restore after smooth scroll finishes (~800ms).
        // containIntrinsicSize: 'auto ...' caches the real rendered sizes,
        // so re-enabling auto won't cause layout shifts.
        setTimeout(() => {
            cvSections.forEach(s => { s.style.contentVisibility = 'auto'; });
        }, 1000);
    });
}
