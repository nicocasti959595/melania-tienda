import Image from "next/image";
import { site, waLink } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 pt-10 pb-20 lg:pt-16 lg:pb-28 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-6 relative z-10">
          <span className="eyebrow mb-6">Boutique · Villa Urquiza</span>
          <h1 className="font-serif text-5xl lg:text-7xl leading-[1.02] tracking-tightest text-[color:var(--ink)] mb-6">
            Prendas pensadas
            <br />
            para mujeres
            <br />
            <span className="italic text-[color:var(--accent)]">de verdad</span>.
          </h1>
          <p className="text-[color:var(--ink-soft)] text-lg max-w-md mb-8">
            Una selección curada de indumentaria femenina, en el corazón de Villa Urquiza.
            Cortes que favorecen, telas que duran, asesoramiento cara a cara.
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            <a href="#destacados" className="btn btn-primary">Ver colección</a>
            <a href={waLink("Hola Melania! Vi la web y me gustaría asesoramiento.")} target="_blank" rel="noopener" className="btn btn-ghost">
              Pedir asesoramiento
            </a>
          </div>
          <div className="flex items-center gap-6 text-sm text-[color:var(--muted)]">
            <div className="flex -space-x-2">
              {["#7a1c2e", "#b8895a", "#e8c8c1", "#2a1820"].map((c) => (
                <span key={c} className="h-7 w-7 rounded-full ring-2 ring-[color:var(--bg)]" style={{ background: c }} />
              ))}
            </div>
            <span>+2.500 clientas vestidas en el barrio</span>
          </div>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="relative aspect-[4/5] max-w-[520px] mx-auto">
            <div className="absolute -top-6 -left-6 h-44 w-44 rounded-full bg-[color:var(--rose)] -z-10" />
            <div className="absolute -bottom-8 -right-6 h-52 w-52 rounded-full bg-[color:var(--cream)] -z-10" />
            <div className="relative h-full w-full overflow-hidden rounded-[28px] shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
                alt="Editorial de la nueva colección Melania"
                fill
                priority
                sizes="(min-width:1024px) 520px, 90vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-black/60 to-transparent text-white">
                <p className="text-xs tracking-[.25em] uppercase opacity-80">Editorial AW · 26</p>
                <p className="font-serif text-2xl leading-tight">Otoño en Villa Urquiza</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 card shadow-soft p-4 w-56 hidden md:block floaty">
              <p className="text-xs uppercase tracking-widest text-[color:var(--muted)] mb-1">Nuevo ingreso</p>
              <p className="font-serif text-xl text-[color:var(--ink)] leading-tight">Cápsula bordó & dorado</p>
              <p className="text-xs text-[color:var(--muted)] mt-2">Stock limitado · Sólo en local</p>
            </div>
          </div>
        </div>
      </div>

      <Marquee />
    </section>
  );
}

function Marquee() {
  const items = [
    "Envíos a CABA y GBA en 24/48 hs",
    "3 cuotas sin interés",
    "Cambios sin vueltas",
    "Atención personalizada",
    "@melania_villaurquiza",
    "Hecho en Argentina",
  ];
  return (
    <div className="border-y border-[color:var(--line)] bg-[color:var(--ink)] text-[color:var(--cream)] overflow-hidden">
      <div className="marquee flex whitespace-nowrap py-3">
        {[...items, ...items, ...items].map((s, i) => (
          <span key={i} className="mx-8 text-xs tracking-[.32em] uppercase font-medium opacity-90">
            ✦ {s}
          </span>
        ))}
      </div>
    </div>
  );
}
