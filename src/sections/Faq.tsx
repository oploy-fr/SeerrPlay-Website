import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ_ITEMS = [
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
];

export function Faq() {
  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-seerr-300">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Questions <span className="text-gradient">fréquentes</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {FAQ_ITEMS.map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`item-${index}`}
              className="rounded-xl border border-white/10 bg-seerr-panel/60 px-5 transition-colors data-[state=open]:border-seerr-400/40"
            >
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-white hover:no-underline [&>svg]:text-seerr-300">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 leading-relaxed text-white/55">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
