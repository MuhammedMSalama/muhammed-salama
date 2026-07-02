/**
 * components.js
 * The manifest of page fragments that make up the site, and the
 * orchestration logic that loads them all into <main id="app">.
 *
 * Fragments are fetched in parallel for speed, but always injected in
 * this fixed order — never in whichever order the network happens to
 * resolve them — so the page can't flicker into the wrong visual order.
 */

import {fetchComponent} from './loader.js';

/** Section order matches the live site exactly: do not reorder. */
export const COMPONENTS = [
    'pages/hero.html',
    'pages/about.html',
    'pages/experience.html',
    'pages/highlights.html',
    'pages/skills.html',
    'pages/projects.html',
    'pages/opensource.html',
    'pages/contact.html',
    'pages/footer.html',
];

/**
 * Loads every fragment in COMPONENTS and injects them into `target`,
 * in manifest order. Uses allSettled rather than all: if one fragment
 * fails to fetch, the rest of the page still renders instead of the
 * whole site going blank.
 * @param {Element} target - usually <main id="app">
 * @returns {Promise<void>}
 */
export async function loadAllComponents(target) {
    const results = await Promise.allSettled(COMPONENTS.map(fetchComponent));

    const html = results
        .map((result, index) => {
            if (result.status === 'fulfilled') return result.value;
            console.error(`components.js: failed to load "${COMPONENTS[index]}"`, result.reason);
            return '';
        })
        .join('\n');

    target.innerHTML = html;
}
