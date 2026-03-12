const NAVBAR_HEIGHT = 80; // h-20 = 5rem = 80px

export function smoothScrollTo(e, href) {
    e.preventDefault();
    const hash = href.replace('/#', '').replace('#', '');
    const el = document.getElementById(hash);
    if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
        window.scrollTo({ top, behavior: 'smooth' });
    }
}
