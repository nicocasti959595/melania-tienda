"use client";
import { useSyncExternalStore } from "react";

const QUERIES = [
  { q: "(min-width: 1024px)", cols: 4 },
  { q: "(min-width: 640px)", cols: 3 },
];

function suscribir(cb: () => void) {
  const mqls = QUERIES.map(({ q }) => window.matchMedia(q));
  mqls.forEach((m) => m.addEventListener("change", cb));
  // Los eventos `change` de matchMedia no llegan cuando el viewport se emula
  // (devtools / preview), así que `resize` es la red de seguridad.
  window.addEventListener("resize", cb);
  return () => {
    mqls.forEach((m) => m.removeEventListener("change", cb));
    window.removeEventListener("resize", cb);
  };
}

function leer() {
  for (const { q, cols } of QUERIES) if (window.matchMedia(q).matches) return cols;
  return 2;
}

/** 2 mobile / 3 tablet / 4 desktop. En SSR arranca en 2 (mobile-first). */
export function useCols() {
  return useSyncExternalStore(suscribir, leer, () => 2);
}
