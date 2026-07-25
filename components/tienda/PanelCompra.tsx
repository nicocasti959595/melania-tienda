"use client";
import { useState } from "react";
import type { Producto } from "@/lib/data";
import { fmt, aConsultar, hayOferta, precioFinal, pctDescuento, comprable } from "@/lib/precio";
import { useCart } from "./CartContext";
import { waLink } from "@/lib/site";

export function PanelCompra({ p }: { p: Producto }) {
  const { agregar, setAbierto } = useCart();
  const disponibles = p.talles.filter((t) => !p.tallesAgotados?.includes(t));
  const [talle, setTalle] = useState<string | null>(disponibles.length === 1 ? disponibles[0] : null);
  const [color, setColor] = useState(p.colores.length === 1 ? p.colores[0].nombre : "");
  const [fav, setFav] = useState(false);
  const [ok, setOk] = useState(false);
  const [error, setError] = useState("");

  const final = precioFinal(p);
  const puedeComprar = comprable(p);

  const alCarrito = () => {
    if (!talle) return setError("Elegí un talle para continuar.");
    if (!color) return setError("Elegí un color para continuar.");
    setError("");
    agregar({ slug: p.slug, nombre: p.nombre, img: p.imgs[0], precio: final, talle, color });
    setOk(true);
    setTimeout(() => setOk(false), 2000);
    setAbierto(true);
  };

  return (
    <div className="min-w-0">
      <p className="text-sm font-bold uppercase tracking-wider text-[color:var(--brand-400)]">{p.categoria}</p>

      <div className="mt-1 flex items-start gap-3">
        <h1 className="flex-1 font-serif text-3xl font-extrabold leading-tight text-[color:var(--ink)]">{p.nombre}</h1>
        <button
          onClick={() => setFav((v) => !v)}
          aria-label={fav ? "Quitar de favoritos" : "Agregar a favoritos"}
          aria-pressed={fav}
          className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color:var(--line)] transition active:scale-90"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill={fav ? "var(--accent)" : "none"} stroke="var(--accent)" strokeWidth="1.8">
            <path d="M12 20.5s-7.5-4.7-7.5-10a4.3 4.3 0 0 1 7.5-2.8 4.3 4.3 0 0 1 7.5 2.8c0 5.3-7.5 10-7.5 10z" />
          </svg>
        </button>
      </div>

      <div className="mt-4 flex flex-wrap items-baseline gap-3">
        {aConsultar(p) ? (
          <span className="font-serif text-3xl font-extrabold text-[color:var(--accent)]">A consultar</span>
        ) : (
          <>
            {hayOferta(p) && (
              <span className="text-lg text-[color:var(--muted)] line-through">{fmt.format(p.precio)}</span>
            )}
            <span className="font-serif text-3xl font-extrabold text-[color:var(--accent)]">{fmt.format(final)}</span>
            {hayOferta(p) && (
              <span className="rounded-full bg-[color:var(--sale)] px-3 py-1 text-xs font-bold text-white">
                -{pctDescuento(p)}% OFF
              </span>
            )}
          </>
        )}
      </div>

      {!p.stock && (
        <p className="mt-3 inline-block rounded-full bg-neutral-800 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
          Agotado
        </p>
      )}

      <p className="mt-5 text-[color:var(--ink-soft)]">{p.descripcion}</p>

      <fieldset className="mt-7">
        <legend className="mb-2 text-sm font-bold text-[color:var(--ink)]">
          Talle {talle && <span className="font-normal text-[color:var(--muted)]">· {talle}</span>}
        </legend>
        <div className="flex flex-wrap gap-2">
          {p.talles.map((t) => {
            const agotado = p.tallesAgotados?.includes(t);
            return (
              <button
                key={t}
                onClick={() => { setTalle(t); setError(""); }}
                disabled={agotado}
                aria-pressed={talle === t}
                className={
                  "min-h-11 min-w-11 rounded-full border px-4 text-sm transition " +
                  (agotado
                    ? "cursor-not-allowed border-[color:var(--line)] text-[color:var(--muted)] line-through opacity-50"
                    : talle === t
                      ? "border-[color:var(--accent)] bg-[color:var(--accent)] text-white"
                      : "border-[color:var(--line)] hover:border-[color:var(--accent)]")
                }
              >
                {t}
              </button>
            );
          })}
        </div>
      </fieldset>

      <fieldset className="mt-6">
        <legend className="mb-2 text-sm font-bold text-[color:var(--ink)]">
          Color {color && <span className="font-normal text-[color:var(--muted)]">· {color}</span>}
        </legend>
        <div className="flex flex-wrap gap-2">
          {p.colores.map((c) => (
            <button
              key={c.nombre}
              onClick={() => { setColor(c.nombre); setError(""); }}
              aria-pressed={color === c.nombre}
              className={
                "flex min-h-11 items-center gap-2 rounded-full border px-3 text-sm transition " +
                (color === c.nombre
                  ? "border-[color:var(--accent)] bg-[color:var(--brand-50)]"
                  : "border-[color:var(--line)] hover:border-[color:var(--accent)]")
              }
            >
              <span className="h-5 w-5 rounded-full border border-black/10" style={{ background: c.hex }} />
              {c.nombre}
            </button>
          ))}
        </div>
      </fieldset>

      {error && <p role="alert" className="mt-4 text-sm font-medium text-[color:var(--sale)]">{error}</p>}

      <div className="mt-7">
        {puedeComprar ? (
          <button
            onClick={alCarrito}
            className={
              "btn w-full justify-center text-white transition " + (ok ? "bg-emerald-600" : "grad-brand")
            }
          >
            {ok ? "✓ ¡Agregado!" : "Agregar al carrito"}
          </button>
        ) : (
          <a
            href={waLink(`Hola Melania! Quiero consultar por "${p.nombre}".`)}
            target="_blank"
            rel="noopener"
            className="btn btn-primary w-full justify-center"
          >
            {p.stock ? "Consultar por WhatsApp" : "Avisame cuando vuelva"}
          </a>
        )}
      </div>

      <dl className="mt-8 space-y-2 border-t border-[color:var(--line)] pt-6 text-sm">
        <div className="flex gap-2">
          <dt className="font-bold text-[color:var(--ink)]">Composición:</dt>
          <dd className="text-[color:var(--ink-soft)]">{p.composicion}</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-bold text-[color:var(--ink)]">Envíos:</dt>
          <dd className="text-[color:var(--ink-soft)]">CABA y GBA en 24/48 hs · Todo el país por Andreani</dd>
        </div>
        <div className="flex gap-2">
          <dt className="font-bold text-[color:var(--ink)]">Cambios:</dt>
          <dd className="text-[color:var(--ink-soft)]">15 días con etiqueta y comprobante</dd>
        </div>
      </dl>
    </div>
  );
}
