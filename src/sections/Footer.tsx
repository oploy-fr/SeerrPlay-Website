import { Github, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";
import { DiscordIcon } from "@/components/DiscordIcon";
import { DISCORD_URL, GITHUB_URL, SEERR_URL, SERVER_LINKS, STORE_LINKS } from "@/site";

const SOCIALS = [
  { icon: Github, href: GITHUB_URL, label: "GitHub" },
  { icon: DiscordIcon, href: DISCORD_URL, label: "Discord" },
  { icon: Twitter, href: "https://x.com/", label: "X (Twitter)" },
];

export function Footer() {
  const { t } = useTranslation();

  const COLUMNS = [
    {
      title: t("footer.columns.product.title"),
      links: [
        { label: t("footer.columns.product.features"), href: "#features" },
        { label: t("footer.columns.product.preview"), href: "#screenshots" },
        { label: t("footer.columns.product.download"), href: "#download" },
        { label: t("footer.columns.product.faq"), href: "#faq" },
      ],
    },
    {
      title: t("footer.columns.ecosystem.title"),
      links: [
        { label: "Seerr", href: SEERR_URL },
        { label: "Jellyfin", href: SERVER_LINKS.jellyfin },
        { label: "Plex", href: SERVER_LINKS.plex },
        { label: "Emby", href: SERVER_LINKS.emby },
      ],
    },
    {
      title: t("footer.columns.opensource.title"),
      links: [
        { label: t("footer.columns.opensource.repo"), href: GITHUB_URL },
        { label: t("footer.columns.opensource.bug"), href: `${GITHUB_URL}/issues` },
        { label: t("footer.columns.opensource.contribute"), href: `${GITHUB_URL}/blob/main/CONTRIBUTING.md` },
        { label: t("footer.columns.opensource.releases"), href: `${GITHUB_URL}/releases` },
      ],
    },
    {
      title: t("footer.columns.help.title"),
      links: [
        { label: t("footer.columns.help.support"), href: "/support.html" },
        { label: t("footer.columns.help.privacy"), href: "/privacy.html" },
        { label: "Discord", href: DISCORD_URL },
      ],
    },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-seerr-night">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center">
              <img
                src="/logo/primary.svg"
                alt="SeerrPlay"
                className="h-8 w-auto drop-shadow-[0_0_14px_rgba(98,95,255,0.55)]"
              />
            </a>
            <p className="mt-4 max-w-sm leading-relaxed text-white/50">
              {t("footer.description")}
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white/60 transition-all hover:border-seerr-400/50 hover:bg-seerr-500/10 hover:text-white"
                >
                  <social.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
            <a
              href={STORE_LINKS.ios}
              className="mt-6 inline-block text-sm font-medium text-seerr-300 underline decoration-seerr-400/40 underline-offset-4 transition-colors hover:text-seerr-200"
            >
              {t("footer.downloadLink")}
            </a>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">{t("footer.copyright")}</p>
          <p className="text-sm text-white/40">
            {t("footer.basedOn")}{" "}
            <a
              href={SEERR_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-seerr-300 transition-colors hover:text-seerr-200"
            >
              Seerr
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
