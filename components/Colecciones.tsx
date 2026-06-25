import Image from "next/image";
import { colecciones } from "@/lib/data";

export function Colecciones() {
  return (
    <section id="colecciones" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div>
            <span className="eyebrow mb-4">Colecciones</span>
            <h2 className="font-serif text-4xl lg:text-5xl tracking-tightest leading-[1.05] max-w-2xl">
              Tres relatos de temporada,
              <br />
              <span className="italic text-[color:var(--accent)]">una sola identidad</span>.
            </h2>
          </div>
          <p className="text-[color:var(--ink-soft)] max-w-md">
            Renovamos las cápsulas cada cuatro semanas. Pocas unidades por talle, prendas únicas en mostrador.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {colecciones.map((c) => (
            <article key={c.titulo} className="group relative overflow-hidden rounded-[22px] aspect-[4/5] shadow-soft">
              <Image
                src={c.img}
                alt={c.titulo}
                fill
                sizes="(min-width:768px) 33vw, 100vw"
                className="object-cover group-hover:scale-[1.04] transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="chip bg-white/90 text-[color:var(--ink)]">{c.tag}</span>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <h3 className="font-serif text-2xl lg:text-3xl leading-tight mb-2">{c.titulo}</h3>
                <p className="text-sm opacity-90">{c.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
