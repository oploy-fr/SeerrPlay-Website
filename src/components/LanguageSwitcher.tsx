import { useEffect, useRef, useState } from "react";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES, currentLanguage, type Language } from "@/i18n";
import { cn } from "@/lib/utils";

const FLAGS: Record<Language, string> = {
  en: "🇬🇧",
  fr: "🇫🇷",
  es: "🇪🇸",
  de: "🇩🇪",
  it: "🇮🇹",
};

export function LanguageSwitcher({ className }: { className?: string }) {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const active = currentLanguage();

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t("language.label")}
        className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 px-3 py-2 text-sm font-medium text-white/80 transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
      >
        <Globe className="h-4 w-4" />
        <span className="uppercase">{active}</span>
        <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label={t("language.label")}
          className="absolute right-0 top-full z-50 mt-2 w-44 overflow-hidden rounded-xl border border-white/15 bg-seerr-night/95 p-1.5 shadow-glow-sm backdrop-blur-xl"
        >
          {SUPPORTED_LANGUAGES.map((lng) => (
            <li key={lng}>
              <button
                type="button"
                role="option"
                aria-selected={lng === active}
                onClick={() => {
                  void i18n.changeLanguage(lng);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors",
                  lng === active
                    ? "bg-seerr-500/20 font-semibold text-white"
                    : "text-white/70 hover:bg-white/5 hover:text-white"
                )}
              >
                <span aria-hidden="true">{FLAGS[lng]}</span>
                <span className="flex-1 text-left">{t(`language.${lng}`)}</span>
                {lng === active && <Check className="h-4 w-4 text-seerr-300" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
