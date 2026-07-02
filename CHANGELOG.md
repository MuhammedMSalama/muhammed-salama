# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-07-02

### Added
- Professional project cards for XSpeed, Property Adviser, and BWW Store, each with role, stack tags, and links to the live application and documentation
- LaravelBase showcase section under Open Source, including package highlights and links to GitHub and Packagist
- New project screenshots for XSpeed, Property Adviser, and BWW Store
- PostgreSQL to the database section of the tech stack, alongside MySQL and Redis
- Improved statistics in the hero section (REST APIs delivered, years of experience, production platforms)

### Changed
- Portfolio redesign across all sections for a more premium, production-grade visual identity
- Skills section reorganized into Backend, Database, Architecture, Testing & Quality, and DevOps & Tools groups

### Improved
- Performance: reduced layout shift via explicit image dimensions and lazy loading on below-the-fold assets
- Accessibility: added `aria-label`s to icon-only controls and grouped related controls with `role="group"`
- UI polish across spacing, typography, and hover/interaction states

### Fixed
- Minor inconsistencies in section spacing and responsive breakpoints introduced during the redesign

## [1.0.0] - 2026-07-02

### Added
- Initial public release of the portfolio
- Modular frontend architecture: HTML fragments in `pages/` loaded at runtime into `index.html`
- Core sections: Hero, About, Experience, Highlights, Skills, Projects, Open Source, Contact
- Scroll-reveal animations, sticky navigation, and scroll-progress indicator
- Downloadable resume with inline preview
- Open Graph, Twitter Card, and `schema.org/Person` structured data for SEO

[1.1.0]: https://github.com/MuhammedMSalama/Portofolio/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/MuhammedMSalama/Portofolio/releases/tag/v1.0.0
