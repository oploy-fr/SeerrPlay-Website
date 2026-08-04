import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" fill="currentColor" className={className} aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} aria-hidden="true">
      <path fill="#EA4335" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" />
      <path fill="#FBBC04" d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" />
      <path fill="#4285F4" d="M104.6 499l220.7-221.3 60.1 60.1L104.6 499z" />
      <path fill="#34A853" d="M385.4 174.2l60.1 60.1c21.3 12.3 35.3 25.6 35.3 41.7s-14 29.4-35.3 41.7l-60.1 60.1-80.8-80.8 80.8-122.8z" />
    </svg>
  );
}

interface StoreBadgeProps {
  store: "apple" | "google";
  href: string;
  className?: string;
  small?: boolean;
}

export function StoreBadge({ store, href, className, small }: StoreBadgeProps) {
  const { t } = useTranslation();
  const isApple = store === "apple";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group inline-flex items-center gap-3 rounded-xl border border-white/15 bg-black px-5 py-3",
        "transition-all duration-300 hover:border-seerr-400/60 hover:bg-seerr-950 hover:shadow-glow-sm",
        small && "px-4 py-2.5",
        className
      )}
    >
      {isApple ? (
        <AppleIcon className={cn("h-7 w-7 text-white", small && "h-6 w-6")} />
      ) : (
        <GooglePlayIcon className={cn("h-6 w-6", small && "h-5 w-5")} />
      )}
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[10px] uppercase tracking-wide text-white/60">
          {isApple ? t("store.appleSmall") : t("store.googleSmall")}
        </span>
        <span className={cn("text-lg font-semibold text-white", small && "text-base")}>
          {isApple ? "App Store" : "Google Play"}
        </span>
      </span>
    </a>
  );
}
