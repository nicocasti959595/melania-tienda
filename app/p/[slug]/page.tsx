import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Galeria } from "@/components/tienda/Galeria";
import { PanelCompra } from "@/components/tienda/PanelCompra";
import { ProductGrid } from "@/components/tienda/ProductGrid";
import { getProducto, productos } from "@/lib/data";
import { precioFinal } from "@/lib/precio";
import { site } from "@/lib/site";

export const revalidate = 3600;

export function generateStaticParams() {
  return productos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProducto(slug);
  if (!p) return {};
  return {
    title: p.nombre,
    description: p.detalle,
    alternates: { canonical: `${site.url}/p/${p.slug}` },
    openGraph: {
      title: `${p.nombre} · ${site.name}`,
      description: p.detalle,
      images: [{ url: p.imgs[0], width: 1200, height: 1200, alt: p.nombre }],
    },
  };
}

export default async function FichaProducto({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getProducto(slug);
  if (!p) notFound();

  const relacionados = productos.filter((x) => x.categoria === p.categoria && x.slug !== p.slug).slice(0, 4);
  const final = precioFinal(p);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.nombre,
    description: p.descripcion,
    image: p.imgs,
    category: p.categoria,
    brand: { "@type": "Brand", name: site.name },
    ...(final > 0 && {
      offers: {
        "@type": "Offer",
        price: final,
        priceCurrency: "ARS",
        availability: p.stock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        url: `${site.url}/p/${p.slug}`,
      },
    }),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
      { "@type": "ListItem", position: 2, name: p.categoria, item: `${site.url}/#destacados` },
      { "@type": "ListItem", position: 3, name: p.nombre, item: `${site.url}/p/${p.slug}` },
    ],
  };

  return (
    <>
      <Header />
      <main className="mx-auto max-w-7xl px-4 py-8 lg:px-8 lg:py-14">
        <nav aria-label="Migas de pan" className="mb-6 text-xs text-[color:var(--muted)]">
          <Link href="/" className="hover:text-[color:var(--accent)]">Inicio</Link>
          <span className="mx-2">/</span>
          <Link href="/#destacados" className="hover:text-[color:var(--accent)]">{p.categoria}</Link>
          <span className="mx-2">/</span>
          <span className="text-[color:var(--ink-soft)]">{p.nombre}</span>
        </nav>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Galeria imgs={p.imgs} alt={p.nombre} />
          <PanelCompra p={p} />
        </div>

        {relacionados.length > 0 && (
          <section className="mt-20">
            <h2 className="mb-6 font-serif text-2xl tracking-tightest lg:text-3xl">También te puede gustar</h2>
            <ProductGrid productos={relacionados} />
          </section>
        )}
      </main>
      <Footer />
      <WhatsAppFab />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    </>
  );
}
