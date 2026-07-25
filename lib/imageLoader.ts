"use client";

/**
 * Evita el optimizador de Vercel (cupo del plan gratuito → 402 y se caen todas
 * las fotos). Unsplash ya redimensiona y sirve AVIF/WebP por query params.
 */
export default function loader({ src, width, quality }: { src: string; width: number; quality?: number }) {
  if (!src.startsWith("https://images.unsplash.com")) return src;
  const url = new URL(src);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 75));
  return url.toString();
}
