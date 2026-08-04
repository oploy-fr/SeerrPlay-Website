import { ArrowDownToLine, Compass, PlayCircle, RefreshCw, Server, SquarePlus } from "lucide-react";

const FEATURES = [
  {
    icon: Compass,
    title: "Découvrez films et séries",
    description:
      "Tendances, recommandations, bandes-annonces, notes et casting : explorez un catalogue immense avec l'expérience Seerr que vous aimez déjà.",
  },
  {
    icon: SquarePlus,
    title: "Demandez en un geste",
    description:
      "Un film ou une saison manque au serveur ? Envoyez la demande depuis votre canapé — même saison par saison — et suivez son statut en temps réel.",
  },
  {
    icon: PlayCircle,
    title: "Regardez directement dans l'app",
    description:
      "C'est la différence SeerrPlay : un lecteur intégré diffuse vos contenus dès qu'ils sont disponibles. Plus besoin de jongler entre les applications.",
  },
  {
    icon: ArrowDownToLine,
    title: "Téléchargez pour le hors ligne",
    description:
      "Avion, métro, zones blanches : vos films et épisodes vous suivent partout. Téléchargez en Wi-Fi, regardez sans connexion, sans compromis sur la qualité.",
  },
  {
    icon: Server,
    title: "Jellyfin, Plex et Emby",
    description:
      "Connectez votre serveur média préféré en quelques secondes. SeerrPlay s'occupe de la synchronisation, vous profitez du spectacle.",
  },
  {
    icon: RefreshCw,
    title: "Synchronisé sur tous vos écrans",
    description:
      "Progression, demandes et favoris vous suivent du téléphone à la TV : commencez un épisode ici, terminez-le là.",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-seerr-300">
            Fonctionnalités
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Tout votre univers média,{" "}
            <span className="text-gradient">dans une seule app</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/55 sm:text-lg">
            SeerrPlay ne s'arrête pas aux demandes : c'est la seule application de
            l'écosystème Seerr qui lit aussi vos contenus, sur mobile comme sur TV.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-seerr-panel/60 p-7 transition-all duration-300 hover:border-seerr-400/40 hover:bg-seerr-panel hover:shadow-glow-sm sm:p-9"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-seerr-500/0 blur-3xl transition-all duration-500 group-hover:bg-seerr-500/20"
                aria-hidden="true"
              />
              <div className="relative">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-seerr-500 to-seerr-purple shadow-glow-sm">
                  <feature.icon className="h-6 w-6 text-white" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="mt-2.5 leading-relaxed text-white/55">{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
