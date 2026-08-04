import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en";
import fr from "./locales/fr";
import es from "./locales/es";
import de from "./locales/de";
import it from "./locales/it";

export const SUPPORTED_LANGUAGES = ["en", "fr", "es", "de", "it"] as const;
export type Language = (typeof SUPPORTED_LANGUAGES)[number];

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fr: { translation: fr },
      es: { translation: es },
      de: { translation: de },
      it: { translation: it },
    },
    fallbackLng: "en",
    supportedLngs: [...SUPPORTED_LANGUAGES],
    nonExplicitSupportedLngs: true,
    interpolation: { escapeValue: false },
    returnObjects: true,
    detection: {
      // Anglais par défaut : seul un choix explicite (sélecteur ou bannière
      // géolocalisée) est mémorisé ici. La langue du navigateur ne force rien.
      order: ["localStorage"],
      caches: ["localStorage"],
      lookupLocalStorage: "seerrplay-lang",
    },
  });

/** Langue active normalisée (ex. "fr-CA" → "fr"), avec repli sur l'anglais. */
export function currentLanguage(): Language {
  const lng = (i18n.resolvedLanguage || i18n.language || "en").slice(0, 2);
  return (SUPPORTED_LANGUAGES as readonly string[]).includes(lng) ? (lng as Language) : "en";
}

function applyDocumentMetadata(lng: string) {
  document.documentElement.lang = lng;
  const t = i18n.getFixedT(lng);
  document.title = t("meta.title");
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute("content", t("meta.description"));
}

i18n.on("languageChanged", applyDocumentMetadata);
if (i18n.isInitialized) applyDocumentMetadata(currentLanguage());

export default i18n;
