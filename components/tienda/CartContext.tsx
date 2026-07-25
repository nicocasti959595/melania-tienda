"use client";
import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartItem = {
  slug: string;
  nombre: string;
  img: string;
  precio: number;
  talle: string;
  color: string;
  qty: number;
};

type CartCtx = {
  items: CartItem[];
  agregar: (i: Omit<CartItem, "qty">, qty?: number) => void;
  quitar: (key: string) => void;
  setQty: (key: string, qty: number) => void;
  vaciar: () => void;
  total: number;
  unidades: number;
  abierto: boolean;
  setAbierto: (v: boolean) => void;
};

export const keyDe = (i: Pick<CartItem, "slug" | "talle" | "color">) => `${i.slug}|${i.talle}|${i.color}`;

const Ctx = createContext<CartCtx | null>(null);
const STORAGE = "melania.cart.v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [abierto, setAbierto] = useState(false);
  const [hidratado, setHidratado] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setHidratado(true);
  }, []);

  useEffect(() => {
    if (hidratado) localStorage.setItem(STORAGE, JSON.stringify(items));
  }, [items, hidratado]);

  const value = useMemo<CartCtx>(() => {
    const agregar: CartCtx["agregar"] = (nuevo, qty = 1) => {
      setItems((prev) => {
        const k = keyDe(nuevo);
        const existe = prev.find((i) => keyDe(i) === k);
        if (existe) return prev.map((i) => (keyDe(i) === k ? { ...i, qty: i.qty + qty } : i));
        return [...prev, { ...nuevo, qty }];
      });
    };
    return {
      items,
      agregar,
      quitar: (key) => setItems((prev) => prev.filter((i) => keyDe(i) !== key)),
      setQty: (key, qty) =>
        setItems((prev) =>
          qty <= 0 ? prev.filter((i) => keyDe(i) !== key) : prev.map((i) => (keyDe(i) === key ? { ...i, qty } : i)),
        ),
      vaciar: () => setItems([]),
      total: items.reduce((a, i) => a + i.precio * i.qty, 0),
      unidades: items.reduce((a, i) => a + i.qty, 0),
      abierto,
      setAbierto,
    };
  }, [items, abierto]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart fuera de CartProvider");
  return c;
}
