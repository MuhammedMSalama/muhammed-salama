/**
 * navigation.js
 * Mobile navigation panel: open, close, and auto-close on link tap.
 * The navbar itself is static markup in index.html (not a loaded
 * fragment), so this can run as soon as the DOM is parsed — it does
 * not need to wait for assets/js/components.js to finish loading.
 */

/**
 * Wires up the mobile menu button and its links.
 * @returns {void}
 */
export function initNavigation() {
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!menuBtn || !mobileMenu) return;

    const toggleMobileMenu = () => mobileMenu.classList.toggle('hidden');
    const closeMobileMenu = () => mobileMenu.classList.add('hidden');

    menuBtn.addEventListener('click', toggleMobileMenu);
    mobileMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', closeMobileMenu);
    });
}
