/**
 * La desprolijidad crece hacia abajo: las primeras filas son uniformes y
 * las de más abajo suman aspectos progresivamente más dispares.
 */
function opcionesParaFila(fila: number): string[] {
  if (fila === 0) return ["3/4"];
  if (fila <= 2) return ["3/4", "4/5"];
  if (fila <= 5) return ["3/4", "4/5", "2/3"];
  if (fila <= 8) return ["3/4", "4/5", "2/3", "5/7"];
  return ["3/4", "4/5", "2/3", "5/7", "1/1"];
}

/** Estable por id: sin esto las cards saltan de alto en cada re-render. */
export function aspectoDe(id: string, fila: number, columna: number): string {
  const ops = opcionesParaFila(fila);
  let suma = 0;
  for (let i = 0; i < id.length; i++) suma += id.charCodeAt(i);
  return ops[(suma + fila + columna) % ops.length];
}

/** Reparte los ítems en `cols` columnas reales: el ítem i va a la columna i % cols. */
export function repartirEnColumnas<T>(items: T[], cols: number) {
  const columnas: { item: T; fila: number; columna: number }[][] = Array.from({ length: cols }, () => []);
  items.forEach((item, i) => {
    const columna = i % cols;
    columnas[columna].push({ item, fila: Math.floor(i / cols), columna });
  });
  return columnas;
}
