import { currentLanguage } from "@/i18n";

/**
 * Returns the path of a localized screenshot.
 * Images live in /images/screenshots/<lang>/<name> — just drop the translated
 * versions into each language folder (en, fr, es, de, it).
 * The English fallback is handled on the component side via onError.
 */
export function localizedScreenshot(name: string): string {
  return `/images/screenshots/${currentLanguage()}/${name}`;
}

export const FALLBACK_SCREENSHOT_DIR = "/images/screenshots/en";
