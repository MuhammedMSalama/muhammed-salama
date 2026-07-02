/* ==============================================================
   Daniel Reyes — Portfolio
   main.js

   All interactive behavior for the single-page portfolio. Wrapped in an
   IIFE to avoid leaking variables into the global scope. Sections mirror
   the structure requested for this refactor; sections with nothing to
   add are kept as short notes so the file's shape stays predictable.
============================================================== */

(function () {
  'use strict';

  /* ==========================
     DOM Elements
  ========================== */
  const navbar = document.getElementById('navbar');
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  const toTopBtn = document.getElementById('toTop');
  const revealEls = document.querySelectorAll('.reveal');

  /* ==========================
     Navigation
  ========================== */

  /**
   * Gives the sticky navbar a blurred/solid background once the page has
   * scrolled past the transparent hero area, and removes it again near
   * the top.
   */
  function handleNavbarScroll() {
    if (window.scrollY > 24) {
      navbar.classList.add('bg-base/80', 'backdrop-blur-lg', 'border-line/70');
    } else {
      navbar.classList.remove('bg-base/80', 'backdrop-blur-lg', 'border-line/70');
    }
  }

  /**
   * Opens/closes the mobile navigation panel.
   */
  function toggleMobileMenu() {
    mobileMenu.classList.toggle('hidden');
  }

  /**
   * Closes the mobile navigation panel, used after a nav link is tapped
   * so the menu doesn't stay open over the destination section.
   */
  function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
  }

  /* ==========================
     Scroll Animations
  ========================== */

  /**
   * Fades and slides each `.reveal` element into view the first time it
   * enters the viewport, then stops observing it (one-shot animation).
   * Applies to every section — Hero, About, Stack, Projects, Freelance,
   * GitHub, and Contact all share this behavior via the same class.
   */
  function initScrollReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));
  }

  /* ==========================
     Hero Interactions
  ========================== */
  /* The hero's floating badges and pulsing availability dot are pure CSS
     animations (`.animate-float`, `.animate-float-slow`,
     `.animate-pulse-dot` in assets/css/style.css) and require no
     JavaScript. This section is reserved for future hero interactivity. */

  /* ==========================
     Utilities
  ========================== */

  /**
   * Smooth-scrolls the page back to the top.
   */
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /* ==========================
     Event Listeners
  ========================== */
  function bindEventListeners() {
    window.addEventListener('scroll', handleNavbarScroll);
    menuBtn.addEventListener('click', toggleMobileMenu);
    mobileMenuLinks.forEach((link) => link.addEventListener('click', closeMobileMenu));
    toTopBtn.addEventListener('click', scrollToTop);
  }

  /* ==========================
     Initialization
  ========================== */
  function init() {
    bindEventListeners();
    initScrollReveal();
  }

  init();
})();
