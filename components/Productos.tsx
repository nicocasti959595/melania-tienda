"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import { productos, categorias, type Categoria } from "@/lib/data";
import { waLink } from "@/lib/site";

const fmt = new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 });

export function Productos() {
  const [cat, setCat] = useState<Categoria | "Todo">("Todo");
  const lista = useMemo(
    () => (cat === "Todo" ? productos : productos.filter((p) => p.categoria === cat)),
    [cat],
  );

  return (
    <section id="destacados" className="py-20 lg:py-28 bg-[color:var(--cream)]/60">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <div>
            <span className="eyebrow mb-4">Vidriera</span>
            <h2 className="font-serif text-4xl lg:text-5xl tracking-tightest leading-[1.05] max-w-2xl">
              Nuestra selección<br />
              <span className="italic text-[color:var(--accent)]">de la semana</span>.
            </h2>
          </div>
          <p className="text-[color:var(--ink-soft)] max-w-md text-sm">
            Stock real del local. Reservás por WhatsApp y te lo apartamos por 24 hs. Probador disponible sin turno.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {(["Todo", ...categorias] as const).map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={
                "px-4 py-2 rounded-full text-sm border transition " +
                (cat === c
                  ? "bg-[color:var(--ink)] text-white border-[color:var(--ink)]"
                  : "bg-white text-[color:var(--ink-soft)] border-[color:var(--line)] hover:border-[color:var(--ink)]")
              }
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {lista.map((p) => (
            <article key={p.slug} className="group">
              <div className="relative aspect-[3/4] overflow-hidden rounded-[18px] bg-white border border-[color:var(--line)]">
                <Image
                  src={p.img}
                  alt={p.nombre}
                  fill
                  sizes="(min-width:1024px) 22vw, 50vw"
                  className="object-cover group-hover:scale-[1.05] transition duration-500"
                />
                {p.badge && (
                  <span className="absolute top-3 left-3 chip bg-[color:var(--accent)] text-white">{p.badge}</span>
                )}
                <a
                  href={waLink(`Hola Melania! Quiero consultar por "${p.nombre}" (${fmt.format(p.precio)}).`)}
                  target="_blank"
                  rel="noopener"
                  className="absolute inset-x-3 bottom-3 text-center py-2 rounded-full bg-white/95 text-[color:var(--ink)] text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition"
                >
                  Consultar por WhatsApp
                </a>
              </div>
              <div className="pt-3 px-1">
                <p className="text-[11px] uppercase tracking-[.18em] text-[color:var(--muted)]">{p.categoria}</p>
                <h3 className="font-serif text-lg leading-tight mt-1">{p.nombre}</h3>
                <p className="text-xs text-[color:var(--muted)] mt-1 line-clamp-1">{p.detalle}</p>
                <p className="mt-2 flex items-baseline gap-2">
                  <span className="text-[color:var(--ink)] font-medium">{fmt.format(p.precio)}</span>
                  {p.precioAnterior && (
                    <span className="text-xs text-[color:var(--muted)] line-through">{fmt.format(p.precioAnterior)}</span>
                  )}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="text-center text-xs text-[color:var(--muted)] mt-10">
          Imágenes y precios de referencia. El stock se confirma por WhatsApp antes del pago.
        </p>
      </div>
    </section>
  );
}
