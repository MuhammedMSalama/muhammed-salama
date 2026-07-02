/**
 * loader.js
 * Generic HTML fragment loading. Knows nothing about which components
 * exist or where they go — components.js owns that. This module's only
 * job is: fetch a fragment's markup, and optionally inject it.
 *
 * Requires the site to be served over HTTP (e.g. `npx serve` or
 * `python3 -m http.server`), not opened directly as a file:// URL —
 * `fetch()` of local files is blocked by the browser under file://.
 */

/**
 * Fetches an HTML fragment and returns its raw markup as a string.
 * Pure — has no side effects on the DOM, so callers that need to
 * control insertion order (see components.js) can await several of
 * these in parallel and inject them once all have resolved.
 * @param {string} path - relative path to the .html fragment
 * @returns {Promise<string>}
 */
export async function fetchComponent(path) {
    const response = await fetch(path);

    if (!response.ok) {
        throw new Error(`fetchComponent: failed to fetch "${path}" (${response.status})`);
    }

    return response.text();
}

/**
 * Fetches an HTML fragment and injects it into the given target element.
 * @param {string} path - relative path to the .html fragment (e.g. "pages/hero.html")
 * @param {Element} target - the element to inject the fragment's markup into
 * @param {"append"|"replace"} [mode="append"] - append after existing content, or replace it
 * @returns {Promise<void>}
 */
export async function loadComponent(path, target, mode = 'append') {
    if (!target) {
        throw new Error(`loadComponent: no target element provided for "${path}"`);
    }

    const html = await fetchComponent(path);

    if (mode === 'replace') {
        target.innerHTML = html;
    } else {
        target.insertAdjacentHTML('beforeend', html);
    }
}
