export default {
  meta: {
    title: "SeerrPlay — Your movies & shows, everywhere",
    description:
      "SeerrPlay is the mobile & TV companion app for Seerr: discover, request and watch your movies and shows directly from Jellyfin, Plex or Emby.",
  },
  nav: {
    problem: "Why?",
    solution: "The solution",
    features: "Features",
    opensource: "Open Source",
    faq: "FAQ",
    github: "GitHub",
    download: "Download",
    home: "SeerrPlay — home",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    badge: "100% Open Source & Free",
    titleA: "Your movies & shows,",
    titleB: "finally together",
    subtitle1: "Discover, request and",
    subtitleStrong: "watch",
    subtitle2:
      "without ever switching apps. SeerrPlay connects Seerr to your Jellyfin, Plex or Emby server — on mobile and TV.",
    github: "View on GitHub",
    compatible: "Compatible with",
    scrollLabel: "Why?",
    scrollAria: "Discover why SeerrPlay exists",
  },
  problem: {
    tag: "The observation",
    titleA: "A movie night shouldn't",
    titleB: "look like this",
    subtitle:
      "You self-host your media library to be free. But day to day, that freedom costs you constant juggling between apps.",
    todayLabel: "Today",
    afterLabel: "With SeerrPlay",
    appTagline: "one app, on all your screens",
    todayFooter: "One server, three players, a browser… for a single movie.",
    afterFooter: "One single app. Period.",
    mess: [
      { name: "Seerr", detail: "in the browser, to request" },
      { name: "Jellyfin Web", detail: "the video player… on the web" },
      { name: "Streamyfin · Infuse · VidHub", detail: "one player on the phone" },
      { name: "Jellyfin Android TV · Moonfin · Wholphin", detail: "another one on the TV" },
      { name: "Chromecast · Tizen · webOS…", detail: "and even more depending on the screen" },
    ],
    wins: [
      "Built-in Seerr requests",
      "Play directly in the app",
      "Offline downloads",
      "Jellyfin, Plex and Emby united",
      "iPhone, iPad, Mac, Apple TV and Android — Windows soon",
    ],
    pains: [
      {
        title: "The 7-app shuffle",
        description:
          "You request in a browser, check the status in one app, watch in another. And you start all over on every screen in the house.",
      },
      {
        title: "18 players, zero unity",
        description:
          "Jellyfin Web, Streamyfin, Moonfin, Infuse, VidHub, Wholphin, Plezy, Findroid, Lenna… dozens of players exist, yet none handles your Seerr requests or brings your servers together.",
      },
      {
        title: "One app per screen, iOS left behind",
        description:
          "The web, the phone and the TV each have their own player. And on iPhone, iPad and Apple TV, complete solutions can be counted on one hand.",
      },
    ],
    closing1: "SeerrPlay was born from a simple frustration:",
    closing2: "is great for requesting,",
    closing3: "and",
    closing4: "know how to stream — but 18 players later,",
    closing5: "no one connects both on every screen you own",
  },
  howItWorks: {
    tag: "How it works",
    titleA: "Three steps,",
    titleB: "zero friction",
    steps: [
      {
        title: "Connect your server",
        description:
          "Enter your Seerr instance and your Jellyfin, Plex or Emby server. A few seconds is all it takes — no complex configuration.",
      },
      {
        title: "Request your content",
        description:
          "Browse the catalog, pick your movies and seasons, send the request. Track its progress until it's ready.",
      },
      {
        title: "Watch, that's it",
        description:
          "The built-in player takes over: start playback on your phone, your tablet or directly on your TV.",
      },
    ],
  },
  screenshots: {
    tag: "The solution",
    titleA: "One app,",
    titleB: "from the couch to the big screen",
    subtitle: "Every screen has its place in SeerrPlay — and every screen looks like you.",
    rows: [
      {
        tag: "Mobile",
        title: "All of discovery, in the palm of your hand",
        description:
          "Trending, recommendations, detailed pages: the Seerr catalog comes alive in a dark interface designed for your thumb. Find your next movie in seconds.",
        alt: "SeerrPlay on smartphone — movie discovery",
      },
      {
        tag: "Requests",
        title: "One tap, and the server handles the rest",
        description:
          "A movie or a full season: send the request without opening a browser, then follow its status in real time. When it's ready, the play button is already there.",
        alt: "Requesting a movie with one tap in SeerrPlay",
      },
      {
        tag: "Built-in player",
        title: "Tap, watch. Without switching apps",
        description:
          "This is the breakthrough: the built-in player streams directly from your Jellyfin, Plex or Emby server. No more bouncing between four apps to start a movie.",
        alt: "Built-in video playback on mobile and tablet",
      },
      {
        tag: "TV",
        title: "The big screen your library deserves",
        description:
          "On Android TV and Apple TV, your posters shine full-size with smooth remote-control navigation. The living room becomes a movie theater again.",
        alt: "SeerrPlay TV interface on the big screen",
      },
    ],
    banner: {
      alt: "SeerrPlay on TV, tablet and smartphone at the same time",
      caption: "One single app, synced across all your screens.",
    },
  },
  features: {
    tag: "Features",
    titleA: "Your entire media universe,",
    titleB: "in one single app",
    subtitle:
      "SeerrPlay doesn't stop at requests: it's the only app in the Seerr ecosystem that also plays your content, on mobile and TV.",
    items: [
      {
        title: "Discover movies & shows",
        description:
          "Trending, recommendations, trailers, ratings and cast: explore a huge catalog with the Seerr experience you already love.",
      },
      {
        title: "Request in one gesture",
        description:
          "A movie or season missing from the server? Send the request from your couch — even season by season — and track its status in real time.",
      },
      {
        title: "Watch right inside the app",
        description:
          "That's the SeerrPlay difference: a built-in player streams your content as soon as it's available. No more juggling between apps.",
      },
      {
        title: "Download for offline",
        description:
          "Plane, subway, dead zones: your movies and episodes follow you everywhere. Download on Wi-Fi, watch offline, no quality compromise.",
      },
      {
        title: "Jellyfin, Plex and Emby",
        description:
          "Connect your favorite media server in seconds. SeerrPlay handles the sync — you enjoy the show.",
      },
      {
        title: "Synced across all your screens",
        description:
          "Progress, requests and favorites follow you from phone to TV: start an episode here, finish it there.",
      },
    ],
  },
  opensource: {
    badge: "Open source",
    titleA: "Free by conviction,",
    titleB: "like Seerr",
    text1: "SeerrPlay is a community project built on the shoulders of",
    text2:
      ", the open source request-management app born from Overseerr and Jellyseerr. The code is open — and so are ideas.",
    star: "Star on GitHub",
    contribute: "Contribute",
    points: [
      {
        title: "100% open code",
        description: "Every line is public: audit it, learn from it, adapt it.",
      },
      {
        title: "Contributions welcome",
        description: "Issues, translations, pull requests — the project lives thanks to you.",
      },
      {
        title: "Free, forever",
        description: "No subscription, no third-party account, no ads.",
      },
    ],
  },
  download: {
    tag: "Download",
    titleA: "Install SeerrPlay",
    titleB: "today",
    subtitle:
      "Free and open source. Connect your server and find your whole library — requests and playback — in the palm of your hand.",
    soon: "Soon",
    platforms: [
      { label: "Apple", devices: "iPhone · iPad · Mac · Apple TV" },
      { label: "Android", devices: "Phone · Tablet · TV" },
      { label: "Windows", devices: "Coming soon" },
    ],
    discordText: "A question, an idea? The community answers:",
    discordButton: "Join the Discord",
  },
  faq: {
    tag: "FAQ",
    titleA: "Frequently asked",
    titleB: "questions",
    items: [
      {
        question: "Which media servers are supported?",
        answer:
          "SeerrPlay works with Jellyfin, Plex and Emby. Connect your server in seconds: the app syncs your library and streams your content directly through the built-in player.",
      },
      {
        question: "Do I need a Seerr server to use the app?",
        answer:
          "Yes. SeerrPlay is the mobile & TV companion of Seerr (the open source project born from Overseerr and Jellyseerr). Your Seerr instance manages the catalog and requests; SeerrPlay brings them to all your screens — with playback as a bonus.",
      },
      {
        question: "Is the app really free?",
        answer:
          "Yes, 100%. SeerrPlay is an open source, community project: no subscription, no ads, no third-party account. The code is public and contributions are welcome.",
      },
      {
        question: "Can I watch my movies without leaving the app?",
        answer:
          "That's exactly what sets SeerrPlay apart: unlike web request interfaces, the app ships a built-in video player that streams directly from your Jellyfin, Plex or Emby server.",
      },
      {
        question: "Can I download to watch offline?",
        answer:
          "Yes. Download your movies and episodes on mobile or tablet and watch them without a connection — on a plane, in the subway or in dead zones. Your downloads are managed right in the app.",
      },
      {
        question: "On which platforms is SeerrPlay available?",
        answer:
          "On iPhone, iPad, Mac and Apple TV on the Apple side, plus Android (phone, tablet and TV). The Windows version is coming soon. Your requests and progress stay in sync from one screen to another.",
      },
    ],
  },
  footer: {
    description:
      "The mobile & TV app that brings discovery, requests and playback together for your Jellyfin, Plex or Emby server. Free and open source, like Seerr.",
    columns: {
      product: { title: "Product", features: "Features", preview: "Preview", download: "Download", faq: "FAQ" },
      ecosystem: { title: "Ecosystem" },
      opensource: { title: "Open Source", repo: "GitHub repository", bug: "Report a bug", contribute: "Contribute", releases: "Releases" },
      help: { title: "Help & Legal", support: "Support", privacy: "Privacy policy" },
    },
    downloadLink: "Download the app →",
    copyright: "© 2026 SeerrPlay. All rights reserved.",
    basedOn: "Based on the open source project",
  },
  store: {
    appleSmall: "Download on the",
    googleSmall: "GET IT ON",
  },
  language: {
    label: "Language",
    en: "English",
    fr: "Français",
    es: "Español",
    de: "Deutsch",
    it: "Italiano",
  },
};
