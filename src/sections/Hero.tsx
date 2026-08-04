import { ChevronDown, Github, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { StoreBadge } from "@/components/StoreBadge";
import { GITHUB_URL, STORE_LINKS } from "@/site";

const COMPATIBLE = ["Jellyfin", "Plex", "Emby"];

export function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="relative flex min-h-svh flex-col overflow-hidden">
      {/* Cinematic background: the image becomes the experience */}
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-full w-full origin-center object-cover animate-ken-burns"
        />
        {/* Veils to blend the image into the theme */}
        <div className="absolute inset-0 bg-seerr-night/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-seerr-night/85 via-seerr-night/30 to-seerr-night" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_55%_at_50%_42%,transparent_0%,rgba(7,11,22,0.75)_100%)]" />
        {/* Signature color halos */}
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-seerr-500/30 blur-[130px]" />
        <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-seerr-purple/25 blur-[130px]" />
      </div>

      {/* Content */}
      <div className="relative flex flex-1 items-center justify-center px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-seerr-300/40 bg-seerr-night/50 px-4 py-1.5 text-sm font-medium text-seerr-200 backdrop-blur-md transition-colors hover:border-seerr-300/70 hover:bg-seerr-500/20"
          >
            <Sparkles className="h-3.5 w-3.5 text-seerr-300" />
            {t("hero.badge")}
            <span className="text-seerr-300 transition-transform group-hover:translate-x-0.5">→</span>
          </a>

          <h1 className="mt-7 text-5xl font-extrabold leading-[1.04] tracking-tight text-white drop-shadow-2xl sm:text-7xl lg:text-8xl">
            {t("hero.titleA")}
            <br />
            <span className="text-gradient">{t("hero.titleB")}</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/75 drop-shadow-lg sm:text-xl">
            {t("hero.subtitle1")}{" "}
            <strong className="font-semibold text-white">{t("hero.subtitleStrong")}</strong>{" "}
            {t("hero.subtitle2")}
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
              {t("hero.github")}
            </a>
          </div>

          <p className="mt-8 text-sm text-white/50">
            {t("hero.compatible")}{" "}
            {COMPATIBLE.map((s, i) => (
              <span key={s}>
                <span className="font-semibold text-white/85">{s}</span>
                {i < COMPATIBLE.length - 1 && <span className="mx-1.5 text-white/30">·</span>}
              </span>
            ))}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#problem"
        aria-label={t("hero.scrollAria")}
        className="group relative mx-auto mb-8 flex flex-col items-center gap-1 text-white/50 transition-colors hover:text-white"
      >
        <span className="text-xs font-medium uppercase tracking-[0.2em]">{t("hero.scrollLabel")}</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
