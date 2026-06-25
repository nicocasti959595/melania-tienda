import Link from "next/link";
import { Logo } from "./Logo";
import { site, waLink } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] border-b border-[color:var(--line)]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" aria-label="Inicio">
          <Logo className="h-8 lg:h-9 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm text-[color:var(--ink-soft)]">
          <a href="#colecciones" className="hover:text-[color:var(--accent)]">Colecciones</a>
          <a href="#destacados" className="hover:text-[color:var(--accent)]">Destacados</a>
          <a href="#nosotras" className="hover:text-[color:var(--accent)]">Nosotras</a>
          <a href="#visitanos" className="hover:text-[color:var(--accent)]">Visitanos</a>
          <a href={site.instagram} target="_blank" rel="noopener" className="hover:text-[color:var(--accent)]">Instagram</a>
        </nav>
        <a href={waLink("Hola Melania! Quiero pasar por el local.")} target="_blank" rel="noopener" className="btn btn-primary text-sm py-2 px-4 hidden sm:inline-flex">
          Reservar prenda
        </a>
      </div>
    </header>
  );
}
