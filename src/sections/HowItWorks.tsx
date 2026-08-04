import { Clapperboard, MonitorPlay, Server } from "lucide-react";
import { useTranslation } from "react-i18next";

const STEP_ICONS = [Server, Clapperboard, MonitorPlay];
const STEP_NUMBERS = ["01", "02", "03"];

interface StepItem {
  title: string;
  description: string;
}

export function HowItWorks() {
  const { t } = useTranslation();
  const steps = t("howItWorks.steps", { returnObjects: true }) as StepItem[];

  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-seerr-300">
            {t("howItWorks.tag")}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {t("howItWorks.titleA")}{" "}
            <span className="text-gradient">{t("howItWorks.titleB")}</span>
          </h2>
        </div>

        <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-6 lg:mt-20">
          <div
            className="pointer-events-none absolute left-[16%] right-[16%] top-8 hidden h-px bg-gradient-to-r from-seerr-500/0 via-seerr-400/40 to-seerr-500/0 md:block"
            aria-hidden="true"
          />
          {steps.map((item, i) => {
            const Icon = STEP_ICONS[i];
            return (
              <div key={STEP_NUMBERS[i]} className="relative text-center md:px-4">
                <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-seerr-400/30 bg-seerr-panel shadow-glow-sm">
                  <Icon className="h-7 w-7 text-seerr-300" />
                  <span className="absolute -right-2 -top-2 rounded-full bg-gradient-to-r from-seerr-500 to-seerr-purple px-2 py-0.5 text-[11px] font-bold text-white">
                    {STEP_NUMBERS[i]}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mx-auto mt-2 max-w-sm leading-relaxed text-white/55">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
