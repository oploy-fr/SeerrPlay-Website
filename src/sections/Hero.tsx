import { ChevronDown, Github, Sparkles } from "lucide-react";
import { StoreBadge } from "@/components/StoreBadge";
import { GITHUB_URL, STORE_LINKS } from "@/site";

const COMPATIBLE = ["Jellyfin", "Plex", "Emby"];

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Fond cinématique : l'image devient l'expérience */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full origin-center object-cover animate-ken-burns"
        />
        {/* Voiles pour fondre l'image dans le thème */}
        <div className="absolute inset-0 bg-seerr-night/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-seerr-night/85 via-seerr-night/30 to-seerr-night" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_42%,transparent_0%,rgba(7,11,22,0.75)_100%)]" />
        {/* Halos de couleur signature */}
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-seerr-500/30 blur-[130px]" />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-seerr-purple/25 blur-[130px]" />
      </div>

      {/* Contenu */}
      <div className="relative flex flex-1 items-center justify-center px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-seerr-300/40 bg-seerr-night/50 px-4 py-1.5 text-sm font-medium text-seerr-200 backdrop-blur-md transition-colors hover:border-seerr-300/70 hover:bg-seerr-500/20"
          >
            <Sparkles className="h-3.5 w-3.5 text-seerr-300" />
            100 % Open Source &amp; Gratuit
            <span className="text-seerr-300 transition-transform group-hover:translate-x-0.5">→</span>
          </a>

          <h1 className="mt-7 text-5xl font-extrabold leading-[1.04] tracking-tight text-white drop-shadow-2xl sm:text-7xl lg:text-8xl">
            Vos films et séries,
            <br />
            <span className="text-gradient">enfin réunis</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/75 drop-shadow-lg sm:text-xl">
            Découvrez, demandez et <strong className="font-semibold text-white">regardez</strong> sans
            jamais changer d'application. SeerrPlay connecte Seerr à votre serveur
            Jellyfin, Plex ou Emby — sur mobile comme sur TV.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <StoreBadge store="apple" href={STORE_LINKS.ios} />
            <StoreBadge store="google" href={STORE_LINKS.android} />
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 bg-seerr-night/40 px-5 py-3.5 text-sm font-semibold text-white/90 backdrop-blur-md transition-all hover:border-white/45 hover:bg-white/10 hover:text-white"
            >
              <Github className="h-5 w-5" />
              Voir sur GitHub
            </a>
          </div>

          <p className="mt-8 text-sm text-white/50">
            Compatible avec{" "}
            {COMPATIBLE.map((s, i) => (
              <span key={s}>
                <span className="font-semibold text-white/85">{s}</span>
                {i < COMPATIBLE.length - 1 && <span className="mx-1.5 text-white/30">·</span>}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Indicateur de scroll */}
      <a
        href="#problem"
        aria-label="Découvrir pourquoi SeerrPlay existe"
        className="group relative mx-auto mb-8 flex flex-col items-center gap-1 text-white/50 transition-colors hover:text-white"
      >
        <span className="text-xs font-medium uppercase tracking-[0.2em]">Pourquoi ?</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
