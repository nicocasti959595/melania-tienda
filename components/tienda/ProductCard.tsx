"use client";
import Link from "next/link";
import { useState } from "react";
import type { Producto } from "@/lib/data";
import { fmt, aConsultar, hayOferta, precioFinal, pctDescuento, comprable } from "@/lib/precio";
import { CardCarrusel } from "./CardCarrusel";
import { useCart } from "./CartContext";

export function ProductCard({ p, aspecto }: { p: Producto; aspecto: string }) {
  const { agregar, setAbierto } = useCart();
  const [fav, setFav] = useState(false);
  const final = precioFinal(p);
  const puedeComprar = comprable(p);
  const href = `/p/${p.slug}`;

  const alCarrito = () => {
    if (!puedeComprar) return;
    agregar({
      slug: p.slug,
      nombre: p.nombre,
      img: p.imgs[0],
      precio: final,
      talle: p.talles.find((t) => !p.tallesAgotados?.includes(t)) ?? p.talles[0],
      color: p.colores[0].nombre,
    });
    setAbierto(true);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-lg bg-white">
      <div className="relative w-full" style={{ aspectRatio: aspecto }}>
        <CardCarrusel imgs={p.imgs} alt={p.nombre} href={href} />

        {p.destacado && (
          <span className="grad-brand pointer-events-none absolute left-1.5 top-1.5 z-10 rounded px-1.5 py-0.5 text-[11px] font-bold text-white">
            ★ Destacado
          </span>
        )}

        {!p.stock && (
          <span className="pointer-events-none absolute inset-x-0 top-0 z-10 bg-neutral-800/75 py-1 text-center text-[11px] font-bold uppercase tracking-wider text-white">
            Agotado
          </span>
        )}

        <button
          onClick={() => setFav((v) => !v)}
          aria-label={fav ? `Quitar ${p.nombre} de favoritos` : `Agregar ${p.nombre} a favoritos`}
          aria-pressed={fav}
          className="absolute right-1.5 top-1.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/70 backdrop-blur transition active:scale-90"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill={fav ? "var(--accent)" : "none"} stroke={fav ? "var(--accent)" : "#4a4a4a"} strokeWidth="1.8">
            <path d="M12 20.5s-7.5-4.7-7.5-10a4.3 4.3 0 0 1 7.5-2.8 4.3 4.3 0 0 1 7.5 2.8c0 5.3-7.5 10-7.5 10z" />
          </svg>
        </button>
      </div>

      <div className="px-1 pb-1.5 pt-1">
        <Link href={href} className="line-clamp-1 block text-xs text-neutral-600 hover:text-[color:var(--accent)]">
          {p.nombre}
        </Link>
        <div className="mt-0.5 flex items-center justify-between gap-1">
          {aConsultar(p) ? (
            <span className="text-sm font-extrabold text-neutral-900">A consultar</span>
          ) : hayOferta(p) ? (
            <span className="flex items-baseline gap-1">
              <span className="text-sm font-extrabold text-[color:var(--sale)]">{fmt.format(final)}</span>
              <span className="text-[11px] font-bold text-[color:var(--sale)]">-{pctDescuento(p)}%</span>
            </span>
          ) : (
            <span className="text-sm font-extrabold text-neutral-900">{fmt.format(final)}</span>
          )}

          <button
            onClick={alCarrito}
            disabled={!puedeComprar}
            aria-label={puedeComprar ? `Agregar ${p.nombre} al carrito` : `${p.nombre} no disponible`}
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[color:var(--line)] transition hover:bg-[color:var(--brand-50)] active:scale-90 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M6 7h12l-1 12H7L6 7z" />
              <path d="M9 7a3 3 0 0 1 6 0" />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}
