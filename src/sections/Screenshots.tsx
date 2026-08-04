import { MonitorPlay, PlayCircle, Smartphone, SquarePlus } from "lucide-react";

const ROWS = [
  {
    icon: Smartphone,
    tag: "Mobile",
    title: "Toute la découverte, au creux de la main",
    description:
      "Tendances, recommandations, fiches détaillées : le catalogue Seerr prend vie dans une interface sombre pensée pour le pouce. Trouvez votre prochain film en quelques secondes.",
    image: "/images/portfolio-1.jpg",
    alt: "SeerrPlay sur smartphone — découverte de films",
  },
  {
    icon: SquarePlus,
    tag: "Demandes",
    title: "Un appui, et le serveur s'occupe du reste",
    description:
      "Film ou saison complète : envoyez la demande sans ouvrir de navigateur, puis suivez son statut en temps réel. Quand c'est prêt, le bouton lecture est déjà là.",
    image: "/images/portfolio-3.jpg",
    alt: "Demande de film en un appui dans SeerrPlay",
  },
  {
    icon: PlayCircle,
    tag: "Lecteur intégré",
    title: "Appuyez, regardez. Sans changer d'app",
    description:
      "C'est la rupture : le lecteur intégré stream directement depuis votre serveur Jellyfin, Plex ou Emby. Fini le va-et-vient entre quatre applications pour lancer un film.",
    image: "/images/portfolio-4.jpg",
    alt: "Lecture vidéo intégrée sur mobile et tablette",
  },
  {
    icon: MonitorPlay,
    tag: "TV",
    title: "Le grand écran que mérite votre médiathèque",
    description:
      "Sur Android TV et Apple TV, vos affiches s'affichent en grand avec une navigation fluide à la télécommande. Le salon redevient une salle de cinéma.",
    image: "/images/portfolio-2.jpg",
    alt: "Interface TV de SeerrPlay sur grand écran",
  },
];

export function Screenshots() {
  return (
    <section id="screenshots" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-seerr-purple/15 blur-[130px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-seerr-300">
            La solution
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Une app, <span className="text-gradient">du canapé au grand écran</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/55 sm:text-lg">
            Chaque écran a sa place dans SeerrPlay — et chaque écran vous ressemble.
          </p>
        </div>

        <div className="mt-16 space-y-16 lg:mt-24 lg:space-y-24">
          {ROWS.map((row, i) => (
            <div
              key={row.title}
              className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Visuel encadré avec halo */}
              <div className="group relative">
                <div
                  className={`pointer-events-none absolute -inset-6 rounded-[2rem] blur-3xl transition-opacity duration-500 ${
                    i % 2 === 0 ? "bg-seerr-500/20" : "bg-seerr-purple/20"
                  } opacity-60 group-hover:opacity-100`}
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-glow-sm ring-1 ring-white/5 transition-all duration-500 group-hover:border-seerr-400/40">
                  <img
                    src={row.image}
                    alt={row.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-seerr-night/40 via-transparent to-transparent" />
                </div>
              </div>

              {/* Texte */}
              <div className="lg:max-w-lg">
                <span className="inline-flex items-center gap-2 rounded-full border border-seerr-400/30 bg-seerr-500/10 px-4 py-1.5 text-sm font-medium text-seerr-200">
                  <row.icon className="h-4 w-4 text-seerr-300" />
                  {row.tag}
                </span>
                <h3 className="mt-5 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {row.title}
                </h3>
                <p className="mt-4 leading-relaxed text-white/55 sm:text-lg">
                  {row.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bannière finale multi-appareils */}
        <div className="group relative mt-20 lg:mt-28">
          <div
            className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-seerr-500/15 blur-3xl"
            aria-hidden="true"
          />
          <figure className="relative overflow-hidden rounded-2xl border border-white/10 shadow-glow ring-1 ring-white/5">
            <img
              src="/images/portfolio-5.jpg"
              alt="SeerrPlay sur TV, tablette et smartphone en même temps"
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-seerr-night/70 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-6 text-center sm:p-8">
              <p className="text-lg font-semibold text-white sm:text-xl">
                Une seule application, synchronisée sur tous vos écrans.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
