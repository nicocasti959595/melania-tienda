"use client";
import type { Producto } from "@/lib/data";
import { aspectoDe, repartirEnColumnas } from "@/lib/masonry";
import { useCols } from "@/lib/useCols";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ productos }: { productos: Producto[] }) {
  const cols = useCols();
  const columnas = repartirEnColumnas(productos, cols);

  return (
    <div className="-mx-4 flex gap-1 sm:mx-0 sm:gap-1.5">
      {columnas.map((col, ci) => (
        <div key={ci} className="flex min-w-0 flex-1 flex-col gap-1 sm:gap-1.5">
          {col.map(({ item, fila, columna }) => (
            <ProductCard key={item.slug} p={item} aspecto={aspectoDe(item.slug, fila, columna)} />
          ))}
        </div>
      ))}
    </div>
  );
}
