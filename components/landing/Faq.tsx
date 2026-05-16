"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QA = [
  {
    q: "Combien de temps prend la migration depuis notre ancien système ?",
    a: "En général 24 à 72 heures. Notre équipe technique extrait vos données depuis Excel, vos cahiers, ou tout autre logiciel, puis les importe dans ClinicService. Vous validez. Nous formons vos équipes en 2 demi-journées. Vous démarrez le lendemain.",
  },
  {
    q: "Que se passe-t-il si Internet tombe ?",
    a: "L'app continue de fonctionner en mode dégradé : consultation des dossiers patients en cache, prise de notes, photos. Tout se synchronise dès le retour de la connexion. Pour les cliniques sensibles, nous proposons un kit 4G de secours.",
  },
  {
    q: "Mes données sont-elles vraiment privées ?",
    a: "Oui. Chaque clinique a son propre espace isolé. Aucune autre clinique n'a accès à vos données. Fichiers stockés sur Google Cloud Storage avec URLs signées temporaires. Postgres avec sauvegardes automatiques. Export ou suppression possible à tout moment.",
  },
  {
    q: "Puis-je personnaliser le workflow patient ?",
    a: "Absolument. C'est l'un de nos arguments clés. Notre concepteur visuel vous laisse dessiner votre flux : 1 département ou 10, 2 boxes ou 24, transitions automatiques selon le motif de visite.",
  },
  {
    q: "Quels moyens de paiement acceptez-vous ?",
    a: "Tous les modes de paiement algériens : CIB, Edahabia, virement bancaire, chèque. Facturation mensuelle ou annuelle avec 2 mois offerts. Facture conforme aux règles fiscales algériennes.",
  },
  {
    q: "Julia (l'IA) est-elle vraiment dédiée à ma clinique ?",
    a: "Oui. Julia apprend exclusivement de votre clinique. Personnalité, ton, culture et règles configurables par le propriétaire. Trois niveaux de mémoire isolés : session, utilisateur, clinique.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="border-t border-border py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 grid gap-6 md:grid-cols-[1fr_1.5fr] md:gap-20">
          <div>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(91,139,255,0.18)] bg-[rgba(91,139,255,0.06)] px-4 py-1.5 font-mono text-[12px] uppercase tracking-[0.1em] text-brand-bright">
              <span className="size-1.5 rounded-full bg-brand-bright shadow-[0_0_12px_var(--brand-bright)] animate-pulse-glow" />
              06 — Questions
            </div>
          </div>
          <h2 className="text-[clamp(36px,5vw,72px)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Questions <span className="ital-blue">fréquentes.</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="mx-auto max-w-[920px]">
          {QA.map((item, i) => (
            <AccordionItem
              key={i}
              value={`q-${i}`}
              className="border-b border-border py-2"
            >
              <AccordionTrigger className="cursor-pointer py-5 text-left text-[19px] font-medium tracking-[-0.01em] hover:no-underline data-[state=open]:text-brand-bright">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-[15px] leading-[1.7] text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
