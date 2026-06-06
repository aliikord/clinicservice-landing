// Base path for GitHub Pages. Set NEXT_PUBLIC_BASE_PATH="" for Vercel/SaaS deploys.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/clinicservice-landing";

export const asset = (path: string) =>
  `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;

// ---- Contact / lead config — FILL THESE with your real details ----
export const CONTACT = {
  // WhatsApp number, digits only with country code, e.g. "213661234567"
  whatsapp: "213XXXXXXXXX", // TODO: replace with your real WhatsApp number
  phoneDisplay: "+213 XX XX XX XX", // TODO: pretty phone for display
  email: "contact@clinicservice.app",
  city: "Alger, Algérie",
  // Optional form backend (e.g. a Formspree/Web3Forms URL). If empty, the
  // demo form hands off to WhatsApp with the details prefilled.
  formEndpoint: "",
} as const;

export const whatsappLink = (message: string) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(message)}`;

// True once a real WhatsApp number is set (no "X" placeholder left).
export const whatsappReady = !CONTACT.whatsapp.includes("X");

// Best available contact link: WhatsApp if configured, else a prefilled email.
export const contactLink = (message: string) =>
  whatsappReady
    ? whatsappLink(message)
    : `mailto:${CONTACT.email}?subject=${encodeURIComponent(
        "Demande de démo ClinicService",
      )}&body=${encodeURIComponent(message)}`;
