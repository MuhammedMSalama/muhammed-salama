/**
 * scroll.js
 * Scroll-position-driven UI: the navbar's background/blur state, the
 * fixed scroll-progress bar, and the "back to top" affordances (the
 * footer's text link and the floating button share one handler).
 *
 * initNavbarScroll() and initScrollProgress() can run immediately — the
 * navbar and the progress bar/floating button are static markup in
 * index.html. initBackToTop() targets a button by id; when that id
 * lives inside a loaded fragment (pages/footer.html's #toTop), the call
 * must happen after that fragment has been injected (app.js handles
 * the ordering).
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
 * Drives the fixed top progress bar and the floating back-to-top
 * button's visibility from a single rAF-throttled scroll handler, so
 * both update together without doing more than one style write per
 * animation frame — avoids layout thrashing under fast/trackpad scroll.
 * @returns {void}
 */
export function initScrollProgress() {
    const progressBar = document.getElementById('scrollProgress');
    const floatBtn = document.getElementById('backToTopFloat');
    if (!progressBar && !floatBtn) return;

    let ticking = false;

    const update = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;

        if (progressBar) {
            progressBar.style.transform = `scaleX(${progress})`;
        }
        if (floatBtn) {
            floatBtn.classList.toggle('is-visible', scrollTop > window.innerHeight * 0.6);
        }
        ticking = false;
    };

    window.addEventListener(
        'scroll',
        () => {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        },
        {passive: true}
    );
    update(); // apply the correct state immediately (e.g. on reload mid-scroll)
}

/**
 * Wires up a "back to top" button (by id) to smooth-scroll the page.
 * Reused for both the footer's text link (#toTop) and the floating
 * button (#backToTopFloat) — one handler, no duplicated logic.
 * @param {string} buttonId
 * @returns {void}
 */
export function initBackToTop(buttonId) {
    const button = document.getElementById(buttonId);
    if (!button) return;

    button.addEventListener('click', () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
}
