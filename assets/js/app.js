/**
 * app.js
 * Entry point. Loaded from index.html as `<script type="module">`, which
 * is deferred by default — this runs after the document is parsed, so
 * the static navbar, scroll-progress bar, floating back-to-top button,
 * and <main id="app"> are already present when the code below executes;
 * no DOMContentLoaded listener is needed.
 *
 * Init order matters:
 *   1. Navigation, navbar-scroll, scroll-progress, and the floating
 *      back-to-top button only touch static markup (index.html), so
 *      they can init immediately.
 *   2. Page fragments load next, in parallel, into <main id="app">.
 *   3. Once fragments are in the DOM: fade #app in, wire up the
 *      footer's back-to-top link (#toTop lives in pages/footer.html),
 *      and start the scroll-reveal observer (`.reveal` elements live
 *      in every fragment).
 */

import {loadAllComponents} from './components.js';
import {initNavigation} from './navigation.js';
import {initNavbarScroll, initScrollProgress, initBackToTop} from './scroll.js';
import {initScrollReveal} from './animations.js';

async function init() {
    initNavigation();
    initNavbarScroll();
    initScrollProgress();
    initBackToTop('backToTopFloat');

    const app = document.getElementById('app');
    await loadAllComponents(app);
    app.classList.add('is-loaded');

    initBackToTop('toTop');
    initScrollReveal();
}

init();
