import { Code2, GitFork, Github, Heart, Star } from "lucide-react";
import { GITHUB_URL, SEERR_URL } from "@/site";

const POINTS = [
  {
    icon: Code2,
    title: "Code 100 % ouvert",
    description: "Chaque ligne est publique : auditez, apprenez, adaptez.",
  },
  {
    icon: GitFork,
    title: "Contributions bienvenues",
    description: "Issues, traductions, pull requests — le projet vit grâce à vous.",
  },
  {
    icon: Heart,
    title: "Gratuit, pour toujours",
    description: "Pas d'abonnement, pas de compte tiers, pas de publicité.",
  },
];

export function OpenSource() {
  return (
    <section id="opensource" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-seerr-400/20 bg-gradient-to-br from-seerr-800/60 via-seerr-panel to-seerr-900/40 p-8 sm:p-14">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-seerr-purple/25 blur-[100px]"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-seerr-500/25 blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-seerr-200">
                <Github className="h-4 w-4" />
                Open source
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Libre par conviction, <span className="text-gradient">comme Seerr</span>
              </h2>
              <p className="mt-4 leading-relaxed text-white/60">
                SeerrPlay est un projet communautaire construit sur les épaules de{" "}
                <a
                  href={SEERR_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-seerr-300 underline decoration-seerr-400/40 underline-offset-4 transition-colors hover:text-seerr-200"
                >
                  Seerr
                </a>
                , l'application open source de gestion de requêtes née d'Overseerr et
                Jellyseerr. Le code est ouvert, les idées aussi.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-seerr-night transition-all hover:bg-seerr-100"
                >
                  <Star className="h-4 w-4" />
                  Star sur GitHub
                </a>
                <a
                  href={`${GITHUB_URL}/blob/main/CONTRIBUTING.md`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
                >
                  <GitFork className="h-4 w-4" />
                  Contribuer
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-1">
              {POINTS.map((point) => (
                <div
                  key={point.title}
                  className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-seerr-500 to-seerr-purple">
                    <point.icon className="h-5 w-5 text-white" />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{point.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/55">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
