import Link from "next/link";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--line)] bg-[color:var(--cream)]/40">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-14 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Logo className="h-10 w-auto mb-4" />
          <p className="text-sm text-[color:var(--ink-soft)] max-w-sm">
            Boutique de indumentaria femenina en Villa Urquiza, CABA. Curaduría local, atención cara a cara y envíos a todo el país.
          </p>
        </div>
        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-[.24em] text-[color:var(--muted)] mb-3">Visitanos</h4>
          <p className="text-sm text-[color:var(--ink-soft)]">
            {site.address.street}<br />
            {site.address.neighborhood}, {site.address.city}
          </p>
          <p className="text-sm text-[color:var(--ink-soft)] mt-3">
            {site.hours.map((h) => <span key={h.d} className="block">{h.d} · {h.h}</span>)}
          </p>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-[.24em] text-[color:var(--muted)] mb-3">Contacto</h4>
          <ul className="text-sm text-[color:var(--ink-soft)] space-y-1">
            <li>WhatsApp {site.whatsappPretty}</li>
            <li><a className="underline underline-offset-2" href={site.instagram} target="_blank" rel="noopener">{site.instagramHandle}</a></li>
            <li>{site.email}</li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-[.24em] text-[color:var(--muted)] mb-3">Legales</h4>
          <ul className="text-sm text-[color:var(--ink-soft)] space-y-1">
            <li><Link href="/privacidad">Privacidad</Link></li>
            <li><Link href="/terminos">Términos</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[color:var(--line)]">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 py-5 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-[color:var(--muted)]">
          <p>© {new Date().getFullYear()} {site.name}. Todos los derechos reservados.</p>
          <p>
            Desarrollado por{" "}
            <a className="underline underline-offset-2 text-[color:var(--ink-soft)] hover:text-[color:var(--accent)]" href="https://ideawebx.com" rel="dofollow">
              IdeaWebX
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
