/**
 * animations.js
 * Viewport-entry reveal animation: fades and slides each `.reveal`
 * element into view the first time it enters the viewport, then stops
 * observing it (one-shot). Shared by every page fragment via the same
 * class — see the `.reveal` / `.reveal.in-view` rules in
 * assets/css/animations.css.
 *
 * Must run after all page fragments have been injected into <main>,
 * since `.reveal` elements are scattered across every one of them.
 */

/**
 * Observes every current `.reveal` element in the document and reveals
 * it on first viewport entry.
 * @returns {void}
 */
export function initScrollReveal() {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        },
        {threshold: 0.12, rootMargin: '0px 0px -60px 0px'}
    );

    revealEls.forEach((el) => observer.observe(el));
}
