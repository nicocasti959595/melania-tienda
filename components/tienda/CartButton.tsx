"use client";
import { useCart } from "./CartContext";

export function CartButton() {
  const { unidades, setAbierto } = useCart();
  return (
    <button
      onClick={() => setAbierto(true)}
      aria-label={`Abrir carrito${unidades ? ` (${unidades} prendas)` : ""}`}
      className="relative flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-[color:var(--cream)]"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M6 7h12l-1 12H7L6 7z" />
        <path d="M9 7a3 3 0 0 1 6 0" />
      </svg>
      {unidades > 0 && (
        <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[color:var(--accent)] px-1 text-[11px] font-bold text-white">
          {unidades}
        </span>
      )}
    </button>
  );
}
