import {
  ArrowDown,
  Cast,
  CheckCircle2,
  Globe,
  MonitorPlay,
  Shuffle,
  Smartphone,
  Split,
  Tv,
  XCircle,
} from "lucide-react";
import { SEERR_URL, SERVER_LINKS } from "@/site";

const MESS = [
  { icon: Globe, name: "Seerr", detail: "dans le navigateur, pour demander" },
  { icon: MonitorPlay, name: "Jellyfin Web", detail: "le lecteur vidéo… sur le web" },
  { icon: Smartphone, name: "Streamyfin · Infuse · VidHub", detail: "un lecteur sur le téléphone" },
  { icon: Tv, name: "Jellyfin Android TV · Moonfin · Wholphin", detail: "un autre sur la TV" },
  { icon: Cast, name: "Chromecast · Tizen · webOS…", detail: "et encore d'autres selon l'écran" },
];

const WINS = [
  "Demandes Seerr intégrées",
  "Lecture directement dans l'app",
  "Téléchargements hors ligne",
  "Jellyfin, Plex et Emby réunis",
  "iPhone, iPad, Mac, Apple TV et Android — bientôt Windows",
];

const PAINS = [
  {
    icon: Shuffle,
    title: "Le jeu des 7 applis",
    description:
      "Vous demandez dans un navigateur, vérifiez le statut dans une app, regardez dans une autre. Et vous recommencez sur chaque écran de la maison.",
  },
  {
    icon: Split,
    title: "18 visionneurs, zéro unité",
    description:
      "Jellyfin Web, Streamyfin, Moonfin, Infuse, VidHub, Wholphin, Plezy, Findroid, Lenna… des dizaines de lecteurs existent, aucun ne gère vos demandes Seerr ni ne réunit vos serveurs.",
  },
  {
    icon: Smartphone,
    title: "Une app par écran, iOS délaissé",
    description:
      "Le web, le téléphone et la TV ont chacun leur visionneur. Et sur iPhone, iPad et Apple TV, les solutions complètes se comptent sur les doigts d'une main.",
  },
];

export function Problem() {
  return (
    <section id="problem" className="relative py-24 sm:py-32">
      <div
        className="pointer-events-none absolute right-0 top-24 h-80 w-80 rounded-full bg-seerr-purple/10 blur-[130px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-seerr-300">
            Le constat
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Une soirée film ne devrait pas{" "}
            <span className="text-gradient">ressembler à ça</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/55 sm:text-lg">
            Vous auto-hébergez votre médiathèque pour être libre. Mais au quotidien,
            cette liberté se paie en jonglage permanent entre les applications.
          </p>
        </div>

        {/* Avant / Après */}
        <div className="mx-auto mt-14 grid max-w-5xl items-stretch gap-6 lg:mt-20 lg:grid-cols-[1fr_auto_1fr]">
          {/* AVANT */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <p className="text-sm font-bold uppercase tracking-widest text-red-400/80">
              Aujourd'hui
            </p>
            <ul className="mt-5 space-y-3">
              {MESS.map((item, i) => (
                <li
                  key={item.name}
                  className={`flex items-center gap-3 rounded-xl border border-white/10 bg-seerr-night/60 px-4 py-3 ${
                    i % 2 === 0 ? "-rotate-1" : "rotate-1"
                  }`}
                >
                  <item.icon className="h-4 w-4 shrink-0 text-white/40" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white/75">{item.name}</p>
                    <p className="truncate text-xs text-white/40">{item.detail}</p>
                  </div>
                  <XCircle className="h-4 w-4 shrink-0 text-red-400/70" />
                </li>
              ))}
            </ul>
            <p className="mt-5 text-center text-sm text-white/40">
              Un serveur, trois lecteurs, un navigateur… pour un seul film.
            </p>
          </div>

          {/* Flèche de transition */}
          <div className="flex items-center justify-center lg:flex-col">
            <span className="flex h-12 w-12 rotate-0 items-center justify-center rounded-full bg-gradient-to-br from-seerr-500 to-seerr-purple shadow-glow-sm lg:rotate-0">
              <ArrowDown className="h-5 w-5 text-white lg:-rotate-90" />
            </span>
          </div>

          {/* APRÈS */}
          <div className="relative overflow-hidden rounded-2xl border border-seerr-400/40 bg-gradient-to-br from-seerr-500/15 via-seerr-panel to-seerr-purple/10 p-6 shadow-glow-sm sm:p-8">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-seerr-purple/25 blur-[80px]"
              aria-hidden="true"
            />
            <p className="relative text-sm font-bold uppercase tracking-widest text-seerr-300">
              Avec SeerrPlay
            </p>
            <div className="relative mt-5 flex items-center gap-3 rounded-xl border border-white/15 bg-seerr-night/70 px-4 py-4">
              <img src="/logo/icon.svg" alt="" className="h-10 w-10" />
              <div>
                <p className="font-bold text-white">SeerrPlay</p>
                <p className="text-xs text-white/50">une seule app, sur tous vos écrans</p>
              </div>
            </div>
            <ul className="relative mt-5 space-y-3">
              {WINS.map((win) => (
                <li key={win} className="flex items-center gap-3 text-sm text-white/80">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-seerr-300" />
                  {win}
                </li>
              ))}
            </ul>
            <p className="relative mt-5 text-center text-sm font-medium text-seerr-200">
              Une seule app. Point final.
            </p>
          </div>
        </div>

        {/* Les trois irritants */}
        <div className="mx-auto mt-16 grid max-w-5xl gap-5 md:grid-cols-3 lg:mt-20">
          {PAINS.map((pain) => (
            <article
              key={pain.title}
              className="rounded-2xl border border-white/10 bg-seerr-panel/60 p-6 transition-all duration-300 hover:border-seerr-400/40 hover:shadow-glow-sm"
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-seerr-500/80 to-seerr-purple/80">
                <pain.icon className="h-5 w-5 text-white" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">{pain.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{pain.description}</p>
            </article>
          ))}
        </div>

        <p className="mx-auto mt-14 max-w-2xl text-center text-lg leading-relaxed text-white/60">
          SeerrPlay est née d'une frustration simple :{" "}
          <a href={SEERR_URL} target="_blank" rel="noopener noreferrer" className="font-semibold text-seerr-300 underline decoration-seerr-400/40 underline-offset-4 hover:text-seerr-200">
            Seerr
          </a>{" "}
          est génial pour demander,{" "}
          <a href={SERVER_LINKS.jellyfin} target="_blank" rel="noopener noreferrer" className="font-semibold text-seerr-300 underline decoration-seerr-400/40 underline-offset-4 hover:text-seerr-200">Jellyfin</a>,{" "}
          <a href={SERVER_LINKS.plex} target="_blank" rel="noopener noreferrer" className="font-semibold text-seerr-300 underline decoration-seerr-400/40 underline-offset-4 hover:text-seerr-200">Plex</a> et{" "}
          <a href={SERVER_LINKS.emby} target="_blank" rel="noopener noreferrer" className="font-semibold text-seerr-300 underline decoration-seerr-400/40 underline-offset-4 hover:text-seerr-200">Emby</a>{" "}
          savent diffuser — mais 18 visionneurs plus tard,{" "}
          <span className="text-white">personne ne relie les deux sur tous vos écrans</span>.
        </p>
      </div>
    </section>
  );
}
