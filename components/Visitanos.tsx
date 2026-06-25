import { site, waLink } from "@/lib/site";

export function Visitanos() {
  const dir = `${site.address.street}, ${site.address.neighborhood}, ${site.address.city}`;
  const mapsQ = encodeURIComponent(dir);
  return (
    <section id="visitanos" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <span className="eyebrow mb-4">Visitanos</span>
          <h2 className="font-serif text-4xl lg:text-5xl tracking-tightest leading-[1.05] mb-6">
            Te esperamos en el local
          </h2>
          <p className="text-[color:var(--ink-soft)] mb-8">
            Pasá a ver la colección, probarte sin compromiso y llevarte el look armado.
            Si no podés venir, te asesoramos por WhatsApp y te enviamos a casa.
          </p>

          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <span className="text-[color:var(--accent)] mt-1">●</span>
              <div>
                <p className="text-[color:var(--ink)] font-medium">Dirección</p>
                <p className="text-[color:var(--ink-soft)]">{dir}</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[color:var(--accent)] mt-1">●</span>
              <div>
                <p className="text-[color:var(--ink)] font-medium">Horarios</p>
                <ul className="text-[color:var(--ink-soft)]">
                  {site.hours.map((h) => (
                    <li key={h.d}><span className="text-[color:var(--ink)]">{h.d}</span> · {h.h}</li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[color:var(--accent)] mt-1">●</span>
              <div>
                <p className="text-[color:var(--ink)] font-medium">Contacto</p>
                <p className="text-[color:var(--ink-soft)]">WhatsApp {site.whatsappPretty}</p>
                <p className="text-[color:var(--ink-soft)]">Instagram {site.instagramHandle}</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-[color:var(--accent)] mt-1">●</span>
              <div>
                <p className="text-[color:var(--ink)] font-medium">Envíos & pagos</p>
                <p className="text-[color:var(--ink-soft)]">{site.shipping.cabaGba}.</p>
                <p className="text-[color:var(--ink-soft)]">{site.shipping.nacional}.</p>
                <p className="text-[color:var(--ink-soft)] mt-1">{site.payments.join(" · ")}.</p>
              </div>
            </li>
          </ul>

          <div className="flex flex-wrap gap-3 mt-8">
            <a href={waLink("Hola Melania! Quiero coordinar una visita.")} target="_blank" rel="noopener" className="btn btn-primary">Escribir por WhatsApp</a>
            <a href={`https://www.google.com/maps/search/?api=1&query=${mapsQ}`} target="_blank" rel="noopener" className="btn btn-ghost">Cómo llegar</a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="rounded-[22px] overflow-hidden border border-[color:var(--line)] shadow-soft aspect-[4/3] lg:aspect-auto lg:h-full">
            <iframe
              src={`https://www.google.com/maps?q=${mapsQ}&output=embed`}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Melania en Villa Urquiza"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
