import { MonitorPlay, PlayCircle, Smartphone, SquarePlus } from "lucide-react";
import { useTranslation } from "react-i18next";
import { FALLBACK_SCREENSHOT_DIR, localizedScreenshot } from "@/lib/localizedImage";

const ROW_ICONS = [Smartphone, SquarePlus, PlayCircle, MonitorPlay];
const ROW_IMAGES = ["mobile.jpg", "request.jpg", "player.jpg", "tv.jpg"];

interface RowItem {
  tag: string;
  title: string;
  description: string;
  alt: string;
}

/** Falls back to the English screenshot when the localized version doesn't exist yet. */
function fallbackToEnglish(e: React.SyntheticEvent<HTMLImageElement>) {
  const img = e.currentTarget;
  if (img.dataset.fallbackApplied) return;
  img.dataset.fallbackApplied = "true";
  img.src = `${FALLBACK_SCREENSHOT_DIR}/${img.dataset.name}`;
}

export function Screenshots() {
  const { t } = useTranslation();
  const rows = t("screenshots.rows", { returnObjects: true }) as RowItem[];

  return (
    <section id="screenshots" className="relative overflow-hidden py-24 sm:py-32">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-seerr-purple/15 blur-[130px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-seerr-300">
            {t("screenshots.tag")}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {t("screenshots.titleA")}{" "}
            <span className="text-gradient">{t("screenshots.titleB")}</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/55 sm:text-lg">
            {t("screenshots.subtitle")}
          </p>
        </div>

        <div className="mt-16 space-y-16 lg:mt-24 lg:space-y-24">
          {rows.map((row, i) => {
            const Icon = ROW_ICONS[i];
            const imageName = ROW_IMAGES[i];
            const isPhone = i < 2; // mobile, requests → phone frame
            const isPlayer = i === 2; // built-in player → landscape 16:9 frame
            return (
              <div
                key={row.title}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Framed visual with halo */}
                <div className="group relative">
                  <div
                    className={`pointer-events-none absolute -inset-6 rounded-[2rem] blur-3xl transition-opacity duration-500 ${
                      i % 2 === 0 ? "bg-seerr-500/20" : "bg-seerr-purple/20"
                    } opacity-60 group-hover:opacity-100`}
                    aria-hidden="true"
                  />
                  {isPhone ? (
                    <div className="relative mx-auto w-full max-w-[290px]">
                      {/* Phone frame */}
                      <div className="relative overflow-hidden rounded-[2.6rem] border border-white/15 bg-seerr-night p-[10px] shadow-glow ring-1 ring-white/10 transition-all duration-500 group-hover:border-seerr-400/40">
                        <img
                          src={localizedScreenshot(imageName)}
                          data-name={imageName}
                          onError={fallbackToEnglish}
                          alt={row.alt}
                          loading="lazy"
                          className="w-full rounded-[2rem] transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-glow-sm ring-1 ring-white/5 transition-all duration-500 group-hover:border-seerr-400/40">
                      <img
                        src={localizedScreenshot(imageName)}
                        data-name={imageName}
                        onError={fallbackToEnglish}
                        alt={row.alt}
                        loading="lazy"
                        className={`w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] ${
                          isPlayer ? "aspect-video" : "aspect-[4/3]"
                        }`}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-seerr-night/40 via-transparent to-transparent" />
                    </div>
                  )}
                </div>

                {/* Text */}
                <div className="lg:max-w-lg">
                  <span className="inline-flex items-center gap-2 rounded-full border border-seerr-400/30 bg-seerr-500/10 px-4 py-1.5 text-sm font-medium text-seerr-200">
                    <Icon className="h-4 w-4 text-seerr-300" />
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
            );
          })}
        </div>

        {/* Final multi-device banner */}
        <div className="group relative mt-20 lg:mt-28">
          <div
            className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-seerr-500/15 blur-3xl"
            aria-hidden="true"
          />
          <figure className="relative overflow-hidden rounded-2xl border border-white/10 shadow-glow ring-1 ring-white/5">
            <img
              src={localizedScreenshot("devices.jpg")}
              data-name="devices.jpg"
              onError={fallbackToEnglish}
              alt={t("screenshots.banner.alt")}
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-seerr-night/70 via-transparent to-transparent" />
            <figcaption className="absolute bottom-0 left-0 right-0 p-6 text-center sm:p-8">
              <p className="text-lg font-semibold text-white sm:text-xl">
                {t("screenshots.banner.caption")}
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
