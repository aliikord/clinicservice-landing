"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CONTACT, contactLink } from "@/lib/site";

type Errors = Partial<Record<"nom" | "clinique" | "tel", string>>;

const labelCls =
  "mb-1.5 block text-left font-mono text-[11px] uppercase tracking-[0.1em] text-muted-foreground";
const inputCls = "h-11 rounded-xl text-[15px]";

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [errors, setErrors] = useState<Errors>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const nom = ((data.get("nom") as string) ?? "").trim();
    const clinique = ((data.get("clinique") as string) ?? "").trim();
    const tel = ((data.get("tel") as string) ?? "").trim();
    const message = ((data.get("message") as string) ?? "").trim();

    const next: Errors = {};
    if (!nom) next.nom = "Entrez votre nom.";
    if (!clinique) next.clinique = "Entrez le nom de votre clinique.";
    if (!tel) next.tel = "Entrez un numéro pour qu'on vous rappelle.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("sending");
    const summary =
      `Bonjour, je souhaite une démo ClinicService.\n` +
      `Nom: ${nom}\nClinique: ${clinique}\nTéléphone: ${tel}` +
      (message ? `\nMessage: ${message}` : "");

    try {
      if (CONTACT.formEndpoint) {
        await fetch(CONTACT.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ nom, clinique, tel, message }),
        });
      } else {
        window.open(contactLink(summary), "_blank", "noopener,noreferrer");
      }
      setStatus("done");
    } catch {
      window.open(contactLink(summary), "_blank", "noopener,noreferrer");
      setStatus("done");
    }
  }

  if (status === "done") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="glass-strong mx-auto mt-10 max-w-[520px] rounded-2xl p-8 text-center"
      >
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-brand-bright/15 text-brand-bright">
          <Check className="size-6" />
        </div>
        <h3 className="mb-2 text-[20px] font-semibold">Demande envoyée</h3>
        <p className="text-[15px] leading-[1.6] text-muted-foreground">
          Merci ! Notre équipe vous rappelle sous 2 heures ouvrées. Vous pouvez aussi
          nous écrire directement sur WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="glass-strong mx-auto mt-10 max-w-[560px] rounded-2xl p-6 text-left sm:p-8"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lf-nom" className={labelCls}>Nom *</label>
          <Input
            id="lf-nom"
            name="nom"
            autoComplete="name"
            required
            aria-invalid={!!errors.nom}
            aria-describedby={errors.nom ? "lf-nom-err" : undefined}
            className={inputCls}
            placeholder="Dr. Karim B."
          />
          {errors.nom && (
            <p id="lf-nom-err" className="mt-1.5 text-[13px] text-destructive">{errors.nom}</p>
          )}
        </div>
        <div>
          <label htmlFor="lf-clinique" className={labelCls}>Clinique *</label>
          <Input
            id="lf-clinique"
            name="clinique"
            required
            aria-invalid={!!errors.clinique}
            aria-describedby={errors.clinique ? "lf-clinique-err" : undefined}
            className={inputCls}
            placeholder="Cabinet / Clinique"
          />
          {errors.clinique && (
            <p id="lf-clinique-err" className="mt-1.5 text-[13px] text-destructive">{errors.clinique}</p>
          )}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="lf-tel" className={labelCls}>Téléphone / WhatsApp *</label>
        <Input
          id="lf-tel"
          name="tel"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          required
          aria-invalid={!!errors.tel}
          aria-describedby={errors.tel ? "lf-tel-err" : undefined}
          className={inputCls}
          placeholder="06 XX XX XX XX"
        />
        {errors.tel && (
          <p id="lf-tel-err" className="mt-1.5 text-[13px] text-destructive">{errors.tel}</p>
        )}
      </div>

      <div className="mt-4">
        <label htmlFor="lf-message" className={labelCls}>Message (optionnel)</label>
        <textarea
          id="lf-message"
          name="message"
          rows={3}
          className="w-full rounded-xl border border-input bg-input/30 px-3 py-2 text-[15px] outline-none transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          placeholder="Nombre de praticiens, besoins…"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={status === "sending"}
        className="wave-grad mt-6 h-12 w-full gap-2 rounded-full text-[15px] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_14px_48px_rgba(0,23,108,0.55)]"
      >
        {status === "sending" ? (
          <><Loader2 className="size-4 animate-spin" /> Envoi…</>
        ) : (
          <>Demander ma démo gratuite <ArrowRight className="size-4" /></>
        )}
      </Button>
      <p className="mt-3 text-center text-[12px] text-muted-foreground">
        Réponse sous 2h ouvrées · Installation gratuite 30 jours · Sans carte bancaire
      </p>
    </form>
  );
}
