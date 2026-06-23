# diegojimeneztamame.com

Personal website of **Diego Jiménez Tamame** — composer, music engraver, and arranger based in Graz, Austria.

## Overview

A minimalist, high-performance portfolio site replacing the previous WordPress.com installation. Built with a Ryoji Ikeda-inspired aesthetic: pure black background, stark white monospace typography, and clinical data-driven layout.

The site presents two professional identities:
- **Composer** — selected works, instrumentation, premiere info, and media
- **Engraver & Arranger** — services, selected clients, and a direct contact form

Trilingual interface: **English / Spanish / German**.

## Tech Stack

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) component primitives
- [Framer Motion](https://www.framer.motion.com/) for scroll animations
- [Formspree](https://formspree.io/) for static-compatible contact form
- Deployed via **GitHub Actions** → **GitHub Pages**

## Fonts

- **IBM Plex Mono** — body and interface text
- **Inter** — headings and display text

## Deployment

Every push to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`), which builds the Vite app and deploys the `dist/` folder to GitHub Pages.

The site is served at:
- **Primary**: [www.diegojimeneztamame.com](https://www.diegojimeneztamame.com)
- **Fallback**: [diegojimenezTamame.github.io](https://diegojimenezTamame.github.io)

## Local Development

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

## Project Structure

```
src/
├── pages/
│   └── Home.jsx              # Main single-page layout
├── components/
│   └── site/
│       ├── Navigation.jsx    # Fixed top nav with language switcher
│       ├── HeroSection.jsx   # Full-screen landing
│       ├── EngravingSection.jsx
│       ├── ComposerSection.jsx
│       ├── AboutSection.jsx
│       ├── ContactSection.jsx
│       └── FooterSection.jsx
├── lib/
│   └── i18n.jsx              # EN / ES / DE translation strings
└── index.css                 # Design tokens + Tailwind base
```

## Contact Form

The contact form uses [Formspree](https://formspree.io/). To update the recipient email, create a form at formspree.io and replace the endpoint ID in `components/site/ContactSection.jsx`.

## License

All content © Diego Jiménez Tamame. All rights reserved.
