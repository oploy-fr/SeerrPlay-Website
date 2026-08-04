<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/logo/primary.svg">
  <source media="(prefers-color-scheme: light)" srcset="public/logo/primary-light.svg">
  <img alt="SeerrPlay" src="public/logo/primary-light.svg" width="420">
</picture>

**The official SeerrPlay website — the mobile & TV companion app for [Seerr](https://seerr.dev/)**

Discover, request and **watch** your movies and shows right inside the app,
whether your server runs **Jellyfin**, **Plex** or **Emby**.

[![Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-7B3DE5)](https://github.com/oploy-fr/SeerrPlay)
[![React](https://img.shields.io/badge/React%2019-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite%207-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%203-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[App](https://github.com/oploy-fr/SeerrPlay) · [Discord](https://discord.gg/GMunyuG3wg) · [Seerr](https://seerr.dev/)

</div>

---

## 📱 About

This repository contains the **showcase website** for SeerrPlay — the app's
presentation and download page. The app itself (mobile & TV) lives in the
[`oploy-fr/SeerrPlay`](https://github.com/oploy-fr/SeerrPlay) repository.

SeerrPlay solves a simple problem in the Seerr ecosystem: until now you had to
juggle the Seerr website for requests, a video player on the web, another app on
your phone and yet another one on your TV. SeerrPlay brings it all together:

- 🎬 **Discovery & requests** — the full Seerr catalog, movies and shows
- ▶️ **Built-in playback** — right inside the app, via Jellyfin, Plex or Emby
- 📥 **Offline downloads** — on a plane, in the subway, in dead zones
- 🖥️ **Multi-platform** — iPhone, iPad, Mac, Apple TV, Android (phone, tablet, TV)… Windows soon
- 💜 **Free & open source** — like Seerr

## ✨ The website

- **Dark theme** matching [seerr.dev](https://seerr.dev/) colors (purple `#7B3DE5`, night background)
- "Problem → solution" storytelling: the multi-app chaos, then the answer
- App Store / Google Play badges, Discord button, GitHub link
- **Privacy policy** and **Support** pages (required by the stores)
- Fully responsive, smooth animations, no backend — static site

## 🌍 Internationalization

The website is translated into **5 languages**: English (default), French, Spanish,
German and Italian. Pages render in English by default; a **suggestion banner based
on IP geolocation** offers the visitor's country language when available
("Parlez-vous français ?"), and the 🌐 switcher in the navbar allows switching at
any time. Every choice is remembered.

- **Copy**: [`src/i18n/locales/`](src/i18n/locales/) — one file per language (`en.ts`, `fr.ts`, `es.ts`, `de.ts`, `it.ts`)
- **Localized screenshots**: `public/images/screenshots/<lang>/` — drop the translated screenshots (`mobile.jpg`, `request.jpg`, `player.jpg`, `tv.jpg`, `devices.jpg`) into each language folder; if an image is missing, the English version takes over automatically.

## 🚀 Quick start

```bash
npm install
npm run dev
```

The site is available at `http://localhost:5173`.

### Other commands

```bash
npm run build    # production build to dist/
npm run preview  # serve the production build locally
npm run lint     # ESLint
```

## 🗂️ Project structure

```
├── index.html              # Entry point (meta, favicons, manifest)
├── public/
│   ├── logo/               # Official SVG logos (primary, icon, variants)
│   ├── icons/              # Favicons, apple-touch-icon, maskable, app-icon
│   ├── images/             # Site visuals (+ screenshots/<lang>/ localized)
│   ├── privacy.html        # Privacy policy (static page, required by stores)
│   ├── support.html        # Support page (static)
│   └── styles.css          # Styles for the static pages
├── src/
│   ├── site.ts             # 🔗 All links centralized (stores, GitHub, Discord…)
│   ├── i18n/               # i18next config + locales (en, fr, es, de, it)
│   ├── sections/           # Hero, Problem, HowItWorks, Screenshots, Features,
│   │                       # OpenSource, Download, Faq, Footer…
│   └── components/         # StoreBadge, DiscordIcon, LanguageSwitcher, ui/ (shadcn)
├── app-assets/             # iOS screenshots + App Store previews (1284×2778, 1242×2688)
└── logo-pack/              # Logo source files (SVG, PNG, PSD, AI)
```

> **💡 Change a link?** Everything goes through [`src/site.ts`](src/site.ts) —
> store URLs, GitHub, Discord, servers… a single file to edit.

## 🛠️ Tech stack

- **React 19** + **TypeScript**
- **Vite 7** — dev server & build
- **Tailwind CSS 3** — custom design tokens (Seerr palette)
- **i18next** + **react-i18next** — internationalization
- **lucide-react** — icons
- **shadcn/ui** — component primitives

## 🎨 Brand identity

| Role | Color |
|---|---|
| Primary purple | `#7B3DE5` → `#532BC2` (gradient) |
| Play purple | `#6F3AE3` |
| Navy (text on light background) | `#261452` |
| Night background | `#070b16` |

Official logos live in [`public/logo/`](public/logo/); full source files
(favicons, social media kit, PSD/AI files) in [`logo-pack/`](logo-pack/).

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a branch (`git checkout -b feature/my-feature`)
3. Commit (`git commit -m "feat: my feature"`)
4. Push and open a Pull Request

For the app itself, head over to
[`oploy-fr/SeerrPlay`](https://github.com/oploy-fr/SeerrPlay).

---

<div align="center">
  <sub>Based on the open source project <a href="https://seerr.dev/">Seerr</a> — made with 💜 by the community.</sub>
</div>
