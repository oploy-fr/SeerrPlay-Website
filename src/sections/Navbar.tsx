import { useEffect, useState } from "react";
import { Github, Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { GITHUB_URL } from "@/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const NAV_LINKS = [
    { label: t("nav.problem"), href: "#problem" },
    { label: t("nav.solution"), href: "#screenshots" },
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.opensource"), href: "#opensource" },
    { label: t("nav.faq"), href: "#faq" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/10 bg-seerr-night/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex items-center" aria-label={t("nav.home")}>
          <img
            src="/logo/primary.svg"
            alt="SeerrPlay"
            className="h-8 w-auto drop-shadow-[0_0_14px_rgba(98,95,255,0.55)]"
          />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3.5 py-2 text-sm font-medium text-white/80 transition-all hover:border-white/30 hover:bg-white/5 hover:text-white"
          >
            <Github className="h-4 w-4" />
            {t("nav.github")}
          </a>
          <a
            href="#download"
            className="inline-flex items-center rounded-lg bg-gradient-to-r from-seerr-500 to-seerr-purple px-4 py-2 text-sm font-semibold text-white shadow-glow-sm transition-all hover:brightness-110"
          >
            {t("nav.download")}
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white/80 hover:bg-white/5"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-seerr-night/95 px-4 pb-6 pt-3 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex gap-3">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/15 px-4 py-3 text-sm font-medium text-white"
              >
                <Github className="h-4 w-4" />
                {t("nav.github")}
              </a>
              <a
                href="#download"
                onClick={() => setOpen(false)}
                className="inline-flex flex-1 items-center justify-center rounded-lg bg-gradient-to-r from-seerr-500 to-seerr-purple px-4 py-3 text-sm font-semibold text-white"
              >
                {t("nav.download")}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
