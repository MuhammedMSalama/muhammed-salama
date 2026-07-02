<div align="center">

# Muhammed Salama — Portfolio

**Laravel Backend Engineer** building scalable REST APIs and production systems for real estate, logistics, and e-commerce platforms.

[![Website](https://img.shields.io/badge/Live-Portfolio-38BDF8?style=for-the-badge&logo=vercel&logoColor=white)](https://github.com/MuhammedMSalama/Portofolio)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)](#-tech-stack)
[![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)](#-tech-stack)

[![GitHub last commit](https://img.shields.io/github/last-commit/MuhammedMSalama/Portofolio?style=flat-square&color=38BDF8)](https://github.com/MuhammedMSalama/Portofolio/commits/main)
[![GitHub issues](https://img.shields.io/github/issues/MuhammedMSalama/Portofolio?style=flat-square&color=FF2D20)](https://github.com/MuhammedMSalama/Portofolio/issues)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](CONTRIBUTING.md)

[Live Portfolio](#-live-portfolio) · [Featured Projects](#-featured-projects) · [LaravelBase](#-open-source-package--laravelbase) · [Tech Stack](#-tech-stack) · [Contact](#-contact)

</div>

---

## 📖 About

This repository is the source code for my personal portfolio — a fast, dependency-free website that showcases the backend systems I've built in production: shipping and logistics platforms, real estate marketplaces, and e-commerce systems serving real users across Egypt, the UAE, and Saudi Arabia.

The site itself is intentionally simple: hand-written HTML, Tailwind CSS, and vanilla JavaScript, with no build step and no framework overhead. It reflects the same engineering values I bring to backend work — clear structure, no unnecessary dependencies, and nothing shipped that isn't earning its place.

## 💼 Featured Projects

Production systems I've designed, built, and shipped for employers and freelance clients.

| Project | Role | Highlights | Link |
|---|---|---|---|
| **XSpeed** — Shipping Management System | Freelance Backend Developer | Laravel 12 · 20+ documented REST APIs · Sanctum authentication · shipment tracking · Excel/PDF export | [api.exspeeds.com](https://api.exspeeds.com/) |
| **Property Adviser** — Real Estate Platform | Backend Engineer, Elite Bricks Real Estate Brokers LLC | 200+ REST APIs across 25+ modules · AI assistant on OpenAI streaming APIs · full RBAC · geospatial search | [p-adviser.com/en](https://p-adviser.com/en) |

Each project card in the live portfolio links to the deployed application and, where public, its API documentation or admin dashboard.

## 📦 Open Source Package — LaravelBase

**[LaravelBase](https://github.com/MuhammedMSalama/LaravelBase)** is a published Laravel package I author and maintain. It scaffolds a complete CRUD module — Model, Migration, Enum, Filter + Pagination, Repository, Service, Form Requests, API Resource, Policy, and a Swagger/OpenAPI-annotated Controller — from a single Artisan command.

<div align="center">

[![Packagist Version](https://img.shields.io/packagist/v/muhammedsalama/laravel-base?style=flat-square&color=FF2D20)](https://packagist.org/packages/muhammedsalama/laravel-base)
[![Packagist Downloads](https://img.shields.io/packagist/dt/muhammedsalama/laravel-base?style=flat-square&color=38BDF8)](https://packagist.org/packages/muhammedsalama/laravel-base)
[![License](https://img.shields.io/packagist/l/muhammedsalama/laravel-base?style=flat-square)](https://github.com/MuhammedMSalama/LaravelBase/blob/main/LICENSE)

</div>

**Key capabilities:**

- One-command generation of the full CRUD stack — Repository, Service, Form Requests, Resource, and Policy
- Automatic Repository ↔ Service binding via the service container
- Driver-aware database operations across MySQL, PostgreSQL, and SQLite
- Swagger/OpenAPI-annotated controllers generated out of the box
- Support for Laravel 10 through 13, with automated CI/CD testing and full PHPUnit coverage
- Static analysis enforced with PHPStan

📦 [View on Packagist](https://packagist.org/packages/muhammedsalama/laravel-base) · 🐙 [View Source on GitHub](https://github.com/MuhammedMSalama/LaravelBase)

## 🛠️ Tech Stack

**Portfolio site**

| Layer | Technology |
|---|---|
| Markup | Semantic HTML5, loaded as fragments at runtime |
| Styling | Tailwind CSS (utility-first), custom CSS for animation and layout |
| Scripting | Vanilla JavaScript (ES modules), zero runtime dependencies |
| Fonts | Inter, JetBrains Mono |
| Tooling | None required — no bundler, no package manager, no build step |

**Backend engineering experience represented in this portfolio**

<table>
<tr>
<td valign="top" width="33%">

**Languages & Frameworks**
- PHP
- Laravel
- REST API design

**Data**
- MySQL
- PostgreSQL
- Redis

</td>
<td valign="top" width="33%">

**Architecture**
- Repository Pattern
- Service Layer
- Clean Architecture
- SOLID principles

**Security**
- Authentication
- Authorization / RBAC

</td>
<td valign="top" width="33%">

**Quality & Delivery**
- PHPUnit
- PHPStan
- Swagger / OpenAPI
- GitHub Actions & CI/CD
- Docker
- Git

**Real-time & Data I/O**
- WebSockets
- Pusher
- Real-time chat
- Excel import/export
- Production deployment

</td>
</tr>
</table>

## 🏗️ Architecture

The site follows a lightweight component pattern without adopting a frontend framework:

1. **`index.html`** is the shell — it defines the persistent `<head>`, static navbar, scroll-progress bar, and an empty `<main id="app">` mount point.
2. **`assets/js/app.js`** is the entry point. It initializes navigation and scroll behavior immediately (since they only touch static markup), then loads all page fragments in parallel.
3. **`assets/js/loader.js`** owns fragment fetching — a small, dependency-free wrapper around `fetch()` that knows nothing about which components exist.
4. **`assets/js/components.js`** owns the fragment manifest — which files from `pages/*.html` get injected into `#app`, and in what order.
5. Once every fragment has resolved, `#app` fades in, the footer's back-to-top control is wired up, and the scroll-reveal `IntersectionObserver` starts observing `.reveal` elements across the now-mounted DOM.

This keeps section content (`pages/*.html`) fully decoupled from page orchestration (`assets/js/`), so sections can be reordered, added, or removed by editing the manifest alone.

## ✨ Features

- Single-page layout assembled from independent, reusable HTML fragments
- Scroll-triggered reveal animations via `IntersectionObserver`
- Sticky navigation with active-section highlighting and a scroll-progress indicator
- Downloadable, ATS-friendly resume with inline preview
- Fully responsive across mobile, tablet, and desktop breakpoints
- Structured data (`schema.org/Person`) and Open Graph metadata for rich social previews
- Zero external JavaScript dependencies — no npm install required to run locally

## 📁 Folder Structure

```
Portofolio/
├── index.html                  # Document shell: <head>, navbar, #app mount point
├── pages/                      # Section fragments, injected into #app at runtime
│   ├── hero.html
│   ├── about.html
│   ├── experience.html
│   ├── highlights.html
│   ├── skills.html              # Tech Stack section
│   ├── projects.html            # Featured Projects section
│   ├── opensource.html          # LaravelBase & other packages
│   ├── contact.html
│   └── footer.html
├── assets/
│   ├── css/
│   │   ├── variables.css        # Design tokens (colors, spacing)
│   │   ├── style.css            # Base styles
│   │   ├── components.css       # Component-level styles
│   │   ├── animations.css       # Keyframes and transitions
│   │   └── responsive.css       # Breakpoint overrides
│   ├── js/
│   │   ├── app.js               # Entry point, init order
│   │   ├── loader.js            # Fragment fetching (fetch wrapper)
│   │   ├── components.js        # Fragment manifest
│   │   ├── navigation.js        # Nav interactions
│   │   ├── scroll.js            # Scroll progress, back-to-top
│   │   └── animations.js        # Scroll-reveal observer
│   ├── icons/
│   │   └── sprite.svg           # Inline SVG icon sprite
│   ├── images/
│   │   ├── profile/
│   │   └── projects/
│   └── resume/
│       └── Muhammed-Salama-Backend-Engineer.pdf
└── LICENSE
```

## ⚡ Performance

The site is built to load fast by default rather than being optimized after the fact:

- No JavaScript framework or bundle to parse — fragments are plain HTML injected via `fetch()`
- Images use `width`/`height` attributes to prevent layout shift, with `loading="lazy"` on below-the-fold assets and `loading="eager"` only on the hero portrait
- Scroll-reveal animations run on a single shared `IntersectionObserver` rather than per-element scroll listeners
- Fonts are preconnected before being requested to shorten the critical rendering path

## 📱 Responsive Design

Every section is built mobile-first with Tailwind's breakpoint system, verified across mobile, tablet, and desktop viewports. Layout, typography, and spacing scale deliberately at each breakpoint rather than simply shrinking a fixed desktop layout.

## ♿ Accessibility

- Semantic landmarks (`<header>`, `<main>`, `<section>`, `<footer>`) throughout
- Descriptive `alt` text on every content image
- Icon-only interactive elements carry `aria-label`s (e.g. contact links, back-to-top button)
- Related controls are grouped with `role="group"` and `aria-labelledby` (e.g. the resume download/view group)
- Sufficient color contrast maintained against the dark theme's background surfaces
- Keyboard-navigable interactive elements with visible focus states

## 🔍 SEO

- Unique, descriptive `<title>` and meta description
- Open Graph and Twitter Card metadata for link previews
- `schema.org/Person` structured data describing role, employer, and education
- Semantic heading hierarchy (single `<h1>`, ordered `<h2>`/`<h3>` per section)
- Descriptive link text and image `alt` attributes throughout

## 📬 Contact

- **Email:** [devmuhammedsalama@gmail.com](mailto:devmuhammedsalama@gmail.com)
- **GitHub:** [@MuhammedMSalama](https://github.com/MuhammedMSalama)
- **LinkedIn:** [linkedin.com/in/mohamed2050](https://www.linkedin.com/in/mohamed2050/)

## 📄 License

This project is licensed under the [MIT License](LICENSE) — see the file for full terms.

---

<div align="center">

Built and maintained by **[Muhammed Salama](https://github.com/MuhammedMSalama)**

</div>
 