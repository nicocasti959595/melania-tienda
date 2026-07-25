"use client";
import { useMemo, useState } from "react";
import { productos, categorias, type Categoria } from "@/lib/data";
import { ProductGrid } from "./tienda/ProductGrid";

export function Productos() {
  const [cat, setCat] = useState<Categoria | "Todo">("Todo");
  const lista = useMemo(
    () => (cat === "Todo" ? productos : productos.filter((p) => p.categoria === cat)),
    [cat],
  );

  return (
    <section id="destacados" className="bg-neutral-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <span className="eyebrow mb-4">Vidriera</span>
            <h2 className="max-w-2xl font-serif text-4xl leading-[1.05] tracking-tightest lg:text-5xl">
              Nuestra selección<br />
              <span className="italic text-[color:var(--accent)]">de la semana</span>.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[color:var(--ink-soft)]">
            Stock real del local. Deslizá las fotos sin salir de la grilla, tocá para ver el detalle.
            Reservás por WhatsApp y te lo apartamos 24 hs.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Filtrar por categoría"
          className="mb-6 flex flex-wrap gap-2"
        >
          {(["Todo", ...categorias] as const).map((c) => (
            <button
              key={c}
              role="tab"
              aria-selected={cat === c}
              onClick={() => setCat(c)}
              className={
                "min-h-11 rounded-full border px-4 text-sm transition " +
                (cat === c
                  ? "border-[color:var(--ink)] bg-[color:var(--ink)] text-white"
                  : "border-[color:var(--line)] bg-white text-[color:var(--ink-soft)] hover:border-[color:var(--ink)]")
              }
            >
              {c}
            </button>
          ))}
        </div>

        <ProductGrid productos={lista} />

        <p className="mt-10 text-center text-xs text-[color:var(--muted)]">
          Imágenes y precios de referencia. El stock se confirma por WhatsApp antes del pago.
        </p>
      </div>
    </section>
  );
}
