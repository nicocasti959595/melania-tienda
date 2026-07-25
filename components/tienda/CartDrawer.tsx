"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart, keyDe } from "./CartContext";
import { fmt } from "@/lib/precio";
import { waLink } from "@/lib/site";

export function CartDrawer() {
  const { items, abierto, setAbierto, setQty, quitar, total, unidades, vaciar } = useCart();

  const mensaje =
    "Hola Melania! Quiero hacer este pedido:\n\n" +
    items.map((i) => `• ${i.nombre} — Talle ${i.talle} / ${i.color} × ${i.qty} — ${fmt.format(i.precio * i.qty)}`).join("\n") +
    `\n\nTotal: ${fmt.format(total)}`;

  return (
    <>
      <div
        onClick={() => setAbierto(false)}
        className={
          "fixed inset-0 z-50 bg-black/40 transition-opacity " +
          (abierto ? "opacity-100" : "pointer-events-none opacity-0")
        }
        aria-hidden
      />
      <aside
        role="dialog"
        aria-label="Carrito de compras"
        aria-modal={abierto}
        className={
          "fixed right-0 top-0 z-50 flex h-dvh w-full max-w-md flex-col bg-white shadow-2xl transition-transform " +
          (abierto ? "translate-x-0" : "translate-x-full")
        }
      >
        <header className="flex items-center justify-between border-b border-[color:var(--line)] px-5 py-4">
          <h2 className="font-serif text-xl">Tu pedido {unidades > 0 && `(${unidades})`}</h2>
          <button onClick={() => setAbierto(false)} aria-label="Cerrar carrito" className="h-9 w-9 rounded-full hover:bg-[color:var(--cream)]">
            ✕
          </button>
        </header>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 px-8 text-center">
            <p className="text-[color:var(--muted)]">Todavía no agregaste nada.</p>
            <button onClick={() => setAbierto(false)} className="btn btn-ghost text-sm">Ver la colección</button>
          </div>
        ) : (
          <ul className="flex-1 overflow-y-auto px-5 py-4">
            {items.map((i) => {
              const k = keyDe(i);
              return (
                <li key={k} className="flex gap-3 border-b border-[color:var(--line)] py-4 last:border-0">
                  <Link href={`/p/${i.slug}`} onClick={() => setAbierto(false)} className="relative h-24 w-20 shrink-0 overflow-hidden rounded-lg bg-[color:var(--brand-50)]">
                    <Image src={i.img} alt={i.nombre} fill sizes="80px" className="object-cover" />
                  </Link>
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-serif text-base">{i.nombre}</p>
                    <p className="text-xs text-[color:var(--muted)]">Talle {i.talle} · {i.color}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex items-center rounded-full border border-[color:var(--line)]">
                        <button onClick={() => setQty(k, i.qty - 1)} aria-label="Quitar una unidad" className="h-7 w-7 text-sm">−</button>
                        <span className="w-6 text-center text-sm font-semibold">{i.qty}</span>
                        <button onClick={() => setQty(k, i.qty + 1)} aria-label="Sumar una unidad" className="h-7 w-7 text-sm">+</button>
                      </div>
                      <span className="ml-auto text-sm font-extrabold">{fmt.format(i.precio * i.qty)}</span>
                    </div>
                    <button onClick={() => quitar(k)} className="mt-1 text-xs text-[color:var(--muted)] underline">Eliminar</button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        {items.length > 0 && (
          <footer className="border-t border-[color:var(--line)] px-5 py-4">
            <div className="mb-3 flex items-baseline justify-between">
              <span className="text-sm text-[color:var(--muted)]">Total</span>
              <span className="font-serif text-2xl font-extrabold">{fmt.format(total)}</span>
            </div>
            <a href={waLink(mensaje)} target="_blank" rel="noopener" className="grad-brand btn w-full justify-center text-white">
              Finalizar por WhatsApp
            </a>
            <button onClick={vaciar} className="mt-2 w-full text-center text-xs text-[color:var(--muted)] underline">
              Vaciar pedido
            </button>
          </footer>
        )}
      </aside>
    </>
  );
}
