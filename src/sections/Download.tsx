import { Apple, Monitor, Smartphone } from "lucide-react";
import { StoreBadge } from "@/components/StoreBadge";
import { DiscordIcon } from "@/components/DiscordIcon";
import { DISCORD_URL, STORE_LINKS } from "@/site";

const PLATFORMS = [
  {
    icon: Apple,
    label: "Apple",
    devices: "iPhone · iPad · Mac · Apple TV",
    soon: false,
  },
  {
    icon: Smartphone,
    label: "Android",
    devices: "Téléphone · Tablette · TV",
    soon: false,
  },
  {
    icon: Monitor,
    label: "Windows",
    devices: "Bientôt disponible",
    soon: true,
  },
];

export function Download() {
  return (
    <section id="download" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src="/images/cta-bg.jpg"
          alt=""
          className="h-full w-full object-cover opacity-25"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-seerr-night via-seerr-night/80 to-seerr-night" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <span className="text-sm font-semibold uppercase tracking-widest text-seerr-300">
          Téléchargement
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Installez SeerrPlay <span className="text-gradient">aujourd'hui</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/60 sm:text-lg">
          Gratuite et open source. Connectez votre serveur et retrouvez toute votre
          médiathèque — demandes et lecture — au creux de la main.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <StoreBadge store="apple" href={STORE_LINKS.ios} />
          <StoreBadge store="google" href={STORE_LINKS.android} />
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
          {PLATFORMS.map((p) => (
            <div
              key={p.label}
              className={
                p.soon
                  ? "relative rounded-2xl border border-dashed border-white/15 bg-white/[0.02] px-5 py-5 opacity-60"
                  : "relative rounded-2xl border border-white/15 bg-white/5 px-5 py-5 transition-all hover:border-seerr-400/40 hover:shadow-glow-sm"
              }
            >
              {p.soon && (
                <span className="absolute right-3 top-3 rounded-full border border-seerr-400/40 bg-seerr-500/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-seerr-300">
                  Bientôt
                </span>
              )}
              <p.icon className="mx-auto h-6 w-6 text-seerr-300" />
              <p className="mt-3 font-semibold text-white">{p.label}</p>
              <p className="mt-1 text-sm text-white/55">{p.devices}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-white/10 pt-10 sm:flex-row">
          <p className="text-sm text-white/50">Une question, une idée ? La communauté vous répond :</p>
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl bg-[#5865f2] px-5 py-3 text-sm font-semibold text-white shadow-[0_0_40px_-8px_rgba(88,101,242,0.5)] transition-all hover:brightness-110"
          >
            <DiscordIcon className="h-5 w-5" />
            Rejoindre le Discord
          </a>
        </div>
      </div>
    </section>
  );
}
