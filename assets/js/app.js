/**
 * app.js
 * Entry point. Loaded from index.html as `<script type="module">`, which
 * is deferred by default — this runs after the document is parsed, so
 * the static navbar and <main id="app"> are already present when the
 * code below executes; no DOMContentLoaded listener is needed.
 *
 * Init order matters:
 *   1. Navigation/navbar-scroll only touch static markup (the navbar in
 *      index.html), so they can init immediately.
 *   2. Page fragments load next, in parallel, into <main id="app">.
 *   3. Back-to-top (#toTop lives in pages/footer.html) and the scroll-
 *      reveal observer (`.reveal` elements live in every fragment) can
 *      only be wired up once step 2 has finished.
 */

import {loadAllComponents} from './components.js';
import {initNavigation} from './navigation.js';
import {initNavbarScroll, initBackToTop} from './scroll.js';
import {initScrollReveal} from './animations.js';

async function init() {
    initNavigation();
    initNavbarScroll();

    const app = document.getElementById('app');
    await loadAllComponents(app);

    initBackToTop();
    initScrollReveal();
}

init();
