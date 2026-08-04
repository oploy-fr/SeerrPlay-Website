import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTranslation } from "react-i18next";

interface FaqItem {
  question: string;
  answer: string;
}

export function Faq() {
  const { t } = useTranslation();
  const items = t("faq.items", { returnObjects: true }) as FaqItem[];

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-seerr-300">
            {t("faq.tag")}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            {t("faq.titleA")} <span className="text-gradient">{t("faq.titleB")}</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-3">
          {items.map((item, index) => (
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
