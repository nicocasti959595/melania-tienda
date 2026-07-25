"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef, useState } from "react";

type Props = { imgs: string[]; alt: string; href: string };

export function CardCarrusel(props: Props) {
  // Una sola foto: sin carrusel, sin dots, sin flechas.
  if (props.imgs.length === 1) {
    return (
      <Link href={props.href} tabIndex={-1} aria-hidden className="block h-full w-full">
        <Image src={props.imgs[0]} alt={props.alt} fill sizes="(min-width:768px) 25vw, 50vw" className="object-cover" />
      </Link>
    );
  }
  return <Multi {...props} />;
}

function Multi({ imgs, alt, href }: Props) {
  const router = useRouter();
  const [ref, embla] = useEmblaCarousel({ axis: "x", dragFree: false, loop: false, containScroll: "trimSnaps" });
  const [sel, setSel] = useState(0);
  const [prev, setPrev] = useState(false);
  const [next, setNext] = useState(false);

  const sync = useCallback(() => {
    if (!embla) return;
    setSel(embla.selectedScrollSnap());
    setPrev(embla.canScrollPrev());
    setNext(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    sync();
    embla.on("select", sync).on("reInit", sync);
  }, [embla, sync]);

  // Tap entra al detalle; swipe sólo desliza. Embla v8 no expone clickAllowed(),
  // así que descartamos el click si el puntero se desplazó más de 10px.
  const origen = useRef<{ x: number; y: number } | null>(null);
  const alBajarPuntero = (e: React.PointerEvent) => {
    origen.current = { x: e.clientX, y: e.clientY };
  };
  const alTocar = (e: React.MouseEvent) => {
    const o = origen.current;
    if (o && Math.hypot(e.clientX - o.x, e.clientY - o.y) > 10) return;
    router.push(href);
  };

  const ir = (e: React.MouseEvent, dir: -1 | 1) => {
    e.stopPropagation();
    if (dir === -1) embla?.scrollPrev();
    else embla?.scrollNext();
  };

  return (
    <>
      <div
        ref={ref}
        onPointerDown={alBajarPuntero}
        onClick={alTocar}
        className="h-full w-full cursor-pointer overflow-hidden"
      >
        <div className="embla-track h-full">
          {imgs.map((src, i) => (
            <div key={src} className="relative h-full flex-[0_0_100%]">
              <Image
                src={src}
                alt={i === 0 ? alt : `${alt} — foto ${i + 1}`}
                fill
                sizes="(min-width:768px) 25vw, 50vw"
                loading={i === 0 ? "eager" : "lazy"}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-1.5 flex items-center justify-center gap-1">
        {imgs.map((src, i) => (
          <span
            key={src}
            className={
              "rounded-full transition-all " +
              (i === sel ? "h-[7px] w-[7px] bg-neutral-800" : "h-1.5 w-1.5 bg-neutral-400/70")
            }
          />
        ))}
      </div>

      {prev && (
        <button
          onClick={(e) => ir(e, -1)}
          aria-label="Foto anterior"
          className="absolute left-1.5 top-1/2 z-10 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/60 text-sm opacity-0 backdrop-blur transition group-hover:opacity-100 md:flex"
        >
          ‹
        </button>
      )}
      {next && (
        <button
          onClick={(e) => ir(e, 1)}
          aria-label="Foto siguiente"
          className="absolute right-1.5 top-1/2 z-10 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white/60 text-sm opacity-0 backdrop-blur transition group-hover:opacity-100 md:flex"
        >
          ›
        </button>
      )}
    </>
  );
}
