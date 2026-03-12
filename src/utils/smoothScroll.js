export function smoothScrollTo(e, href) {
    e.preventDefault();
    const hash = href.replace('/#', '').replace('#', '');
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}
