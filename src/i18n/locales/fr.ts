export default {
  meta: {
    title: "SeerrPlay — Vos films et séries, partout",
    description:
      "SeerrPlay est l'application mobile et TV compagnon de Seerr : découvrez, demandez et regardez vos films et séries directement depuis Jellyfin, Plex ou Emby.",
  },
  nav: {
    problem: "Pourquoi ?",
    solution: "La solution",
    features: "Fonctionnalités",
    opensource: "Open Source",
    faq: "FAQ",
    github: "GitHub",
    download: "Télécharger",
    home: "SeerrPlay — accueil",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  hero: {
    badge: "100 % Open Source & Gratuit",
    titleA: "Vos films et séries,",
    titleB: "enfin réunis",
    subtitle1: "Découvrez, demandez et",
    subtitleStrong: "regardez",
    subtitle2:
      "sans jamais changer d'application. SeerrPlay connecte Seerr à votre serveur Jellyfin, Plex ou Emby — sur mobile comme sur TV.",
    github: "Voir sur GitHub",
    compatible: "Compatible avec",
    scrollLabel: "Pourquoi ?",
    scrollAria: "Découvrir pourquoi SeerrPlay existe",
  },
  problem: {
    tag: "Le constat",
    titleA: "Une soirée film ne devrait pas",
    titleB: "ressembler à ça",
    subtitle:
      "Vous auto-hébergez votre médiathèque pour être libre. Mais au quotidien, cette liberté se paie en jonglage permanent entre les applications.",
    todayLabel: "Aujourd'hui",
    afterLabel: "Avec SeerrPlay",
    appTagline: "une seule app, sur tous vos écrans",
    todayFooter: "Un serveur, trois lecteurs, un navigateur… pour un seul film.",
    afterFooter: "Une seule app. Point final.",
    mess: [
      { name: "Seerr", detail: "dans le navigateur, pour demander" },
      { name: "Jellyfin Web", detail: "le lecteur vidéo… sur le web" },
      { name: "Streamyfin · Infuse · VidHub", detail: "un lecteur sur le téléphone" },
      { name: "Jellyfin Android TV · Moonfin · Wholphin", detail: "un autre sur la TV" },
      { name: "Chromecast · Tizen · webOS…", detail: "et encore d'autres selon l'écran" },
    ],
    wins: [
      "Demandes Seerr intégrées",
      "Lecture directement dans l'app",
      "Téléchargements hors ligne",
      "Jellyfin, Plex et Emby réunis",
      "iPhone, iPad, Mac, Apple TV et Android — bientôt Windows",
    ],
    pains: [
      {
        title: "Le jeu des 7 applis",
        description:
          "Vous demandez dans un navigateur, vérifiez le statut dans une app, regardez dans une autre. Et vous recommencez sur chaque écran de la maison.",
      },
      {
        title: "18 visionneurs, zéro unité",
        description:
          "Jellyfin Web, Streamyfin, Moonfin, Infuse, VidHub, Wholphin, Plezy, Findroid, Lenna… des dizaines de lecteurs existent, aucun ne gère vos demandes Seerr ni ne réunit vos serveurs.",
      },
      {
        title: "Une app par écran, iOS délaissé",
        description:
          "Le web, le téléphone et la TV ont chacun leur visionneur. Et sur iPhone, iPad et Apple TV, les solutions complètes se comptent sur les doigts d'une main.",
      },
    ],
    closing1: "SeerrPlay est née d'une frustration simple :",
    closing2: "est génial pour demander,",
    closing3: "et",
    closing4: "savent diffuser — mais 18 visionneurs plus tard,",
    closing5: "personne ne relie les deux sur tous vos écrans",
  },
  howItWorks: {
    tag: "Comment ça marche",
    titleA: "Trois étapes,",
    titleB: "zéro friction",
    steps: [
      {
        title: "Connectez votre serveur",
        description:
          "Renseignez votre instance Seerr et votre serveur Jellyfin, Plex ou Emby. Quelques secondes suffisent, aucune configuration complexe.",
      },
      {
        title: "Demandez vos contenus",
        description:
          "Parcourez le catalogue, choisissez vos films et vos saisons, envoyez la demande. Suivez l'avancement jusqu'à ce que ce soit prêt.",
      },
      {
        title: "Regardez, c'est tout",
        description:
          "Le lecteur intégré prend le relais : lancez la lecture sur votre téléphone, votre tablette ou directement sur votre TV.",
      },
    ],
  },
  screenshots: {
    tag: "La solution",
    titleA: "Une app,",
    titleB: "du canapé au grand écran",
    subtitle: "Chaque écran a sa place dans SeerrPlay — et chaque écran vous ressemble.",
    rows: [
      {
        tag: "Mobile",
        title: "Toute la découverte, au creux de la main",
        description:
          "Tendances, recommandations, fiches détaillées : le catalogue Seerr prend vie dans une interface sombre pensée pour le pouce. Trouvez votre prochain film en quelques secondes.",
        alt: "SeerrPlay sur smartphone — découverte de films",
      },
      {
        tag: "Demandes",
        title: "Un appui, et le serveur s'occupe du reste",
        description:
          "Film ou saison complète : envoyez la demande sans ouvrir de navigateur, puis suivez son statut en temps réel. Quand c'est prêt, le bouton lecture est déjà là.",
        alt: "Demande de film en un appui dans SeerrPlay",
      },
      {
        tag: "Lecteur intégré",
        title: "Appuyez, regardez. Sans changer d'app",
        description:
          "C'est la rupture : le lecteur intégré stream directement depuis votre serveur Jellyfin, Plex ou Emby. Fini le va-et-vient entre quatre applications pour lancer un film.",
        alt: "Lecture vidéo intégrée sur mobile et tablette",
      },
      {
        tag: "TV",
        title: "Le grand écran que mérite votre médiathèque",
        description:
          "Sur Android TV et Apple TV, vos affiches s'affichent en grand avec une navigation fluide à la télécommande. Le salon redevient une salle de cinéma.",
        alt: "Interface TV de SeerrPlay sur grand écran",
      },
    ],
    banner: {
      alt: "SeerrPlay sur TV, tablette et smartphone en même temps",
      caption: "Une seule application, synchronisée sur tous vos écrans.",
    },
  },
  features: {
    tag: "Fonctionnalités",
    titleA: "Tout votre univers média,",
    titleB: "dans une seule app",
    subtitle:
      "SeerrPlay ne s'arrête pas aux demandes : c'est la seule application de l'écosystème Seerr qui lit aussi vos contenus, sur mobile comme sur TV.",
    items: [
      {
        title: "Découvrez films et séries",
        description:
          "Tendances, recommandations, bandes-annonces, notes et casting : explorez un catalogue immense avec l'expérience Seerr que vous aimez déjà.",
      },
      {
        title: "Demandez en un geste",
        description:
          "Un film ou une saison manque au serveur ? Envoyez la demande depuis votre canapé — même saison par saison — et suivez son statut en temps réel.",
      },
      {
        title: "Regardez directement dans l'app",
        description:
          "C'est la différence SeerrPlay : un lecteur intégré diffuse vos contenus dès qu'ils sont disponibles. Plus besoin de jongler entre les applications.",
      },
      {
        title: "Téléchargez pour le hors ligne",
        description:
          "Avion, métro, zones blanches : vos films et épisodes vous suivent partout. Téléchargez en Wi-Fi, regardez sans connexion, sans compromis sur la qualité.",
      },
      {
        title: "Jellyfin, Plex et Emby",
        description:
          "Connectez votre serveur média préféré en quelques secondes. SeerrPlay s'occupe de la synchronisation, vous profitez du spectacle.",
      },
      {
        title: "Synchronisé sur tous vos écrans",
        description:
          "Progression, demandes et favoris vous suivent du téléphone à la TV : commencez un épisode ici, terminez-le là.",
      },
    ],
  },
  opensource: {
    badge: "Open source",
    titleA: "Libre par conviction,",
    titleB: "comme Seerr",
    text1: "SeerrPlay est un projet communautaire construit sur les épaules de",
    text2:
      ", l'application open source de gestion de requêtes née d'Overseerr et Jellyseerr. Le code est ouvert, les idées aussi.",
    star: "Star sur GitHub",
    contribute: "Contribuer",
    points: [
      {
        title: "Code 100 % ouvert",
        description: "Chaque ligne est publique : auditez, apprenez, adaptez.",
      },
      {
        title: "Contributions bienvenues",
        description: "Issues, traductions, pull requests — le projet vit grâce à vous.",
      },
      {
        title: "Gratuit, pour toujours",
        description: "Pas d'abonnement, pas de compte tiers, pas de publicité.",
      },
    ],
  },
  download: {
    tag: "Téléchargement",
    titleA: "Installez SeerrPlay",
    titleB: "aujourd'hui",
    subtitle:
      "Gratuite et open source. Connectez votre serveur et retrouvez toute votre médiathèque — demandes et lecture — au creux de la main.",
    soon: "Bientôt",
    platforms: [
      { label: "Apple", devices: "iPhone · iPad · Mac · Apple TV" },
      { label: "Android", devices: "Téléphone · Tablette · TV" },
      { label: "Windows", devices: "Bientôt disponible" },
    ],
    discordText: "Une question, une idée ? La communauté vous répond :",
    discordButton: "Rejoindre le Discord",
  },
  faq: {
    tag: "FAQ",
    titleA: "Questions",
    titleB: "fréquentes",
    items: [
      {
        question: "Quels serveurs médias sont compatibles ?",
        answer:
          "SeerrPlay fonctionne avec Jellyfin, Plex et Emby. Connectez votre serveur en quelques secondes : l'application synchronise votre médiathèque et diffuse vos contenus directement via le lecteur intégré.",
      },
      {
        question: "Faut-il un serveur Seerr pour utiliser l'application ?",
        answer:
          "Oui. SeerrPlay est le compagnon mobile et TV de Seerr (le projet open source né d'Overseerr et Jellyseerr). Votre instance Seerr gère le catalogue et les demandes, SeerrPlay vous les apporte sur tous vos écrans — avec la lecture en bonus.",
      },
      {
        question: "L'application est-elle vraiment gratuite ?",
        answer:
          "Oui, à 100 %. SeerrPlay est un projet open source et communautaire : pas d'abonnement, pas de publicité, pas de compte tiers. Le code est public et les contributions sont les bienvenues.",
      },
      {
        question: "Puis-je regarder mes films sans quitter l'app ?",
        answer:
          "C'est justement ce qui distingue SeerrPlay : contrairement aux interfaces web de demandes, l'application embarque un lecteur vidéo intégré qui stream directement depuis votre serveur Jellyfin, Plex ou Emby.",
      },
      {
        question: "Puis-je télécharger pour regarder hors ligne ?",
        answer:
          "Oui. Téléchargez vos films et épisodes sur mobile ou tablette et regardez-les sans connexion — dans l'avion, le métro ou les zones blanches. Vos téléchargements se gèrent directement dans l'application.",
      },
      {
        question: "Sur quelles plateformes SeerrPlay est-il disponible ?",
        answer:
          "Sur iPhone, iPad, Mac et Apple TV côté Apple, ainsi que sur Android (téléphone, tablette et TV). La version Windows arrive bientôt. Vos demandes et votre progression restent synchronisées d'un écran à l'autre.",
      },
    ],
  },
  footer: {
    description:
      "L'application mobile et TV qui réunit découverte, demandes et lecture pour votre serveur Jellyfin, Plex ou Emby. Gratuite et open source, comme Seerr.",
    columns: {
      product: { title: "Produit", features: "Fonctionnalités", preview: "Aperçu", download: "Télécharger", faq: "FAQ" },
      ecosystem: { title: "Écosystème" },
      opensource: { title: "Open Source", repo: "Dépôt GitHub", bug: "Signaler un bug", contribute: "Contribuer", releases: "Versions" },
      help: { title: "Aide & Légal", support: "Support", privacy: "Privacy policy" },
    },
    downloadLink: "Télécharger l'application →",
    copyright: "© 2026 SeerrPlay. Tous droits réservés.",
    basedOn: "Basé sur le projet open source",
  },
  store: {
    appleSmall: "Télécharger sur l'",
    googleSmall: "Disponible sur",
  },
  language: {
    label: "Langue",
    en: "English",
    fr: "Français",
    es: "Español",
    de: "Deutsch",
    it: "Italiano",
  },
};
