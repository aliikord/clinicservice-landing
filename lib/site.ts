// Base path for GitHub Pages. Set NEXT_PUBLIC_BASE_PATH="" for Vercel/SaaS deploys.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "/clinicservice-landing";

export const asset = (path: string) =>
  `${BASE_PATH}${path.startsWith("/") ? path : `/${path}`}`;
