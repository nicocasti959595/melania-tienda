import { testimonios } from "@/lib/data";

export function Testimonios() {
  return (
    <section className="py-20 bg-[color:var(--ink)] text-[color:var(--cream)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="eyebrow text-[color:var(--gold)] mb-4">Clientas</span>
          <h2 className="font-serif text-4xl lg:text-5xl tracking-tightest leading-[1.05]">
            Lo que dicen las que ya
            <span className="italic text-[color:var(--rose)]"> nos visitaron</span>.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {testimonios.map((t) => (
            <figure key={t.n} className="rounded-[20px] border border-white/10 p-7 bg-white/[0.03]">
              <svg className="h-6 w-6 text-[color:var(--gold)] mb-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9 7H5a2 2 0 0 0-2 2v8h6V9H6c0-1.1.9-2 2-2V5c-2.2 0-4 1.8-4 4M19 7h-4a2 2 0 0 0-2 2v8h6V9h-3c0-1.1.9-2 2-2V5c-2.2 0-4 1.8-4 4" />
              </svg>
              <blockquote className="font-serif text-xl leading-snug">"{t.c}"</blockquote>
              <figcaption className="mt-5 text-sm text-[color:var(--rose)] tracking-wide">— {t.n}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
