"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { resenas, resumenGoogle, type Resena } from "@/lib/data";
import { site } from "@/lib/site";

function GoogleG({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path fill="#4285F4" d="M45.1 24.5c0-1.6-.1-3.1-.4-4.5H24v8.5h11.8c-.5 2.7-2 5-4.4 6.6v5.500h7.1c4.2-3.8 6.6-9.5 6.6-16.1z" />
      <path fill="#34A853" d="M24 46c6 0 11-2 14.6-5.4l-7.1-5.5c-2 1.3-4.5 2.1-7.5 2.1-5.8 0-10.7-3.9-12.4-9.1H4.3v5.7C7.9 41.1 15.4 46 24 46z" />
      <path fill="#FBBC05" d="M11.6 28.1c-.4-1.3-.7-2.7-.7-4.1s.2-2.8.7-4.1v-5.7H4.3C2.8 17.1 2 20.4 2 24s.8 6.9 2.3 9.8l7.3-5.7z" />
      <path fill="#EA4335" d="M24 10.8c3.3 0 6.2 1.1 8.5 3.3l6.3-6.3C35 4.1 30 2 24 2 15.4 2 7.9 6.9 4.3 14.2l7.3 5.7c1.7-5.2 6.6-9.1 12.4-9.1z" />
    </svg>
  );
}

function Estrellas({ n, className = "h-4 w-4" }: { n: number; className?: string }) {
  return (
    <span className="flex items-center gap-0.5" role="img" aria-label={`${n} de 5 estrellas`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} viewBox="0 0 24 24" className={className} fill={i <= n ? "#fbbc04" : "#d8d0cc"} aria-hidden>
          <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4 6.1 20.5l1.2-6.5L2.5 9.4l6.6-.9z" />
        </svg>
      ))}
    </span>
  );
}

function Tarjeta({ r }: { r: Resena }) {
  return (
    <figure className="flex h-full min-w-0 flex-col rounded-2xl bg-white p-6 text-left">
      <div className="mb-3 flex items-center gap-3">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base font-bold text-white"
          style={{ background: r.avatar }}
          aria-hidden
        >
          {r.inicial}
        </span>
        <div className="min-w-0">
          <figcaption className="truncate text-sm font-bold text-neutral-900">{r.autor}</figcaption>
          <p className="text-xs text-neutral-500">{r.cuando}</p>
        </div>
        <GoogleG className="ml-auto h-5 w-5 shrink-0" />
      </div>
      <Estrellas n={r.rating} />
      <blockquote className="mt-3 text-sm leading-relaxed text-neutral-700">{r.texto}</blockquote>
    </figure>
  );
}

export function Resenas() {
  const [ref, embla] = useEmblaCarousel(
    { loop: true, align: "start", containScroll: false },
    [Autoplay({ delay: 3800, stopOnInteraction: false, stopOnMouseEnter: true })],
  );
  const [sel, setSel] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const sync = useCallback(() => {
    if (!embla) return;
    setSel(embla.selectedScrollSnap());
    setSnaps(embla.scrollSnapList());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    sync();
    embla.on("select", sync).on("reInit", sync);
  }, [embla, sync]);

  return (
    <section className="bg-[color:var(--ink)] py-20 text-[color:var(--cream)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="eyebrow mb-4 justify-center text-[color:var(--gold)]">Clientas</span>
          <h2 className="font-serif text-4xl leading-[1.05] tracking-tightest lg:text-5xl">
            Lo que dicen las que ya
            <span className="italic text-[color:var(--rose)]"> nos visitaron</span>.
          </h2>

          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 rounded-full bg-white/10 px-5 py-2.5">
            <GoogleG className="h-5 w-5" />
            <span className="text-2xl font-extrabold leading-none">{resumenGoogle.promedio}</span>
            <Estrellas n={Math.round(resumenGoogle.promedio)} />
            <span className="text-sm text-[color:var(--rose)]">{resumenGoogle.total} reseñas</span>
          </div>
        </div>

        <div className="relative" role="region" aria-roledescription="carrusel" aria-label="Reseñas de clientas">
          <div ref={ref} className="overflow-hidden">
            <div className="embla-track -ml-4">
              {resenas.map((r) => (
                <div key={r.autor} className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                  <Tarjeta r={r} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => embla?.scrollPrev()}
            aria-label="Reseña anterior"
            className="absolute -left-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 backdrop-blur transition hover:bg-white/25 lg:flex"
          >
            ‹
          </button>
          <button
            onClick={() => embla?.scrollNext()}
            aria-label="Reseña siguiente"
            className="absolute -right-2 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 backdrop-blur transition hover:bg-white/25 lg:flex"
          >
            ›
          </button>
        </div>

        <div className="mt-7 flex items-center justify-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              onClick={() => embla?.scrollTo(i)}
              aria-label={`Ir a la reseña ${i + 1}`}
              aria-current={i === sel}
              className={
                "h-2 rounded-full transition-all " +
                (i === sel ? "w-6 bg-[color:var(--rose)]" : "w-2 bg-white/30 hover:bg-white/50")
              }
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              `${site.name} ${site.address.street} ${site.address.neighborhood}`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[color:var(--rose)] underline underline-offset-4 hover:text-white"
          >
            Ver todas las reseñas en Google
          </a>
          <p className="mt-3 text-xs text-white/45">
            Reseñas de ejemplo para esta demo. Al contratar se conectan las reales del perfil de Google del local.
          </p>
        </div>
      </div>
    </section>
  );
}
