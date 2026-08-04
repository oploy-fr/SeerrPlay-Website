import { ArrowDownToLine, Compass, PlayCircle, RefreshCw, Server, SquarePlus } from "lucide-react";
import { useTranslation } from "react-i18next";

const FEATURE_ICONS = [Compass, SquarePlus, PlayCircle, ArrowDownToLine, Server, RefreshCw];

interface FeatureItem {
  title: string;
  description: string;
}

export function Features() {
  const { t } = useTranslation();
  const features = t("features.items", { returnObjects: true }) as FeatureItem[];

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-seerr-300">
            {t("features.tag")}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {t("features.titleA")}{" "}
            <span className="text-gradient">{t("features.titleB")}</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/55 sm:text-lg">
            {t("features.subtitle")}
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20">
          {features.map((feature, i) => {
            const Icon = FEATURE_ICONS[i];
            return (
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
                    <Icon className="h-6 w-6 text-white" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-white/55">{feature.description}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
