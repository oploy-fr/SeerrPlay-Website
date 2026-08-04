<div align="center">

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="public/logo/primary.svg">
  <source media="(prefers-color-scheme: light)" srcset="public/logo/primary-light.svg">
  <img alt="SeerrPlay" src="public/logo/primary-light.svg" width="420">
</picture>

**Le site officiel de SeerrPlay — l'application mobile & TV compagnon de [Seerr](https://seerr.dev/)**

Découvrez, demandez et **regardez** vos films et séries directement dans l'app,
que votre serveur soit **Jellyfin**, **Plex** ou **Emby**.

[![Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-7B3DE5)](https://github.com/oploy-fr/SeerrPlay)
[![React](https://img.shields.io/badge/React%2019-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite%207-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%203-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

[Application](https://github.com/oploy-fr/SeerrPlay) · [Discord](https://discord.gg/GMunyuG3wg) · [Seerr](https://seerr.dev/)

</div>

---

## 📱 À propos

Ce dépôt contient le **site vitrine** de SeerrPlay — la page de présentation et de
téléchargement de l'application. L'application elle-même (mobile & TV) vit dans le
dépôt [`oploy-fr/SeerrPlay`](https://github.com/oploy-fr/SeerrPlay).

SeerrPlay résout un problème simple de l'écosystème Seerr : il fallait jusqu'ici
jongler entre le site web Seerr pour les demandes, un lecteur vidéo sur le web, une
autre app sur le téléphone et encore une autre sur la TV. SeerrPlay réunit tout ça :

- 🎬 **Découverte & demandes** — tout le catalogue Seerr, films et séries
- ▶️ **Lecture intégrée** — directement dans l'app, via Jellyfin, Plex ou Emby
- 📥 **Téléchargements hors ligne** — dans l'avion, le métro, les zones blanches
- 🖥️ **Multi-plateformes** — iPhone, iPad, Mac, Apple TV, Android (téléphone, tablette, TV)… Windows bientôt
- 💜 **Gratuit & open source** — comme Seerr

## ✨ Le site

- **Dark theme** aux couleurs de [seerr.dev](https://seerr.dev/) (violet `#7B3DE5`, fond nuit)
- Storytelling « problème → solution » : le chaos des apps multiples, puis la réponse
- Badges App Store / Google Play, bouton Discord, lien GitHub
- Pages **Privacy policy** et **Support** (obligatoires pour les stores)
- 100 % responsive, animations douces, aucun backend — site statique

## 🚀 Démarrage rapide

```bash
npm install
npm run dev
```

Le site est accessible sur `http://localhost:5173`.

### Autres commandes

```bash
npm run build    # build de production dans dist/
npm run preview  # sert le build de production en local
npm run lint     # ESLint
```

## 🗂️ Structure du projet

```
├── index.html              # Point d'entrée (meta, favicons, manifest)
├── public/
│   ├── logo/               # Logos SVG officiels (primaire, icône, variantes)
│   ├── icons/              # Favicons, apple-touch-icon, maskable, app-icon
│   ├── images/             # Visuels du site
│   ├── privacy.html        # Privacy policy (page statique, requise par les stores)
│   ├── support.html        # Page support (page statique)
│   └── styles.css          # Styles des pages statiques
├── src/
│   ├── site.ts             # 🔗 Tous les liens centralisés (stores, GitHub, Discord…)
│   ├── sections/           # Hero, Problem, HowItWorks, Screenshots, Features,
│   │                       # OpenSource, Download, Faq, Footer…
│   └── components/         # StoreBadge, DiscordIcon, ui/ (shadcn)
└── logo-pack/              # Sources du logo (SVG, PNG, PSD, AI)
```

> **💡 Modifier un lien ?** Tout passe par [`src/site.ts`](src/site.ts) —
> URLs des stores, GitHub, Discord, serveurs… un seul fichier à éditer.

## 🛠️ Stack technique

- **React 19** + **TypeScript**
- **Vite 7** — dev server & build
- **Tailwind CSS 3** — design tokens personnalisés (palette Seerr)
- **lucide-react** — icônes
- **shadcn/ui** — primitives de composants

## 🎨 Identité visuelle

| Rôle | Couleur |
|---|---|
| Violet principal | `#7B3DE5` → `#532BC2` (dégradé) |
| Violet Play | `#6F3AE3` |
| Navy (texte sur fond clair) | `#261452` |
| Fond nuit | `#070b16` |

Les logos officiels sont dans [`public/logo/`](public/logo/) ; les sources
complètes (favicons, kit réseaux sociaux, fichiers PSD/AI) dans [`logo-pack/`](logo-pack/).

## 🤝 Contribuer

Les contributions sont les bienvenues !

1. Forkez le dépôt
2. Créez une branche (`git checkout -b feature/ma-feature`)
3. Commitez (`git commit -m "feat: ma feature"`)
4. Poussez et ouvrez une Pull Request

Pour l'application elle-même, rendez-vous sur
[`oploy-fr/SeerrPlay`](https://github.com/oploy-fr/SeerrPlay).

---

<div align="center">
  <sub>Basé sur le projet open source <a href="https://seerr.dev/">Seerr</a> — fait avec 💜 par la communauté.</sub>
</div>
