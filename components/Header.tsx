import Link from "next/link";
import { Logo } from "./Logo";
import { CartButton } from "./tienda/CartButton";
import { site, waLink } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--line)] bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" aria-label="Inicio">
          <Logo className="h-8 w-auto lg:h-9" />
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-[color:var(--ink-soft)] md:flex">
          <Link href="/#colecciones" className="hover:text-[color:var(--accent)]">Colecciones</Link>
          <Link href="/#destacados" className="hover:text-[color:var(--accent)]">Destacados</Link>
          <Link href="/#nosotras" className="hover:text-[color:var(--accent)]">Nosotras</Link>
          <Link href="/#visitanos" className="hover:text-[color:var(--accent)]">Visitanos</Link>
          <a href={site.instagram} target="_blank" rel="noopener" className="hover:text-[color:var(--accent)]">Instagram</a>
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={waLink("Hola Melania! Quiero pasar por el local.")}
            target="_blank"
            rel="noopener"
            className="btn btn-primary hidden px-4 py-2 text-sm sm:inline-flex"
          >
            Reservar prenda
          </a>
          <CartButton />
        </div>
      </div>
    </header>
  );
}
