/**
 * scroll.js
 * Scroll-position-driven UI: the navbar's background/blur state, and
 * the footer's "back to top" button.
 *
 * initNavbarScroll() can run immediately — the navbar is static markup
 * in index.html. initBackToTop() targets #toTop, which lives inside
 * pages/footer.html, so it must be called only after that fragment has
 * been injected (app.js handles the ordering).
 */

/**
 * Gives the sticky navbar a blurred/solid background once the page has
 * scrolled past the transparent hero area, and removes it again near
 * the top.
 * @returns {void}
 */
export function initNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const handleScroll = () => {
        if (window.scrollY > 24) {
            navbar.classList.add('bg-base/80', 'backdrop-blur-lg', 'border-line/70');
        } else {
            navbar.classList.remove('bg-base/80', 'backdrop-blur-lg', 'border-line/70');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // apply the correct state immediately (e.g. on reload mid-scroll)
}

/**
 * Wires up the footer's "back to top" button to smooth-scroll the page.
 * @returns {void}
 */
export function initBackToTop() {
    const toTopBtn = document.getElementById('toTop');
    if (!toTopBtn) return;

    toTopBtn.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
}
