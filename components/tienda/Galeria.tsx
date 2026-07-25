"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

export function Galeria({ imgs, alt }: { imgs: string[]; alt: string }) {
  const [ref, embla] = useEmblaCarousel({ axis: "x", loop: false, containScroll: "trimSnaps" });
  const [sel, setSel] = useState(0);
  const [zoom, setZoom] = useState<number | null>(null);

  const sync = useCallback(() => embla && setSel(embla.selectedScrollSnap()), [embla]);
  useEffect(() => {
    if (!embla) return;
    sync();
    embla.on("select", sync).on("reInit", sync);
  }, [embla, sync]);

  useEffect(() => {
    if (zoom === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setZoom(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [zoom]);

  const irA = (i: number) => embla?.scrollTo(i);

  return (
    <div className="min-w-0">
      <div className="relative overflow-hidden rounded-3xl bg-[color:var(--brand-50)]">
        <div ref={ref} className="overflow-hidden">
          <div className="embla-track">
            {imgs.map((src, i) => (
              <button
                key={src}
                onClick={() => setZoom(i)}
                aria-label={`Ampliar foto ${i + 1} de ${alt}`}
                className="relative aspect-square flex-[0_0_100%] cursor-zoom-in"
              >
                <Image
                  src={src}
                  alt={i === 0 ? alt : `${alt} — foto ${i + 1}`}
                  fill
                  priority={i === 0}
                  loading={i === 0 ? "eager" : "lazy"}
                  sizes="(min-width:768px) 50vw, 100vw"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {imgs.length > 1 && (
          <>
            <button
              onClick={() => embla?.scrollPrev()}
              disabled={sel === 0}
              aria-label="Foto anterior"
              className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 backdrop-blur transition disabled:opacity-0"
            >
              ‹
            </button>
            <button
              onClick={() => embla?.scrollNext()}
              disabled={sel === imgs.length - 1}
              aria-label="Foto siguiente"
              className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/70 backdrop-blur transition disabled:opacity-0"
            >
              ›
            </button>
          </>
        )}
      </div>

      {imgs.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {imgs.map((src, i) => (
            <button
              key={src}
              onClick={() => irA(i)}
              aria-label={`Ver foto ${i + 1}`}
              aria-current={i === sel}
              className={
                "relative h-20 w-20 shrink-0 overflow-hidden rounded-xl transition " +
                (i === sel ? "ring-2 ring-[color:var(--accent)]" : "opacity-70 hover:opacity-100")
              }
            >
              <Image src={src} alt="" fill sizes="80px" loading="lazy" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {zoom !== null && (
        <div
          onClick={() => setZoom(null)}
          role="dialog"
          aria-modal="true"
          aria-label={`${alt} ampliada`}
          className="fixed inset-0 z-[60] flex cursor-zoom-out items-center justify-center bg-black/85 p-4"
        >
          <div className="relative h-full max-h-[85vh] w-full max-w-3xl">
            <Image src={imgs[zoom]} alt={alt} fill sizes="90vw" className="object-contain" />
          </div>
          <button onClick={() => setZoom(null)} aria-label="Cerrar" className="absolute right-5 top-5 h-10 w-10 rounded-full bg-white/20 text-white backdrop-blur">
            ✕
          </button>
        </div>
      )}
    </div>
  );
}
