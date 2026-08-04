import { useEffect, useState } from "react";
import { Globe, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES, currentLanguage, type Language } from "@/i18n";

/** Country → site language to suggest (English stays the default, never suggested). */
const COUNTRY_TO_LANGUAGE: Record<string, Language> = Object.fromEntries(
  (
    [
      ["fr", ["FR", "BE", "LU", "MC", "CA", "HT", "SN", "CI", "ML", "NE", "BF", "TG", "BJ", "CD", "CG", "GA", "CM", "MG", "DJ", "KM", "TN", "DZ", "MA", "GP", "MQ", "RE", "NC", "PF"]],
      ["es", ["ES", "MX", "AR", "CO", "CL", "PE", "VE", "EC", "GT", "CU", "BO", "DO", "HN", "PY", "SV", "NI", "CR", "PA", "UY", "GQ", "PR"]],
      ["de", ["DE", "AT", "CH", "LI"]],
      ["it", ["IT", "SM", "VA"]],
    ] as [Language, string[]][]
  ).flatMap(([lng, countries]) => countries.map((c) => [c, lng]))
);

/** Banner copy, in the suggested language + decline button in English. */
const PROMPTS: Record<Exclude<Language, "en">, { flag: string; question: string; accept: string; decline: string }> = {
  fr: { flag: "🇫🇷", question: "Parlez-vous français ?", accept: "Oui, passer au français", decline: "No, I don't speak French" },
  es: { flag: "🇪🇸", question: "¿Hablas español?", accept: "Sí, cambiar a español", decline: "No, I don't speak Spanish" },
  de: { flag: "🇩🇪", question: "Sprichst du Deutsch?", accept: "Ja, zu Deutsch wechseln", decline: "No, I don't speak German" },
  it: { flag: "🇮🇹", question: "Parli italiano?", accept: "Sì, passa all'italiano", decline: "No, I don't speak Italian" },
};

const DISMISS_KEY = "seerrplay-lang-prompt-dismissed";

async function detectCountry(): Promise<string | null> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 4000);
  try {
    const res = await fetch("https://ipwho.is/", { signal: controller.signal });
    if (!res.ok) return null;
    const data = (await res.json()) as { success?: boolean; country_code?: string };
    return data.success === false ? null : (data.country_code ?? null);
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Language suggestion banner based on IP geolocation.
 * Only shown when the user has never picked a language, the site is displayed
 * in English, and their country speaks an available language (≠ English).
 */
export function GeoLanguagePrompt() {
  const { i18n } = useTranslation();
  const [suggested, setSuggested] = useState<Exclude<Language, "en"> | null>(null);

  useEffect(() => {
    // Explicit choice already stored, banner already dismissed, or site already
    // displayed in a non-English language → nothing to suggest.
    if (localStorage.getItem("seerrplay-lang")) return;
    if (localStorage.getItem(DISMISS_KEY)) return;
    if (currentLanguage() !== "en") return;

    let cancelled = false;
    void detectCountry().then((country) => {
      if (cancelled || !country) return;
      const lng = COUNTRY_TO_LANGUAGE[country.toUpperCase()];
      if (
        lng &&
        lng !== "en" &&
        (SUPPORTED_LANGUAGES as readonly string[]).includes(lng)
      ) {
        setSuggested(lng);
      }
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (!suggested) return null;
  const prompt = PROMPTS[suggested];

  const accept = () => {
    void i18n.changeLanguage(suggested); // persisted via the detector
    setSuggested(null);
  };

  const decline = () => {
    localStorage.setItem(DISMISS_KEY, "1");
    setSuggested(null);
  };

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={prompt.question}
      className="fixed bottom-5 left-1/2 z-50 w-[calc(100%-2.5rem)] max-w-md -translate-x-1/2 animate-in slide-in-from-bottom-4 fade-in duration-500"
    >
      <div className="relative rounded-2xl border border-seerr-400/30 bg-seerr-night/95 p-5 shadow-glow backdrop-blur-xl">
        <button
          type="button"
          onClick={decline}
          aria-label="Close"
          className="absolute right-3 top-3 rounded-lg p-1 text-white/40 transition-colors hover:bg-white/5 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-seerr-500 to-seerr-purple text-lg shadow-glow-sm">
            {prompt.flag}
          </span>
          <p className="flex items-center gap-2 font-semibold text-white">
            <Globe className="h-4 w-4 shrink-0 text-seerr-300" />
            {prompt.question}
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={accept}
            className="flex-1 rounded-xl bg-gradient-to-r from-seerr-500 to-seerr-purple px-4 py-2.5 text-sm font-semibold text-white shadow-glow-sm transition-all hover:brightness-110"
          >
            {prompt.accept}
          </button>
          <button
            type="button"
            onClick={decline}
            className="flex-1 rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-white/70 transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
          >
            {prompt.decline}
          </button>
        </div>
      </div>
    </div>
  );
}
