import type { Producto } from "./data";

export const fmt = new Intl.NumberFormat("es-AR", {
  style: "currency",
  currency: "ARS",
  maximumFractionDigits: 0,
});

export const aConsultar = (p: Pick<Producto, "precio">) => p.precio <= 0;

export const hayOferta = (p: Pick<Producto, "precio" | "precioOferta">) =>
  !!p.precioOferta && p.precioOferta > 0 && p.precioOferta < p.precio;

export const precioFinal = (p: Pick<Producto, "precio" | "precioOferta">) =>
  hayOferta(p) ? p.precioOferta! : p.precio;

export const pctDescuento = (p: Pick<Producto, "precio" | "precioOferta">) =>
  hayOferta(p) ? Math.round((1 - p.precioOferta! / p.precio) * 100) : 0;

export const comprable = (p: Pick<Producto, "precio" | "precioOferta" | "stock">) =>
  p.stock && !aConsultar(p);
