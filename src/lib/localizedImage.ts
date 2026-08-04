import { currentLanguage } from "@/i18n";

/**
 * Renvoie le chemin d'une capture d'écran localisée.
 * Les images vivent dans /images/screenshots/<lang>/<name> — déposez simplement
 * les versions traduites dans chaque dossier (en, fr, es, de, it).
 * Le repli vers l'anglais est géré côté composant via onError.
 */
export function localizedScreenshot(name: string): string {
  return `/images/screenshots/${currentLanguage()}/${name}`;
}

export const FALLBACK_SCREENSHOT_DIR = "/images/screenshots/en";
