import Image from "next/image";
import { Monograma } from "./Logo";

export function Nosotras() {
  return (
    <section id="nosotras" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=1200&q=80"
              alt="Local Melania en Villa Urquiza"
              fill
              sizes="(min-width:1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 card shadow-soft px-6 py-5 max-w-[260px] hidden lg:block">
            <Monograma className="h-10 w-10 mb-3" />
            <p className="font-serif text-lg leading-tight">Desde 2018<br /> en Villa Urquiza.</p>
          </div>
        </div>

        <div className="lg:col-span-7">
          <span className="eyebrow mb-5">Sobre Melania</span>
          <h2 className="font-serif text-4xl lg:text-5xl tracking-tightest leading-[1.05] mb-6">
            Una boutique de barrio,
            <br />
            <span className="italic text-[color:var(--accent)]">con mirada propia</span>.
          </h2>
          <p className="text-[color:var(--ink-soft)] text-lg mb-5">
            Empezamos como un pequeño showroom en Villa Urquiza y nos transformamos en un punto de
            encuentro para mujeres que buscan vestirse bien sin perder horas en el shopping.
          </p>
          <p className="text-[color:var(--ink-soft)] mb-8">
            Trabajamos con marcas argentinas, diseñadoras independientes y desarrollamos cápsulas
            propias en serie corta. Cada prenda pasa por nuestro probador antes de llegar al perchero.
          </p>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { n: "7", l: "años en el barrio" },
              { n: "+120", l: "marcas curadas" },
              { n: "+2.500", l: "clientas felices" },
            ].map((s) => (
              <div key={s.l} className="border-l-2 border-[color:var(--accent)] pl-4">
                <p className="font-serif text-3xl text-[color:var(--ink)]">{s.n}</p>
                <p className="text-xs uppercase tracking-widest text-[color:var(--muted)] mt-1">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
