import { beneficios } from "@/lib/data";

const icons = [
  // asesoramiento
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="i1">
      <path d="M12 21s-7-4.5-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-7 10-7 10z" />
    </svg>
  ),
  // envíos
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="i2">
      <path d="M3 7h11v8H3zM14 10h4l3 3v2h-7z" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
    </svg>
  ),
  // cuotas
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="i3">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18" />
    </svg>
  ),
  // curaduría
  (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" key="i4">
      <path d="M12 3l2.4 5 5.6.8-4 4 1 5.6L12 16l-5 2.4 1-5.6-4-4 5.6-.8z" />
    </svg>
  ),
];

export function Beneficios() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {beneficios.map((b, i) => (
          <div key={b.t} className="card p-6">
            <div className="h-10 w-10 rounded-full bg-[color:var(--cream)] text-[color:var(--accent)] flex items-center justify-center mb-4">
              <span className="h-5 w-5">{icons[i]}</span>
            </div>
            <h3 className="font-serif text-lg leading-tight mb-1">{b.t}</h3>
            <p className="text-sm text-[color:var(--ink-soft)]">{b.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
